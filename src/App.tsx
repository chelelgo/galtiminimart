import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { StoreLayout } from "@/components/galti/StoreLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const ShopPage = lazy(() => import("./pages/ShopPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));
const WishlistPage = lazy(() => import("./pages/WishlistPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <WishlistProvider>
          <BrowserRouter>
            <Suspense fallback={<div className="min-h-screen bg-background" aria-label="Loading" />}>
              <Routes>
                <Route element={<StoreLayout />}>
                  <Route path="/" element={<Index />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/category/:id" element={<CategoryPage />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/deals" element={<ShopPage dealsOnly />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order/:id" element={<OrderPage />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </WishlistProvider>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;