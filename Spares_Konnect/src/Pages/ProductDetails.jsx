import React, { useContext } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { Badge } from "../../components/ui/badge";
import { ShoppingCart, ArrowLeft } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Not Found</h2>
        <Link to="/products" className="text-blue-600 hover:underline text-sm font-semibold">
          Back to Catalogue
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-6">
      <Link to="/products" className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600">
        <ArrowLeft className="w-4 h-4" /> Back to Catalogue
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border rounded-2xl p-8 shadow-sm">
        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-4">
          <img src={product.image} alt={product.title} className="h-72 object-contain" />
        </div>
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <Badge variant="default" className="mb-3">{product.category}</Badge>
            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-3xl font-extrabold text-blue-600 mt-2">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">{product.description}</p>
          </div>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" /> Add to Cart
          </button>
        </div>
      </div>

      {/* Nested Tabs Navigation */}
      <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <div className="flex border-b gap-8 mb-6">
          <Link to="" className="pb-3 font-semibold text-sm border-b-2 border-blue-600 text-blue-600">Overview</Link>
          <Link to="specs" className="pb-3 font-semibold text-sm text-gray-500 hover:text-gray-900">Specifications</Link>
          <Link to="reviews" className="pb-3 font-semibold text-sm text-gray-500 hover:text-gray-900">Customer Reviews</Link>
        </div>
        <Outlet context={{ product }} />
      </div>
    </div>
  );
}