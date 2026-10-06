"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useCart } from "@/context/CartContext";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, itemCount } = useCart();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-ink/10 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex-1">
          <button 
            aria-label="Menu" 
            onClick={() => setMobileMenuOpen(true)}
            className="text-ink hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Desktop Nav - Left */}
        <nav className="hidden md:flex flex-1 items-center gap-8 text-sm font-medium tracking-wide">
          <Link href="/books" className="text-ink/70 hover:text-primary transition-colors">
            Books
          </Link>
          <Link href="/about" className="text-ink/70 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-ink/70 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Logo */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="font-serif text-2xl md:text-3xl font-semibold tracking-wide text-ink">
            Dar Al Ghuraba
          </Link>
        </div>

        {/* Desktop Nav - Right */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <ThemeToggle />
          <button aria-label="Search" className="text-ink/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button onClick={openCart} aria-label="Cart" className="text-ink/70 hover:text-primary transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="text-xs font-medium">{itemCount}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-background z-[100] transition-transform duration-500 flex flex-col px-6 py-8 md:hidden",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="font-serif text-2xl font-semibold tracking-wide text-ink">
            Dar Al Ghuraba
          </Link>
          <button 
            aria-label="Close Menu" 
            onClick={() => setMobileMenuOpen(false)} 
            className="text-ink hover:text-primary transition-colors p-1"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col gap-10 text-3xl font-serif text-ink items-center mt-24">
          <Link href="/books" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Books & Texts</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">About Us</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
