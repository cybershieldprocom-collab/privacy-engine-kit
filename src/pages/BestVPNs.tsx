import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ReviewCard from "@/components/shared/ReviewCard";

const vpns = [
  {
    name: "NordVPN",
    rating: 4.9,
    description: "Industry-leading VPN with the largest server network, best-in-class security features, and excellent speeds for streaming and torrenting.",
    pros: ["6,000+ servers in 60 countries", "Double VPN encryption", "Threat Protection suite", "Works with Netflix, Disney+"],
    cons: ["Slightly more expensive", "No split tunneling on iOS"],
    price: "$3.29/mo",
    link: "#",
    badge: "#1 Editor's Choice",
    category: "VPN",
  },
  {
    name: "ExpressVPN",
    rating: 4.8,
    description: "Premium VPN known for blazing-fast speeds, excellent security, and the ability to unblock virtually any streaming service.",
    pros: ["Fastest speeds in testing", "TrustedServer technology", "Works in China", "24/7 live chat support"],
    cons: ["Higher price point", "Only 5 simultaneous connections"],
    price: "$6.67/mo",
    link: "#",
    category: "VPN",
  },
  {
    name: "Surfshark",
    rating: 4.7,
    description: "Budget-friendly VPN with unlimited device connections, making it perfect for families and small businesses.",
    pros: ["Unlimited devices", "CleanWeb ad blocker", "Very affordable", "MultiHop feature"],
    cons: ["Smaller server network", "Newer to the market"],
    price: "$2.49/mo",
    link: "#",
    badge: "Best Value",
    category: "VPN",
  },
  {
    name: "CyberGhost",
    rating: 4.5,
    description: "User-friendly VPN with specialized servers for streaming and torrenting, plus a generous 45-day money-back guarantee.",
    pros: ["9,000+ servers", "Dedicated streaming servers", "45-day refund policy", "Very easy to use"],
    cons: ["Slower on some servers", "Weaker in restrictive countries"],
    price: "$2.19/mo",
    link: "#",
    category: "VPN",
  },
  {
    name: "Private Internet Access",
    rating: 4.4,
    description: "Veteran VPN with proven no-logs policy in court, open-source apps, and highly customizable settings.",
    pros: ["Proven no-logs policy", "Open-source apps", "10 simultaneous connections", "Port forwarding"],
    cons: ["US-based (Five Eyes)", "Interface not beginner-friendly"],
    price: "$2.03/mo",
    link: "#",
    category: "VPN",
  },
];

const BestVPNs = () => {
  return (
    <Layout>
      <PageHeader
        title="Best VPNs of 2024"
        highlightedWord="VPNs"
        description="Expert-tested VPN reviews to help you browse anonymously, access geo-restricted content, and protect your online privacy."
        badge="Updated January 2024"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {vpns.map((vpn) => (
              <ReviewCard key={vpn.name} {...vpn} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BestVPNs;
