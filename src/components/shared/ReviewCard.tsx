import { Button } from "@/components/ui/button";
import { Star, Check, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ReviewCardProps {
  name: string;
  logo?: string;
  rating: number;
  description: string;
  pros: string[];
  cons: string[];
  price: string;
  link: string;
  badge?: string;
  category: string;
}

const ReviewCard = ({
  name,
  rating,
  description,
  pros,
  cons,
  price,
  link,
  badge,
  category,
}: ReviewCardProps) => {
  return (
    <div className={`relative rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:glow-box ${badge ? "border-primary/30" : "border-border"}`}>
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-6 px-3 py-1 text-xs font-bold bg-primary text-primary-foreground rounded-full">
          {badge}
        </div>
      )}

      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
        {/* Left: Main Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
                {category}
              </p>
              <h3 className="font-display text-2xl font-bold">{name}</h3>
            </div>
            <div className="flex items-center gap-1 px-3 py-1 rounded-lg bg-muted">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="font-bold">{rating}</span>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Pros */}
            <div>
              <p className="text-sm font-semibold text-success mb-2">Pros</p>
              <ul className="space-y-1">
                {pros.slice(0, 3).map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <p className="text-sm font-semibold text-destructive mb-2">Cons</p>
              <ul className="space-y-1">
                {cons.slice(0, 2).map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Price & CTA */}
        <div className="lg:w-48 flex flex-col items-center lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border lg:pl-6">
          <div className="text-center lg:text-right">
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="font-display text-2xl font-bold text-primary">{price}</p>
          </div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" className="w-full lg:w-auto">
              Get Deal
              <ExternalLink className="h-4 w-4" />
            </Button>
          </a>
          <Link to={`/reviews/${name.toLowerCase().replace(/\s+/g, "-")}`}>
            <Button variant="ghost" size="sm">
              Read Full Review
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
