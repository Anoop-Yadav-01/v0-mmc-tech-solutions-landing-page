'use client';

import { Card } from './ui/card';

const results = [
  {
    metric: '3X',
    label: 'Lead Growth',
    description: 'Average increase in qualified leads for our clients',
  },
  {
    metric: '50+',
    label: 'Websites Delivered',
    description: 'Successfully completed projects across industries',
  },
  {
    metric: '500+',
    label: 'Happy Clients',
    description: 'Businesses we&apos;ve helped grow and succeed',
  },
  {
    metric: '150%',
    label: 'Average ROI',
    description: 'Return on investment within 6 months',
  },
];

export function Results() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Results That Speak
          </h2>
          <p className="text-lg text-muted-foreground">
            Proven metrics from real clients achieving real growth
          </p>
        </div>

        {/* Results grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <Card
              key={index}
              className="glass-effect p-8 border border-border/50 text-center hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/20"
            >
              <div className="text-5xl sm:text-6xl font-bold text-transparent bg-gradient-primary bg-clip-text mb-3">
                {result.metric}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {result.label}
              </h3>
              <p className="text-muted-foreground text-sm">
                {result.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
