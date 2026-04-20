'use client';

import { Code, Smartphone, Search, Zap, Globe, BarChart3 } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: Globe,
    title: 'Static Website Development',
    description: 'Fast-loading, SEO-optimized static websites perfect for portfolios and business cards.',
    benefits: ['Quick deployment', 'Maximum speed', 'Low maintenance'],
  },
  {
    icon: Code,
    title: 'Dynamic Website Development',
    description: 'Custom web applications with databases and real-time features for complex businesses.',
    benefits: ['Real-time functionality', 'Custom solutions', 'Scalable architecture'],
  },
  {
    icon: BarChart3,
    title: 'E-commerce Development',
    description: 'Complete online store solutions with payment integration and inventory management.',
    benefits: ['Payment processing', 'Inventory management', 'Order tracking'],
  },
  {
    icon: Zap,
    title: 'SaaS Solutions',
    description: 'Build subscription-based platforms with user authentication and advanced features.',
    benefits: ['User management', 'Billing integration', 'Analytics dashboard'],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    benefits: ['iOS & Android', 'User-friendly design', 'High performance'],
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: '3X your online visibility with proven SEO strategies and continuous optimization.',
    benefits: ['Keyword research', 'On-page optimization', 'Link building'],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="glass-effect glass-effect-hover p-6 group border border-border/50 hover:border-secondary/50"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
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
