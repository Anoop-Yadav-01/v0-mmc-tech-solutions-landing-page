'use client';

import { Zap, DollarSign, Palette, Headphones, Search } from 'lucide-react';
import { Card } from './ui/card';

const reasons = [
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Get your project live quickly without compromising quality. We deliver on time, every time.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'High-quality services at competitive rates. Transparent pricing with no hidden costs.',
  },
  {
    icon: Palette,
    title: 'Business-Focused Design',
    description: 'Every pixel serves your business goals. Design that drives conversions and growth.',
  },
  {
    icon: Headphones,
    title: 'Full Support',
    description: 'Dedicated support team available to help you succeed. We&apos;re here for the long term.',
  },
  {
    icon: Search,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices in every project. Rank higher, get more organic traffic.',
  },
  {
    icon: Zap,
    title: 'Latest Technology',
    description: 'We use cutting-edge tech stack to ensure your project stays ahead of competition.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Why Choose MMC TECH SOLUTIONS
          </h2>
          <p className="text-lg text-muted-foreground">
            Partner with experts who understand your vision and deliver results
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="glass-effect p-6 border border-border/50 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-gradient-primary">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
