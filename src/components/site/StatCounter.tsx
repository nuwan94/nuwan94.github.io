import { useEffect, useRef, useState } from 'react';
import Counter from '@/components/Counter';

export function StatCounter({ target, suffix = '+', label }: { target: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValue(target);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <div className="flex items-baseline text-cosmic-blue">
        <Counter
          value={value}
          fontSize={40}
          textColor="var(--foreground)"
          fontWeight={700}
          gap={2}
          padding={2}
          places={target >= 100 ? [100, 10, 1] : target >= 10 ? [10, 1] : [1]}
          gradientFrom="var(--background)"
        />
        <span className="font-heading text-[40px] font-bold text-foreground">{suffix}</span>
      </div>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
