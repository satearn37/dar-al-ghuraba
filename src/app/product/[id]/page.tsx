import { Header } from "@/components/layout/Header";
import { ProductDetail } from "@/components/ecommerce/ProductDetail";

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch data based on params.id
  
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ProductDetail 
        title="Al-Muwatta"
        author="Imam Malik"
        publisher="Dar Al Ghuraba Publishing"
        price="Rs. 4,500"
        description="The Muwatta is a complete record of the legal and social parameters of the original Muslim community in Madina. Imam Malik's masterpiece remains one of the foundational texts of Islamic law and a source of profound spiritual guidance. Bound in premium linen with gold foil stamping."
        imageUrl="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop"
      />
    </main>
  );
}
