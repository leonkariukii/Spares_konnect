import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Specifications() {
  const { product } = useOutletContext();
  return (
    <div className="text-sm text-gray-600 space-y-2">
      <div className="flex justify-between py-2 border-b">
        <span className="font-medium text-gray-700">Part Category</span>
        <span>{product.category}</span>
      </div>
      <div className="flex justify-between py-2 border-b">
        <span className="font-medium text-gray-700">Compatibility</span>
        <span>Universal / Standard OEM</span>
      </div>
      <div className="flex justify-between py-2 border-b">
        <span className="font-medium text-gray-700">Condition</span>
        <span className="font-semibold text-green-600">Brand New</span>
      </div>
    </div>
  );
}