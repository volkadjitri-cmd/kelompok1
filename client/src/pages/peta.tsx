import { useState } from "react";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, ArrowRight, Info } from "lucide-react";

import petaData from "@/data/peta.json";

const locationTypes = {
  "Markas": "bg-green-500",
  "Kota": "bg-blue-500",
  "Pertempuran": "bg-red-500",
  "Benteng": "bg-orange-500"
};

export default function PetaPage() {
  useSEO({
    title: "Peta",
    description: "Peta interaktif wilayah Perang Jawa 1825-1830. Jelajahi lokasi pertempuran, benteng Belanda, dan markas pasukan Pangeran Diponegoro di Jawa Tengah."
  });

  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  const activeLocation = selectedLocation !== null 
    ? petaData.locations.find(l => l.id === selectedLocation)
    : hoveredLocation !== null
    ? petaData.locations.find(l => l.id === hoveredLocation)
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-4">Geografi</Badge>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              {petaData.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {petaData.description}
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <span className="text-sm text-muted-foreground">Legenda:</span>
              {Object.entries(locationTypes).map(([type, color]) => (
                <div key={type} className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${color}`} />
                  <span className="text-sm text-foreground">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" data-testid="peta-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-card border border-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary/20 mx-auto mb-4" />
                      <p className="text-muted-foreground">Peta Interaktif Jawa Tengah</p>
                      <p className="text-sm text-muted-foreground/60">1825-1830</p>
                    </div>
                  </div>

                  {petaData.locations.map((location) => (
                    <button
                      key={location.id}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                        selectedLocation === location.id || hoveredLocation === location.id
                          ? "scale-150 z-20"
                          : "scale-100 z-10"
                      }`}
                      style={{
                        left: `${location.coordinates.x}%`,
                        top: `${location.coordinates.y}%`
                      }}
                      onClick={() => setSelectedLocation(
                        selectedLocation === location.id ? null : location.id
                      )}
                      onMouseEnter={() => setHoveredLocation(location.id)}
                      onMouseLeave={() => setHoveredLocation(null)}
                      data-testid={`map-marker-${location.id}`}
                    >
                      <div className="relative">
                        <div 
                          className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                            locationTypes[location.type as keyof typeof locationTypes] || "bg-gray-500"
                          } ${
                            selectedLocation === location.id ? "ring-2 ring-primary ring-offset-2" : ""
                          }`}
                        />
                        {(selectedLocation === location.id || hoveredLocation === location.id) && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap">
                            <Badge variant="secondary" className="text-xs shadow-lg">
                              {location.name}
                            </Badge>
                          </div>
                        )}
                      </div>
                    </button>
                  ))}

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm rounded-md py-2 px-4">
                      <Info className="h-3 w-3" />
                      <span>Klik pada marker untuk melihat detail lokasi</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-4">
                  {activeLocation ? (
                    <Card className="border-card-border">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div 
                            className={`w-3 h-3 rounded-full ${
                              locationTypes[activeLocation.type as keyof typeof locationTypes] || "bg-gray-500"
                            }`}
                          />
                          <Badge variant="outline">{activeLocation.type}</Badge>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                          {activeLocation.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {activeLocation.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{activeLocation.year}</span>
                          </div>
                        </div>
                        <Link href={`/peristiwa/${activeLocation.relatedEvent}`}>
                          <Button variant="outline" className="w-full gap-2" data-testid="button-view-event">
                            Lihat Peristiwa
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card className="border-card-border bg-card/50">
                      <CardContent className="p-6 text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
                        <p className="text-muted-foreground text-sm">
                          Pilih lokasi pada peta untuk melihat detailnya
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  <Card className="border-card-border">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-foreground mb-3">Daftar Lokasi</h4>
                      <div className="space-y-2 max-h-[400px] overflow-y-auto">
                        {petaData.locations.map((location) => (
                          <button
                            key={location.id}
                            className={`w-full flex items-center gap-3 p-2 rounded-md text-left transition-colors ${
                              selectedLocation === location.id
                                ? "bg-primary/10"
                                : "hover:bg-accent/50"
                            }`}
                            onClick={() => setSelectedLocation(
                              selectedLocation === location.id ? null : location.id
                            )}
                            data-testid={`location-list-${location.id}`}
                          >
                            <div 
                              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                locationTypes[location.type as keyof typeof locationTypes] || "bg-gray-500"
                              }`}
                            />
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">
                                {location.name}
                              </p>
                              <p className="text-xs text-muted-foreground">{location.type}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-card">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">
                  {petaData.locations.length}
                </p>
                <p className="text-sm text-muted-foreground">Lokasi</p>
              </div>
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">
                  {petaData.locations.filter(l => l.type === "Pertempuran").length}
                </p>
                <p className="text-sm text-muted-foreground">Pertempuran</p>
              </div>
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">
                  {petaData.locations.filter(l => l.type === "Benteng").length}
                </p>
                <p className="text-sm text-muted-foreground">Benteng</p>
              </div>
              <div className="p-4">
                <p className="font-serif text-3xl font-bold text-primary">
                  {petaData.locations.filter(l => l.type === "Markas").length}
                </p>
                <p className="text-sm text-muted-foreground">Markas</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
