import Link from 'next/link';

const sections = [
  {
    title: 'Scope of Services',
    body:
      'MMC Tech Solutions provides services such as website development, app development, SEO, design support, consultation, and related digital solutions based on mutually agreed project requirements.',
  },
  {
    title: 'Project Timelines',
    body:
      'Timelines depend on project scope, client feedback, content availability, approvals, and technical complexity. Estimated delivery schedules may change if requirements are revised during the project.',
  },
  {
    title: 'Payments',
    body:
      'Payments, milestones, and commercial terms are defined in project proposals, invoices, or written confirmations. Work may begin or continue according to the agreed payment schedule.',
  },
  {
    title: 'Client Responsibilities',
    body:
      'Clients are responsible for providing accurate project information, timely approvals, required content, credentials, and communication needed for successful delivery.',
  },
  {
    title: 'Intellectual Property',
    body:
      'Final project ownership and usage rights are transferred according to the commercial agreement. Third-party assets, tools, plugins, fonts, and licensed materials remain subject to their original license terms.',
  },
  {
    title: 'Limitation of Liability',
    body:
      'MMC Tech Solutions is not liable for indirect or consequential damages, third-party platform failures, hosting outages, or losses arising from client-side misuse, delayed approvals, or unauthorized changes after delivery.',
  },
  {
    title: 'Contact',
    body:
      'For any questions regarding these terms, contact us at info.makemycards@gmail.com or call +91 9971167953.',
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(20,120,255,0.14),rgba(6,9,24,0)_70%)] blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="surface-panel-strong rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <p className="section-label">Terms Of Service</p>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Terms of Service for MMC Tech Solutions
            </h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              These Terms of Service govern the use of this website and the digital services
              provided by MMC Tech Solutions.
            </p>

            <div className="mt-10 space-y-8">
              {sections.map((section) => (
                <div key={section.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/" className="text-sm text-primary transition-colors hover:text-primary/80">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
