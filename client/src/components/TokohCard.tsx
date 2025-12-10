import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

interface TokohCardProps {
  name: string;
  slug: string;
  image: string;
  role: string;
  bio?: string;
  compact?: boolean;
}

export function TokohCard({ name, slug, image, role, bio, compact = false }: TokohCardProps) {
  if (compact) {
    return (
      <Link 
        href={`/tokoh/${slug}`}
        className="group block"
        data-testid={`card-tokoh-compact-${slug}`}
      >
        <div className="flex items-center gap-3 p-3 rounded-md bg-accent/30 hover:bg-accent/50 transition-colors">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
              <User className="h-6 w-6 text-primary/50" />
            </div>
            <img 
              src={image} 
              alt={name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="min-w-0">
            <h4 className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
              {name}
            </h4>
            <p className="text-xs text-muted-foreground truncate">{role}</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      href={`/tokoh/${slug}`}
      className="group block h-full"
      data-testid={`card-tokoh-${slug}`}
    >
      <Card className="h-full overflow-hidden border-card-border hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4] overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
              <User className="h-16 w-16 text-primary/20" />
            </div>
            <img 
              src={image} 
              alt={name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <Badge variant="secondary" className="mb-2 bg-primary/90 text-primary-foreground border-0">
                {role}
              </Badge>
              <h3 className="font-serif text-xl font-semibold text-white">
                {name}
              </h3>
            </div>
          </div>
          {bio && (
            <div className="p-4">
              <p className="text-sm text-muted-foreground line-clamp-3">
                {bio}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
