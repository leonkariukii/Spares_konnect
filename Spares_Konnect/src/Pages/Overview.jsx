import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Overview() {
  const { product } = useOutletContext();
  return (
    <div className="text-sm text-gray-600 space-y-3">
      <p>Genuine automotive replacement part designed for reliable performance and exact vehicle fitment under the Spares Konnect standard.</p>
      <p>Rating: <span className="font-semibold text-gray-900">{product.rating?.rate} / 5.0</span> ({product.rating?.count} verified customer reviews)</p>
    </div>
  );
}