import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { TeamSection } from '@/components/team-section';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Results } from '@/components/results';
import { ContactCTA } from '@/components/contact-cta';
import { FloatingCTA } from '@/components/floating-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MMC Tech Solutions',
    description:
      'Technology company in India offering website development, app development, SEO services, Meta Ads, digital marketing, and performance marketing.',
    telephone: '+91 9971167953',
    email: 'info.makemycards@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New Delhi',
      addressCountry: 'IN',
    },
    areaServed: 'India',
    serviceType: [
      'Website Development',
      'App Development',
      'SEO Services',
      'Meta Ads',
      'Digital Marketing',
      'Performance Marketing',
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Hero />
      <Services />
      <TeamSection />
      <WhyChooseUs />
      <Results />
      <ContactCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
