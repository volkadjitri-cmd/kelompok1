import { useState, useCallback, useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GalleryItem, Lightbox } from "@/components/GalleryItem";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import galeriData from "@/data/galeri.json";

const categories = ["Semua", "Lukisan", "Ilustrasi", "Peta", "Dokumen", "Artefak"];

export default function GaleriPage() {
  useSEO({
    title: "Galeri",
    description: "Koleksi lukisan, ilustrasi, peta, dan dokumen bersejarah dari era Perang Jawa 1825-1830. Termasuk karya Raden Saleh tentang Pangeran Diponegoro."
  });

  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredGaleri = selectedCategory === "Semua" 
    ? galeriData 
    : galeriData.filter(item => item.category === selectedCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredGaleri.length - 1 : lightboxIndex - 1);
    }
  }, [lightboxIndex, filteredGaleri.length]);

  const goToNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredGaleri.length - 1 ? 0 : lightboxIndex + 1);
    }
  }, [lightboxIndex, filteredGaleri.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, goToPrev, goToNext]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">Arsip</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Galeri Sejarah
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Koleksi lukisan, ilustrasi, peta, dan dokumen bersejarah 
              dari era Perang Jawa 1825-1830
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-border bg-background sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="flex-shrink-0"
                  data-testid={`button-filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" data-testid="galeri-grid">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredGaleri.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Tidak ada item untuk kategori ini.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredGaleri.map((item, idx) => (
                  <GalleryItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    year={item.year}
                    category={item.category}
                    onClick={() => openLightbox(idx)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="py-12 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">{galeriData.length}</p>
                <p className="text-sm text-muted-foreground">Total Koleksi</p>
              </div>
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">
                  {galeriData.filter(g => g.category === "Lukisan").length}
                </p>
                <p className="text-sm text-muted-foreground">Lukisan</p>
              </div>
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">
                  {galeriData.filter(g => g.category === "Dokumen").length}
                </p>
                <p className="text-sm text-muted-foreground">Dokumen</p>
              </div>
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">
                  {galeriData.filter(g => g.category === "Ilustrasi").length}
                </p>
                <p className="text-sm text-muted-foreground">Ilustrasi</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Lightbox
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        item={lightboxIndex !== null ? filteredGaleri[lightboxIndex] : null}
        onPrev={goToPrev}
        onNext={goToNext}
        currentIndex={lightboxIndex ?? 0}
        totalItems={filteredGaleri.length}
      />
    </div>
  );
}
