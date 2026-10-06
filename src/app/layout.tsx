import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Amiri } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Footer } from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import { Cart } from "@/components/ecommerce/Cart";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "Dar Al Ghuraba",
  description: "The Knowledge That Remains. Premium Islamic Publishing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} ${amiri.variable}`}>
      <body className="antialiased bg-background text-foreground transition-colors duration-500">
        <CartProvider>
          <LenisProvider>
            {children}
            <Footer />
            <Cart />
          </LenisProvider>
        </CartProvider>
      </body>
    </html>
  );
}
