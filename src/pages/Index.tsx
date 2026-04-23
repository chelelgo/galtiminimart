import { Header } from "@/components/galti/Header";
import { HeroBanner } from "@/components/galti/HeroBanner";
import { PromoStrip } from "@/components/galti/PromoStrip";
import { CategoryGrid } from "@/components/galti/CategoryGrid";
import { ProductRow } from "@/components/galti/ProductRow";
import { FlashDeals } from "@/components/galti/FlashDeals";
import { Testimonials } from "@/components/galti/Testimonials";
import { AppDownload } from "@/components/galti/AppDownload";
import { Footer } from "@/components/galti/Footer";
import { MobileNav } from "@/components/galti/MobileNav";
import { CartDrawer } from "@/components/galti/CartDrawer";
import { LocationModal } from "@/components/galti/LocationModal";
import { CartProvider } from "@/context/CartContext";
import { products } from "@/data/products";

const Index = () => {
  const topPicks = products.filter((p) => p.tag === "bestseller" || p.tag === "new").slice(0, 5);
  const dailyEssentials = products.filter((p) => ["dairy", "bakery", "household"].includes(p.category)).slice(0, 5);
  const freshToday = products.filter((p) => p.category === "fresh").slice(0, 5);
  const beverages = products.filter((p) => ["beverages", "snacks"].includes(p.category)).slice(0, 5);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />
        <main>
          <HeroBanner />
          <PromoStrip />
          <CategoryGrid />
          <ProductRow title="Top Picks for You" subtitle="Loved by your neighbors" products={topPicks} />
          <ProductRow title="Fresh Today" subtitle="Straight from the market this morning" products={freshToday} accent="fresh" />
          <FlashDeals />
          <ProductRow title="Daily Essentials" subtitle="The basics, always in stock" products={dailyEssentials} />
          <ProductRow title="Drinks & Snacks" subtitle="Stock up the pantry" products={beverages} />
          <AppDownload />
          <Testimonials />
        </main>
        <Footer />
        <MobileNav />
        <CartDrawer />
        <LocationModal />
      </div>
    </CartProvider>
  );
};

export default Index;
