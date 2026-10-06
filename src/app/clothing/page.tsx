import { Header } from "@/components/layout/Header";
import { ProductCard } from "@/components/ecommerce/ProductCard";

const CLOTHING = [
  {
    id: "c1",
    title: "The Scholar's Thobe - Ivory",
    author: "Dar Al Ghuraba Apparels",
    price: "Rs. 6,500",
    imageUrl: "https://images.unsplash.com/photo-1578589318433-39b5de440c3f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "c2",
    title: "Everyday Kurta - Onyx",
    author: "Dar Al Ghuraba Apparels",
    price: "Rs. 4,200",
    imageUrl: "https://images.unsplash.com/photo-1596562095817-43ce9c5e5332?q=80&w=800&auto=format&fit=crop",
  }
];

export default function ClothingPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <Header />
      
      {/* Editorial Header */}
      <section className="pt-40 pb-16 md:pb-24 border-b border-ink/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 justify-between items-end">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-ink mb-6 transition-colors">
              Modest Clothing
            </h1>
            <p className="font-sans text-lg text-muted leading-relaxed transition-colors">
              Refined, modest, and timeless. Our clothing collection is designed with intention, utilizing natural fabrics and classic silhouettes that honor our heritage while embracing contemporary quality.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {CLOTHING.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
