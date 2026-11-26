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
        <div><span className="text-cosmic-blue">"role"</span>: <span className="text-muted-foreground">"Full-Stack Engineer"</span>,</div>
        <div><span className="text-cosmic-blue">"backend"</span>: [<span className="text-cosmic-purple">"Java"</span>, <span className="text-cosmic-purple">"Spring Boot"</span>, <span className="text-cosmic-purple">"JPA"</span>],</div>
        <div><span className="text-cosmic-blue">"frontend"</span>: [<span className="text-cosmic-purple">"React"</span>, <span className="text-cosmic-purple">"Redux"</span>, <span className="text-cosmic-purple">"TypeScript"</span>],</div>
        <div><span className="text-cosmic-blue">"cloud"</span>: [<span className="text-cosmic-purple">"AWS"</span>, <span className="text-cosmic-purple">"Docker"</span>, <span className="text-cosmic-purple">"Terraform"</span>],</div>
        <div><span className="text-cosmic-blue">"status"</span>: <span className="text-muted-foreground">"open to work"</span></div>
      </>
    ),
  },
  {
    file: 'hire-me.json',
    content: (
      <>
        <div><span className="text-cosmic-blue">"noticePeriod"</span>: <span className="text-muted-foreground">"1 week"</span>,</div>
        <div><span className="text-cosmic-blue">"credentials"</span>: <span className="text-muted-foreground">"MOM-verified degree (SG)"</span>,</div>
        <div className="flex flex-wrap items-center gap-x-1.5">
          <span className="text-cosmic-blue">"coreStack"</span>:<span>[</span>
          <TechIcon name="java" size={16} />
          <TechIcon name="react" size={16} />
          <TechIcon name="nodejs" size={16} />
          <span>],</span>
        </div>
        <div><span className="text-cosmic-blue">"adaptability"</span>: <span className="text-muted-foreground">"fast ramp-up on any stack"</span>,</div>
        <div><span className="text-cosmic-blue">"status"</span>: <span className="text-muted-foreground">"ready to start immediately"</span></div>
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
      backgroundColor="#0d0f1c"
      borderRadius={17}
      glowColor="265 90% 70%"
      colors={['#5b8dff', '#b25cff', '#5b8dff']}
      animated
      glowIntensity={1.1}
      className="h-full w-full"
    >
      <div className="flex h-full flex-col overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
          <span className="h-2 w-2 rounded-full bg-[#3d3f57]" />
          <span className="h-2 w-2 rounded-full bg-[#3d3f57]" />
          <span className="h-2 w-2 rounded-full bg-[#3d3f57]" />
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
