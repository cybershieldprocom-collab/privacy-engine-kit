import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Link } from "react-router-dom";
import { Clock, ArrowRight, User } from "lucide-react";

const guides = [
  {
    title: "How to Use a VPN for Complete Online Privacy",
    excerpt: "A beginner's guide to setting up and using a VPN to protect your browsing, streaming, and downloads.",
    category: "VPN Guide",
    readTime: "8 min read",
    author: "Security Team",
    slug: "how-to-use-vpn",
    featured: true,
  },
  {
    title: "Best VPN for Tor: Maximum Anonymity Guide",
    excerpt: "Learn how to combine Tor with a VPN for the ultimate in online anonymity and security.",
    category: "Privacy",
    readTime: "10 min read",
    author: "Privacy Expert",
    slug: "best-vpn-for-tor",
    featured: true,
  },
  {
    title: "Protecting Your Android Device: Antivirus Setup",
    excerpt: "Step-by-step guide to installing and configuring antivirus protection for Android phones and tablets.",
    category: "Mobile Security",
    readTime: "6 min read",
    author: "Mobile Security Team",
    slug: "android-antivirus-setup",
    featured: false,
  },
  {
    title: "Password Security Best Practices for 2024",
    excerpt: "Create unbreakable passwords and learn why password managers are essential for your security.",
    category: "Passwords",
    readTime: "7 min read",
    author: "Security Team",
    slug: "password-best-practices",
    featured: true,
  },
  {
    title: "Setting Up Family Online Safety Controls",
    excerpt: "Protect your kids online with parental controls, safe browsing tools, and monitoring solutions.",
    category: "Family Safety",
    readTime: "9 min read",
    author: "Family Safety Expert",
    slug: "family-online-safety",
    featured: false,
  },
  {
    title: "Small Business Cybersecurity Essentials",
    excerpt: "Essential security tools and practices every small business needs to protect against cyber threats.",
    category: "Business",
    readTime: "12 min read",
    author: "Business Security Team",
    slug: "small-business-security",
    featured: false,
  },
  {
    title: "What is a Kill Switch? VPN Safety Explained",
    excerpt: "Understanding kill switches and why they're crucial for maintaining your privacy when using a VPN.",
    category: "VPN Guide",
    readTime: "5 min read",
    author: "Security Team",
    slug: "vpn-kill-switch-explained",
    featured: false,
  },
  {
    title: "Ransomware Protection: Complete Guide",
    excerpt: "How to protect your devices from ransomware attacks and what to do if you get infected.",
    category: "Threats",
    readTime: "11 min read",
    author: "Threat Analysis Team",
    slug: "ransomware-protection",
    featured: false,
  },
];

const Guides = () => {
  const featuredGuides = guides.filter((g) => g.featured);
  const otherGuides = guides.filter((g) => !g.featured);

  return (
    <Layout>
      <PageHeader
        title="Security Guides & Tutorials"
        highlightedWord="Guides"
        description="Learn how to protect yourself online with our beginner-friendly security guides and step-by-step tutorials."
        badge="Free Resources"
      />

      {/* Featured Guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8">Featured Guides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <Link
                key={guide.slug}
                to={`/guides/${guide.slug}`}
                className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-primary/50 hover:glow-box"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                      {guide.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {guide.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {guide.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {guide.author}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold mb-8">All Guides</h2>
          
          <div className="space-y-4">
            {otherGuides.map((guide) => (
              <Link
                key={guide.slug}
                to={`/guides/${guide.slug}`}
                className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary">
                      {guide.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{guide.excerpt}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all ml-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Guides;
