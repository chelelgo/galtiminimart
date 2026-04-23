import { Star } from "lucide-react";

const reviews = [
  { name: "Wanjiku M.", area: "Elgonview Phase 2", text: "Ordered milk and bread at 7am, delivered before breakfast. Lifesaver!", rating: 5 },
  { name: "Brian K.", area: "Pioneer", text: "Fresher produce than the supermarket and cheaper too. M-Pesa was instant.", rating: 5 },
  { name: "Aisha O.", area: "West Indies", text: "I reorder my weekly essentials in literally one tap. Brilliant.", rating: 5 },
];

export const Testimonials = () => (
  <section className="container py-8">
    <div className="text-center mb-6">
      <h2 className="font-display text-xl md:text-2xl font-bold">Loved by your neighbors</h2>
      <p className="text-sm text-muted-foreground">Real reviews from Elgonview residents</p>
    </div>
    <div className="grid md:grid-cols-3 gap-4">
      {reviews.map((r) => (
        <div key={r.name} className="p-5 rounded-2xl bg-card border border-border shadow-soft">
          <div className="flex gap-0.5 mb-2">
            {Array.from({ length: r.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-warning text-warning" />
            ))}
          </div>
          <p className="text-sm leading-relaxed mb-4">"{r.text}"</p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-accent grid place-items-center text-primary font-bold text-sm">
              {r.name[0]}
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.area}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);
