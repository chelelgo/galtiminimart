export type SavedOrder = {
  id: string;
  createdAt: string;
  items: { productId: string; name: string; unit: string; image: string; price: number; qty: number }[];
  subtotal: number;
  delivery: number;
  discount: number;
  total: number;
  payment: string;
  status: "Received" | "Packing" | "On the way" | "Delivered";
  customerName: string;
};

export const FREE_DELIVERY_THRESHOLD = 2000;
export const DELIVERY_FEE = 99;
export const calculateDelivery = (subtotal: number) => subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE;
export const calculateDiscount = (subtotal: number, code: string) => code.trim().toUpperCase() === "GALTI10" ? Math.round(subtotal * 0.1) : 0;
export const calculateLoyaltyPoints = (orders: SavedOrder[]) => Math.floor(orders.reduce((sum, order) => sum + order.total, 0) / 100);

export const readOrders = (): SavedOrder[] => {
  try { return JSON.parse(localStorage.getItem("galti-orders") || "[]") as SavedOrder[]; } catch { return []; }
};

export const saveOrder = (order: SavedOrder) => {
  const updated = [order, ...readOrders()];
  localStorage.setItem("galti-orders", JSON.stringify(updated));
  return updated;
};