import { MapPin, Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

export const Header = () => {
  const { count, setOpen } = useCart();
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-lg border-b border-border">
      <div className="container py-3 flex items-center gap-3">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-xl gradient-hero grid place-items-center text-primary-foreground font-display font-extrabold shadow-soft">
            G
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display font-extrabold text-base">Galti Mini-Mart</div>
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <MapPin className="w-3 h-3 text-primary" />
              Elgonview, Eldoret
            </div>
          </div>
        </div>

        <div className="flex-1 relative max-w-2xl mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder='Search "unga", "maziwa", "bread"...'
            className="pl-9 h-11 rounded-full bg-muted border-transparent focus-visible:bg-background focus-visible:ring-primary/30"
          />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="relative shrink-0 h-11 w-11 rounded-full"
          onClick={() => setOpen(true)}
          aria-label="Open cart"
        >
          <ShoppingCart className="w-5 h-5" />
          {count > 0 && (
            <Badge className="absolute -top-0.5 -right-0.5 h-5 min-w-5 px-1.5 rounded-full bg-secondary text-secondary-foreground border-2 border-background animate-scale-in">
              {count}
            </Badge>
          )}
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden h-11 w-11 rounded-full">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};
