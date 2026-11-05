import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Clock3, Search } from "lucide-react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command";
import { products } from "@/data/products";
import { formatKSh } from "@/data/products";

const aliases: Record<string, string[]> = {
  unga: ["maize flour"], maziwa: ["milk"], mkate: ["bread"], sukari: ["sugar"],
  mayai: ["eggs"], nyama: ["meat", "beef"], kuku: ["chicken"], nyanya: ["tomato", "tomatoes"],
};

export const SearchOverlay = ({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) => {
  const [query, setQuery] = useState("");
  const [recent, setRecent] = useState<string[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (open) {
      try { setRecent(JSON.parse(localStorage.getItem("galti-searches") || "[]") as string[]); } catch { setRecent([]); }
      setQuery("");
    }
  }, [open]);
  const expanded = useMemo(() => {
    const raw = query.trim().toLowerCase();
    return [raw, ...(aliases[raw] || [])].filter(Boolean);
  }, [query]);
  const matches = useMemo(() => products.filter((p) => !query || expanded.some((term) => `${p.name} ${p.brand || ""} ${p.category}`.toLowerCase().includes(term))), [expanded, query]);
  const goToShop = (term: string) => {
    const cleaned = term.trim();
    if (cleaned) {
      const next = [cleaned, ...recent.filter((item) => item !== cleaned)].slice(0, 5);
      setRecent(next);
      localStorage.setItem("galti-searches", JSON.stringify(next));
    }
    onOpenChange(false);
    navigate(`/shop${cleaned ? `?q=${encodeURIComponent(cleaned)}` : ""}`);
  };
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput value={query} onValueChange={setQuery} placeholder="Search milk, unga, tomatoes..." aria-label="Search groceries" />
      <CommandList className="max-h-[70vh]">
        <CommandEmpty>No groceries found. Try another search.</CommandEmpty>
        {!query && recent.length > 0 && <CommandGroup heading="Recent searches">{recent.map((term) => <CommandItem key={term} value={`recent ${term}`} onSelect={() => { setQuery(term); }}><Clock3 className="mr-2 h-4 w-4" />{term}</CommandItem>)}</CommandGroup>}
        <CommandGroup heading={query ? "Matching groceries" : "Popular right now"}>
          {(query ? matches : products.slice(0, 5)).slice(0, 7).map((product) => (
            <CommandItem key={product.id} value={`${product.name} ${product.brand || ""} ${product.category} ${Object.entries(aliases).filter(([, vals]) => vals.some((v) => product.name.toLowerCase().includes(v))).map(([key]) => key).join(" ")}`} onSelect={() => { if (query) { const next = [query, ...recent.filter((item) => item !== query)].slice(0, 5); localStorage.setItem("galti-searches", JSON.stringify(next)); } onOpenChange(false); navigate(`/product/${product.id}`); }} className="min-h-16 gap-3">
              <img src={product.image} alt="" width="48" height="48" className="h-12 w-12 object-cover" />
              <span className="flex-1"><span className="block font-semibold">{product.name}</span><span className="text-xs text-muted-foreground">{product.unit}</span></span>
              <span className="font-bold tabular-nums">{formatKSh(product.price)}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup>
          <CommandItem value={`view all results ${query}`} onSelect={() => goToShop(query)} className="min-h-12 justify-between font-bold uppercase tracking-wider"><span className="inline-flex items-center gap-2"><Search className="h-4 w-4" />View all results{query ? ` for “${query}”` : ""}</span><ArrowUpRight className="h-4 w-4" /></CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};