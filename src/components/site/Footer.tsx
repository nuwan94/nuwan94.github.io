import { GlobeIcon, MailIcon, ChatIcon } from './icons';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
];

const socials = [
  { href: 'https://nuwan.dev', label: 'nuwan.dev', Icon: GlobeIcon },
  { href: 'https://github.com/nuwan94', label: 'GitHub', Icon: ChatIcon },
  { href: 'mailto:nuwansalawatta@gmail.com', label: 'Email', Icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border px-6 pb-10 pt-16 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-xs flex-col gap-3.5">
            <div className="flex items-center gap-2">
              <span className="h-[22px] w-[22px] rounded-md bg-gradient-to-br from-cosmic-blue to-cosmic-purple" />
              <span className="font-heading text-[15px] font-semibold">Nuwan Alawatta</span>
            </div>
            <p className="text-[13px] text-muted-foreground/70">
              Full-Stack Software Engineer — Java, Spring Boot, React, and AWS. Open to full-time roles in Singapore.
            </p>
            <div className="mt-1.5 flex gap-2.5">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-cosmic-blue/60 hover:text-foreground"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-sm">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.06em] text-muted-foreground/70">
              Navigate
            </span>
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-border pt-6 text-xs text-muted-foreground/70 md:flex-row md:justify-between">
          <span>&copy; 2026 Nuwan Alawatta. Built with React, Vite &amp; Tailwind.</span>
          <a href="/Nuwan_Alawatta_CV.pdf" download className="hover:text-foreground">
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
