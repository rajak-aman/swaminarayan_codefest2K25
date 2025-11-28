import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
t3      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Code Fest Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold gradient-accent">Code Fest 2K25</h3>
                <p className="text-xs text-muted-foreground">Swaminarayan University Campus Gurukul Kalol</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Join us for an innovative 16-hour hackathon where creativity meets technology.
              Build groundbreaking solutions and compete for amazing prizes!
            </p>

            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="https://x.com/rjkaman2203?t=hfdnmBbmPMlnvaRGY4dDHQ&s=09" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.instagram.com/tech_teen_innovators?igsh=czBxOTJ0amNiNWdn" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.linkedin.com/in/aman-rajak22/" className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#domains" className="text-muted-foreground hover:text-primary transition-colors">
                  Domains
                </a>
              </li>
              <li>
                <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#prizes" className="text-muted-foreground hover:text-primary transition-colors">
                  Prizes
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Swaminarayan University Campus,Gurukul,Kalol</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:techteeninnovators@gmail.com" className="text-sm hover:text-primary transition-colors">
                  techteeninnovators@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919313681286" className="text-sm hover:text-primary transition-colors">
                  +91 931 368 1286
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="text-center mb-4">
            {<p className="text-sm text-muted-foreground mb-2">
              In collaboration with <span className="text-primary font-semibold">Rajak Aman</span>
            </p>}
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Swaminarayan Code Fest. All rights reserved. Built with passion by the organizing team.
          </p>
        </div>
      </div>
    </footer>
  );
};
