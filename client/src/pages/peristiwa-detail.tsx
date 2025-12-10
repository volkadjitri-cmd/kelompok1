import { useParams, Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TokohCard } from "@/components/TokohCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin, BookOpen, Quote } from "lucide-react";

import peristiwaData from "@/data/peristiwa.json";
import tokohData from "@/data/tokoh.json";

export default function PeristiwaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const peristiwa = peristiwaData.find(p => p.slug === slug);
  
  useSEO({
    title: peristiwa ? peristiwa.title : "Peristiwa Tidak Ditemukan",
    description: peristiwa 
      ? `${peristiwa.title} (${peristiwa.year}) - ${peristiwa.summary}`
      : "Peristiwa yang dicari tidak ditemukan dalam database Perang Jawa."
  });
  
  if (!peristiwa) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold text-foreground mb-4">
              Peristiwa Tidak Ditemukan
            </h1>
            <Link href="/timeline">
              <Button variant="outline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Kembali ke Timeline
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedTokoh = tokohData.filter(t => 
    peristiwa.tokoh.includes(t.slug)
  );

  const paragraphs = peristiwa.content.split('\n\n');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[url('/img/hero-pattern.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-4xl mx-auto">
              <Link href="/timeline">
                <Button variant="ghost" className="gap-2 mb-4 text-white hover:bg-white/10" data-testid="button-back-timeline">
                  <ArrowLeft className="h-4 w-4" />
                  Kembali ke Timeline
                </Button>
              </Link>
              <Badge className="mb-4 bg-primary text-primary-foreground font-serif text-2xl px-4 py-2">
                {peristiwa.year}
              </Badge>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
                {peristiwa.title}
              </h1>
              <div className="flex items-center gap-4 flex-wrap text-white/80">
                {peristiwa.month && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{peristiwa.month} {peristiwa.year}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{peristiwa.lokasi}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" data-testid="peristiwa-detail">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  {paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {relatedTokoh.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-border">
                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                      Tokoh yang Terlibat
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {relatedTokoh.map((tokoh) => (
                        <TokohCard
                          key={tokoh.slug}
                          name={tokoh.name}
                          slug={tokoh.slug}
                          image={tokoh.image}
                          role={tokoh.role}
                          compact
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <Card className="border-card-border">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                        Informasi Peristiwa
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="text-xs text-muted-foreground">Waktu</p>
                            <p className="font-medium text-foreground">
                              {peristiwa.month && `${peristiwa.month} `}{peristiwa.year}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary mt-0.5" />
                          <div>
                            <p className="text-xs text-muted-foreground">Lokasi</p>
                            <p className="font-medium text-foreground">{peristiwa.lokasi}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-card-border">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          Referensi
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {peristiwa.referensi.map((ref, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <Quote className="h-4 w-4 text-primary/50 mt-0.5 flex-shrink-0" />
                            <span>{ref}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-card-border bg-primary/5">
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground italic">
                        "{peristiwa.summary}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
