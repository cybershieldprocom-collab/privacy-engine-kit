import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ReviewCard from "@/components/shared/ReviewCard";

const antivirusProducts = [
  {
    name: "Bitdefender Total Security",
    rating: 4.9,
    description: "Top-rated antivirus with flawless malware detection, comprehensive features including VPN, password manager, and parental controls.",
    pros: ["Perfect malware detection scores", "Minimal system impact", "Ransomware protection", "Includes VPN"],
    cons: ["VPN has data limits", "Can be complex for beginners"],
    price: "$39.99/yr",
    link: "#",
    badge: "#1 Editor's Choice",
    category: "Antivirus",
  },
  {
    name: "Norton 360 Deluxe",
    rating: 4.8,
    description: "All-in-one security suite with excellent malware protection, unlimited VPN, dark web monitoring, and cloud backup.",
    pros: ["Unlimited VPN included", "Dark web monitoring", "50GB cloud backup", "Identity theft protection"],
    cons: ["Can slow down system", "Higher renewal price"],
    price: "$49.99/yr",
    link: "#",
    category: "Antivirus",
  },
  {
    name: "Kaspersky Premium",
    rating: 4.7,
    description: "Powerful antivirus with excellent detection rates, privacy features, and tools to optimize your device's performance.",
    pros: ["Outstanding malware detection", "Privacy protection tools", "Webcam protection", "Safe Money feature"],
    cons: ["US government concerns", "Basic parental controls"],
    price: "$34.99/yr",
    link: "#",
    badge: "Best for Families",
    category: "Antivirus",
  },
  {
    name: "McAfee Total Protection",
    rating: 4.5,
    description: "Feature-rich antivirus with identity monitoring, password manager, and protection for unlimited devices.",
    pros: ["Unlimited devices", "Identity monitoring", "Secure VPN included", "File shredder"],
    cons: ["Resource heavy", "Pushy upsells"],
    price: "$39.99/yr",
    link: "#",
    category: "Antivirus",
  },
  {
    name: "Avast One",
    rating: 4.3,
    description: "Modern all-in-one security with a clean interface, VPN, driver updater, and cleanup tools.",
    pros: ["Clean modern interface", "VPN included", "PC optimization tools", "Free version available"],
    cons: ["Past privacy concerns", "Some features need premium"],
    price: "$49.99/yr",
    link: "#",
    category: "Antivirus",
  },
];

const BestAntivirus = () => {
  return (
    <Layout>
      <PageHeader
        title="Best Antivirus Software 2024"
        highlightedWord="Antivirus"
        description="Protect your devices from malware, ransomware, and online threats with our expert-reviewed antivirus recommendations."
        badge="Lab-Tested Reviews"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {antivirusProducts.map((product) => (
              <ReviewCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BestAntivirus;
