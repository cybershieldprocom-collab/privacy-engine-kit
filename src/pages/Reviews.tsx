import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Lock, Key, ArrowRight, Star } from "lucide-react";

const categories = [
  {
    title: "VPN Reviews",
    description: "In-depth reviews of the best VPNs for privacy, streaming, and security.",
    icon: Shield,
    link: "/best-vpns",
    count: "15+ Reviews",
    featured: ["NordVPN", "ExpressVPN", "Surfshark"],
  },
  {
    title: "Antivirus Reviews",
    description: "Lab-tested antivirus software reviews for Windows, Mac, and mobile.",
    icon: Lock,
    link: "/best-antivirus",
    count: "12+ Reviews",
    featured: ["Bitdefender", "Norton", "Kaspersky"],
  },
  {
    title: "Password Manager Reviews",
    description: "Secure password managers tested for security, ease of use, and value.",
    icon: Key,
    link: "/best-password-managers",
    count: "10+ Reviews",
    featured: ["1Password", "Bitwarden", "Dashlane"],
  },
];

const latestReviews = [
  {
    title: "NordVPN Review 2024",
    category: "VPN",
    rating: 4.9,
    excerpt: "NordVPN remains our top pick for 2024 with its massive server network and excellent security features.",
    date: "Jan 10, 2024",
  },
  {
    title: "Bitdefender Total Security Review",
    category: "Antivirus",
    rating: 4.9,
    excerpt: "Perfect malware detection scores and minimal system impact make Bitdefender our top antivirus choice.",
    date: "Jan 8, 2024",
  },
  {
    title: "1Password Review 2024",
    category: "Password Manager",
    rating: 4.9,
    excerpt: "The best password manager for most people with its intuitive interface and powerful features.",
    date: "Jan 5, 2024",
  },
];

const Reviews = () => {
  return (
    <Layout>
      <PageHeader
        title="Expert Security Reviews"
        highlightedWord="Reviews"
        description="Comprehensive, hands-on reviews of VPNs, antivirus software, and password managers by our security experts."
        badge="Trusted Reviews Since 2019"
      />

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.link}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:glow-box"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {category.count}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {category.featured.map((item) => (
                    <span key={item} className="px-2 py-1 text-xs rounded-md bg-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-2xl font-bold">Latest Reviews</h2>
            <Button variant="ghost">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestReviews.map((review) => (
              <article
                key={review.title}
                className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                    {review.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                
                <h3 className="font-display text-lg font-bold mb-2">{review.title}</h3>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(review.rating)
                          ? "fill-warning text-warning"
                          : "text-muted"
                      }`}
                    />
                  ))}
                  <span className="text-sm font-semibold ml-1">{review.rating}</span>
                </div>
                
                <p className="text-sm text-muted-foreground">{review.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
