import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import FeaturedTools from "@/components/home/FeaturedTools";
import ComparisonPreview from "@/components/home/ComparisonPreview";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <FeaturedTools />
      <ComparisonPreview />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
