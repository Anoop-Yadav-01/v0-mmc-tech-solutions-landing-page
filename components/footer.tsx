'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why MMC', href: '#why' },
    { label: 'Results', href: '#proof' },
    { label: 'Contact', href: '#contact' },
  ];
  const services = [
    'Business websites',
    'Custom web apps',
    'Mobile app development',
    'SEO and lead generation',
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[rgba(5,10,22,0.92)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="inline-flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[rgba(12,20,40,0.92)]">
              <Image
                src="/round_mmc_logo.png"
                alt="MMC Tech Solutions"
                width={96}
                height={96}
                className="block h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="max-w-xs text-sm leading-7 text-muted-foreground">
              MMC Tech Solutions builds high-performance websites, scalable apps,
              and search-ready digital systems for businesses that want real growth.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm text-muted-foreground">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info.makemycards@gmail.com" className="transition-colors hover:text-primary">
                  info.makemycards@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:9971167953" className="transition-colors hover:text-primary">
                  +91 9971167953
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                New Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} MMC TECH SOLUTIONS. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-primary">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
