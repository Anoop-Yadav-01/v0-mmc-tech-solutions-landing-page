'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { TeamStrip } from './team-strip';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Layers3,
  Sparkles,
  Zap,
} from 'lucide-react';

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const headlineLines = [
    { text: 'We build', tone: 'default' },
    { text: 'websites, apps, and SEO systems', tone: 'accent' },
    { text: 'that move your business forward', tone: 'default' },
  ] as const;

  const proofPoints = [
    'Business websites that convert',
    'Custom apps built for scale',
    'SEO systems that drive leads',
  ];

  const orbitCards = [
    {
      title: 'Web Development',
      detail: 'Fast interfaces and clean structure',
      className:
        'animate-float absolute left-0 top-10 hidden rounded-2xl border border-white/10 bg-[rgba(7,14,30,0.82)] px-4 py-3 shadow-[0_20px_50px_rgba(3,10,28,0.38)] lg:block',
      icon: Globe,
    },
    {
      title: 'App Engineering',
      detail: 'Dashboards, portals, and products',
      className:
        'animate-float-delayed absolute right-0 top-20 hidden rounded-2xl border border-white/10 bg-[rgba(7,14,30,0.82)] px-4 py-3 shadow-[0_20px_50px_rgba(3,10,28,0.38)] lg:block',
      icon: Layers3,
    },
    {
      title: 'SEO Growth',
      detail: 'Search visibility with intent',
      className:
        'animate-float-slow absolute left-10 bottom-10 hidden rounded-2xl border border-white/10 bg-[rgba(7,14,30,0.82)] px-4 py-3 shadow-[0_20px_50px_rgba(3,10,28,0.38)] lg:block',
      icon: BarChart3,
    },
    {
      title: 'Automation',
      detail: 'Smart workflows for operations',
      className:
        'animate-float-delayed absolute right-10 bottom-6 hidden rounded-2xl border border-white/10 bg-[rgba(7,14,30,0.82)] px-4 py-3 shadow-[0_20px_50px_rgba(3,10,28,0.38)] lg:block',
      icon: Cpu,
    },
  ];

  let letterCursor = 0;

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-grid absolute inset-0 opacity-50"></div>
        <div className="absolute left-1/2 top-24 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(24,212,255,0.20),rgba(6,9,24,0)_68%)] blur-3xl"></div>
        <div className="absolute left-1/2 top-40 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),rgba(6,9,24,0)_72%)] blur-3xl"></div>
        <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(20,120,255,0.20),rgba(6,9,24,0)_72%)] blur-3xl"></div>
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(6,9,24,0)_72%)] blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto max-w-3xl">
            <div className="section-label justify-center">
              <Sparkles className="h-4 w-4 text-primary" />
              Technology Solutions For Modern Business
            </div>

            <h1
              className="mx-auto mt-6 max-w-5xl font-display text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl"
              aria-label={headlineLines.map((line) => line.text).join(' ')}
            >
              <span className="sr-only">
                {headlineLines.map((line) => line.text).join(' ')}
              </span>
              <span aria-hidden="true" className="block leading-[0.95] sm:leading-[0.94]">
                {headlineLines.map((line, lineIndex) => {
                  const lineStart = letterCursor;
                  letterCursor += line.text.length + 4;

                  return (
                    <span
                      key={line.text}
                      className={`block ${
                        line.tone === 'accent' ? 'mt-2 text-primary sm:mt-3' : ''
                      }`}
                    >
                      {Array.from(line.text).map((char, charIndex) => (
                        <span
                          key={`${lineIndex}-${charIndex}-${char}`}
                          className={`hero-letter ${
                            line.tone === 'accent' ? 'hero-letter-accent' : ''
                          }`}
                          style={{
                            animationDelay: `${(lineStart + charIndex) * 0.03}s`,
                          }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                  );
                })}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              MMC Tech Solutions helps businesses launch better digital products,
              improve online visibility, and turn traffic into qualified enquiries
              with clean design and reliable development.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 rounded-full bg-primary px-7 text-primary-foreground shadow-[0_18px_45px_rgba(24,212,255,0.24)] hover:bg-primary/90"
                onClick={() => handleScroll('contact')}
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border-white/[0.12] bg-white/5 px-7 text-foreground hover:bg-white/10"
                onClick={() => handleScroll('services')}
              >
                Explore Our Services
              </Button>
            </div>

            <TeamStrip embedded className="mt-10" />

            <div className="mx-auto mt-10 max-w-3xl">
              <div className="grid gap-3 text-left sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="surface-panel rounded-2xl px-4 py-4 text-sm text-muted-foreground"
                >
                  <div className="mb-3 flex items-center gap-2 text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span className="font-medium">{point}</span>
                  </div>
                  <p>Planned for performance, clarity, and business-ready delivery.</p>
                </div>
              ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto mt-16 w-full max-w-[62rem]">
            <div className="animate-spin-slow absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 border-dashed"></div>
            <div className="animate-spin-reverse absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30"></div>
            <div className="animate-pulse-ring absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"></div>
            <div className="animate-pulse-ring-delay absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/25"></div>

            {orbitCards.map((pill) => {
              const Icon = pill.icon;
              return (
              <div
                key={pill.title}
                className={`${pill.className} w-56 text-left`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <p className="font-display text-sm font-semibold text-foreground">
                    {pill.title}
                  </p>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{pill.detail}</p>
              </div>
              );
            })}

            <div className="surface-panel-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(24,212,255,0.16),transparent_38%,transparent_64%,rgba(20,120,255,0.18))]"></div>
              <div className="hero-scan absolute inset-y-0 left-[-15%] w-[35%] opacity-60"></div>

              <div className="relative text-center">
                <div className="flex flex-col items-center justify-center gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.36em] text-primary/80">
                      End-To-End Digital Execution
                    </p>
                    <h2 className="mt-3 font-display text-2xl text-foreground sm:text-3xl lg:text-4xl">
                      Built for businesses that need speed, clarity, and results
                    </h2>
                  </div>
                  <div className="rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
                    Live Projects. Measurable Outcomes.
                  </div>
                </div>

                <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="relative mx-auto flex w-full max-w-[26rem] items-center justify-center">
                    <div className="absolute h-[22rem] w-[22rem] rounded-full border border-white/10"></div>
                    <div className="absolute h-[17rem] w-[17rem] rounded-full border border-primary/25"></div>
                    <div className="absolute h-[13rem] w-[13rem] rounded-full bg-[radial-gradient(circle,rgba(24,212,255,0.26),rgba(6,9,24,0)_70%)] blur-2xl"></div>
                    <div className="relative rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,16,35,0.95),rgba(4,8,22,0.92))] p-6 shadow-[0_24px_60px_rgba(1,8,24,0.45)]">
                      <div className="absolute inset-x-6 top-4 flex items-center justify-between">
                        <span className="text-[0.65rem] uppercase tracking-[0.34em] text-muted-foreground">
                          MMC Core
                        </span>
                        <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_20px_rgba(24,212,255,0.95)]"></span>
                      </div>
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 pt-10">
                        <Image
                          src="/round_mmc_logo.png"
                          alt="MMC Tech Solutions logo"
                          width={560}
                          height={370}
                          priority
                          className="logo-glow h-auto w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex items-center gap-2 text-foreground">
                          <Code2 className="h-4 w-4 text-primary" />
                          Custom Development
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Bespoke websites and apps designed around your business process.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div className="mb-3 flex items-center gap-2 text-foreground">
                          <Zap className="h-4 w-4 text-primary" />
                          Faster Delivery
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Clean execution, clear milestones, and modern implementation.
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,16,35,0.95),rgba(4,8,22,0.92))] p-6 shadow-[0_24px_60px_rgba(1,8,24,0.45)]">
                      <p className="text-xs uppercase tracking-[0.34em] text-muted-foreground">
                        What We Deliver
                      </p>
                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <Globe className="mb-3 h-5 w-5 text-primary" />
                          <p className="font-medium text-foreground">Business Websites</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <Layers3 className="mb-3 h-5 w-5 text-primary" />
                          <p className="font-medium text-foreground">Web & Mobile Apps</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <BarChart3 className="mb-3 h-5 w-5 text-primary" />
                          <p className="font-medium text-foreground">SEO Strategy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-medium text-foreground">UI that feels premium</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Strong first impression with a cleaner visual system.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-medium text-foreground">Engineering that scales</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Flexible builds for operations, services, and product workflows.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-medium text-foreground">Growth with purpose</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Better search presence and conversion-focused call-to-action flow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
