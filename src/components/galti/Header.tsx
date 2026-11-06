import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, MapPin, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useNavigate } from "react-router-dom";

export const Header = ({ onSearch, onArea }: { onSearch: () => void; onArea: () => void }) => {
  const { count, setOpen } = useCart();
  const [location, setLocation] = useState<string>("Elgonview, Eldoret");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="container flex h-16 items-center gap-3 md:h-20 md:gap-8">
        <Button variant="ghost" size="icon" aria-label="Open navigation" className="h-11 w-11 shrink-0 md:hidden" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X /> : <Menu />}</Button>
        <Link to="/" className="flex shrink-0 items-center gap-1.5 text-2xl font-black tracking-tighter md:text-3xl" aria-label="Galti home">GALTI<span className="h-2.5 w-2.5 bg-accent" /></Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {[{ label: "Shop", to: "/shop" }, { label: "Fresh", to: "/category/fresh" }, { label: "Deals", to: "/deals" }, { label: "New In", to: "/shop?sort=new" }, { label: "About", to: "/#about" }, { label: "Help", to: "/#help" }].map((item) => <NavLink key={item.label} to={item.to} className={({ isActive }) => `link-underline py-2 text-xs font-bold uppercase tracking-wider transition-colors hover:text-accent ${isActive ? "text-accent" : "text-foreground"}`}>{item.label}</NavLink>)}
        </nav>
        <div className="ml-auto flex min-w-0 items-center gap-1 sm:gap-2">
          <Button variant="ghost" className="hidden h-11 max-w-48 items-center gap-2 px-2 text-left sm:flex" onClick={onArea} aria-label={`Change delivery area, current area ${location}`}>
            <MapPin className="h-4 w-4 shrink-0" /><span className="min-w-0"><span className="block text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Deliver to</span><span className="block truncate text-xs font-semibold">{location.split(",")[0]}</span></span><ChevronDown className="h-3 w-3 shrink-0" />
          </Button>
          <Button variant="ghost" size="icon" className="h-11 w-11" aria-label="Search groceries" onClick={onSearch}><Search /></Button>
          <Button variant="ghost" size="icon" className="hidden h-11 w-11 sm:inline-flex" aria-label="Account and orders" onClick={() => navigate("/orders")}><User /></Button>
          <Button variant="ghost" size="icon" className="relative h-11 w-11" aria-label={`Open basket, ${count} items`} onClick={() => setOpen(true)}><ShoppingCart />{count > 0 && <span className="absolute right-0 top-0 grid h-5 min-w-5 place-items-center bg-accent px-1 text-[10px] font-bold text-accent-foreground">{count}</span>}</Button>
        </div>
      </div>
      <div className="border-t border-border sm:hidden">
        <Button variant="ghost" className="container h-10 justify-start gap-2 text-xs" onClick={onArea}><MapPin className="h-4 w-4" />Deliver to <span className="font-bold">{location.split(",")[0]}</span><ChevronDown className="h-3 w-3" /></Button>
      </div>
      {menuOpen && <nav className="absolute inset-x-0 top-full grid grid-cols-2 border-b border-border bg-background p-4 shadow-lg md:hidden">{[{ label: "Shop", to: "/shop" }, { label: "Fresh", to: "/category/fresh" }, { label: "Deals", to: "/deals" }, { label: "New In", to: "/shop?sort=new" }, { label: "Orders", to: "/orders" }, { label: "Wishlist", to: "/wishlist" }].map((item) => <Link key={item.label} to={item.to} onClick={() => setMenuOpen(false)} className="border-b border-border py-4 text-xs font-bold uppercase tracking-wider">{item.label}</Link>)}</nav>}
    </header>
  );
};
