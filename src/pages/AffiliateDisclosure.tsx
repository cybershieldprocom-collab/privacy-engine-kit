import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { AlertCircle } from "lucide-react";

const AffiliateDisclosure = () => {
  return (
    <Layout>
      <PageHeader
        title="Affiliate Disclosure"
        highlightedWord="Affiliate"
        description="Transparency about how we earn money and maintain editorial independence."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Important Notice */}
            <div className="flex items-start gap-4 p-6 rounded-xl bg-primary/10 border border-primary/20 mb-12">
              <AlertCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold mb-2">Important Notice</h3>
                <p className="text-sm text-muted-foreground">
                  CyberShield is an affiliate website. This means we may earn a commission 
                  when you click on links and make purchases. This does not affect our 
                  reviews or recommendations.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold mb-4">How We Make Money</h2>
                <p className="text-muted-foreground mb-4">
                  CyberShield is a free resource for our readers. To keep our content free and 
                  continue providing high-quality reviews and guides, we participate in affiliate 
                  programs with the security products we review.
                </p>
                <p className="text-muted-foreground">
                  When you click on an affiliate link and make a purchase, we may receive a small 
                  commission at no extra cost to you. This helps fund our testing, research, and 
                  content creation.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">Our Editorial Independence</h2>
                <p className="text-muted-foreground mb-4">
                  Our affiliate relationships do not influence our reviews, ratings, or 
                  recommendations. We have a strict editorial policy:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>We review products based on merit, not commission rates</li>
                  <li>We include products that don't have affiliate programs when they're the best choice</li>
                  <li>Our testing methodology remains consistent regardless of partnerships</li>
                  <li>Negative reviews are published when warranted</li>
                  <li>We disclose when a product is provided free for testing</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">Affiliate Partners</h2>
                <p className="text-muted-foreground">
                  We work with various VPN providers, antivirus companies, and password manager 
                  services. Some of our affiliate partners include NordVPN, ExpressVPN, Surfshark, 
                  Bitdefender, Norton, 1Password, and others reviewed on our site.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">Your Support Matters</h2>
                <p className="text-muted-foreground">
                  When you use our affiliate links to make purchases, you're directly supporting 
                  CyberShield. This allows us to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Maintain subscriptions to all major security products</li>
                  <li>Conduct thorough, independent testing</li>
                  <li>Keep our content updated and accurate</li>
                  <li>Provide free security guides and tutorials</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">Questions?</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our affiliate relationships or editorial 
                  practices, please contact us at{" "}
                  <a href="mailto:affiliate@cybershield.com" className="text-primary hover:underline">
                    affiliate@cybershield.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AffiliateDisclosure;
