'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Menu, MessageCircle, PhoneCall, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactActions, setShowContactActions] = useState(false);
  const callHref = 'tel:9971167953';
  const whatsappHref = 'https://wa.me/919654480864';

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Why MMC', href: '#why' },
    { label: 'Proof', href: '#proof' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setIsOpen(false);
    setShowContactActions(false);
    scrollToSection(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container mx-auto px-4 pt-4 sm:px-6 lg:px-8">
        <div className="surface-panel rounded-[28px] px-3 sm:px-5">
          <div className="flex h-16 items-center justify-between gap-3">
            <Link
              href="/"
              className="flex min-w-0 items-center gap-3"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsOpen(false);
                setShowContactActions(false);
              }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[rgba(12,20,40,0.92)] sm:h-14 sm:w-14">
                <Image
                  src="/round_mmc_logo.png"
                  alt="MMC Tech Solutions"
                  width={80}
                  height={80}
                  priority
                  className="block h-full w-full rounded-full object-cover"
                />
              </span>
              <div className="hidden border-l border-white/10 pl-3 text-left md:block">
                <p className="font-display text-sm font-semibold tracking-[0.2em] text-foreground">
                  MMC TECH
                </p>
                <p className="text-xs text-muted-foreground">
                  Web, app, and growth solutions
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="relative hidden items-center gap-3 sm:flex">
              <div className="hidden text-right xl:block">
                <p className="text-xs uppercase tracking-[0.24em] text-primary/80">
                  Tech Delivery Partner
                </p>
                <p className="text-xs text-muted-foreground">
                  Custom builds focused on leads and growth
                </p>
              </div>

              <Button
                size="lg"
                className="h-11 rounded-full bg-primary px-5 text-primary-foreground shadow-[0_16px_40px_rgba(24,212,255,0.22)] hover:bg-primary/90"
                onClick={() => setShowContactActions((open) => !open)}
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Button>

              {showContactActions && (
                <div className="absolute right-0 top-[calc(100%+0.9rem)] z-50 w-72 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,36,0.98),rgba(6,11,24,0.96))] p-3 shadow-[0_28px_70px_rgba(2,10,28,0.45)] backdrop-blur-xl">
                  <p className="px-2 pt-1 text-xs uppercase tracking-[0.24em] text-primary/80">
                    Quick Contact
                  </p>
                  <p className="px-2 pb-3 pt-2 text-sm text-muted-foreground">
                    Choose how you want to start your project.
                  </p>

                  <div className="space-y-2">
                    <a
                      href={callHref}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-foreground transition-colors hover:border-primary/30 hover:bg-white/[0.06]"
                    >
                      <span className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-primary">
                        <PhoneCall className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium">Call Now</span>
                        <span className="block text-xs text-muted-foreground">
                          +91 9971167953
                        </span>
                      </span>
                    </a>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-foreground transition-colors hover:border-primary/30 hover:bg-white/[0.06]"
                    >
                      <span className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-primary">
                        <MessageCircle className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium">WhatsApp</span>
                        <span className="block text-xs text-muted-foreground">
                          Chat instantly with our team
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setIsOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {isOpen && (
            <nav className="border-t border-white/10 pb-4 pt-4 lg:hidden">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className="block rounded-2xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/[0.06] hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <Button
                className="mt-4 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  setShowContactActions((open) => !open);
                }}
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Button>

              {showContactActions && (
                <div className="mt-3 space-y-2 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,36,0.96),rgba(6,11,24,0.94))] p-3">
                  <a
                    href={callHref}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-foreground transition-colors hover:border-primary/30 hover:bg-white/[0.06]"
                    onClick={() => {
                      setIsOpen(false);
                      setShowContactActions(false);
                    }}
                  >
                    <span className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-primary">
                      <PhoneCall className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">Call Now</span>
                      <span className="block text-xs text-muted-foreground">
                        +91 9971167953
                      </span>
                    </span>
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-foreground transition-colors hover:border-primary/30 hover:bg-white/[0.06]"
                    onClick={() => {
                      setIsOpen(false);
                      setShowContactActions(false);
                    }}
                  >
                    <span className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-primary">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-medium">WhatsApp</span>
                      <span className="block text-xs text-muted-foreground">
                        Chat instantly with our team
                      </span>
                    </span>
                  </a>
                </div>
              )}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
