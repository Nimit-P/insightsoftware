import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Data Asset Modernization", href: "/data-asset-modernization" },
      { name: "Cloud Migration", href: "/cloud-migration" },
      { name: "Application Modernization", href: "/application-modernization" },
      { name: "Professional Services", href: "/professional-services" }
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "/careers" },
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Contact CTA Section */}
      <div className="border-b border-primary-light/20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's discuss how we can help you modernize your technology infrastructure
              and accelerate your digital transformation journey.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">Insight Software</h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Innovating through people, process, and technology. We empower organizations
                to modernize their digital infrastructure and build solutions that drive real business value.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6 ">
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="h-4 w-4 mr-3" />
                <span>+1 978-885-2439</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@insightsoftware.digital</span>
              </div>
              <div className="flex items-start text-primary-foreground/80">
                <MapPin className="w-10 mr-3 " />
                <span>Global Headquarters
                  Corporate Center: 1601 Bond St #205 Naperville, IL 60563
                  Corporate Annexe: 8th Floor, #802, Sonawala Lane, Goregoan East, Mumbai 400063</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button
                variant="default"
                size="sm"
                className="p-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="default"
                size="sm"
                className="p-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Insightsoftware.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;