'use client';

import Image from 'next/image';
import { BriefcaseBusiness, GraduationCap, Users } from 'lucide-react';
import { Card } from './ui/card';
import { teamMembers } from './team-data';

function TeamAvatar({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  if (image) {
    return (
      <div className="relative h-28 w-28 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] sm:h-32 sm:w-32">
        <Image
          src={image}
          alt={name}
          fill
          sizes="128px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-[1.75rem] border border-white/10 bg-[linear-gradient(135deg,rgba(24,212,255,0.22),rgba(20,120,255,0.18))] font-display text-4xl text-foreground sm:h-32 sm:w-32">
      {name.charAt(0)}
    </div>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="relative py-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(24,212,255,0.16),rgba(6,9,24,0)_72%)] blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <div className="section-label">Our Team</div>
          <h2 className="mt-6 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            The people building, managing, and growing every MMC project.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            From leadership to SEO and development, our team combines business understanding,
            project coordination, and technical execution to deliver stronger digital results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="surface-panel relative overflow-hidden rounded-[1.8rem] border-0 p-6"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.12),rgba(24,212,255,0.7),rgba(20,120,255,0.1))]"></div>

              <div className="flex items-start justify-between gap-4">
                <TeamAvatar name={member.name} image={member.image} />
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-primary">
                  {member.accent}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.2em] text-primary/85">
                  {member.role}
                </p>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-primary">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <span>{member.qualification}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-primary">
                    <BriefcaseBusiness className="h-4 w-4" />
                  </span>
                  <span>{member.role}</span>
                </div>

                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-primary">
                    <Users className="h-4 w-4" />
                  </span>
                  <span>MMC Tech Team</span>
                </div>
              </div>

              <p className="mt-6 leading-7 text-muted-foreground">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
