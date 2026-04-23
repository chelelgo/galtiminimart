export type Product = {
  id: string;
  name: string;
  brand?: string;
  price: number; // KSh
  oldPrice?: number;
  unit: string;
  category: string;
  image: string;
  tag?: "fresh" | "deal" | "bestseller" | "new";
  stock: number;
  ordersToday?: number;
};

// Unsplash CDN images — free, real, no API key needed.
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=600&q=80`;

export const categories = [
  { id: "fresh", name: "Fresh Produce", image: u("photo-1542838132-92c53300491e"), color: "from-green-100 to-green-50" },
  { id: "dairy", name: "Dairy & Eggs", image: u("photo-1559598467-f8b76c8155d0"), color: "from-yellow-100 to-yellow-50" },
  { id: "meat", name: "Meat & Chicken", image: u("photo-1602470520998-f4a52199a3d6"), color: "from-red-100 to-red-50" },
  { id: "bakery", name: "Bread & Bakery", image: u("photo-1509440159596-0249088772ff"), color: "from-orange-100 to-orange-50" },
  { id: "beverages", name: "Beverages", image: u("photo-1625772299848-391b6a87d7b3"), color: "from-blue-100 to-blue-50" },
  { id: "snacks", name: "Snacks", image: u("photo-1599629954294-14df9ec8bc03"), color: "from-amber-100 to-amber-50" },
  { id: "household", name: "Household", image: u("photo-1584473457409-ce95a9c00c80"), color: "from-purple-100 to-purple-50" },
  { id: "cleaning", name: "Cleaning", image: u("photo-1583947215259-38e31be8751f"), color: "from-cyan-100 to-cyan-50" },
  { id: "baby", name: "Baby Care", image: u("photo-1515488764276-beab7607c1e6"), color: "from-pink-100 to-pink-50" },
  { id: "personal", name: "Personal Care", image: u("photo-1556228720-195a672e8a03"), color: "from-rose-100 to-rose-50" },
  { id: "essentials", name: "Electronics", image: u("photo-1593642632559-0c6d3fc62b89"), color: "from-slate-100 to-slate-50" },
  { id: "gas", name: "Gas & Utilities", image: u("photo-1605000797499-95a51c5269ae"), color: "from-stone-100 to-stone-50" },
];

export const products: Product[] = [
  { id: "p1", name: "Sukuma Wiki", price: 30, unit: "bunch", category: "fresh", image: u("photo-1576045057995-568f588f82fb"), tag: "fresh", stock: 24, ordersToday: 38 },
  { id: "p2", name: "Ripe Tomatoes", price: 80, oldPrice: 100, unit: "1 kg", category: "fresh", image: u("photo-1561136594-7f68413baa99"), tag: "deal", stock: 18, ordersToday: 52 },
  { id: "p3", name: "Hass Avocados", price: 120, unit: "4 pcs", category: "fresh", image: u("photo-1523049673857-eb18f1d7b578"), tag: "bestseller", stock: 12, ordersToday: 27 },
  { id: "p4", name: "Sweet Bananas", price: 90, unit: "1 dozen", category: "fresh", image: u("photo-1571771894821-ce9b6c11b08e"), tag: "fresh", stock: 30 },
  { id: "p5", name: "Fresh Milk", brand: "Brookside", price: 65, unit: "500 ml", category: "dairy", image: u("photo-1563636619-e9143da7973b"), tag: "bestseller", stock: 40, ordersToday: 81 },
  { id: "p6", name: "Brown Eggs", price: 480, oldPrice: 540, unit: "tray of 30", category: "dairy", image: u("photo-1582722872445-44dc5f7e3c8f"), tag: "deal", stock: 9, ordersToday: 19 },
  { id: "p7", name: "Brown Bread", brand: "Festive", price: 75, unit: "400 g", category: "bakery", image: u("photo-1598373182133-52452f7691ef"), tag: "fresh", stock: 22, ordersToday: 44 },
  { id: "p8", name: "White Sliced Bread", brand: "Broadways", price: 65, unit: "400 g", category: "bakery", image: u("photo-1509440159596-0249088772ff"), stock: 25 },
  { id: "p9", name: "Maize Flour (Unga)", brand: "Jogoo", price: 175, oldPrice: 210, unit: "2 kg", category: "household", image: u("photo-1568254183919-78a4f43a2877"), tag: "deal", stock: 15, ordersToday: 33 },
  { id: "p10", name: "Cooking Oil", brand: "Fresh Fri", price: 590, unit: "2 L", category: "household", image: u("photo-1474979266404-7eaacbcd87c5"), tag: "bestseller", stock: 8 },
  { id: "p11", name: "Coca-Cola", price: 80, unit: "500 ml", category: "beverages", image: u("photo-1554866585-cd94860890b7"), stock: 50 },
  { id: "p12", name: "Mineral Water", brand: "Keringet", price: 50, unit: "1 L", category: "beverages", image: u("photo-1564419320461-6870880221ad"), tag: "new", stock: 60 },
  { id: "p13", name: "Chicken (Whole)", price: 650, unit: "1.2 kg", category: "meat", image: u("photo-1604503468506-a8da13d82791"), tag: "fresh", stock: 6, ordersToday: 14 },
  { id: "p14", name: "Beef Mince", price: 720, unit: "1 kg", category: "meat", image: u("photo-1603048297172-c92544798d5a"), stock: 5 },
  { id: "p15", name: "Dish Soap", brand: "Sunlight", price: 145, unit: "1 L", category: "cleaning", image: u("photo-1583947215259-38e31be8751f"), stock: 30 },
  { id: "p16", name: "Bathing Soap", brand: "Geisha", price: 90, unit: "3-pack", category: "personal", image: u("photo-1600857544200-b2f666a9a2ec"), tag: "deal", oldPrice: 120, stock: 28 },
  { id: "p17", name: "Basmati Rice", brand: "Daawat", price: 320, unit: "1 kg", category: "household", image: u("photo-1586201375761-83865001e31c"), tag: "bestseller", stock: 20, ordersToday: 22 },
  { id: "p18", name: "Pasta Spaghetti", brand: "Pasta Mia", price: 110, unit: "500 g", category: "household", image: u("photo-1551462147-37885acc36f1"), stock: 35 },
  { id: "p19", name: "Tea Bags", brand: "Ketepa", price: 220, oldPrice: 260, unit: "100 bags", category: "beverages", image: u("photo-1597481499750-3e6b22637e12"), tag: "deal", stock: 18 },
  { id: "p20", name: "Sugar (Brown)", brand: "Kabras", price: 195, unit: "1 kg", category: "household", image: u("photo-1610137844732-49477b41ec77"), stock: 25 },
];

export const formatKSh = (n: number) =>
  `KSh ${n.toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;
