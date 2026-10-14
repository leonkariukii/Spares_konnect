import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Overview from "./pages/ProductDetails/Overview";
import Reviews from "./pages/ProductDetails/Reviews";
import Specifications from "./pages/ProductDetails/Specifications";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";


const initialProducts = [
  {
    id: 1,
    title: "Powerstop High-Performance Ceramic Brake Pads Set",
    price: 45.0,
    category: "Braking System",
    image: "./Images/PowerStop-Z26-Ceramic-Brake.jpg",
    description:
      "Premium ceramic brake pads designed for superior stopping power, low dust, and quiet operation.",
    rating: { rate: 4.9, count: 120 },
  },
  {
    id: 2,
    title: "Kofil Engine Oil Filter (OEM Standard)",
    price: 12.5,
    category: "Filters",
    image: "./Images/Kofil-1R1808-Oil-Filter.jpg",
    description:
      "High-efficiency oil filtration media that traps harmful contaminants and protects engine longevity.",
    rating: { rate: 4.7, count: 85 },
  },
  {
    id: 3,
    title: "NGK Iridium Spark Plugs (Pack of 4)",
    price: 36.0,
    category: "Ignition",
    image: "./Images/Ngk-Iridium-Spark-Plugs.jpg",
    description:
      "Long-lasting iridium center electrode provides better fuel efficiency and smoother engine startup.",
    rating: { rate: 4.8, count: 64 },
  },
  {
    id: 4,
    title: "Bulldog Heavy-Duty Front Shock Absorber",
    price: 85.0,
    category: "Suspension",
    image: "./Images/Bulldog-FA.jpg",
    description:
      "Gas-charged replacement strut engineered to restore ride comfort, stability, and handling control.",
    rating: { rate: 4.6, count: 42 },
  },
  {
    id: 5,
    title: "Powermaster Heavy-Duty Alternator 12V",
    price: 150.0,
    category: "Electrical",
    image: "./Images/Powermaster-90-Amp-12v.jpg",
    description:
      "Reliable power generation unit designed to handle electrical accessory loads and keep your battery charged.",
    rating: { rate: 4.7, count: 31 },
  },
  {
    id: 6,
    title: "Carory Cabin Air Filter with Carbon",
    price: 18.0,
    category: "Filters",
    image: "./Images/CARORY-Cabin-Air-Filter.jpg",
    description:
      "Activated carbon cabin air filter blocks dust, pollen, and exhaust odors from entering the vehicle interior.",
    rating: { rate: 4.9, count: 104 },
  },
];

function App() {
  return (
    <ShopProvider initialProducts={initialProducts}>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />

              {/* Dynamic Route with Nested Routes */}
              <Route path="/products/:id" element={<ProductDetails />}>
                <Route index element={<Overview />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="specs" element={<Specifications />} />
              </Route>

              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />

              {/* Protected Checkout Route */}
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
