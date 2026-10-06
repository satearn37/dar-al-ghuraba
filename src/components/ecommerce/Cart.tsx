"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

export function Cart() {
  const { isOpen, closeCart, items, removeItem, updateQuantity } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={clsx(
          "fixed inset-0 bg-ink/40 backdrop-blur-sm z-[60] transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Cart Drawer */}
      <div 
        className={clsx(
          "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-background shadow-2xl z-[70] transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-6 border-b border-ink/10">
          <h2 className="font-serif text-2xl font-medium text-ink">Your Cart</h2>
          <button 
            onClick={closeCart}
            className="text-muted hover:text-ink transition-colors"
          >
            <X strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 text-muted">
              <p className="font-serif text-lg">Your cart is empty.</p>
              <button 
                onClick={closeCart}
                className="text-sm font-sans tracking-widest uppercase border-b border-muted hover:text-ink hover:border-ink transition-colors pb-1"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative w-20 h-28 bg-surface border border-ink/5 shrink-0">
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col flex-1 justify-between py-1">
                  <div>
                    <h3 className="font-serif font-medium text-ink leading-tight">{item.title}</h3>
                    <p className="font-sans text-sm text-muted mt-1">{item.price}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 border border-ink/10 px-2 py-1 text-ink">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-muted hover:text-ink">
                        <Minus size={14} />
                      </button>
                      <span className="font-sans text-xs font-medium w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-muted hover:text-ink">
                        <Plus size={14} />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-xs uppercase tracking-widest text-muted hover:text-red-800 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-ink/10 bg-surface/50">
            <div className="flex items-center justify-between mb-6 font-sans">
              <span className="text-muted uppercase tracking-widest text-xs font-semibold">Subtotal</span>
              <span className="text-ink font-medium">Calculated at Checkout</span>
            </div>
            <button 
              onClick={() => {
                const btn = document.getElementById('checkout-btn');
                if (btn) {
                  btn.innerText = 'Redirecting to secure checkout...';
                  setTimeout(() => btn.innerText = 'Proceed to Checkout', 2000);
                }
              }}
              id="checkout-btn"
              className="w-full py-4 bg-primary text-background font-sans text-sm tracking-widest uppercase hover:bg-ink transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
