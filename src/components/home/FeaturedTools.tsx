import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Key, ArrowRight, Star, Check } from "lucide-react";

const tools = [
  {
    id: "vpns",
    title: "Best VPNs",
    description: "Hide your IP, encrypt your connection, and browse anonymously with military-grade encryption.",
    icon: Shield,
    link: "/best-vpns",
    color: "from-primary to-teal-600",
    features: ["256-bit Encryption", "No-Log Policy", "Kill Switch"],
    topPick: "NordVPN",
    rating: 4.9,
  },
  {
    id: "antivirus",
    title: "Best Antivirus",
    description: "Protect your devices from malware, ransomware, phishing attacks, and zero-day threats.",
    icon: Lock,
    link: "/best-antivirus",
    color: "from-emerald-500 to-green-600",
    features: ["Real-time Protection", "Ransomware Shield", "Web Protection"],
    topPick: "Bitdefender",
    rating: 4.8,
  },
  {
    id: "passwords",
    title: "Password Managers",
    description: "Generate, store, and autofill strong passwords across all your devices securely.",
    icon: Key,
    link: "/best-password-managers",
    color: "from-cyan-500 to-blue-600",
    features: ["Zero-Knowledge", "2FA Support", "Secure Sharing"],
    topPick: "1Password",
    rating: 4.9,
  },
];

const FeaturedTools = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Choose Your <span className="text-gradient">Protection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've tested and reviewed hundreds of security tools. Here are the categories that matter most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="group relative rounded-2xl border border-border bg-card/50 p-8 transition-all duration-300 hover:border-primary/50 hover:glow-box"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tool.color} mb-6`}>
                <tool.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold mb-3">{tool.title}</h3>
              <p className="text-muted-foreground mb-6">{tool.description}</p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Top Pick */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 mb-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Top Pick</p>
                  <p className="font-semibold">{tool.topPick}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-semibold">{tool.rating}</span>
                </div>
              </div>

              {/* CTA */}
              <Link to={tool.link}>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  View Top {tool.title.split(" ")[1]}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
