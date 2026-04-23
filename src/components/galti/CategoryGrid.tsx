import { categories } from "@/data/products";

export const CategoryGrid = () => {
  return (
    <section className="container py-4 md:py-6">
      <div className="flex items-end justify-between mb-3 md:mb-4">
        <h2 className="font-display text-lg md:text-2xl font-bold">Shop by Category</h2>
        <button className="text-xs md:text-sm font-semibold text-primary hover:underline">View all</button>
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="flex sm:hidden gap-3 overflow-x-auto no-scrollbar -mx-4 px-4 pb-1">
        {categories.map((c) => (
          <button key={c.id} className="flex flex-col items-center gap-1.5 shrink-0 w-20 group">
            <div className="w-16 h-16 rounded-2xl bg-accent grid place-items-center text-3xl group-hover:scale-105 transition-bounce shadow-soft">
              {c.emoji}
            </div>
            <span className="text-[11px] font-medium text-center leading-tight line-clamp-2">{c.name}</span>
          </button>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="hidden sm:grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3">
        {categories.map((c, i) => (
          <button
            key={c.id}
            style={{ animationDelay: `${i * 25}ms` }}
            className="group flex flex-col items-center gap-2 p-2.5 rounded-xl bg-card border border-border hover:border-primary hover:shadow-card transition-smooth animate-fade-in-up"
          >
            <div className="w-12 h-12 rounded-xl bg-accent grid place-items-center text-2xl group-hover:scale-110 transition-bounce">
              {c.emoji}
            </div>
            <span className="text-[11px] font-medium text-center leading-tight line-clamp-2">{c.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

