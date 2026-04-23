import { useEffect, useState } from "react";
import { ChevronDown, MapPin, Search, ShoppingCart, User, Award, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";

export const Header = () => {
  const { count, setOpen } = useCart();
  const [location, setLocation] = useState<string>("Elgonview, Eldoret");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sync = () => {
      const v = localStorage.getItem("galti-location");
      if (v) setLocation(v);
    };
    sync();
    window.addEventListener("galti-location-changed", sync);
    return () => window.removeEventListener("galti-location-changed", sync);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      {/* Top brand bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container py-2.5 flex items-center gap-3 md:gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0 bg-background rounded-lg px-2.5 py-1.5 shadow-soft">
            <div className="w-7 h-7 rounded-md bg-primary grid place-items-center text-primary-foreground font-display font-extrabold text-sm">
              G
            </div>
            <span className="font-display font-extrabold text-primary text-sm md:text-base hidden sm:block">
              Galti
            </span>
          </a>

          {/* Location pill */}
          <button className="hidden md:flex items-center gap-2 text-left shrink-0 hover:opacity-90 transition-smooth">
            <MapPin className="w-4 h-4" />
            <div className="leading-tight">
              <div className="text-[11px] uppercase tracking-wide opacity-80 flex items-center gap-1">
                Change Delivery Location <ChevronDown className="w-3 h-3" />
              </div>
              <div className="text-xs font-semibold truncate max-w-[180px]">{location}</div>
            </div>
          </button>

          {/* Search */}
          <div className="flex-1 relative max-w-2xl mx-auto">
            <Input
              placeholder="Search for Groceries…"
              className="h-10 md:h-11 pl-4 pr-12 rounded-full bg-background text-foreground border-0 placeholder:text-muted-foreground"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 h-8 md:h-9 px-3 rounded-full bg-secondary text-secondary-foreground grid place-items-center hover:opacity-90 transition-smooth">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Q-Points */}
          <button className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/15 hover:bg-background/25 transition-smooth text-sm font-semibold">
            <Award className="w-4 h-4 text-warning" />
            <span>0 pts</span>
          </button>

          {/* Sign in */}
          <button className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-background text-primary font-semibold text-sm hover:bg-background/90 transition-smooth shadow-soft">
            <User className="w-4 h-4" />
            Sign In
          </button>

          {/* Cart */}
          <button
            onClick={() => setOpen(true)}
            className="relative flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full bg-background text-primary font-semibold text-sm hover:bg-background/90 transition-smooth shadow-soft"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="tabular-nums">{count}</span>
            {count > 0 && (
              <Badge className="absolute -top-1 -right-1 h-4 min-w-4 px-1 rounded-full bg-warning text-warning-foreground border-2 border-primary text-[10px]">
                !
              </Badge>
            )}
          </button>
        </div>

        {/* Mobile location row */}
        <div className="md:hidden border-t border-primary-foreground/15">
          <button className="container py-2 flex items-center gap-2 text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span className="opacity-80">Deliver to</span>
            <span className="font-semibold">{location}</span>
            <ChevronDown className="w-3 h-3 opacity-80" />
          </button>
        </div>
      </div>

      {/* Secondary nav */}
      <div className="bg-background border-b border-border shadow-soft relative">
        <div className="container flex items-center gap-2">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2 py-3 pr-4 font-semibold text-sm border-r border-border"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            All Categories
          </button>
          <a href="#" className="px-4 py-3 text-sm font-medium hover:text-primary transition-smooth">About Us</a>
          <a href="#" className="hidden sm:block px-4 py-3 text-sm font-medium hover:text-primary transition-smooth">Today's Deals</a>
          <a href="#" className="hidden sm:block px-4 py-3 text-sm font-medium hover:text-primary transition-smooth">New Arrivals</a>
          <a href="#" className="hidden md:block px-4 py-3 text-sm font-medium hover:text-primary transition-smooth">Help & Support</a>
          <div className="ml-auto hidden md:flex items-center gap-1 py-3 text-xs text-secondary font-semibold">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Delivering in 60 mins
          </div>
        </div>

        {/* Mega menu */}
        {menuOpen && (
          <div className="absolute left-0 right-0 top-full bg-background border-b border-border shadow-elevated animate-fade-in-up z-30">
            <div className="container py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
              {categories.map((c) => (
                <a
                  key={c.id}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth text-sm"
                >
                  <div className="w-9 h-9 rounded-lg overflow-hidden bg-muted shrink-0">
                    <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <span className="font-medium">{c.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
