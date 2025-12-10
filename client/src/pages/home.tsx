import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TokohCard } from "@/components/TokohCard";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin, Users, BookOpen, Image as ImageIcon, Sword } from "lucide-react";

import tokohData from "@/data/tokoh.json";
import peristiwaData from "@/data/peristiwa.json";
import galeriData from "@/data/galeri.json";

export default function HomePage() {
  useSEO({
    title: "Beranda",
    description: "Jelajahi sejarah Perang Jawa (1825-1830), perjuangan heroik Pangeran Diponegoro dan rakyat Jawa melawan kolonialisme Belanda. Timeline, tokoh, galeri, dan peta interaktif."
  });

  const featuredTokoh = tokohData.slice(0, 3);
  const featuredPeristiwa = peristiwaData.slice(0, 3);
  const featuredGaleri = galeriData.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section 
          className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
          data-testid="hero-section"
        >
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-[url('/img/hero-bg.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/40" />
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary bg-primary/10">
              1825 - 1830
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Perang Jawa
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Perjuangan heroik Pangeran Diponegoro dan rakyat Jawa melawan 
              kolonialisme Belanda dalam perang terbesar di Hindia Belanda.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/timeline">
                <Button size="lg" className="gap-2" data-testid="button-explore-timeline">
                  <Calendar className="h-5 w-5" />
                  Telusuri Timeline
                </Button>
              </Link>
              <Link href="/tokoh">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 gap-2" data-testid="button-see-tokoh">
                  <Users className="h-5 w-5" />
                  Lihat Tokoh
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background" data-testid="ringkasan-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Sejarah</Badge>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tentang Perang Jawa
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Perang Jawa (1825-1830), juga dikenal sebagai Perang Diponegoro, adalah konflik 
                bersenjata terbesar yang pernah dihadapi pemerintah kolonial Belanda di Hindia 
                Belanda. Perang ini dipimpin oleh <strong className="text-foreground">Pangeran Diponegoro</strong>, 
                putra Sultan Hamengkubuwono III dari Kesultanan Yogyakarta.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Perang meletus setelah pemerintah kolonial Belanda berencana membangun jalan yang 
                melewati tanah dan makam leluhur Diponegoro di Tegalrejo. Tindakan ini dianggap 
                sebagai penghinaan besar, memicu perlawanan yang mendapat dukungan luas dari 
                rakyat Jawa, terutama kalangan santri dan petani.
              </p>
              <p className="text-lg leading-relaxed">
                Selama lima tahun peperangan, diperkirakan <strong className="text-foreground">200.000 orang Jawa</strong> dan 
                <strong className="text-foreground"> 15.000 tentara Belanda</strong> beserta sekutunya tewas. 
                Perang berakhir dengan penangkapan Diponegoro pada 28 Maret 1830 di Magelang.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { icon: Calendar, label: "Tahun", value: "1825-1830" },
                { icon: Users, label: "Korban Jawa", value: "200.000" },
                { icon: Sword, label: "Korban Belanda", value: "15.000" },
                { icon: MapPin, label: "Wilayah", value: "Jawa Tengah" },
              ].map((stat, idx) => (
                <Card key={idx} className="text-center border-card-border">
                  <CardContent className="p-4">
                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <p className="font-serif text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card" data-testid="tokoh-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <Badge variant="secondary" className="mb-4">Pahlawan</Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Tokoh Penting
                </h2>
                <p className="text-muted-foreground mt-2">
                  Para pahlawan yang berjuang dalam Perang Jawa
                </p>
              </div>
              <Link href="/tokoh">
                <Button variant="outline" className="gap-2" data-testid="button-all-tokoh">
                  Lihat Semua Tokoh
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTokoh.map((tokoh) => (
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

        <section className="py-16 md:py-24 bg-background" data-testid="peristiwa-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <Badge variant="secondary" className="mb-4">Kronologi</Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Peristiwa Penting
                </h2>
                <p className="text-muted-foreground mt-2">
                  Momen-momen bersejarah selama Perang Jawa
                </p>
              </div>
              <Link href="/timeline">
                <Button variant="outline" className="gap-2" data-testid="button-all-peristiwa">
                  Lihat Timeline Lengkap
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPeristiwa.map((peristiwa) => (
                <ArticleCard
                  key={peristiwa.slug}
                  title={peristiwa.title}
                  slug={peristiwa.slug}
                  year={peristiwa.year}
                  month={peristiwa.month}
                  image={peristiwa.image}
                  summary={peristiwa.summary}
                  lokasi={peristiwa.lokasi}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card" data-testid="peta-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">Geografi</Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Peta Perang Jawa
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Perang Jawa terjadi di sebagian besar wilayah Jawa Tengah, meliputi 
                  area dari Yogyakarta hingga Semarang, dari Kedu hingga Banyumas. 
                  Jelajahi lokasi-lokasi penting pertempuran, benteng-benteng Belanda, 
                  dan markas pasukan Diponegoro.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "10 lokasi pertempuran penting",
                    "Sistem benteng stelsel Belanda",
                    "Markas gerilya Diponegoro",
                    "Rute pergerakan pasukan",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/peta">
                  <Button className="gap-2" data-testid="button-explore-peta">
                    <MapPin className="h-4 w-4" />
                    Jelajahi Peta
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                  <MapPin className="h-16 w-16 text-primary/20" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-md" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-primary rounded-full animate-ping" />
                  <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background" data-testid="galeri-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <Badge variant="secondary" className="mb-4">Arsip</Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  Galeri Sejarah
                </h2>
                <p className="text-muted-foreground mt-2">
                  Koleksi lukisan, peta, dan dokumen bersejarah
                </p>
              </div>
              <Link href="/galeri">
                <Button variant="outline" className="gap-2" data-testid="button-all-galeri">
                  Lihat Semua
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featuredGaleri.map((item) => (
                <Link key={item.id} href="/galeri">
                  <a className="group relative aspect-square rounded-md overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
                      <ImageIcon className="h-8 w-8 text-primary/20" />
                    </div>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-xs text-white truncate">{item.title}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary/10" data-testid="cta-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Telusuri Sejarah Perang Jawa
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Pelajari lebih dalam tentang perjuangan Pangeran Diponegoro dan rakyat Jawa 
              dalam melawan penjajahan melalui timeline interaktif kami.
            </p>
            <Link href="/timeline">
              <Button size="lg" className="gap-2" data-testid="button-cta-timeline">
                <BookOpen className="h-5 w-5" />
                Mulai Menjelajah
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
