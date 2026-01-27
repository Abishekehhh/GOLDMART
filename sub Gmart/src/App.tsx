import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import JewelleryListing from "./pages/JewelleryListing";
import JewelleryDetails from "./pages/JewelleryDetails";
import ShopsListing from "./pages/ShopsListing";
import ShopDetails from "./pages/ShopDetails";
import SpecialOffers from "./pages/SpecialOffers";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/jewellery" element={<JewelleryListing />} />
          <Route path="/jewellery/:id" element={<JewelleryDetails />} />
          <Route path="/shops" element={<ShopsListing />} />
          <Route path="/shops/:id" element={<ShopDetails />} />
          <Route path="/offers" element={<SpecialOffers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
