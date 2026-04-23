import { Home, LayoutGrid, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const MobileNav = () => {
  const { count, setOpen } = useCart();
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-lg border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-4">
        {[
          { icon: Home, label: "Home", active: true },
          { icon: LayoutGrid, label: "Categories" },
          { icon: ShoppingCart, label: "Cart", action: () => setOpen(true), badge: count },
          { icon: User, label: "Account" },
        ].map((item) => (
          <button
            key={item.label}
            onClick={item.action}
            className={`relative flex flex-col items-center gap-1 py-2.5 text-xs font-medium ${
              item.active ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
            {item.badge ? (
              <span className="absolute top-1 right-1/2 translate-x-3 min-w-4 h-4 px-1 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold grid place-items-center">
                {item.badge}
              </span>
            ) : null}
          </button>
        ))}
      </div>
    </nav>
  );
};
