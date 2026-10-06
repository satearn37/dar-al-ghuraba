import Image from "next/image";

export function EditorialSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] relative w-full overflow-hidden bg-background">
              {/* Note: Placeholder div for image since we don't have actual assets yet */}
              <div className="absolute inset-0 bg-ink/5 flex items-center justify-center">
                <span className="font-serif text-muted italic">Curated Photography</span>
              </div>
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
            
            <button className="text-primary font-medium tracking-wide border-b border-primary/30 hover:border-primary pb-1 transition-colors uppercase text-sm">
              Read Our Philosophy
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
