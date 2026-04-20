'use client';

import { ArrowUpRight, BriefcaseBusiness, TrendingUp, Users, WalletCards } from 'lucide-react';
import { Card } from './ui/card';

const results = [
  {
    metric: '3x',
    label: 'Qualified Lead Growth',
    description: 'Average uplift in enquiry quality after website optimization, local SEO work, and Meta Ads support.',
    note: 'Landing pages, SEO, and conversion flow',
    icon: TrendingUp,
  },
  {
    metric: '50+',
    label: 'Projects Delivered',
    description: 'Business websites, service portals, and custom builds launched across multiple industries.',
    note: 'From simple company sites to custom systems',
    icon: BriefcaseBusiness,
  },
  {
    metric: '500+',
    label: 'Client Relationships',
    description: "Businesses we've supported with stronger digital presence, better usability, and scalable execution.",
    note: 'Built with long-term growth in mind',
    icon: Users,
  },
  {
    metric: '150%',
    label: 'Average ROI',
    description: 'Measured performance gains from performance marketing, lead generation campaigns, and stronger online visibility.',
    note: 'SEO, Meta Ads, and digital marketing',
    icon: WalletCards,
  },
];

const proofPoints = [
  'SEO and local ranking',
  'Meta Ads lead generation',
  'Website and app delivery',
];

export function Results() {
  return (
    <section id="proof" className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="surface-panel-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(24,212,255,0.08),transparent_28%,transparent_72%,rgba(20,120,255,0.12))]"></div>
          <div className="absolute inset-y-0 right-0 w-[42%] bg-[radial-gradient(circle_at_top_right,rgba(24,212,255,0.10),transparent_62%)]"></div>

          <div className="relative grid items-start gap-10 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="max-w-2xl">
              <div className="section-label">Proof & Performance</div>

              <h2 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[3.6rem]">
                Results that make your business look credible and perform better.
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                MMC Tech Solutions delivers measurable value through website development,
                app development, SEO services, Meta Ads, and performance marketing built for real business growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {proofPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-foreground"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,16,35,0.96),rgba(5,10,24,0.92))] p-6 shadow-[0_20px_50px_rgba(2,10,28,0.28)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-primary/80">
                      Why This Matters
                    </p>
                    <p className="mt-3 text-base leading-7 text-muted-foreground">
                      A strong proof section gives visitors confidence quickly. It shows that
                      your company can deliver measurable value through search visibility, ads, and better conversion performance.
                    </p>
                  </div>
                  <div className="rounded-full border border-primary/20 bg-primary/10 p-3 text-primary">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {results.map((result) => {
                const Icon = result.icon;

                return (
                  <Card
                    key={result.label}
                    className="group rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,24,46,0.96),rgba(11,18,36,0.92))] p-6 shadow-[0_18px_45px_rgba(3,10,28,0.22)] transition-transform duration-300 hover:-translate-y-1 hover:border-primary/20"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.26em] text-primary/70">
                        MMC Proof
                      </span>
                    </div>

                    <div className="mt-8">
                      <p className="font-display text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl">
                        {result.metric}
                      </p>
                      <div className="mt-4 h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.16),rgba(24,212,255,0.7),rgba(20,120,255,0.12))]"></div>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-foreground">
                        {result.label}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {result.description}
                      </p>
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {result.note}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
