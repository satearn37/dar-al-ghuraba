import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink text-surface py-16 md:py-24 border-t border-ink/10 transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-2 max-w-sm">
            <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-surface mb-6 block hover:text-accent transition-colors">
              Dar Al Ghuraba
            </Link>
            <p className="font-sans text-sm text-surface/70 leading-relaxed">
              Your trusted Home of the Strangers — an authentic Islamic publishing house and curated bookstore.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-surface/50 mb-6">Collections</h4>
            <ul className="flex flex-col gap-4 text-sm font-sans">
              <li><Link href="/books" className="text-surface/80 hover:text-accent transition-colors">Books & Texts</Link></li>
              <li><Link href="/books?filter=new" className="text-surface/80 hover:text-accent transition-colors">New Arrivals</Link></li>
              <li><Link href="/books?filter=classic" className="text-surface/80 hover:text-accent transition-colors">Classic Works</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-surface/50 mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-sm font-sans">
              <li><Link href="/about" className="text-surface/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-surface/80 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="#" className="text-surface/80 hover:text-accent transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-surface/10 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-surface/50">
          <p>© {new Date().getFullYear()} Dar Al Ghuraba. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-accent transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-accent transition-colors">WhatsApp</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
