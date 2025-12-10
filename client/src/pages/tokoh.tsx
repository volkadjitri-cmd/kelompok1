import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TokohCard } from "@/components/TokohCard";
import { Badge } from "@/components/ui/badge";

import tokohData from "@/data/tokoh.json";

export default function TokohPage() {
  useSEO({
    title: "Tokoh",
    description: "Mengenal para pahlawan Perang Jawa: Pangeran Diponegoro, Kiai Mojo, Sentot Alibasya, dan tokoh-tokoh penting lainnya yang berjuang melawan Belanda."
  });
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">Pahlawan</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tokoh Perang Jawa
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Para pahlawan yang berjuang dengan gagah berani melawan penjajahan Belanda 
              dalam Perang Jawa 1825-1830
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="tokoh-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tokohData.map((tokoh) => (
                <TokohCard
                  key={tokoh.slug}
                  name={tokoh.name}
                  slug={tokoh.slug}
                  image={tokoh.image}
                  role={tokoh.role}
                  bio={tokoh.bio}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
