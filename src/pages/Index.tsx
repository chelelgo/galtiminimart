import { Header } from "@/components/galti/Header";
import { Hero } from "@/components/galti/Hero";
import { PromoStrip } from "@/components/galti/PromoStrip";
import { CategoryGrid } from "@/components/galti/CategoryGrid";
import { ProductRow } from "@/components/galti/ProductRow";
import { FlashDeals } from "@/components/galti/FlashDeals";
import { Testimonials } from "@/components/galti/Testimonials";
import { AppCTA } from "@/components/galti/AppCTA";
import { Footer } from "@/components/galti/Footer";
import { MobileNav } from "@/components/galti/MobileNav";
import { CartDrawer } from "@/components/galti/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { products } from "@/data/products";

const Index = () => {
  const topPicks = products.filter((p) => p.tag === "bestseller" || p.tag === "new").slice(0, 5);
  const dailyEssentials = products.filter((p) => ["dairy", "bakery", "household"].includes(p.category)).slice(0, 5);
  const freshToday = products.filter((p) => p.category === "fresh").slice(0, 5);

  return (
    <CartProvider>
      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Header />
        <main>
          <Hero />
          <PromoStrip />
          <CategoryGrid />
          <ProductRow title="Top picks for you" subtitle="Handpicked by your neighbors" products={topPicks} />
          <ProductRow title="Fresh today" subtitle="Straight from the market this morning" products={freshToday} accent="fresh" />
          <FlashDeals />
          <ProductRow title="Daily essentials" subtitle="The basics, never out of stock" products={dailyEssentials} />
          <Testimonials />
          <AppCTA />
        </main>
        <Footer />
        <MobileNav />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default Index;
