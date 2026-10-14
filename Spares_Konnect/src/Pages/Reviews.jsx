import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Reviews() {
  return (
    <div className="space-y-4 text-sm text-gray-600">
      <div className="border-b pb-3">
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-gray-900">Mark O.</span>
          <span className="text-xs text-gray-400">2 days ago</span>
        </div>
        <p>Perfect fit for my car. High quality and arrived quickly through Spares Konnect delivery!</p>
      </div>
      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="font-semibold text-gray-900">Sarah W.</span>
          <span className="text-xs text-gray-400">1 week ago</span>
        </div>
        <p>OEM quality as described. Very satisfied with the pricing and durability.</p>
      </div>
    </div>
  );
}