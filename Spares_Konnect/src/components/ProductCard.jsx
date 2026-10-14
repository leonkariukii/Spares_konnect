import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <Card className="flex flex-col justify-between hover:shadow-md transition-shadow">
      <CardContent className="p-4 flex flex-col h-full">
        <Link to={`/products/${product.id}`} className="block">
          <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
          <div className="mb-2">
            <Badge variant="default">{product.category}</Badge>
          </div>
          <h3 className="font-semibold text-gray-800 line-clamp-1">{product.title}</h3>
          <p className="text-blue-600 font-bold mt-1">${product.price.toFixed(2)}</p>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>
      </CardFooter>
    </Card>
  );
}