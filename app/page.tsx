import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Results } from '@/components/results';
import { Testimonials } from '@/components/testimonials';
import { ContactCTA } from '@/components/contact-cta';
import { FloatingCTA } from '@/components/floating-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <div id="why">
        <WhyChooseUs />
      </div>
      <Results />
      <Testimonials />
      <ContactCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
