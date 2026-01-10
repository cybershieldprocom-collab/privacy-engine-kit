import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Shield, Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About CyberShield"
        highlightedWord="CyberShield"
        description="Your trusted guide to online security since 2019. We help millions make informed decisions about their digital safety."
      />

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold">Our Mission</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              In an increasingly connected world, online security shouldn't be complicated. 
              CyberShield was founded with a simple mission: to make digital safety accessible to everyone.
            </p>
            
            <p className="text-muted-foreground mb-6">
              We believe that everyone deserves to browse the internet safely, keep their personal 
              data private, and protect their families from online threats. That's why we dedicate 
              ourselves to testing, reviewing, and comparing the best security tools on the market.
            </p>

            <p className="text-muted-foreground">
              Our team of security experts, researchers, and writers work tirelessly to bring you 
              honest, unbiased reviews and guides that help you make the best choices for your 
              digital security needs.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl font-bold text-center mb-12">What We Stand For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Independence</h3>
              <p className="text-sm text-muted-foreground">
                Our reviews are never influenced by partnerships. We recommend what we genuinely believe is best.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Our team includes certified security professionals with years of hands-on experience.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-sm text-muted-foreground">
                We write for real people, not tech experts. Security advice should be easy to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold mb-8">How We Test</h2>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-display font-bold mb-2">1. Hands-On Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Every product is installed and tested on real devices by our team. We use each product 
                  for weeks before forming an opinion.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-display font-bold mb-2">2. Lab Verification</h3>
                <p className="text-sm text-muted-foreground">
                  We cross-reference our results with independent security labs like AV-Test and 
                  AV-Comparatives for antivirus products.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-display font-bold mb-2">3. Regular Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Security products change constantly. We regularly re-test our top picks and update 
                  our reviews to reflect the latest versions.
                </p>
              </div>
              
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-display font-bold mb-2">4. Real-World Scenarios</h3>
                <p className="text-sm text-muted-foreground">
                  We test VPNs for streaming, antivirus for gaming performance, and password managers 
                  for daily usability – not just specs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
