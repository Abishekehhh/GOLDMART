import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-serif text-primary-foreground text-xl font-bold">G</span>
              </div>
              <span className="font-serif text-2xl font-semibold">
                Gold<span className="text-primary">mart</span>
              </span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              Your trusted marketplace for authentic gold jewellery from verified local jewellers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Jewellery', 'Shops', 'Special Offers', 'About Us'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-sm text-cream/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Shop Owners */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">For Shop Owners</h4>
            <ul className="space-y-2">
              {['Register Your Shop', 'Owner Login', 'Dashboard', 'Pricing Plans', 'Support'].map((link) => (
                <li key={link}>
                  <Link
                    to="/login"
                    className="text-sm text-cream/70 hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-cream/70">
                <Phone className="h-4 w-4 text-primary" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/70">
                <Mail className="h-4 w-4 text-primary" />
                support@goldmart.in
              </li>
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                123, Jewellery Street,<br />Chennai - 600001
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-cream/50 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-cream/50 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 text-center">
          <p className="text-sm text-cream/50">
            © 2024 Goldmart. All rights reserved. | Trusted by 500+ jewellery shops across India
          </p>
        </div>
      </div>
    </footer>
  );
}
