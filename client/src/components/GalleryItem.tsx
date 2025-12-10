import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon } from "lucide-react";

interface GalleryItemProps {
  id: number;
  title: string;
  image: string;
  description: string;
  year: number;
  category: string;
  onClick: () => void;
}

export function GalleryItem({ 
  id, 
  title, 
  image, 
  description, 
  year, 
  category, 
  onClick 
}: GalleryItemProps) {
  return (
    <button
      onClick={onClick}
      className="group relative aspect-square overflow-hidden rounded-md bg-muted cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      data-testid={`gallery-item-${id}`}
    >
      <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
        <ImageIcon className="h-12 w-12 text-primary/20" />
      </div>
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <Badge variant="secondary" className="mb-2 bg-primary/90 text-primary-foreground border-0">
          {category}
        </Badge>
        <h3 className="text-sm font-medium text-white line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-white/70 mt-1">{year}</p>
      </div>
      <div className="absolute top-2 right-2">
        <Badge variant="outline" className="bg-black/50 text-white border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
          {year}
        </Badge>
      </div>
    </button>
  );
}

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    title: string;
    image: string;
    description: string;
    year: number;
    category: string;
  } | null;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
}

export function Lightbox({ 
  isOpen, 
  onClose, 
  item, 
  onPrev, 
  onNext,
  currentIndex,
  totalItems
}: LightboxProps) {
  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
      data-testid="lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        data-testid="button-close-lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        data-testid="button-lightbox-prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        data-testid="button-lightbox-next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div 
        className="max-w-5xl max-h-[90vh] mx-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex-1 min-h-0 flex items-center justify-center">
          <img 
            src={item.image} 
            alt={item.title}
            className="max-w-full max-h-[70vh] object-contain rounded-md"
          />
        </div>
        <div className="mt-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Badge className="bg-primary text-primary-foreground">
              {item.category}
            </Badge>
            <Badge variant="outline" className="text-white border-white/30">
              {item.year}
            </Badge>
          </div>
          <h3 className="text-xl font-serif font-semibold text-white mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-white/70 max-w-2xl mx-auto">
            {item.description}
          </p>
          <p className="text-xs text-white/50 mt-4">
            {currentIndex + 1} dari {totalItems}
          </p>
        </div>
      </div>
    </div>
  );
}
