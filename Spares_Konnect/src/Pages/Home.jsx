import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductCard from "../components/ProductCard";
import { ArrowRight, Wrench, ShieldCheck, Zap, Cpu } from "lucide-react";

export default function Home() {
  const { products } = useContext(ShopContext);
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="space-y-12 pb-12">
      {/* Automotive Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white rounded-3xl p-8 md:p-16 flex flex-col items-center text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="bg-blue-600/30 text-blue-300 text-xs uppercase font-semibold px-3 py-1 rounded-full border border-blue-400/30">
            Spares Konnect • Quality Auto Parts
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4 mb-4">
            Reliable Motor Vehicle Spares & Accessories
          </h1>
          <p className="text-slate-300 text-base md:text-lg mb-8">
            Find guaranteed vehicle compatibility, OEM-standard replacement
            parts, and express delivery right to your garage or doorstep.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-md"
            >
              Browse Spare Parts <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Automotive Feature Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white border rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <Zap className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">
              Express Delivery
            </h3>
            <p className="text-gray-500 text-xs mt-0.5">
              Fast dispatch across town
            </p>
          </div>
        </div>
        <div className="bg-white border rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <Cpu className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">
              Vehicle Compatibility
            </h3>
            <p className="text-gray-500 text-xs mt-0.5">Exact fit guarantee</p>
          </div>
        </div>
        <div className="bg-white border rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <ShieldCheck className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">
              OEM Certified
            </h3>
            <p className="text-gray-500 text-xs mt-0.5">
              Genuine tested quality
            </p>
          </div>
        </div>
        <div className="bg-white border rounded-2xl p-6 flex items-center gap-4 shadow-sm">
          <Wrench className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">
              Expert Support
            </h3>
            <p className="text-gray-500 text-xs mt-0.5">
              Assistance with part numbers
            </p>
          </div>
        </div>
      </section>

      {/* Featured Parts Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Spare Parts
          </h2>
          <Link
            to="/products"
            className="text-blue-600 hover:underline text-sm font-semibold flex items-center gap-1"
          >
            View All Parts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
