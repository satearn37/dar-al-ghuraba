import { Header } from "@/components/layout/Header";
import { ProductCard } from "@/components/ecommerce/ProductCard";

const NOTEBOOKS = [
  {
    id: "n1",
    title: "Premium Linen Notebook - Forest Green",
    author: "Dar Al Ghuraba",
    price: "Rs. 1,800",
    imageUrl: "https://images.unsplash.com/photo-1531346878377-244cb7e30d63?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "n2",
    title: "Classic Moleskine Style - Deep Ink",
    author: "Dar Al Ghuraba",
    price: "Rs. 1,500",
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
  }
];

export default function NotebooksPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <Header />
      
      {/* Editorial Header */}
      <section className="pt-40 pb-16 md:pb-24 border-b border-ink/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 justify-between items-end">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-ink mb-6 transition-colors">
              Notebooks & Stationery
            </h1>
            <p className="font-sans text-lg text-muted leading-relaxed transition-colors">
              Tools for the seeker of knowledge. Crafted with premium materials, fountain-pen friendly paper, and subtle Islamic geometric accents. Built to preserve your reflections and notes.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {NOTEBOOKS.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
