import { Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";

type Props = { title: string; subtitle?: string; products: Product[]; accent?: "default" | "fresh" | "deal" };

export const ProductRow = ({ title, subtitle, products, accent = "default" }: Props) => {
  const destination = accent === "fresh" ? "/category/fresh" : accent === "deal" ? "/deals" : "/shop";
  return <section className="border-t border-border py-16 md:py-20"><div className="container">
    <div className="mb-6 flex items-end justify-between gap-4 md:mb-8"><div><h2 className="text-3xl md:text-5xl">{title}</h2>{subtitle && <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>}</div><Link className="link-underline shrink-0 pb-1 text-[11px] font-bold uppercase tracking-widest" to={destination}>View all</Link></div>
    <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5">{products.map((product) => <div key={product.id} className="w-[43vw] shrink-0 snap-start sm:w-auto"><ProductCard product={product} /></div>)}</div>
  </div></section>;
};
