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
      'Launch websites, apps, SEO campaigns, and ad funnels quickly without compromising quality.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description:
      'Transparent pricing for website development, app development, SEO, and digital marketing services.',
  },
  {
    icon: Palette,
    title: 'Business-Focused Design',
    description:
      'Every interface is built to support trust, conversions, and better performance for your business.',
  },
  {
    icon: Headphones,
    title: 'Full Support',
    description:
      'Dedicated support from planning to launch and beyond for growth-focused businesses.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description:
      'Built with local SEO, on-page SEO, and search visibility best practices from the start.',
  },
  {
    icon: ShieldCheck,
    title: 'Latest Technology',
    description:
      'Modern stacks and scalable systems for websites, apps, and digital campaigns that can grow with you.',
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
              Why businesses choose our web, app, SEO, and digital marketing team
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              MMC Tech Solutions works as a technology company and IT solutions provider
              for brands that need one reliable team for development, SEO, Meta Ads, and growth.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                  IT Solutions
                </p>
                <p className="mt-3 font-display text-3xl text-foreground">Full-Stack</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Website development, app development, SEO services, Meta Ads, and digital marketing.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.28em] text-primary/80">
                  Growth Focus
                </p>
                <p className="mt-3 font-display text-3xl text-foreground">ROI</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Planned for rankings, qualified leads, better ad performance, and stronger conversion flow.
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
