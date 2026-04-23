import { Button } from "@/components/ui/button";
import { Clock, Zap } from "lucide-react";
import hero from "@/assets/hero-groceries.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-6 md:py-10">
        <div className="relative rounded-3xl overflow-hidden shadow-elevated">
          <img
            src={hero}
            alt="Fresh groceries delivered in Elgonview"
            width={1536}
            height={1024}
            className="w-full h-[340px] md:h-[440px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-12 max-w-xl text-background animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/15 backdrop-blur border border-background/20 text-xs font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
                </span>
                Delivering now to Elgonview
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-tight mb-3">
                Fresh groceries.<br />
                <span className="text-secondary">In 1 hour. Or less.</span>
              </h1>
              <p className="text-background/85 text-sm md:text-base mb-6 max-w-md">
                Your neighborhood minimart, now on your phone. Pay with M-Pesa, card or cash.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" variant="cta" className="rounded-full">
                  <Zap className="w-4 h-4" /> Order now
                </Button>
                <Button size="lg" variant="outline" className="rounded-full bg-background/10 border-background/30 text-background hover:bg-background hover:text-foreground">
                  <Clock className="w-4 h-4" /> Schedule delivery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
