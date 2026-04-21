'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const CALL_NUMBER = '9971167953';
const WHATSAPP_NUMBER = '919654480864';

export function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      'Hello MMC Tech Solutions,',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Project Details: ${formData.message}`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(24,212,255,0.16),rgba(6,9,24,0)_72%)] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="surface-panel-strong relative overflow-hidden rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-8 lg:p-12">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,212,255,0.08),transparent_32%,transparent_72%,rgba(20,120,255,0.14))]"></div>

          <div className="relative grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
            <div className="min-w-0">
              <div className="section-label">Contact MMC</div>
              <h2 className="mt-5 max-w-3xl break-words font-display text-3xl font-semibold leading-tight text-foreground sm:mt-6 sm:text-5xl">
                Let&apos;s talk about website development, app development, SEO, or Meta Ads
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8">
                Reach out directly for website development, app development, SEO services,
                Meta Ads, digital marketing, or performance marketing. We&apos;ll guide you to
                the fastest next step for your business in New Delhi and across India.
              </p>

              <div className="mt-7 space-y-3 sm:mt-8 sm:space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        Email
                      </h3>
                      <a
                        href="mailto:info.makemycards@gmail.com"
                        className="mt-1 inline-block max-w-full break-words text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
                      >
                        info.makemycards@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        Phone
                      </h3>
                      <a
                        href={`tel:${CALL_NUMBER}`}
                        className="mt-1 inline-block max-w-full break-words text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
                      >
                        +91 {CALL_NUMBER}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:rounded-[1.5rem] sm:p-5">
                  <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        WhatsApp
                      </h3>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 inline-block max-w-full break-words text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
                      >
                        Chat on +91 96544 80864
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="min-w-0 rounded-[1.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,16,35,0.94),rgba(5,9,23,0.9))] p-4 shadow-[0_24px_60px_rgba(2,10,28,0.35)] sm:rounded-[1.75rem] sm:p-8">
              {submitted ? (
                <div className="flex min-h-[320px] flex-col items-center justify-center text-center sm:min-h-[400px]">
                  <CheckCircle className="mb-4 h-14 w-14 text-primary sm:h-16 sm:w-16" />
                  <h3 className="mb-2 font-display text-2xl font-semibold text-foreground">
                    WhatsApp chat opened!
                  </h3>
                  <p className="text-muted-foreground">
                    Your enquiry has been redirected to WhatsApp
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-11 rounded-xl border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-11 rounded-xl border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Phone (Optional)
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-11 rounded-xl border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground"
                      placeholder="+91 9971167953"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="min-h-32 rounded-xl border-white/10 bg-white/5 text-foreground placeholder:text-muted-foreground"
                      placeholder="Tell us about your website, app, SEO, Meta Ads, or digital marketing project"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="h-11 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Send On WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your details will open directly in WhatsApp chat for a faster discussion
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
