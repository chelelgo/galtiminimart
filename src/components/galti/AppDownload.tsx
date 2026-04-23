import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Star } from "lucide-react";
import appPromo from "@/assets/app-promo.jpg";

export const AppDownload = () => (
  <section className="container py-8 md:py-12">
    <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_30%_50%,white,transparent_50%)]" />
      <div className="relative grid md:grid-cols-2 gap-6 items-center">
        <div className="p-6 sm:p-10 md:p-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background/15 backdrop-blur text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5 fill-warning text-warning" />
            4.8 on Google Play & App Store
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3">
            Download the Galti App
          </h2>
          <p className="text-primary-foreground/85 text-sm md:text-base mb-6 max-w-md leading-relaxed">
            At Galti Mini-Mart we pride ourselves on delivering an exceptional experience every time
            — variety, freshness and unbeatable prices, right to your door in Elgonview.
          </p>
          <div className="text-xs uppercase tracking-wider opacity-80 mb-3">Or download from here</div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-foreground text-background hover:opacity-90 transition-smooth"
            >
              <Smartphone className="w-6 h-6" />
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-80">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-foreground text-background hover:opacity-90 transition-smooth"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-80">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
          </div>
        </div>
        <div className="relative h-64 md:h-full md:min-h-[380px] order-first md:order-last">
          <img
            src={appPromo}
            alt="Galti Mini-Mart shopping app"
            width={1024}
            height={1024}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover md:object-contain object-center"
          />
        </div>
      </div>
    </div>
  </section>
);
