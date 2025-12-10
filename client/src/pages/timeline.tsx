import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TimelineCard } from "@/components/TimelineCard";
import { Badge } from "@/components/ui/badge";

import timelineData from "@/data/timeline.json";

export default function TimelinePage() {
  useSEO({
    title: "Timeline",
    description: "Kronologi lengkap Perang Jawa dari tahun 1825 hingga 1830. Telusuri peristiwa-peristiwa penting dalam perjuangan Pangeran Diponegoro."
  });
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">Kronologi</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Timeline Perang Jawa
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Perjalanan lima tahun perjuangan Pangeran Diponegoro dan rakyat Jawa 
              melawan kolonialisme Belanda (1825-1830)
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="timeline-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-primary/20" />
              
              <div className="space-y-12">
                {timelineData.map((yearData, idx) => (
                  <TimelineCard
                    key={yearData.year}
                    year={yearData.year}
                    title={yearData.title}
                    events={yearData.events}
                    isLeft={idx % 2 === 0}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">Tahun Perang</p>
              </div>
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">200K+</p>
                <p className="text-sm text-muted-foreground">Korban Jiwa</p>
              </div>
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">100+</p>
                <p className="text-sm text-muted-foreground">Benteng Belanda</p>
              </div>
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">1</p>
                <p className="text-sm text-muted-foreground">Pahlawan Nasional</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
