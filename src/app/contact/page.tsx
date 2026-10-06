import { Header } from "@/components/layout/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background transition-colors duration-500">
      <Header />
      
      <section className="pt-40 pb-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/3">
            <span className="font-sans text-xs uppercase tracking-widest text-accent mb-4 block">Support</span>
            <h1 className="font-serif text-5xl font-medium text-ink mb-6 transition-colors">
              Get in touch
            </h1>
            <p className="font-sans text-muted leading-relaxed mb-12">
              Whether you have a question about a specific text, need assistance with your order, or wish to inquire about bulk purchases, we are here to help.
            </p>
            
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted mb-2">WhatsApp</h3>
                <p className="font-sans text-ink">+92 300 1234567</p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted mb-2">Email</h3>
                <p className="font-sans text-ink">salam@daralghuraba.com</p>
              </div>
              <div>
                <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-muted mb-2">Location</h3>
                <p className="font-sans text-ink">Based in Pakistan. Shipping Worldwide.</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3 bg-background p-8 md:p-12 border border-ink/5">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-sans text-xs font-semibold uppercase tracking-widest text-muted">Name</label>
                  <input type="text" id="name" className="w-full bg-surface border border-ink/10 p-4 text-ink focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-sans text-xs font-semibold uppercase tracking-widest text-muted">Email</label>
                  <input type="email" id="email" className="w-full bg-surface border border-ink/10 p-4 text-ink focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="font-sans text-xs font-semibold uppercase tracking-widest text-muted">Subject</label>
                <input type="text" id="subject" className="w-full bg-surface border border-ink/10 p-4 text-ink focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans text-xs font-semibold uppercase tracking-widest text-muted">Message</label>
                <textarea id="message" rows={6} className="w-full bg-surface border border-ink/10 p-4 text-ink focus:ring-1 focus:ring-accent focus:border-accent outline-none transition-all resize-none"></textarea>
              </div>
              
              <button type="button" className="mt-4 self-start px-8 py-4 bg-primary text-surface font-sans text-sm tracking-widest uppercase hover:bg-ink transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </main>
  );
}
