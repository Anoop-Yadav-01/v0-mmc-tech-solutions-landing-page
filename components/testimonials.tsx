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
    <section className="relative py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(24,212,255,0.12),rgba(6,9,24,0)_72%)] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-14 max-w-3xl">
          <div className="section-label">Client Feedback</div>
          <h2 className="mt-6 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Social proof that now fits the new visual tone
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Testimonials are more persuasive when they sit inside a layout that already feels
            trustworthy, calm, and premium.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="surface-panel rounded-[1.75rem] border-0 p-7"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-base leading-8 text-muted-foreground">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="mt-auto border-t border-white/10 pt-5">
                <h4 className="font-display text-lg font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <p className="mt-1 text-sm text-primary">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
