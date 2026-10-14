import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, user } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 0 ? 10.0 : 0;
  const total = subtotal + shipping;

  const handleCheckoutClick = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/checkout");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-16 bg-white border rounded-2xl max-w-2xl mx-auto shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your Cart is Empty
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          Browse Products <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl p-4 flex items-center justify-between shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div className="flex-1 mx-4">
                <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-blue-600 font-bold text-sm mt-1">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 border rounded-lg hover:bg-gray-100"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 border rounded-lg hover:bg-gray-100"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white border rounded-xl p-6 shadow-sm h-fit">
          <h3 className="font-bold text-gray-900 text-lg mb-4">
            Order Summary
          </h3>
          <div className="space-y-3 text-sm text-gray-600 border-b pb-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-900">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Estimate</span>
              <span className="font-semibold text-gray-900">
                ${shipping.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="flex justify-between font-bold text-lg text-gray-900 my-4">
            <span>Total</span>
            <span className="text-blue-600">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckoutClick}
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors text-center block"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
