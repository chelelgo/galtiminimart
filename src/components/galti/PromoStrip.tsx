import { Truck, ShieldCheck, Smartphone, Repeat } from "lucide-react";

const items = [
  { icon: Truck, title: "1-hour delivery", desc: "Across Elgonview" },
  { icon: Smartphone, title: "M-Pesa checkout", desc: "STK push, instant" },
  { icon: ShieldCheck, title: "Fresh guarantee", desc: "Or your money back" },
  { icon: Repeat, title: "1-tap reorder", desc: "Your usuals, faster" },
];

export const PromoStrip = () => (
  <section className="container py-2">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map((it) => (
        <div key={it.title} className="flex items-center gap-3 p-3 rounded-2xl bg-card border border-border">
          <div className="w-10 h-10 rounded-xl bg-accent grid place-items-center text-primary shrink-0">
            <it.icon className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">{it.title}</div>
            <div className="text-xs text-muted-foreground">{it.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
