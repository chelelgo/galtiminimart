import { categories } from "@/data/products";

export const CategoryGrid = () => {
  return (
    <section className="container py-6">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="font-display text-xl md:text-2xl font-bold">Shop by category</h2>
          <p className="text-sm text-muted-foreground">Everything your home needs, in one tap.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {categories.map((c, i) => (
          <button
            key={c.id}
            style={{ animationDelay: `${i * 30}ms` }}
            className="group flex flex-col items-center gap-2 p-3 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-card transition-smooth animate-fade-in-up"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent grid place-items-center text-3xl group-hover:scale-110 transition-bounce">
              {c.emoji}
            </div>
            <span className="text-xs font-medium text-center leading-tight">{c.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
