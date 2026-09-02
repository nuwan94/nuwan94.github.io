import { Link } from 'react-router-dom';
import { Navbar } from '@/components/site/Navbar';
import { CaseStudies } from '@/components/site/CaseStudies';
import { Footer } from '@/components/site/Footer';
import { ArrowRightIcon } from '@/components/site/icons';

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <div className="mx-auto max-w-6xl px-6 pb-4 pt-32 md:px-10 md:pt-40">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm font-bold text-muted-foreground transition-colors hover:border-cosmic-blue/60 hover:text-foreground"
          >
            <ArrowRightIcon width={14} height={14} className="rotate-180" />
            Back home
          </Link>
        </div>
        <CaseStudies standalone />
      </main>
      <Footer />
    </div>
  );
}
