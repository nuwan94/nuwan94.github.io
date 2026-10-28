import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Navbar } from '@/components/site/Navbar';
import { Footer } from '@/components/site/Footer';
import { TechIcon, techLabels } from '@/components/site/tech-icons';
import { ArrowRightIcon } from '@/components/site/icons';
import { projects, projectSlug, linkLabel } from '@/data/projects';

export function ProjectPage() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => projectSlug(p) === slug);
  const p = projects[index];

  useEffect(() => {
    if (!p) return;
    const previous = document.title;
    document.title = `${p.headline} — Nuwan Alawatta`;
    return () => {
      document.title = previous;
    };
  }, [p]);

  if (!p) return <Navigate to="/projects" replace />;

  // Wraps around, so every project page has a "next" to keep browsing.
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-24 pt-32 md:px-10 md:pt-40">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 self-start rounded-lg border border-border bg-white/[0.03] px-4 py-2.5 text-sm font-bold text-muted-foreground transition-colors hover:border-cosmic-blue/60 hover:text-foreground"
        >
          <ArrowRightIcon width={14} height={14} className="rotate-180" />
          All projects
        </Link>

        <header className="flex flex-col gap-3.5">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{p.tag}</span>
          <h1 className="font-heading text-4xl font-semibold md:text-5xl">{p.headline}</h1>
          <div className="flex items-baseline gap-3">
            <span className="grad-text font-heading text-3xl font-bold leading-none">{p.stat}</span>
            <span className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{p.statLabel}</span>
          </div>
        </header>

        <div className={`relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${p.from}`}>
          {p.youtube ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${p.youtube}`}
              title={`${p.headline} walkthrough`}
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            p.video && (
              <video className="absolute inset-0 h-full w-full object-cover" src={p.video} autoPlay muted loop playsInline />
            )
          )}
          {p.image && (
            <img className="absolute inset-0 h-full w-full object-cover" src={p.image} alt={`${p.headline} preview`} />
          )}
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_280px]">
          <section className="flex flex-col gap-4">
            <h2 className="font-heading text-2xl font-semibold">About this project</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">{p.description}</p>
          </section>

          <aside className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Built with</h2>
              <ul className="flex flex-wrap gap-2">
                {p.tech.map((name) => (
                  <li
                    key={name}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-sm"
                  >
                    <TechIcon name={name} size={16} />
                    {techLabels[name]}
                  </li>
                ))}
              </ul>
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cosmic-blue to-cosmic-purple px-6 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                {linkLabel(p.link)}
                <ArrowRightIcon width={16} height={16} className="-rotate-45" />
              </a>
            )}
          </aside>
        </div>

        <Link
          to={`/projects/${projectSlug(next)}`}
          className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-white/[0.03] p-6 transition-colors hover:border-cosmic-blue/60"
        >
          <span className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Next project</span>
            <span className="font-heading text-xl font-semibold">{next.headline}</span>
          </span>
          <ArrowRightIcon width={20} height={20} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </main>
      <Footer />
    </div>
  );
}
