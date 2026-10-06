import { Header } from "@/components/layout/Header";
import { ProductCard } from "@/components/ecommerce/ProductCard";
import { SortDropdown } from "@/components/ui/SortDropdown";

// Mock data for the Books catalogue
const BOOKS = [
  {
    id: "1",
    title: "Al-Muwatta",
    author: "Imam Malik",
    price: "Rs. 4,500",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "The Book of Assistance",
    author: "Imam al-Haddad",
    price: "Rs. 2,200",
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "The Beginning of Guidance",
    author: "Imam al-Ghazali",
    price: "Rs. 1,800",
    imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Riyad as-Salihin",
    author: "Imam an-Nawawi",
    price: "Rs. 3,500",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Shama'il al-Muhammadiyya",
    author: "Imam at-Tirmidhi",
    price: "Rs. 2,800",
    imageUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "Ihya Ulum al-Din",
    author: "Imam al-Ghazali",
    price: "Rs. 5,200",
    imageUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "Mukhtasar al-Quduri",
    author: "Imam al-Quduri",
    price: "Rs. 3,000",
    imageUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "9",
    title: "Al-Arba'in an-Nawawiyya",
    author: "Imam an-Nawawi",
    price: "Rs. 1,500",
    imageUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <Header />
      
      {/* Editorial Header */}
      <section className="pt-40 pb-16 md:pb-24 bg-surface border-b border-ink/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 justify-between items-end">
          <div className="max-w-2xl">
            <span className="font-sans text-xs uppercase tracking-widest text-accent mb-4 block">Collection</span>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-ink mb-6 transition-colors">
              Books & Texts
            </h1>
            <p className="font-sans text-lg text-muted leading-relaxed transition-colors">
              A curated selection of foundational Islamic texts, profound spiritual literature, and essential scholarship. Each volume is chosen for its authenticity and bound to honor the weight of the knowledge it carries.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm uppercase tracking-widest font-sans font-medium text-ink">
            <span className="cursor-pointer border-b border-ink hover:text-accent hover:border-accent transition-colors pb-1">All Works</span>
            <span className="cursor-pointer text-muted hover:text-ink transition-colors pb-1">New Additions</span>
            <span className="cursor-pointer text-muted hover:text-ink transition-colors pb-1">Classic Texts</span>
          </div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-6 border-b border-ink/5 bg-surface/50">
        <div className="container mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 sm:mb-0">
            <button className="text-muted hover:text-ink transition-colors uppercase tracking-widest text-xs border-b border-transparent hover:border-ink pb-1">Filter: Subjects +</button>
            <button className="text-muted hover:text-ink transition-colors uppercase tracking-widest text-xs border-b border-transparent hover:border-ink pb-1">Filter: Authors +</button>
          </div>
          <SortDropdown options={["Recommended", "Newest Additions", "Price: Low to High", "Price: High to Low"]} />
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
            {BOOKS.map((book) => (
              <ProductCard key={book.id} {...book} />
            ))}
          </div>
          
          {/* Editorial Pagination */}
          <div className="mt-24 flex justify-center items-center gap-8 text-sm font-sans tracking-widest uppercase">
            <button className="text-muted hover:text-ink transition-colors disabled:opacity-50">Prev</button>
            <div className="flex gap-4 text-ink">
              <span className="border-b border-ink pb-1">1</span>
              <span className="text-muted hover:text-ink cursor-pointer">2</span>
              <span className="text-muted hover:text-ink cursor-pointer">3</span>
            </div>
            <button className="text-ink hover:text-accent transition-colors">Next</button>
          </div>
        </div>
      </section>
    </main>
  );
}
