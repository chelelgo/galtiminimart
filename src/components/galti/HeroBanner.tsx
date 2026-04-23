import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/hero-fresh.jpg";
import banner2 from "@/assets/hero-delivery.jpg";
import banner3 from "@/assets/hero-breakfast.jpg";
import { categories } from "@/data/products";

const slides = [
  {
    img: banner2,
    eyebrow: "Tuk-tuk Tuesday",
    title: "Save more with KSh 0 delivery fee",
    subtitle: "Order today & get your shopping in 1 hour across Elgonview.",
    cta: "Shop Now",
    bg: "from-primary/10 via-background to-background",
  },
  {
    img: banner1,
    eyebrow: "Fresh today",
    title: "Farm-fresh produce, up to 30% off",
    subtitle: "Sukuma, tomatoes, avocados — picked this morning.",
    cta: "Shop Fresh",
    bg: "from-secondary/10 via-background to-background",
  },
  {
    img: banner3,
    eyebrow: "Breakfast Bundle",
    title: "Bread + Milk + Eggs from KSh 250",
    subtitle: "Wake up to your essentials, dropped at your door.",
    cta: "Shop Bundle",
    bg: "from-warning/10 via-background to-background",
  },
];

export const HeroBanner = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setI((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setI((p) => (p + 1) % slides.length);

  // Top sellers (first 8 categories) for the sidebar
  const topSellers = categories.slice(0, 8);

  return (
    <section className="container py-4 md:py-6">
      <div className="grid lg:grid-cols-[260px_1fr] gap-4">
        {/* Sidebar — Top Sellers (Naivas style) */}
        <aside className="hidden lg:block bg-card rounded-2xl border border-border overflow-hidden shadow-soft">
          <div className="bg-primary text-primary-foreground px-4 py-3 font-display font-extrabold text-sm uppercase tracking-wide">
            Top Sellers
          </div>
          <ul className="p-2">
            {topSellers.map((c) => (
              <li key={c.id}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-smooth text-sm font-medium"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-muted shrink-0">
                    <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Carousel */}
        <div className="relative rounded-2xl overflow-hidden shadow-card group">
          <div className={`relative aspect-[16/8] sm:aspect-[16/6] bg-gradient-to-br ${slides[i].bg}`}>
            {slides.map((s, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.bg}`} />
                <div className="relative h-full grid grid-cols-2 items-center">
                  <div className="p-5 sm:p-8 md:p-12 z-10">
                    <div className="inline-block px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] sm:text-xs font-extrabold uppercase tracking-wider mb-2 sm:mb-3">
                      {s.eyebrow}
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.05] text-foreground mb-2 sm:mb-3">
                      {s.title}
                    </h2>
                    <p className="hidden sm:block text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-sm">
                      {s.subtitle}
                    </p>
                    <button className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-primary text-primary-foreground font-bold text-xs sm:text-sm hover:bg-primary-dark transition-smooth shadow-elevated">
                      {s.cta}
                    </button>
                  </div>
                  <div className="relative h-full">
                    <img
                      src={s.img}
                      alt={s.title}
                      width={1600}
                      height={700}
                      loading={idx === 0 ? "eager" : "lazy"}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur grid place-items-center opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 backdrop-blur grid place-items-center opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${idx === i ? "w-6 bg-primary" : "w-1.5 bg-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
