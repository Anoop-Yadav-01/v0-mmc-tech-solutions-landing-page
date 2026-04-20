'use client';

import { Card } from './ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc',
    content:
      'MMC TECH SOLUTIONS transformed our online presence. Our website now gets 10x more leads, and the team was incredibly responsive throughout the process.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    company: 'E-commerce Plus',
    content:
      'The SEO services have been game-changing. Within 3 months, we went from page 5 to page 1 for our target keywords. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Jennifer Lee',
    company: 'Design Studio LA',
    content:
      'Professional, affordable, and delivered exactly what we needed. The mobile app development team understood our vision perfectly.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from businesses we&apos;ve partnered with
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="glass-effect p-6 border border-border/50 hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Testimonial content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Client info */}
              <div className="border-t border-border/50 pt-4">
                <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-sm text-secondary">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
