"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

export function EditorialHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const arabicRef = useRef<HTMLHeadingElement>(null);
  const englishRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      imageRef.current,
      { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 1.5, ease: "power4.inOut" }
    )
    .fromTo(
      arabicRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      englishRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(
      ctaRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
      "-=0.4"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[calc(100vh-88px)] mt-[88px] w-full flex items-center justify-center py-12 overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10">
        
        {/* Left Typography */}
        <div className="flex-1 z-20">
          <div className="flex items-center mb-3 sm:mb-4">
            <h2 
              ref={arabicRef}
              dir="rtl"
              className="font-arabic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-accent font-normal leading-normal opacity-0 select-none"
            >
              العلم الذي يبقى
            </h2>
          </div>
          
          <h1 
            ref={englishRef}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-ink tracking-wide mb-10 max-w-2xl leading-[1.1] opacity-0"
          >
            THE KNOWLEDGE <br />THAT REMAINS.
          </h1>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-8 opacity-0">
            <Link href="/books" className="text-ink font-sans text-xs tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300 border-b border-ink/30 hover:border-accent pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              Explore the Collection
            </Link>
            <Link href="/about" className="text-muted font-sans text-xs tracking-[0.2em] uppercase hover:text-ink transition-colors duration-300 border-b border-transparent hover:border-ink/30 pb-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              Discover Our Story
            </Link>
          </div>
        </div>

        {/* Right Editorial Image */}
        <div className="flex-1 w-full h-[50vh] lg:h-[75vh] relative flex justify-end">
          <div 
            ref={imageRef} 
            className="relative w-full lg:w-[85%] h-full bg-surface overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop"
              alt="Curated Islamic Texts"
              fill
              priority
              className="object-cover object-center scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-ink/5 pointer-events-none mix-blend-multiply"></div>
          </div>
        </div>
        
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-12 flex items-center gap-4 hidden md:flex text-ink opacity-50">
        <span className="w-px h-12 bg-ink/50"></span>
        <span className="font-sans text-xs tracking-widest uppercase origin-left -rotate-90 translate-y-12">Scroll</span>
      </div>
    </section>
  );
}
