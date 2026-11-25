import { useEffect, useState } from 'react';
import BorderGlow from '@/components/BorderGlow';
import { TechIcon } from './tech-icons';

// Not currently rendered: Hero shows <FeaturedProject /> in this slot. Kept so
// it can be swapped back in (it fills its parent, same as FeaturedProject).
const terminalTabs = [
  {
    file: 'stack.json',
    content: (
      <>
        <div><span className="text-vice-pink">"role"</span>: <span className="text-muted-foreground">"Full-Stack Engineer"</span>,</div>
        <div><span className="text-vice-pink">"backend"</span>: [<span className="text-vice-orange">"Java"</span>, <span className="text-vice-orange">"Spring Boot"</span>, <span className="text-vice-orange">"JPA"</span>],</div>
        <div><span className="text-vice-pink">"frontend"</span>: [<span className="text-vice-orange">"React"</span>, <span className="text-vice-orange">"Redux"</span>, <span className="text-vice-orange">"TypeScript"</span>],</div>
        <div><span className="text-vice-pink">"cloud"</span>: [<span className="text-vice-orange">"AWS"</span>, <span className="text-vice-orange">"Docker"</span>, <span className="text-vice-orange">"Terraform"</span>],</div>
        <div><span className="text-vice-pink">"status"</span>: <span className="text-muted-foreground">"open to work"</span></div>
      </>
    ),
  },
  {
    file: 'hire-me.json',
    content: (
      <>
        <div><span className="text-vice-pink">"noticePeriod"</span>: <span className="text-muted-foreground">"1 week"</span>,</div>
        <div><span className="text-vice-pink">"credentials"</span>: <span className="text-muted-foreground">"MOM-verified degree (SG)"</span>,</div>
        <div className="flex flex-wrap items-center gap-x-1.5">
          <span className="text-vice-pink">"coreStack"</span>:<span>[</span>
          <TechIcon name="java" size={16} />
          <TechIcon name="react" size={16} />
          <TechIcon name="nodejs" size={16} />
          <span>],</span>
        </div>
        <div><span className="text-vice-pink">"adaptability"</span>: <span className="text-muted-foreground">"fast ramp-up on any stack"</span>,</div>
        <div><span className="text-vice-pink">"status"</span>: <span className="text-muted-foreground">"ready to start immediately"</span></div>
      </>
    ),
  },
];

export function HeroTerminal() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveTab((t) => (t + 1) % terminalTabs.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <BorderGlow
      backgroundColor="#1e0e30"
      borderRadius={17}
      glowColor="335 95% 65%"
      colors={['#ff3d8b', '#ff8a3d', '#2fd6d0']}
      animated
      glowIntensity={1.1}
      className="h-full w-full"
    >
      <div className="flex h-full flex-col overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#4b3566]" />
          <span className="h-2 w-2 rounded-full bg-[#4b3566]" />
          <span className="h-2 w-2 rounded-full bg-[#4b3566]" />
          <div className="ml-2 flex items-center gap-1">
            {terminalTabs.map((t, idx) => (
              <button
                key={t.file}
                onClick={() => setActiveTab(idx)}
                className={`rounded-md px-2.5 py-1 font-mono text-xs transition-colors ${
                  idx === activeTab ? 'bg-white/[0.06] text-foreground' : 'text-muted-foreground hover:text-foreground/70'
                }`}
              >
                {t.file}
              </button>
            ))}
          </div>
        </div>
        <div
          key={activeTab}
          className="flex flex-1 flex-col gap-4 p-6 font-mono text-[13px] leading-relaxed"
          style={{ animation: 'fadeSlideIn 0.45s ease-out' }}
        >
          {terminalTabs[activeTab].content}
        </div>
      </div>
    </BorderGlow>
  );
}
