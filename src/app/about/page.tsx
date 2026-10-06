import { Header } from "@/components/layout/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <Header />
      
      {/* Editorial Header */}
      <section className="pt-40 pb-16 md:pb-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center">
          <span className="font-sans text-xs uppercase tracking-widest text-accent mb-6 block">About Dar Al Ghuraba</span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-ink mb-8 max-w-4xl leading-tight transition-colors">
            Preserving the legacy of knowledge for the modern seeker.
          </h1>
          <div className="w-px h-16 bg-accent/40"></div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-surface pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="relative aspect-[21/9] w-full max-w-6xl mx-auto overflow-hidden">
             <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600&auto=format&fit=crop"
                alt="Library shelves with curated Islamic texts"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/10 pointer-events-none mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="w-8 h-px bg-accent mb-8"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-8 leading-tight">The Home of the Strangers</h2>
            <p className="font-sans text-muted text-lg leading-relaxed mb-6">
              Dar Al Ghuraba translates to &quot;Home of the Strangers&quot;, inspired by the prophetic tradition describing those who hold firmly to their faith and principles in times of unfamiliarity. 
            </p>
            <p className="font-sans text-muted text-lg leading-relaxed">
              Founded with the vision of bridging authentic Islamic scholarship with modern editorial design, we serve as a curated publishing house and bookstore. We believe that the wisdom of the past deserves to be presented with the highest degree of craft and care today.
            </p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 bg-ink text-surface">
        <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center max-w-3xl">
          <div className="w-8 h-px bg-accent mb-12"></div>
          <p className="font-serif text-3xl md:text-4xl leading-relaxed italic mb-8">
            &quot;Knowledge is not what is memorized. Knowledge is what benefits.&quot;
          </p>
          <p className="text-xs uppercase tracking-widest text-surface/50">— Imam al-Shafi&apos;i</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <span className="font-sans text-xs uppercase tracking-widest text-accent mb-4 block">Our Values</span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-8 leading-tight">Our Philosophy</h2>
            <p className="font-sans text-muted text-lg leading-relaxed mb-12">
              Every book we curate is an extension of our core values: Knowledge, Authenticity, Heritage, Craft, and Trust. We eschew overly commercial or aggressive sales tactics in favor of a quiet, luxurious experience that honors the intelligence and spirituality of our community.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {["Knowledge", "Authenticity", "Heritage", "Craft", "Trust"].map((value) => (
                <div key={value} className="flex flex-col items-center text-center gap-3">
                  <div className="w-px h-8 bg-accent"></div>
                  <span className="font-serif text-lg text-ink">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
