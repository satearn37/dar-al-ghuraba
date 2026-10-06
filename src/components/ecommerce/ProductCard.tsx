import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  author: string;
  price: string;
  imageUrl: string;
}

export function ProductCard({ id, title, author, price, imageUrl }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group flex flex-col gap-6 cursor-pointer block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-8 focus-visible:ring-offset-background">
      {/* Image container: tall editorial aspect ratio */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-surface">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        {/* Subtle hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
      </div>
      
      {/* Typography container: strict alignment, thin lines */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-serif text-xl md:text-2xl font-medium text-ink group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
          <span className="font-sans text-sm text-ink shrink-0">{price}</span>
        </div>
        
        <div className="flex items-center justify-between border-t border-ink/10 pt-3 mt-1">
          <p className="font-sans text-xs uppercase tracking-widest text-muted">
            {author}
          </p>
          <span className="text-xs uppercase tracking-widest text-accent opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
