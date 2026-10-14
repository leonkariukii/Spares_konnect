import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white border rounded-2xl shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }) {
  return <div className={`p-6 pb-4 ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }) {
  return (
    <div className={`p-6 pt-0 flex items-center ${className}`}>{children}</div>
  );
}
