import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering young minds in BSD through proven sempoa mental arithmetic training since 2010.
            </p>
            <div className="flex gap-3">
              <a href="#" className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/programs" className="hover:text-primary">Programs</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Ruko BSD Junction, Tangerang Selatan</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" /> +62 812-3456-7890</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" /> hello@sempoabsd.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Class Hours</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon – Fri: 14:00 – 19:00</li>
              <li>Saturday: 09:00 – 17:00</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} SempoaBSD. All rights reserved.</p>
          <p>Crafted with care for curious young minds.</p>
        </div>
      </div>
    </footer>
  );
}
