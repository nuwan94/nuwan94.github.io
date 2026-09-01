import { SparkleIcon, CodeIcon, GlobeIcon, GraduationCapIcon, BriefcaseIcon, RocketIcon } from './icons';

const journey = [
  { icon: SparkleIcon, title: 'Caught the bug at 12', subtitle: 'Gaming sparked an obsession with how computers work' },
  { icon: CodeIcon, title: 'Self-taught', subtitle: 'Learned VB6, HTML, and PHP on my own' },
  { icon: GlobeIcon, title: 'Freelancing', subtitle: 'Took on early client work on Fiverr' },
  { icon: GraduationCapIcon, title: 'University of Kelaniya', subtitle: 'B.Sc. (Hons) Software Engineering — First Class' },
  { icon: BriefcaseIcon, title: 'Sysco LABS Technologies', subtitle: "One of Sri Lanka's leading tech employers" },
  { icon: RocketIcon, title: 'Cut+Dry Inc', subtitle: 'Now building at a fast-moving startup' },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-border px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[1fr_1.1fr] md:items-center">
        <div className="flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cosmic-blue before:to-cosmic-purple">
            About
          </span>
          <h2 className="font-heading text-2xl font-semibold leading-snug md:text-[32px]">
            A lifelong love for computers — from <span className="grad-text">gaming at 12</span> to shipping
            software today.
          </h2>
          <p className="max-w-xl text-muted-foreground">
            What started as curiosity about how games worked turned into teaching myself VB6, HTML, and PHP, then
            freelancing on Fiverr to build real things for real clients. A formal software engineering degree
            sharpened the fundamentals — and the years since, at one of Sri Lanka's top tech companies and now a
            fast-moving startup, have only deepened it. I'm genuinely happy with the path I've taken.
          </p>
        </div>

        <div className="relative flex flex-col">
          <div className="absolute bottom-2 left-[9px] top-2 w-px bg-gradient-to-b from-cosmic-blue via-cosmic-purple to-cosmic-purple/20" />
          {journey.map(({ icon: Icon, title, subtitle }, i) => (
            <div key={title} className="relative flex gap-4 pb-6 last:pb-0">
              <span
                className="z-10 mt-0.5 h-[18px] w-[18px] flex-shrink-0 rounded-full border-2 bg-background"
                style={{
                  borderColor: i < 3 ? 'var(--cosmic-blue)' : 'var(--cosmic-purple)',
                  boxShadow: `0 0 12px ${i < 3 ? 'rgba(91,141,255,0.4)' : 'rgba(178,92,255,0.3)'}`,
                }}
              />
              <div className="flex flex-1 items-start gap-3">
                <Icon width={16} height={16} className="mt-0.5 flex-shrink-0 text-muted-foreground" />
                <div className="flex flex-col gap-0.5">
                  <span className="font-heading text-sm font-semibold">{title}</span>
                  <span className="text-xs text-muted-foreground/80">{subtitle}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
