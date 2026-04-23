export type Product = {
  id: string;
  name: string;
  brand?: string;
  price: number; // KSh
  oldPrice?: number;
  unit: string;
  category: string;
  emoji: string;
  tag?: "fresh" | "deal" | "bestseller" | "new";
  stock: number;
  ordersToday?: number;
};

export const categories = [
  { id: "fresh", name: "Fresh Produce", emoji: "🥬", color: "bg-green-100" },
  { id: "dairy", name: "Dairy & Eggs", emoji: "🥚", color: "bg-yellow-100" },
  { id: "meat", name: "Meat & Chicken", emoji: "🍗", color: "bg-red-100" },
  { id: "bakery", name: "Bread & Bakery", emoji: "🍞", color: "bg-orange-100" },
  { id: "beverages", name: "Beverages", emoji: "🥤", color: "bg-blue-100" },
  { id: "snacks", name: "Snacks", emoji: "🍪", color: "bg-amber-100" },
  { id: "household", name: "Household", emoji: "🧺", color: "bg-purple-100" },
  { id: "cleaning", name: "Cleaning", emoji: "🧴", color: "bg-cyan-100" },
  { id: "baby", name: "Baby Care", emoji: "🍼", color: "bg-pink-100" },
  { id: "personal", name: "Personal Care", emoji: "🧼", color: "bg-rose-100" },
  { id: "essentials", name: "Electronics", emoji: "🔌", color: "bg-slate-100" },
  { id: "gas", name: "Gas & Utilities", emoji: "🔥", color: "bg-stone-100" },
];

export const products: Product[] = [
  { id: "p1", name: "Sukuma Wiki", price: 30, unit: "bunch", category: "fresh", emoji: "🥬", tag: "fresh", stock: 24, ordersToday: 38 },
  { id: "p2", name: "Ripe Tomatoes", price: 80, oldPrice: 100, unit: "1 kg", category: "fresh", emoji: "🍅", tag: "deal", stock: 18, ordersToday: 52 },
  { id: "p3", name: "Hass Avocados", price: 120, unit: "4 pcs", category: "fresh", emoji: "🥑", tag: "bestseller", stock: 12, ordersToday: 27 },
  { id: "p4", name: "Sweet Bananas", price: 90, unit: "1 dozen", category: "fresh", emoji: "🍌", tag: "fresh", stock: 30 },
  { id: "p5", name: "Fresh Milk", brand: "Brookside", price: 65, unit: "500 ml", category: "dairy", emoji: "🥛", tag: "bestseller", stock: 40, ordersToday: 81 },
  { id: "p6", name: "Brown Eggs", price: 480, oldPrice: 540, unit: "tray of 30", category: "dairy", emoji: "🥚", tag: "deal", stock: 9, ordersToday: 19 },
  { id: "p7", name: "Brown Bread", brand: "Festive", price: 75, unit: "400 g", category: "bakery", emoji: "🍞", tag: "fresh", stock: 22, ordersToday: 44 },
  { id: "p8", name: "White Sliced Bread", brand: "Broadways", price: 65, unit: "400 g", category: "bakery", emoji: "🥖", stock: 25 },
  { id: "p9", name: "Maize Flour (Unga)", brand: "Jogoo", price: 175, oldPrice: 210, unit: "2 kg", category: "household", emoji: "🌽", tag: "deal", stock: 15, ordersToday: 33 },
  { id: "p10", name: "Cooking Oil", brand: "Fresh Fri", price: 590, unit: "2 L", category: "household", emoji: "🫒", tag: "bestseller", stock: 8 },
  { id: "p11", name: "Coca-Cola", price: 80, unit: "500 ml", category: "beverages", emoji: "🥤", stock: 50 },
  { id: "p12", name: "Mineral Water", brand: "Keringet", price: 50, unit: "1 L", category: "beverages", emoji: "💧", tag: "new", stock: 60 },
  { id: "p13", name: "Chicken (Whole)", price: 650, unit: "1.2 kg", category: "meat", emoji: "🍗", tag: "fresh", stock: 6, ordersToday: 14 },
  { id: "p14", name: "Beef Mince", price: 720, unit: "1 kg", category: "meat", emoji: "🥩", stock: 5 },
  { id: "p15", name: "Dish Soap", brand: "Sunlight", price: 145, unit: "1 L", category: "cleaning", emoji: "🧴", stock: 30 },
  { id: "p16", name: "Bathing Soap", brand: "Geisha", price: 90, unit: "3-pack", category: "personal", emoji: "🧼", tag: "deal", oldPrice: 120, stock: 28 },
];

export const formatKSh = (n: number) =>
  `KSh ${n.toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;
