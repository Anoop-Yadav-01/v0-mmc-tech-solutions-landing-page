import Link from 'next/link';

const sections = [
  {
    title: 'Information We Collect',
    body:
      'We may collect your name, email address, phone number, business details, and project-related information when you contact us through forms, phone calls, WhatsApp, or email.',
  },
  {
    title: 'How We Use Your Information',
    body:
      'We use your information to respond to enquiries, discuss project requirements, provide quotations, deliver services, improve communication, and support ongoing client relationships.',
  },
  {
    title: 'Data Sharing',
    body:
      'We do not sell your personal information. We may share relevant details only with trusted service providers or tools that help us operate our business and deliver requested services.',
  },
  {
    title: 'Data Security',
    body:
      'We take reasonable technical and operational steps to protect your information from unauthorized access, misuse, or disclosure. However, no digital transmission can be guaranteed 100 percent secure.',
  },
  {
    title: 'Your Rights',
    body:
      'You may request access to, correction of, or deletion of your personal information by contacting us at info.makemycards@gmail.com.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(24,212,255,0.16),rgba(6,9,24,0)_68%)] blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="surface-panel-strong rounded-[2rem] p-8 sm:p-10 lg:p-12">
            <p className="section-label">Privacy Policy</p>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Privacy Policy for MMC Tech Solutions
            </h1>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              This Privacy Policy explains how MMC Tech Solutions collects, uses, and
              protects information shared with us through this website and our contact channels.
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

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>Contact: info.makemycards@gmail.com</span>
              <span>Phone: +91 9971167953</span>
              <span>Location: New Delhi, India</span>
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
