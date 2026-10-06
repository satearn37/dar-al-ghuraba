import Image from "next/image";
import { AddToCart } from "@/components/ecommerce/AddToCart";

interface ProductDetailProps {
  title: string;
  author: string;
  publisher?: string;
  price: string;
  description: string;
  imageUrl: string;
}

export function ProductDetail({ title, author, publisher, price, description, imageUrl }: ProductDetailProps) {
  return (
    <section className="min-h-screen pt-32 pb-24 bg-background transition-colors duration-500">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Sticky Image */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] w-full lg:max-w-md mx-auto overflow-hidden bg-surface border border-ink/5 shadow-2xl shadow-ink/5 transition-colors duration-500">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
          
          {/* Right: Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col items-start pt-8">
            <div className="mb-8">
              <h1 className="font-serif text-4xl md:text-5xl font-medium text-ink mb-4 transition-colors">{title}</h1>
              <p className="font-sans text-lg text-muted transition-colors">{author}</p>
              {publisher && <p className="font-sans text-sm text-accent mt-1 transition-colors">{publisher}</p>}
            </div>
            
            <p className="font-sans text-2xl font-medium text-ink mb-12 transition-colors">{price}</p>
            
            <div className="w-full max-w-md mb-12 flex flex-col gap-4">
              <AddToCart 
                id="1" 
                title={title} 
                price={price} 
                imageUrl={imageUrl} 
              />
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted mt-2">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                In Stock. Ready to ship.
              </div>
            </div>
            
            <div className="w-8 h-px bg-ink/20 mb-8 transition-colors"></div>
            
            <div className="prose prose-p:text-muted prose-p:leading-relaxed max-w-none">
              <p className="text-muted transition-colors">{description}</p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
