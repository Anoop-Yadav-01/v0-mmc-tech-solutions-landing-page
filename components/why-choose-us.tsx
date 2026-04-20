'use client';

import {
  DollarSign,
  Headphones,
  Palette,
  Search,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Card } from './ui/card';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description:
      'Get your project live quickly without compromising quality. We deliver on time, every time.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description:
      'High-quality services at competitive rates. Transparent pricing with no hidden costs.',
  },
  {
    icon: Palette,
    title: 'Business-Focused Design',
    description:
      'Every pixel serves your business goals. Design that drives conversions and growth.',
  },
  {
    icon: Headphones,
    title: 'Full Support',
    description:
      'Dedicated support team available to help you succeed. We&apos;re here for the long term.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description:
      'Built-in SEO best practices in every project. Rank higher, get more organic traffic.',
  },
  {
    icon: ShieldCheck,
    title: 'Latest Technology',
    description:
      'We use cutting-edge tech stacks so your product feels modern, fast, and ready to scale.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(20,120,255,0.16),rgba(6,9,24,0)_72%)] blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
          <div className="surface-panel-strong rounded-[2rem] p-8 sm:p-10">
            <div className="section-label">Why MMC</div>
            <h2 className="mt-6 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              A cleaner, more credible experience for visitors who need to trust fast
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              The redesign now supports the logo instead of competing with it. That gives
              the page a more premium tone and makes each section feel like part of one
              brand story.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                  Brand Fit
                </p>
                <p className="mt-3 font-display text-3xl text-foreground">100%</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Palette and spacing reworked to feel native to the MMC mark.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                  UX Focus
                </p>
                <p className="mt-3 font-display text-3xl text-foreground">Clear</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  The visitor path is now easier to scan from hero to contact.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <Card
                  key={reason.title}
                  className="surface-panel rounded-[1.75rem] border-0 p-6"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {reason.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {reason.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
