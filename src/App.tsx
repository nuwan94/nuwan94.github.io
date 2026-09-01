import { Navbar } from '@/components/site/Navbar';
import { Hero } from '@/components/site/Hero';
import { TechTicker } from '@/components/site/TechTicker';
import { About } from '@/components/site/About';
import { Skills } from '@/components/site/Skills';
import { Experience } from '@/components/site/Experience';
import { CaseStudies } from '@/components/site/CaseStudies';
import { Cta } from '@/components/site/Cta';
import { Footer } from '@/components/site/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TechTicker />
        <About />
        <Skills />
        <Experience />
        <CaseStudies />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
