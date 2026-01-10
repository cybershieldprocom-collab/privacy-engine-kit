import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const Disclaimer = () => {
  return (
    <Layout>
      <PageHeader
        title="Disclaimer"
        highlightedWord="Disclaimer"
        description="Important information about the content and recommendations on this website."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-8">
              Last updated: January 10, 2024
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold mb-4">General Information</h2>
                <p className="text-muted-foreground">
                  The information provided on CyberShield is for general informational purposes only. 
                  All information on the site is provided in good faith, however, we make no 
                  representation or warranty of any kind, express or implied, regarding the accuracy, 
                  adequacy, validity, reliability, availability, or completeness of any information 
                  on the site.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">Not Professional Advice</h2>
                <p className="text-muted-foreground">
                  The site cannot and does not contain professional security advice. The security 
                  information is provided for general informational and educational purposes only 
                  and is not a substitute for professional advice. Accordingly, before taking any 
                  actions based upon such information, we encourage you to consult with the 
                  appropriate professionals.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">External Links</h2>
                <p className="text-muted-foreground">
                  The site may contain links to other websites or content belonging to or 
                  originating from third parties. Such external links are not investigated, 
                  monitored, or checked for accuracy, adequacy, validity, reliability, availability, 
                  or completeness by us.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">Product Changes</h2>
                <p className="text-muted-foreground">
                  The products and services reviewed on this website may change their features, 
                  pricing, and terms at any time. While we strive to keep our reviews updated, 
                  we recommend verifying current information directly with the product providers 
                  before making a purchase decision.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Under no circumstance shall we have any liability to you for any loss or damage 
                  of any kind incurred as a result of the use of the site or reliance on any 
                  information provided on the site. Your use of the site and your reliance on 
                  any information on the site is solely at your own risk.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">Errors and Omissions</h2>
                <p className="text-muted-foreground">
                  While we have made every attempt to ensure that the information contained in 
                  this site has been obtained from reliable sources, CyberShield is not responsible 
                  for any errors or omissions, or for the results obtained from the use of this 
                  information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
