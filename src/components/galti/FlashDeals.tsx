import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

const pad = (n: number) => n.toString().padStart(2, "0");

export const FlashDeals = () => {
  const deals = products.filter((p) => p.oldPrice).slice(0, 4);
  const [time, setTime] = useState({ h: 2, m: 45, s: 0 });

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) { s = 59; m -= 1; }
        if (m < 0) { m = 59; h -= 1; }
        if (h < 0) { h = 2; m = 45; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="container py-6">
      <div className="rounded-3xl gradient-cta p-5 md:p-7 text-secondary-foreground shadow-cta">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-background/20 grid place-items-center">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-extrabold">Flash deals</h2>
              <p className="text-sm opacity-90">Today only — while stocks last</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 font-mono font-bold">
            {[time.h, time.m, time.s].map((v, i) => (
              <span key={i} className="px-2 py-1 rounded-lg bg-background/20 backdrop-blur text-sm tabular-nums">
                {pad(v)}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {deals.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  );
};
