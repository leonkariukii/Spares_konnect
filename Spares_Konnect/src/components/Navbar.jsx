import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { ShoppingCart, User, Search } from "lucide-react";

export default function Navbar() {
  const { cart, user, setUser, searchTerm, setSearchTerm } =
    useContext(ShopContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2"
        >
          <span className="text-blue-600">⚡</span> Spares Konnect
        </Link>

        {/* Controlled Search Input */}
        <div className="hidden md:flex items-center relative w-1/3">
          <Search className="absolute left-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <nav className="flex items-center gap-6">
          <Link
            to="/products"
            className="text-sm font-medium hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center gap-1 text-sm font-medium hover:text-blue-600"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          {user ? (
            <button
              onClick={() => setUser(null)}
              className="text-sm font-medium text-red-600 hover:underline"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1 text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              <User className="w-4 h-4" /> Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
