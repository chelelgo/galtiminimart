import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileNav } from "./MobileNav";
import { CartDrawer } from "./CartDrawer";
import { SearchOverlay } from "./SearchOverlay";
import { DeliveryAreaDialog } from "./DeliveryAreaDialog";

export const StoreLayout = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [areaOpen, setAreaOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <div className="announcement-bar overflow-hidden bg-primary px-4 py-2 text-center text-[10px] font-bold uppercase tracking-widest text-primary-foreground md:text-[11px]">
        <span>Free delivery over KSh 2,000 · Delivered in 60 mins · Pay with M-Pesa</span>
      </div>
      <Header onSearch={() => setSearchOpen(true)} onArea={() => setAreaOpen(true)} />
      <main key={location.pathname}><Outlet /></main>
      <Footer />
      <MobileNav onSearch={() => setSearchOpen(true)} />
      <CartDrawer />
      <SearchOverlay open={searchOpen} onOpenChange={setSearchOpen} />
      <DeliveryAreaDialog open={areaOpen} onOpenChange={setAreaOpen} />
    </div>
  );
};