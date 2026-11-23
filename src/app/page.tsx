import { Header } from "@/components/layout/Header";
import { EditorialHero } from "@/components/editorial/EditorialHero";
import { ProductCard } from "@/components/ecommerce/ProductCard";
import Link from "next/link";
import Image from "next/image";

const FEATURED_PRODUCTS = [
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
    id: "3",
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
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <Header />
      <EditorialHero />
      
      {/* Trust / Credibility Strip */}
      <section className="border-y border-ink/10 py-8 bg-primary text-surface">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl">500+</span>
            <span className="font-sans text-xs uppercase tracking-widest text-surface/60">Authentic Texts</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-surface/20"></div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl">100%</span>
            <span className="font-sans text-xs uppercase tracking-widest text-surface/60">Verified Scholarship</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-surface/20"></div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl">6</span>
            <span className="font-sans text-xs uppercase tracking-widest text-surface/60">Categories</span>
          </div>
          <div className="hidden md:block w-px h-12 bg-surface/20"></div>
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-2xl">Worldwide</span>
            <span className="font-sans text-xs uppercase tracking-widest text-surface/60">Careful Delivery</span>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 border-b border-ink/10 pb-8">
            <div>
              <span className="font-sans text-xs uppercase tracking-widest text-accent mb-3 block">Featured</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-ink">
                Curated Volumes
              </h2>
            </div>
            <Link href="/books" className="text-sm font-sans tracking-widest uppercase border-b border-ink/30 hover:border-accent hover:text-accent transition-colors pb-1 mt-6 md:mt-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              View All Works
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 md:py-32 bg-ink text-surface">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center max-w-4xl">
          <span className="text-accent font-sans text-xs uppercase tracking-widest mb-8">Our Philosophy</span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-12 leading-tight">
            We believe that the wisdom of the past deserves to be presented with the highest degree of craft and care today.
          </h2>
          <p className="font-sans text-surface/70 text-lg max-w-2xl leading-relaxed mb-12">
            Dar Al Ghuraba translates to &quot;Home of the Strangers&quot;, serving as a curated publishing house for the modern seeker. We eschew overly commercial tactics in favor of a quiet, luxurious experience that honors the intelligence and spirituality of our community.
          </p>
          <Link href="/about" className="text-sm font-sans tracking-widest uppercase border-b border-surface/30 hover:border-accent hover:text-accent transition-colors pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Image side */}
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] relative w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1200&auto=format&fit=crop"
                  alt="Library shelves with curated books"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-ink/5 pointer-events-none mix-blend-multiply"></div>
              </div>
              {/* Decorative brass accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l border-b border-accent/40 z-10 hidden md:block"></div>
            </div>
            
            {/* Text side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start max-w-xl">
              <div className="w-8 h-px bg-accent mb-8"></div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ink mb-6 leading-tight">
                A carefully curated collection of authentic Islamic literature.
              </h2>
              
              <p className="font-sans text-muted leading-relaxed mb-8 text-lg">
                We believe that knowledge should be preserved in objects of beauty. Every book and text in our collection is selected with a commitment to both authenticity and craft.
              </p>
              
              <Link href="/about" className="text-primary font-medium tracking-wide border-b border-primary/30 hover:border-primary pb-1 transition-colors uppercase text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                Read Our Philosophy
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 md:py-32 bg-primary text-surface">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Join the Strangers</h2>
            <p className="font-sans text-surface/70 leading-relaxed">
              Subscribe to receive thoughtful essays, early access to rare editions, and updates from the publishing house. No aggressive marketing.
            </p>
          </div>
          <div className="w-full max-w-md">
            <form className="flex border-b border-surface/30 focus-within:border-accent transition-colors">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent py-4 text-surface placeholder:text-surface/50 focus:outline-none font-sans"
              />
              <button 
                type="button" 
                className="px-4 text-xs font-sans uppercase tracking-widest text-surface hover:text-accent transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
