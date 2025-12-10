import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TimelineEvent {
  month: string;
  title: string;
  slug: string;
  description: string;
  image: string;
}

interface TimelineCardProps {
  year: number;
  title: string;
  events: TimelineEvent[];
  isLeft?: boolean;
}

export function TimelineCard({ year, title, events, isLeft = true }: TimelineCardProps) {
  return (
    <div 
      className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      data-testid={`timeline-card-${year}`}
    >
      <div className="hidden md:flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg">
          <span className="font-serif text-xl font-bold text-primary-foreground">{year}</span>
        </div>
        <div className="w-0.5 h-24 bg-primary/30" />
      </div>

      <Card className="flex-1 w-full overflow-hidden border-card-border">
        <CardContent className="p-0">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="md:hidden">
                {year}
              </Badge>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {title}
              </h3>
            </div>

            <div className="space-y-4">
              {events.map((event, idx) => (
                <div 
                  key={idx}
                  className="group rounded-md bg-accent/30 hover:bg-accent/50 transition-colors overflow-hidden"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3">
                      <span className="text-xs text-white/80 font-medium">
                        {event.month}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground mb-1">
                          {event.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {event.description}
                        </p>
                        <Link href={`/peristiwa/${event.slug}`}>
                          <Button 
                            variant="link" 
                            className="h-auto p-0 mt-2 text-primary gap-1"
                            data-testid={`link-event-${event.slug}`}
                          >
                            Baca selengkapnya
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
