import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import ReviewCard from "@/components/shared/ReviewCard";

const passwordManagers = [
  {
    name: "1Password",
    rating: 4.9,
    description: "Best overall password manager with exceptional security, intuitive interface, and powerful features for individuals and families.",
    pros: ["Watchtower security alerts", "Travel Mode", "Excellent family sharing", "Secret Key encryption"],
    cons: ["No free tier", "Slightly higher price"],
    price: "$2.99/mo",
    link: "#",
    badge: "#1 Editor's Choice",
    category: "Password Manager",
  },
  {
    name: "Bitwarden",
    rating: 4.8,
    description: "Open-source password manager with a generous free tier, self-hosting option, and enterprise features at affordable prices.",
    pros: ["Free tier available", "Open-source", "Self-hosting option", "Very affordable premium"],
    cons: ["Basic interface", "Limited autofill on mobile"],
    price: "$10/year",
    link: "#",
    badge: "Best Free Option",
    category: "Password Manager",
  },
  {
    name: "Dashlane",
    rating: 4.7,
    description: "Premium password manager with built-in VPN, dark web monitoring, and the best password health dashboard.",
    pros: ["VPN included", "Dark web monitoring", "One-click password changer", "Excellent security dashboard"],
    cons: ["Expensive premium", "Limited free version"],
    price: "$4.99/mo",
    link: "#",
    category: "Password Manager",
  },
  {
    name: "NordPass",
    rating: 4.5,
    description: "Modern password manager from the makers of NordVPN with XChaCha20 encryption and a clean, simple interface.",
    pros: ["XChaCha20 encryption", "Clean interface", "Breach scanner", "Secure sharing"],
    cons: ["Newer product", "Fewer advanced features"],
    price: "$1.69/mo",
    link: "#",
    badge: "Best Value",
    category: "Password Manager",
  },
  {
    name: "Keeper",
    rating: 4.4,
    description: "Secure password manager with excellent business features, encrypted file storage, and BreachWatch dark web monitoring.",
    pros: ["Zero-knowledge security", "Encrypted file storage", "Strong business features", "BreachWatch monitoring"],
    cons: ["Expensive add-ons", "Dated interface"],
    price: "$2.92/mo",
    link: "#",
    category: "Password Manager",
  },
];

const BestPasswordManagers = () => {
  return (
    <Layout>
      <PageHeader
        title="Best Password Managers 2024"
        highlightedWord="Password Managers"
        description="Secure all your accounts with our expert-reviewed password managers. Generate strong passwords and never forget a login again."
        badge="Security First"
      />
      
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {passwordManagers.map((product) => (
              <ReviewCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BestPasswordManagers;
