'use client';

import Image from 'next/image';
import { teamMembers } from './team-data';

type TeamStripProps = {
  embedded?: boolean;
  className?: string;
};

function TeamAvatar({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  if (image) {
    return (
      <div className="relative h-16 w-16 overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
        <Image
          src={image}
          alt={name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(24,212,255,0.22),rgba(20,120,255,0.18))] font-display text-xl text-foreground">
      {name.charAt(0)}
    </div>
  );
}

export function TeamStrip({
  embedded = false,
  className = '',
}: TeamStripProps) {
  const sliderMembers = [...teamMembers, ...teamMembers];
  const stripContent = (
    <div className="surface-panel relative overflow-hidden rounded-[2rem] px-0 py-5 sm:py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,#060918,transparent)] sm:w-24"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,#060918,transparent)] sm:w-24"></div>

      <div className="mb-4 px-5 text-left sm:px-7">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/80">
          Meet The Team
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="team-marquee flex w-max gap-4 px-5 sm:gap-5 sm:px-7">
          {sliderMembers.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className="flex min-w-[280px] items-center gap-4 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,20,40,0.96),rgba(7,12,24,0.92))] px-4 py-4 shadow-[0_16px_35px_rgba(2,10,28,0.16)]"
            >
              <TeamAvatar name={member.name} image={member.image} />

              <div className="min-w-0 text-left">
                <p className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </p>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {member.qualification}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return <div className={`relative ${className}`.trim()}>{stripContent}</div>;
  }

  return (
    <section className={`relative -mt-4 pb-10 sm:pb-14 ${className}`.trim()}>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {stripContent}
      </div>
    </section>
  );
}
