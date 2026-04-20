'use client';

import { Code, Smartphone, Search, Zap, Globe, BarChart3 } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: Globe,
    title: 'Website Development Services',
    description: 'Custom website development for company websites, landing pages, ecommerce stores, and responsive business websites.',
    benefits: ['Responsive website development', 'Business website design', 'Custom website solutions'],
  },
  {
    icon: Code,
    title: 'App Development Services',
    description: 'Android, iOS, and custom app development services built for startups, service businesses, and digital products.',
    benefits: ['Android app development', 'Custom app development', 'Scalable architecture'],
  },
  {
    icon: BarChart3,
    title: 'SEO Services Company',
    description: 'Search engine optimization services including local SEO, on-page SEO, off-page SEO, and Google ranking support.',
    benefits: ['Local SEO services', 'On-page SEO', 'Off-page SEO'],
  },
  {
    icon: Zap,
    title: 'Meta Ads Management',
    description: 'Facebook Ads and Instagram Ads campaigns designed for lead generation, retargeting, and better conversion performance.',
    benefits: ['Facebook Ads', 'Instagram Ads', 'Lead generation ads'],
  },
  {
    icon: Smartphone,
    title: 'Digital Marketing Services',
    description: 'Digital marketing support for visibility, content direction, campaign planning, and stronger business positioning online.',
    benefits: ['Digital strategy', 'Brand visibility', 'Marketing support'],
  },
  {
    icon: Search,
    title: 'Performance Marketing Agency',
    description: 'Performance marketing campaigns focused on ROI, paid ads management, conversion tracking, and scalable growth.',
    benefits: ['Paid ads management', 'ROI tracking', 'Conversion optimization'],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(24,212,255,0.14),rgba(6,9,24,0)_72%)] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 max-w-3xl">
          <div className="section-label">Core Services</div>
          <h2 className="mt-6 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Website development, app development, SEO, Meta Ads, and digital marketing under one team
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            We work as a full digital solutions company for businesses that need custom
            software, websites, mobile apps, search engine optimization, and performance marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="surface-panel group relative overflow-hidden rounded-[1.75rem] border-0 p-7"
              >
                <div className="brand-gradient absolute inset-x-0 top-0 h-px opacity-90"></div>

                <div className="flex items-center justify-between gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium tracking-[0.34em] text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                  {service.title}
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_rgba(24,212,255,0.85)]"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
