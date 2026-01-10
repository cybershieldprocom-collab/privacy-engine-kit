import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 50,000+ Users</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Secure Your
            <span className="text-gradient block mt-2">Digital Life</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Expert reviews and comparisons of the best VPNs, antivirus software, and password managers. 
            Protect yourself from hackers, data breaches, and online threats.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/best-vpns">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Protect Yourself Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/reviews">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                See Best Tools
              </Button>
            </Link>
          </div>

          {/* Trust Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
              <Lock className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">256-bit Encryption</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
              <Eye className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">No-Log Policies</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Malware Protection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
