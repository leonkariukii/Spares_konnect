import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { Dialog } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { CheckCircle2 } from "lucide-react";

export default function Checkout() {
  const { cart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
  });
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (!formData[key].trim()) {
        setError("Please fill out all fields before submitting.");
        return;
      }
    }
    setError("");
    setIsModalOpen(true); // Open the shadcn-style Dialog modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/"); // Redirect back to home after closing modal
  };

  return (
    <div className="max-w-xl mx-auto bg-white border rounded-2xl p-8 shadow-sm mt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Checkout Details
      </h2>
      {error && (
        <p className="text-red-500 text-sm mb-4 bg-red-50 p-3 rounded-lg">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <Input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Shipping Address
          </label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <Input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Nairobi"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zip Code
            </label>
            <Input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="00100"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Credit Card Number
          </label>
          <Input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors mt-4"
        >
          Place Order
        </button>
      </form>

      {/* Success Modal using Dialog Component */}
      <Dialog
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Order Confirmed"
      >
        <div className="text-center py-4">
          <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-3" />
          <p className="text-gray-600 text-sm mb-6">
            Thank you for your purchase! Your order has been successfully placed
            and is being processed.
          </p>
          <button
            onClick={handleCloseModal}
            className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </Dialog>
    </div>
  );
}
