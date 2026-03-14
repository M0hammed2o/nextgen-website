import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-narrow px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="NextGen Intelligence" className="h-10 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building intelligent automation systems for real businesses across South Africa.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Solutions</h4>
            <div className="flex flex-col gap-2">
              <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">WhatsApp AI Assistants</Link>
              <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Custom Dashboards</Link>
              <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Staff Management</Link>
              <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Retail Tools</Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Company</h4>
            <div className="flex flex-col gap-2">
              <Link to="/our-work" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Work</Link>
              <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">How It Works</Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/data-deletion" className="text-sm text-muted-foreground hover:text-primary transition-colors">Data Deletion</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:info@nextgenintelligence.co.za" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} />
                info@nextgenintelligence.co.za
              </a>
              <a href="tel:0837866021" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone size={14} />
                083 786 6021
              </a>
              <p className="text-sm text-muted-foreground">South Africa</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NextGen Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link to="/data-deletion" className="text-xs text-muted-foreground hover:text-primary transition-colors">Data Deletion</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
