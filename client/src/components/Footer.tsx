import { Link } from "wouter";
import { Sword, BookOpen, MapPin, Users, Heart, User, ExternalLink } from "lucide-react";

const members = [
  { name: "Haikal J", role: "Developer" },
  { name: "Hasna", role: "Designer" },
  { name: "Dewa", role: "Researcher" },
  { name: "Pingki", role: "Content" },
  { name: "Nabilla", role: "Editor" },
];

const navLinks = [
  { name: "Beranda", path: "/" },
  { name: "Timeline", path: "/timeline" },
  { name: "Tokoh", path: "/tokoh" },
  { name: "Galeri", path: "/galeri" },
  { name: "Peta", path: "/peta" },
];

const resources = [
  { name: "Arsip Nasional", url: "#" },
  { name: "Museum Diponegoro", url: "#" },
  { name: "Perpustakaan Nasional", url: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-card border-t border-border" data-testid="footer">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <Sword className="h-6 w-6 text-primary" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-foreground">
                  Perang Jawa
                </span>
                <p className="text-primary text-xs">1825 - 1830</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Website dokumentasi sejarah Perang Jawa, perjuangan heroik Pangeran Diponegoro dan rakyat Jawa melawan penjajahan Belanda.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-lg">6</span>
                <p className="text-muted-foreground text-xs">Peristiwa</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 mb-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-lg">6</span>
                <p className="text-muted-foreground text-xs">Tokoh</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-foreground font-semibold text-lg">10</span>
                <p className="text-muted-foreground text-xs">Lokasi</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
              Navigasi
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 group-hover:bg-primary transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></span>
              Sumber Referensi
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.url}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-2 group"
                  >
                    <ExternalLink className="h-3 w-3 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-accent/50 rounded-xl border border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Sumber utama: Peter Carey (2007), P.J.F. Louw (1894-1909), Arsip Nasional RI
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-semibold text-lg mb-6 flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Kelompok 1
            </h3>
            <p className="text-muted-foreground text-xs mb-4 italic">"Dibuat dengan segenap hati"</p>
            <div className="space-y-2">
              {members.map((member) => (
                <div 
                  key={member.name}
                  className="flex items-center gap-3 p-2 rounded-lg bg-accent/30 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-xs border border-primary/30">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">{member.name}</p>
                    <p className="text-muted-foreground text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>&copy; 2024</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/50"></span>
              <span>Dokumentasi Sejarah Perang Jawa</span>
            </div>
            <p className="text-xs text-muted-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Website aktif untuk keperluan edukasi
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
