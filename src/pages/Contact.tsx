import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/shared/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, HelpCircle, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24-48 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactOptions = [
    {
      icon: HelpCircle,
      title: "General Inquiries",
      description: "Questions about our reviews or recommendations",
      email: "hello@cybershield.com",
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Business and affiliate partnership inquiries",
      email: "partners@cybershield.com",
    },
    {
      icon: MessageSquare,
      title: "Editorial",
      description: "Press inquiries and content corrections",
      email: "editorial@cybershield.com",
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Get in Touch"
        highlightedWord="Touch"
        description="Have questions about online security or our reviews? We're here to help."
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" variant="cta" size="lg" className="w-full sm:w-auto">
                  Send Message
                  <Mail className="h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Options */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
              
              <div className="space-y-4">
                {contactOptions.map((option) => (
                  <div
                    key={option.title}
                    className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <option.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold mb-1">{option.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {option.description}
                        </p>
                        <a
                          href={`mailto:${option.email}`}
                          className="text-sm text-primary hover:underline"
                        >
                          {option.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-muted/50">
                <h3 className="font-display font-bold mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24-48 hours during business days. 
                  For urgent security concerns, please include "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
