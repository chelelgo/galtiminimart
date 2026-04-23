import { Plus, Flame, Leaf, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product, formatKSh } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";

const tagStyles: Record<string, { label: string; cls: string; icon?: any }> = {
  fresh: { label: "Fresh", cls: "bg-success text-success-foreground", icon: Leaf },
  deal: { label: "Deal", cls: "bg-secondary text-secondary-foreground", icon: Flame },
  bestseller: { label: "Bestseller", cls: "bg-warning text-warning-foreground", icon: Star },
  new: { label: "New", cls: "bg-primary text-primary-foreground" },
};

export const ProductCard = ({ product }: { product: Product }) => {
  const { add } = useCart();
  const tag = product.tag ? tagStyles[product.tag] : null;
  const Icon = tag?.icon;
  const lowStock = product.stock <= 10;
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleAdd = () => {
    add(product);
    toast.success(`${product.name} added to cart`, {
      description: `${product.unit} • ${formatKSh(product.price)}`,
    });
  };

  return (
    <div className="group flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elevated hover:-translate-y-1 hover:border-primary/30 transition-smooth">
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-bounce"
        />
        {tag && (
          <div className={`absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide ${tag.cls}`}>
            {Icon && <Icon className="w-3 h-3" />}
            {tag.label}
          </div>
        )}
        {discount > 0 && (
          <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-destructive text-destructive-foreground text-[10px] font-extrabold shadow-soft">
            -{discount}%
          </div>
        )}
      </div>
      <div className="flex-1 p-3 flex flex-col">
        {product.brand && <div className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">{product.brand}</div>}
        <h3 className="text-sm font-semibold leading-tight line-clamp-2 min-h-[2.5rem]">{product.name}</h3>
        <div className="text-xs text-muted-foreground mt-0.5">{product.unit}</div>

        <div className="mt-2 flex items-baseline gap-1.5">
          <span className="font-display font-extrabold text-base text-primary">{formatKSh(product.price)}</span>
          {product.oldPrice && <span className="text-xs text-muted-foreground line-through">{formatKSh(product.oldPrice)}</span>}
        </div>

        <div className="mt-1 min-h-[16px] text-[11px] font-medium">
          {lowStock ? (
            <span className="text-destructive">Only {product.stock} left</span>
          ) : product.ordersToday ? (
            <span className="text-muted-foreground">{product.ordersToday} ordered today</span>
          ) : null}
        </div>

        <Button onClick={handleAdd} size="sm" className="mt-2 rounded-full w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
          <Plus className="w-4 h-4" /> Add
        </Button>
      </div>
    </div>
  );
};
