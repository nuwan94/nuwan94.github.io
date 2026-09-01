import { useEffect, useState } from 'react';
import LineSidebar from '@/components/LineSidebar';

const items = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];
const ids = ['about', 'skills', 'experience', 'projects', 'contact'];

export function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        className={`fixed left-0 top-1/2 z-50 hidden -translate-y-1/2 transition-opacity duration-500 ease-out md:block ${
          visible ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="group relative flex h-72 w-14 items-center">
          {/* closed-state hint: a soft glowing tick, hovering anywhere in this rail opens the panel */}
          <span className="pointer-events-none absolute left-5 h-24 w-[3px] rounded-full bg-gradient-to-b from-cosmic-blue to-cosmic-purple opacity-50 shadow-[0_0_12px_rgba(178,92,255,0.4)] transition-opacity duration-300 group-hover:opacity-0" />

          {/* glass panel, revealed on hover */}
          <div className="pointer-events-none absolute left-3 -translate-x-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-8 opacity-0 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:opacity-100">
            <LineSidebar
              items={items}
              accentColor="#b25cff"
              textColor="#9a9cb8"
              markerColor="#3d3f57"
              proximityRadius={90}
              maxShift={18}
              itemGap={22}
              fontSize={0.95}
              onItemClick={(_, label) => {
                const id = ids[items.indexOf(label)];
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            />
          </div>
        </div>
      </div>

      <a
        href="#hero"
        className={`fixed left-6 top-6 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cosmic-blue to-cosmic-purple font-heading text-xs font-bold text-white shadow-[0_8px_24px_-8px_rgba(178,92,255,0.4)] transition-all duration-500 ease-out ${
          visible ? 'opacity-100 translate-x-0' : 'pointer-events-none -translate-x-3 opacity-0'
        }`}
      >
        NA
      </a>
    </>
  );
}
