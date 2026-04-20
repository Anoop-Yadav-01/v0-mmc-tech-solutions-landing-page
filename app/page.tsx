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
  return (
    <main className="min-h-screen overflow-hidden bg-background">
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
