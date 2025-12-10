import { useParams, Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, User, BookOpen } from "lucide-react";

import tokohData from "@/data/tokoh.json";
import peristiwaData from "@/data/peristiwa.json";

export default function TokohDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const tokoh = tokohData.find(t => t.slug === slug);
  
  useSEO({
    title: tokoh ? tokoh.name : "Tokoh Tidak Ditemukan",
    description: tokoh 
      ? `${tokoh.name} - ${tokoh.role}. ${tokoh.bio.substring(0, 150)}...`
      : "Tokoh yang dicari tidak ditemukan dalam database Perang Jawa."
  });
  
  if (!tokoh) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold text-foreground mb-4">
              Tokoh Tidak Ditemukan
            </h1>
            <Link href="/tokoh">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Daftar Tokoh
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedEvents = peristiwaData.filter(p => 
    tokoh.relatedEvents.includes(p.slug)
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-8 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/tokoh">
              <Button variant="ghost" className="gap-2 mb-4" data-testid="button-back-tokoh">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Daftar Tokoh
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-24" data-testid="tokoh-detail">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted mb-6">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                      <User className="h-24 w-24 text-primary/20" />
                    </div>
                    <img 
                      src={tokoh.image} 
                      alt={tokoh.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  <Card className="border-card-border">
                    <CardContent className="p-4 space-y-4">
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Peran</p>
                          <p className="font-medium text-foreground">{tokoh.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Tahun Hidup</p>
                          <p className="font-medium text-foreground">
                            {tokoh.birthYear} - {tokoh.deathYear}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <div>
                          <p className="text-xs text-muted-foreground">Peristiwa Terkait</p>
                          <p className="font-medium text-foreground">
                            {relatedEvents.length} peristiwa
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="lg:col-span-2">
                <Badge variant="secondary" className="mb-4">{tokoh.role}</Badge>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                  {tokoh.name}
                </h1>
                
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                    {tokoh.bio}
                  </p>
                </div>

                {relatedEvents.length > 0 && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Peristiwa Terkait
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {relatedEvents.map((event) => (
                        <ArticleCard
                          key={event.slug}
                          title={event.title}
                          slug={event.slug}
                          year={event.year}
                          month={event.month}
                          image={event.image}
                          summary={event.summary}
                          lokasi={event.lokasi}
                          compact
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
