import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '@/components/site/Navbar';
import { Hero } from '@/components/site/Hero';
import { TechTicker } from '@/components/site/TechTicker';
import { About } from '@/components/site/About';
import { Skills } from '@/components/site/Skills';
import { Experience } from '@/components/site/Experience';
import { CaseStudies } from '@/components/site/CaseStudies';
import { Cta } from '@/components/site/Cta';
import { Footer } from '@/components/site/Footer';

export function HomePage() {
  const location = useLocation();

  // Cross-page nav links (Footer/Navbar, when not already on "/") pass the
  // target section id via router state instead of a URL hash, since the
  // element doesn't exist until this page has mounted.
  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Skills />
        <Experience />
        <CaseStudies limit={3} />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
