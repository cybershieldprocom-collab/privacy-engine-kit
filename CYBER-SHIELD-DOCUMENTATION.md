# CYBER SHIELD - Complete Website Documentation

## 📁 Project Structure Overview

```
├── index.html                          # Main HTML entry point
├── src/
│   ├── main.tsx                        # React app entry point
│   ├── App.tsx                         # Main app with routing
│   ├── App.css                         # Global app styles
│   ├── index.css                       # Design system & theme
│   ├── vite-env.d.ts                   # Vite type definitions
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx              # Navigation header
│   │   │   ├── Footer.tsx              # Site footer
│   │   │   └── Layout.tsx              # Page wrapper
│   │   │
│   │   ├── home/
│   │   │   ├── HeroSection.tsx         # Homepage hero
│   │   │   ├── TrustSection.tsx        # Trust badges/stats
│   │   │   ├── FeaturedTools.tsx       # Featured products
│   │   │   ├── ComparisonPreview.tsx   # Comparison table
│   │   │   └── NewsletterSection.tsx   # Email signup
│   │   │
│   │   ├── shared/
│   │   │   ├── PageHeader.tsx          # Reusable page header
│   │   │   └── ReviewCard.tsx          # Product review card
│   │   │
│   │   └── ui/                         # shadcn/ui components
│   │
│   ├── pages/
│   │   ├── Index.tsx                   # Homepage
│   │   ├── BestVPNs.tsx                # Best VPNs page
│   │   ├── BestAntivirus.tsx           # Best Antivirus page
│   │   ├── BestPasswordManagers.tsx    # Best Password Managers
│   │   ├── Reviews.tsx                 # All reviews page
│   │   ├── Comparisons.tsx             # Comparison tables
│   │   ├── Guides.tsx                  # Tutorials/guides
│   │   ├── About.tsx                   # About us page
│   │   ├── Contact.tsx                 # Contact page
│   │   ├── Privacy.tsx                 # Privacy policy
│   │   ├── Disclaimer.tsx              # Disclaimer
│   │   └── AffiliateDisclosure.tsx     # Affiliate disclosure
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx              # Mobile detection
│   │   └── use-toast.ts                # Toast notifications
│   │
│   └── lib/
│       └── utils.ts                    # Utility functions
│
├── tailwind.config.ts                  # Tailwind configuration
├── vite.config.ts                      # Vite configuration
└── public/
    ├── favicon.ico                     # Site favicon
    └── robots.txt                      # SEO robots file
```

---

## 🎨 Design System (src/index.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 210 20% 6%;
    --foreground: 180 10% 95%;
    --card: 210 18% 10%;
    --card-foreground: 180 10% 95%;
    --popover: 210 18% 10%;
    --popover-foreground: 180 10% 95%;
    --primary: 175 70% 45%;
    --primary-foreground: 210 20% 6%;
    --secondary: 160 50% 20%;
    --secondary-foreground: 180 10% 95%;
    --muted: 210 15% 15%;
    --muted-foreground: 180 10% 60%;
    --accent: 175 60% 35%;
    --accent-foreground: 180 10% 95%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 180 10% 95%;
    --border: 210 15% 20%;
    --input: 210 15% 20%;
    --ring: 175 70% 45%;
    --radius: 0.75rem;

    /* Custom Colors */
    --cyber-teal: 175 70% 45%;
    --cyber-dark: 210 20% 6%;
    --cyber-card: 210 18% 10%;
    --cyber-glow: 175 100% 50%;
    --success: 150 70% 45%;
    --warning: 45 90% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-sans antialiased;
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-display;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent;
  }
  
  .hero-gradient {
    background: radial-gradient(ellipse at top, hsl(175 70% 45% / 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, hsl(160 50% 20% / 0.1) 0%, transparent 50%),
                hsl(210 20% 6%);
  }
  
  .card-gradient {
    background: linear-gradient(135deg, hsl(210 18% 12%) 0%, hsl(210 18% 8%) 100%);
  }
  
  .glow-effect {
    box-shadow: 0 0 20px hsl(175 70% 45% / 0.3),
                0 0 40px hsl(175 70% 45% / 0.1);
  }
  
  .border-glow {
    border: 1px solid hsl(175 70% 45% / 0.3);
    box-shadow: inset 0 0 20px hsl(175 70% 45% / 0.05);
  }
  
  .bg-grid-pattern {
    background-image: 
      linear-gradient(hsl(175 70% 45% / 0.03) 1px, transparent 1px),
      linear-gradient(90deg, hsl(175 70% 45% / 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
  }
}

@layer utilities {
  @keyframes pulse-glow {
    0%, 100% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
  }
  
  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  .animate-pulse-glow {
    animation: pulse-glow 3s ease-in-out infinite;
  }
  
  .animate-slide-up {
    animation: slide-up 0.6s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fade-in 0.4s ease-out forwards;
  }
}
```

---

## ⚙️ Tailwind Configuration (tailwind.config.ts)

```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        cyber: {
          teal: "hsl(var(--cyber-teal))",
          dark: "hsl(var(--cyber-dark))",
          card: "hsl(var(--cyber-card))",
          glow: "hsl(var(--cyber-glow))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 🚀 Main App Entry (src/App.tsx)

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BestVPNs from "./pages/BestVPNs";
import BestAntivirus from "./pages/BestAntivirus";
import BestPasswordManagers from "./pages/BestPasswordManagers";
import Reviews from "./pages/Reviews";
import Comparisons from "./pages/Comparisons";
import Guides from "./pages/Guides";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import AffiliateDisclosure from "./pages/AffiliateDisclosure";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/best-vpns" element={<BestVPNs />} />
          <Route path="/best-antivirus" element={<BestAntivirus />} />
          <Route path="/best-password-managers" element={<BestPasswordManagers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/comparisons" element={<Comparisons />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```

---

## 📄 Layout Components

### Header (src/components/layout/Header.tsx)

```tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Shield, Menu, ChevronDown, Lock, Bug, Key } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Reviews", href: "/reviews" },
    { name: "Comparisons", href: "/comparisons" },
    { name: "Guides", href: "/guides" },
    { name: "About", href: "/about" },
  ];

  const bestTools = [
    { name: "Best VPNs", href: "/best-vpns", icon: Lock },
    { name: "Best Antivirus", href: "/best-antivirus", icon: Bug },
    { name: "Best Password Managers", href: "/best-password-managers", icon: Key },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="font-display text-xl font-bold">
            CYBER<span className="text-primary">SHIELD</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Best Tools Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Best Tools
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {bestTools.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link to={item.href} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navigation.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/best-vpns">
            <Button variant="cta" size="sm">
              Get Protected
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-display text-lg font-bold">
                  CYBER<span className="text-primary">SHIELD</span>
                </span>
              </div>
              
              <div className="space-y-1">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3">
                  Best Tools
                </p>
                {bestTools.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/best-vpns" onClick={() => setIsOpen(false)}>
                  <Button variant="cta" className="w-full">
                    Get Protected
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
```

### Footer (src/components/layout/Footer.tsx)

```tsx
import { Link } from "react-router-dom";
import { Shield, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    tools: [
      { name: "Best VPNs", href: "/best-vpns" },
      { name: "Best Antivirus", href: "/best-antivirus" },
      { name: "Best Password Managers", href: "/best-password-managers" },
    ],
    resources: [
      { name: "Reviews", href: "/reviews" },
      { name: "Comparisons", href: "/comparisons" },
      { name: "Guides", href: "/guides" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Affiliate Disclosure", href: "/affiliate-disclosure" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ];

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="h-7 w-7 text-primary" />
              <span className="font-display text-lg font-bold">
                CYBER<span className="text-primary">SHIELD</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Your trusted source for online security reviews and recommendations.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-muted hover:bg-primary/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4">Best Tools</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} CyberShield. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right max-w-xl">
              Disclosure: We may earn affiliate commissions from qualifying purchases. 
              This helps support our testing and research at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

### Layout Wrapper (src/components/layout/Layout.tsx)

```tsx
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
```

---

## 🏠 Homepage Components

### HeroSection (src/components/home/HeroSection.tsx)

```tsx
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-slide-up">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by 50,000+ Users</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Secure Your
            <span className="text-gradient block mt-2">Digital Life</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Expert reviews and comparisons of the best VPNs, antivirus software, and password managers. 
            Protect yourself from hackers, data breaches, and online threats.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/best-vpns">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Protect Yourself Now
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/reviews">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                See Best Tools
              </Button>
            </Link>
          </div>

          {/* Trust Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
              <Lock className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">256-bit Encryption</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
              <Eye className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">No-Log Policies</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">Malware Protection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

### TrustSection (src/components/home/TrustSection.tsx)

```tsx
import { Shield, CheckCircle, Users, Award, Clock } from "lucide-react";

const TrustSection = () => {
  const stats = [
    { icon: Shield, value: "150+", label: "Products Tested" },
    { icon: Users, value: "50K+", label: "Users Trust Us" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Clock, value: "100+", label: "Hours Testing" },
  ];

  const trustBadges = [
    "Independent Reviews",
    "No Sponsored Content",
    "Hands-On Testing",
    "Regular Updates",
  ];

  return (
    <section className="py-16 bg-card/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-background/50 border border-border/50"
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <div className="font-display text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
```

### FeaturedTools (src/components/home/FeaturedTools.tsx)

```tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Bug, Key, ArrowRight, Star, Check } from "lucide-react";

const FeaturedTools = () => {
  const categories = [
    {
      icon: Lock,
      title: "Best VPNs",
      description: "Protect your online privacy and access content from anywhere in the world.",
      href: "/best-vpns",
      features: ["Hide IP Address", "Encrypt Traffic", "Access Geo-Blocked Content"],
      topPicks: [
        { name: "NordVPN", rating: 9.8 },
        { name: "ExpressVPN", rating: 9.6 },
        { name: "Surfshark", rating: 9.4 },
      ],
    },
    {
      icon: Bug,
      title: "Best Antivirus",
      description: "Shield your devices from malware, viruses, ransomware, and cyber threats.",
      href: "/best-antivirus",
      features: ["Real-time Protection", "Malware Removal", "Phishing Protection"],
      topPicks: [
        { name: "Bitdefender", rating: 9.7 },
        { name: "Norton 360", rating: 9.5 },
        { name: "Kaspersky", rating: 9.3 },
      ],
    },
    {
      icon: Key,
      title: "Password Managers",
      description: "Secure all your passwords with military-grade encryption and easy access.",
      href: "/best-password-managers",
      features: ["Auto-Fill", "Secure Vault", "Cross-Platform Sync"],
      topPicks: [
        { name: "1Password", rating: 9.6 },
        { name: "Dashlane", rating: 9.4 },
        { name: "LastPass", rating: 9.2 },
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Find Your <span className="text-gradient">Perfect Protection</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We test and review the most popular security tools so you can make informed decisions. 
            All reviews are independent and unbiased.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="card-gradient border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-display text-xl">{category.title}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Features */}
                <div className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Top Picks */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Top Picks
                  </p>
                  {category.topPicks.map((pick, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-2 px-3 rounded-lg bg-muted/50"
                    >
                      <span className="font-medium">{pick.name}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-semibold">{pick.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link to={category.href}>
                  <Button variant="subtle" className="w-full group-hover:bg-primary/20">
                    View All Reviews
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
```

### ComparisonPreview (src/components/home/ComparisonPreview.tsx)

```tsx
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight } from "lucide-react";

const ComparisonPreview = () => {
  const vpnComparison = [
    {
      name: "NordVPN",
      price: "$3.49/mo",
      servers: "5,500+",
      speed: "Excellent",
      noLogs: true,
      killSwitch: true,
      rating: 9.8,
      recommended: true,
    },
    {
      name: "ExpressVPN",
      price: "$6.67/mo",
      servers: "3,000+",
      speed: "Excellent",
      noLogs: true,
      killSwitch: true,
      rating: 9.6,
      recommended: false,
    },
    {
      name: "Surfshark",
      price: "$2.49/mo",
      servers: "3,200+",
      speed: "Very Good",
      noLogs: true,
      killSwitch: true,
      rating: 9.4,
      recommended: false,
    },
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Quick <span className="text-gradient">Comparison</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Compare the top VPNs side by side. Find the perfect balance of speed, security, and price.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left font-semibold">VPN</th>
                <th className="py-4 px-4 text-center font-semibold">Price</th>
                <th className="py-4 px-4 text-center font-semibold">Servers</th>
                <th className="py-4 px-4 text-center font-semibold">Speed</th>
                <th className="py-4 px-4 text-center font-semibold">No-Logs</th>
                <th className="py-4 px-4 text-center font-semibold">Kill Switch</th>
                <th className="py-4 px-4 text-center font-semibold">Rating</th>
                <th className="py-4 px-4 text-center font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {vpnComparison.map((vpn, index) => (
                <tr
                  key={index}
                  className={`border-b border-border/50 hover:bg-muted/30 transition-colors ${
                    vpn.recommended ? "bg-primary/5" : ""
                  }`}
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{vpn.name}</span>
                      {vpn.recommended && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                          Top Pick
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center font-medium text-primary">
                    {vpn.price}
                  </td>
                  <td className="py-4 px-4 text-center">{vpn.servers}</td>
                  <td className="py-4 px-4 text-center">{vpn.speed}</td>
                  <td className="py-4 px-4 text-center">
                    {vpn.noLogs ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {vpn.killSwitch ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="font-bold text-gradient">{vpn.rating}</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Button variant="cta" size="sm">
                      Get Deal
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link to="/comparisons">
            <Button variant="subtle" size="lg">
              View Full Comparison
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ComparisonPreview;
```

### NewsletterSection (src/components/home/NewsletterSection.tsx)

```tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Check, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Welcome to CyberShield!",
        description: "You'll receive our latest security tips and exclusive deals.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-display text-3xl font-bold mb-4">
                Stay <span className="text-gradient">Protected</span>
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Get the latest security news, exclusive deals, and expert tips delivered to your inbox. 
                Join 25,000+ subscribers.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-muted border-border focus:border-primary"
                required
              />
              <Button type="submit" variant="cta" size="lg" disabled={isSubmitted}>
                {isSubmitted ? (
                  <>
                    <Check className="h-5 w-5" />
                    Subscribed!
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Free security tips</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
```

---

## 📄 Pages

### Homepage (src/pages/Index.tsx)

```tsx
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
```

### Shared Components

#### PageHeader (src/components/shared/PageHeader.tsx)

```tsx
import { Shield } from "lucide-react";

interface PageHeaderProps {
  title: string;
  highlight?: string;
  description: string;
  badge?: string;
}

const PageHeader = ({ title, highlight, description, badge }: PageHeaderProps) => {
  return (
    <section className="py-16 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{badge}</span>
            </div>
          )}
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            {title}
            {highlight && <span className="text-gradient block mt-2">{highlight}</span>}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
```

#### ReviewCard (src/components/shared/ReviewCard.tsx)

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Check, X, ExternalLink, Award } from "lucide-react";

interface ReviewCardProps {
  rank: number;
  name: string;
  rating: number;
  description: string;
  price: string;
  features: string[];
  pros: string[];
  cons: string[];
  isTopPick?: boolean;
  affiliateUrl?: string;
}

const ReviewCard = ({
  rank,
  name,
  rating,
  description,
  price,
  features,
  pros,
  cons,
  isTopPick = false,
  affiliateUrl = "#",
}: ReviewCardProps) => {
  return (
    <Card
      className={`card-gradient border-border/50 overflow-hidden ${
        isTopPick ? "border-primary/50 ring-1 ring-primary/20" : ""
      }`}
    >
      {isTopPick && (
        <div className="bg-primary/20 px-4 py-2 flex items-center justify-center gap-2">
          <Award className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Editor's Choice</span>
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Rank & Basic Info */}
          <div className="flex items-start gap-4 lg:w-1/4">
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 font-display text-2xl font-bold text-primary">
              #{rank}
            </div>
            <div>
              <h3 className="font-display text-xl font-bold mb-1">{name}</h3>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating / 2)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
                <span className="ml-2 font-bold text-gradient">{rating}/10</span>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>

          {/* Middle: Features */}
          <div className="lg:w-1/4">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Key Features
            </p>
            <div className="space-y-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="lg:w-1/4 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div>
              <p className="text-xs font-semibold text-green-500 uppercase tracking-wider mb-2">
                Pros
              </p>
              <div className="space-y-1">
                {pros.slice(0, 3).map((pro, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{pro}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-2">
                Cons
              </p>
              <div className="space-y-1">
                {cons.slice(0, 2).map((con, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{con}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Pricing & CTA */}
          <div className="lg:w-1/4 flex flex-col items-center justify-center text-center p-4 rounded-xl bg-muted/50">
            <p className="text-sm text-muted-foreground mb-1">Starting from</p>
            <p className="font-display text-2xl font-bold text-primary mb-4">{price}</p>
            <Button variant="cta" className="w-full mb-2" asChild>
              <a href={affiliateUrl} target="_blank" rel="noopener noreferrer">
                Get Deal
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="text-xs">
              Read Full Review
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
```

---

## 📦 Dependencies (package.json)

```json
{
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@tanstack/react-query": "^5.83.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.462.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-router-dom": "^6.30.1",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.25.76"
  }
}
```

---

## 🔗 Affiliate Links Setup

Replace `affiliateUrl="#"` in ReviewCard components with your actual affiliate links:

```tsx
// Example affiliate URLs
const affiliateLinks = {
  nordvpn: "https://go.nordvpn.net/aff_c?offer_id=XXX&aff_id=YOUR_ID",
  expressvpn: "https://www.expressvpn.com/?a_fid=YOUR_ID",
  surfshark: "https://surfshark.club/friend/YOUR_ID",
  bitdefender: "https://www.bitdefender.com/affiliate.html?a=YOUR_ID",
  norton: "https://www.norton.com/affiliate?id=YOUR_ID",
  onepassword: "https://1password.com/affiliate/YOUR_ID",
};
```

---

## 🚀 Deployment

1. Connect GitHub in Lovable Settings
2. Push to repository
3. Deploy via Lovable Publish or your preferred hosting (Vercel, Netlify)

---

## 📝 Notes

- All colors use HSL via CSS variables for easy theming
- Components are modular and reusable
- Mobile-responsive design throughout
- SEO-optimized with proper semantic HTML
- Ready for affiliate link integration

---

**Generated by Lovable AI** | CYBER SHIELD © 2026
