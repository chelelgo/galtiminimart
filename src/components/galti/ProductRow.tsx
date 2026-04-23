import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ChevronRight } from "lucide-react";

type Props = { title: string; subtitle?: string; products: Product[]; accent?: "default" | "fresh" | "deal" };

export const ProductRow = ({ title, subtitle, products, accent = "default" }: Props) => {
  const accentBg = accent === "fresh" ? "gradient-fresh" : "";
  return (
    <section className={`py-6 ${accentBg}`}>
      <div className="container">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold">{title}</h2>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          <button className="text-sm font-semibold text-primary inline-flex items-center hover:underline">
            See all <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
};
