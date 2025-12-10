import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  title: string;
  slug: string;
  year: number;
  month?: string;
  image: string;
  summary: string;
  lokasi?: string;
  compact?: boolean;
}

export function ArticleCard({ 
  title, 
  slug, 
  year, 
  month, 
  image, 
  summary, 
  lokasi,
  compact = false 
}: ArticleCardProps) {
  if (compact) {
    return (
      <Link 
        href={`/peristiwa/${slug}`}
        className="group block"
        data-testid={`card-article-compact-${slug}`}
      >
        <div className="flex gap-4 p-3 rounded-md bg-accent/30 hover:bg-accent/50 transition-colors">
          <div className="relative w-20 h-20 rounded-md overflow-hidden bg-muted flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
              <BookOpen className="h-6 w-6 text-primary/50" />
            </div>
            <img 
              src={image} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <Badge variant="outline" className="mb-1">
              {year}
            </Badge>
            <h4 className="font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {title}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
              {summary}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      href={`/peristiwa/${slug}`}
      className="group block h-full"
      data-testid={`card-article-${slug}`}
    >
      <Card className="h-full overflow-hidden border-card-border hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="relative aspect-video overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
              <BookOpen className="h-12 w-12 text-primary/20" />
            </div>
            <img 
              src={image} 
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute top-3 left-3">
              <Badge className="bg-primary text-primary-foreground border-0 font-serif text-lg px-3 py-1">
                {year}
              </Badge>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3 flex-wrap">
              {month && (
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{month}</span>
                </div>
              )}
              {lokasi && (
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{lokasi}</span>
                </div>
              )}
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {summary}
            </p>
            <Button variant="link" className="h-auto p-0 text-primary gap-1">
              Baca selengkapnya
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
