import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home, ArrowLeft, Sword } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="text-center px-4">
          <div className="mb-8">
            <Sword className="h-16 w-16 text-primary/30 mx-auto mb-4" />
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-foreground mb-4">
              404
            </h1>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Maaf, halaman yang Anda cari tidak ditemukan. 
              Mungkin halaman telah dipindahkan atau tidak tersedia.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button className="gap-2" data-testid="button-go-home">
                <Home className="h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={() => window.history.back()}
              data-testid="button-go-back"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
