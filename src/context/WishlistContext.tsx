import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type WishlistContextValue = { ids: string[]; has: (id: string) => boolean; toggle: (id: string) => void };
const WishlistContext = createContext<WishlistContextValue | null>(null);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [ids, setIds] = useState<string[]>(() => {
    try { return JSON.parse(localStorage.getItem("galti-wishlist") || "[]") as string[]; } catch { return []; }
  });
  useEffect(() => localStorage.setItem("galti-wishlist", JSON.stringify(ids)), [ids]);
  const value = useMemo(() => ({
    ids,
    has: (id: string) => ids.includes(id),
    toggle: (id: string) => setIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]),
  }), [ids]);
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const value = useContext(WishlistContext);
  if (!value) throw new Error("useWishlist must be used inside WishlistProvider");
  return value;
};