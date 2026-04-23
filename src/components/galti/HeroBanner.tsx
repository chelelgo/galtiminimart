import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "@/assets/banner-fresh.jpg";
import banner2 from "@/assets/banner-household.jpg";
import banner3 from "@/assets/banner-breakfast.jpg";

const slides = [
  {
    img: banner1,
    eyebrow: "Tuk-tuk Tuesday",
    title: "Fresh Produce, Delivered in 1 Hour",
    subtitle: "Up to 30% off farm-fresh fruits & vegetables across Elgonview.",
    cta: "Shop Fresh",
    align: "left" as const,
  },
  {
    img: banner3,
    eyebrow: "Breakfast Bundle",
    title: "Bread + Milk + Eggs from KSh 250",
    subtitle: "Wake up to your essentials, dropped at your door.",
    cta: "Shop Bundle",
    align: "right" as const,
  },
  {
    img: banner2,
    eyebrow: "Home Care Sale",
    title: "Stock Up. Save up to 25%",
    subtitle: "Detergents, soaps and cleaning essentials, all in one cart.",
    cta: "Shop Household",
    align: "left" as const,
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

  return (
    <section className="container py-4 md:py-6">
      <div className="relative rounded-2xl overflow-hidden shadow-card group">
        <div className="relative aspect-[16/7] sm:aspect-[21/7] bg-muted">
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <img
                src={s.img}
                alt={s.title}
                width={1920}
                height={512}
                loading={idx === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover"
              />
              <div
                className={`absolute inset-0 flex items-center ${s.align === "left" ? "justify-start" : "justify-end"}`}
              >
                <div className={`max-w-md p-5 sm:p-8 md:p-12 ${s.align === "left" ? "text-left" : "text-right ml-auto"}`}>
                  <div className="inline-block px-2.5 py-1 rounded-full bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
                    {s.eyebrow}
                  </div>
                  <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-foreground mb-1 sm:mb-2">
                    {s.title}
                  </h2>
                  <p className="hidden sm:block text-sm md:text-base text-muted-foreground mb-3 md:mb-5">
                    {s.subtitle}
                  </p>
                  <button className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs sm:text-sm hover:bg-primary-dark transition-smooth shadow-cta">
                    {s.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
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

        {/* Dots */}
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
    </section>
  );
};
