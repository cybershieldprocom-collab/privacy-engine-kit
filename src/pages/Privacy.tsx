import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";

const Privacy = () => {
  return (
    <Layout>
      <PageHeader
        title="Privacy Policy"
        highlightedWord="Privacy"
        description="Your privacy matters to us. Learn how we collect, use, and protect your information."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert">
            <p className="text-muted-foreground mb-8">
              Last updated: January 10, 2024
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="font-display text-xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect information you provide directly to us, such as when you subscribe 
                  to our newsletter, contact us, or fill out a form. This may include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Email address</li>
                  <li>Name</li>
                  <li>Any information you choose to provide in messages</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">2. Automatic Information</h2>
                <p className="text-muted-foreground">
                  When you visit CyberShield, we automatically collect certain information about 
                  your device, including browser type, operating system, IP address, and pages 
                  visited. This helps us improve our service and content.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">3. Cookies</h2>
                <p className="text-muted-foreground">
                  We use cookies and similar technologies to enhance your experience, analyze 
                  traffic, and personalize content. You can control cookies through your browser 
                  settings.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">4. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Send you our newsletter and updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Analyze and improve our website</li>
                  <li>Prevent fraud and abuse</li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">5. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information with service providers who assist in operating our 
                  website, provided they agree to keep this information confidential.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">6. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to access, correct, or delete your personal information. 
                  You can unsubscribe from our newsletter at any time using the link in our emails.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-bold mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at 
                  privacy@cybershield.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
