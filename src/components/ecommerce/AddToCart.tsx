"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";
import clsx from "clsx";

interface AddToCartProps {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
}

export function AddToCart({ id, title, price, imageUrl }: AddToCartProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = () => {
    setIsAdding(true);
    setTimeout(() => {
      addItem({ id, title, price, imageUrl, quantity: 1 });
      setIsAdding(false);
    }, 400);
  };

  return (
    <button 
      onClick={handleAdd}
      disabled={isAdding}
      className={clsx(
        "w-full py-4 font-sans text-sm tracking-widest uppercase transition-all duration-300",
        isAdding ? "bg-accent text-background" : "bg-primary text-background hover:bg-ink"
      )}
    >
      {isAdding ? "Adding..." : "Add to Cart"}
    </button>
  );
}
