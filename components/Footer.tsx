"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo"; // Assuming Logo component exists and adapts to color
import { Linkedin, Mail, Twitter, Github, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Data Asset Modernization", href: "/services/data-asset-modernization" },
      { name: "Cloud Migration", href: "/services/cloud-migration" },
      { name: "Application Modernization", href: "/services/application-modernization" },
      { name: "Professional Services", href: "/services/professional-services" },
    ],
    resources: [
      { name: "About Us", href: "/about-us" },
      { name: "Services", href: "/services" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact" },
    ],
    contact: [
      { icon: Mail, text: "info@insightsoftware.digital", href: "mailto:info@insightsoftware.digital" },
      { icon: Phone, text: "+1 978-885-2439", href: "tel:+15551234567" },
      { icon: MapPin, text: "Global Headquarters Corporate Center: 1601 Bond St #205 Naperville, IL 60563", href: "#" },
      { icon: MapPin, text: "Corporate Annexe: 8th Floor, #802, Sonawala Lane, Goregoan East, Mumbai 400063", href: "#" }
    ]
  };

  return (
    <footer className="bg-background border-t border-white/10 relative overflow-hidden pt-20 pb-10">
      {/* Subtle Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Company */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building the future of digital products with intelligence, precision, and world-class design.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_-3px_var(--color-primary)]"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-[1px] bg-primary mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Resources</h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 transition-all duration-300 h-[1px] bg-primary mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              {footerLinks.contact.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <item.icon size={18} className="mt-0.5 text-primary" />
                  <Link href={item.href} className="hover:text-foreground transition-colors">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Insightsoftware. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;