import { Button } from "@/components/ui/button";
import { Smartphone, Gift } from "lucide-react";

export const AppCTA = () => (
  <section className="container py-8">
    <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center">
      <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full bg-secondary/10 blur-3xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/15 text-secondary text-xs font-semibold mb-3">
          <Gift className="w-3.5 h-3.5" /> Refer a neighbor — get KSh 100
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-extrabold leading-tight mb-2">
          Earn rewards every time you shop
        </h2>
        <p className="text-muted-foreground text-sm md:text-base mb-5 max-w-md">
          Collect Galti points on every order, unlock free deliveries, and get neighbor-only discounts.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button variant="cta" size="lg" className="rounded-full">
            <Smartphone className="w-4 h-4" /> Get the app
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            How rewards work
          </Button>
        </div>
      </div>
      <div className="relative grid place-items-center">
        <div className="grid grid-cols-3 gap-3 max-w-xs">
          {["🛒", "🥬", "🥛", "🍞", "🥑", "🍅", "🥚", "🍌", "🧴"].map((e, i) => (
            <div
              key={i}
              style={{ animationDelay: `${i * 80}ms` }}
              className="aspect-square rounded-2xl bg-accent grid place-items-center text-3xl shadow-soft animate-fade-in-up"
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
