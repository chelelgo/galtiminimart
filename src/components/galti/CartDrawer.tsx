import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { formatKSh } from "@/data/products";
import { Minus, Plus, Trash2, ShoppingBag, Clock } from "lucide-react";

const DELIVERY_FEE = 99;

export const CartDrawer = () => {
  const { items, open, setOpen, setQty, remove, subtotal, count } = useCart();
  const total = subtotal + (subtotal > 0 ? DELIVERY_FEE : 0);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 gap-0">
        <SheetHeader className="px-5 py-4 border-b border-border">
          <SheetTitle className="flex items-center gap-2 font-display">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Your basket {count > 0 && <span className="text-muted-foreground font-medium">({count})</span>}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 grid place-items-center p-8 text-center">
            <div>
              <div className="text-6xl mb-3">🛒</div>
              <h3 className="font-display font-bold text-lg mb-1">Your basket is empty</h3>
              <p className="text-sm text-muted-foreground mb-4">Add some fresh items to get started.</p>
              <Button onClick={() => setOpen(false)} variant="default" className="rounded-full">
                Start shopping
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-xs font-medium">
              <Clock className="w-3.5 h-3.5" />
              Estimated delivery: 45–60 mins to Elgonview
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-3 space-y-3">
              {items.map((i) => (
                <div key={i.product.id} className="flex gap-3 p-3 rounded-2xl bg-muted/40 border border-border">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-muted shrink-0">
                    <img src={i.product.image} alt={i.product.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold leading-tight">{i.product.name}</div>
                    <div className="text-xs text-muted-foreground">{i.product.unit}</div>
                    <div className="mt-1.5 flex items-center justify-between">
                      <div className="inline-flex items-center bg-background border border-border rounded-full">
                        <button
                          onClick={() => setQty(i.product.id, i.qty - 1)}
                          className="w-7 h-7 grid place-items-center text-muted-foreground hover:text-foreground"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-semibold">{i.qty}</span>
                        <button
                          onClick={() => setQty(i.product.id, i.qty + 1)}
                          className="w-7 h-7 grid place-items-center text-primary hover:bg-accent rounded-r-full"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-sm font-bold">{formatKSh(i.product.price * i.qty)}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(i.product.id)}
                    className="text-muted-foreground hover:text-destructive shrink-0"
                    aria-label="Remove"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-5 space-y-2 bg-card">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold">{formatKSh(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery fee</span>
                <span className="font-semibold">{formatKSh(DELIVERY_FEE)}</span>
              </div>
              <div className="flex justify-between items-baseline pt-2 border-t border-border">
                <span className="font-display font-bold">Total</span>
                <span className="font-display font-extrabold text-xl">{formatKSh(total)}</span>
              </div>
              <Button variant="cta" size="lg" className="w-full rounded-full mt-2">
                Checkout with M-Pesa
              </Button>
              <p className="text-[11px] text-center text-muted-foreground">
                Secure payment • You'll get an STK push on your phone
              </p>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};
