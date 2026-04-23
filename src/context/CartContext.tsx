import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { Product } from "@/data/products";

type CartItem = { product: Product; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem("galti-cart") || "[]"); } catch { return []; }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("galti-cart", JSON.stringify(items));
  }, [items]);

  const add = (p: Product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === p.id);
      if (existing) return prev.map((i) => i.product.id === p.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { product: p, qty }];
    });
  };
  const remove = (id: string) => setItems((p) => p.filter((i) => i.product.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((p) => qty <= 0 ? p.filter((i) => i.product.id !== id) : p.map((i) => i.product.id === id ? { ...i, qty } : i));
  const clear = () => setItems([]);

  const value = useMemo<CartCtx>(() => ({
    items, add, remove, setQty, clear,
    count: items.reduce((s, i) => s + i.qty, 0),
    subtotal: items.reduce((s, i) => s + i.qty * i.product.price, 0),
    open, setOpen,
  }), [items, open]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
};
