// Hero backdrop: a beach-city sunset (sky, sun, art deco skyline, sea glow and palm silhouettes),
// drawn as one SVG so it scales crisply. The animated waves render on top of the sea.

const W = 1440;
const H = 820;
const HORIZON = 600;

type Pt = [number, number];

// A palm tree silhouette: a tapered, curving trunk and drooping fronds.
function palmPath(x: number, base: number, height: number, lean: number, s = 1): string {
  const top: Pt = [x + lean, base - height];
  const ctrl: Pt = [x + lean * 0.15, base - height * 0.55];
  const at = (t: number): Pt => [
    (1 - t) ** 2 * x + 2 * (1 - t) * t * ctrl[0] + t * t * top[0],
    (1 - t) ** 2 * base + 2 * (1 - t) * t * ctrl[1] + t * t * top[1],
  ];
  const left: Pt[] = [];
  const right: Pt[] = [];
  for (let i = 0; i <= 12; i++) {
    const t = i / 12;
    const [px, py] = at(t);
    const w = (9 - 4.5 * t) * s;
    left.push([px - w, py]);
    right.unshift([px + w, py]);
  }
  let d = `M${[...left, ...right].map(([a, b]) => `${a.toFixed(1)} ${b.toFixed(1)}`).join('L')}Z`;

  const fronds = [-168, -146, -122, -96, -70, -42, -16, -110, -60];
  fronds.forEach((deg, i) => {
    const a = (deg * Math.PI) / 180;
    const len = (i > 6 ? 70 : 105 + ((i * 37) % 30)) * s;
    const ex = top[0] + Math.cos(a) * len;
    const ey = top[1] + Math.sin(a) * len * 0.55 + len * 0.42;
    const mx = top[0] + Math.cos(a) * len * 0.5;
    const my = top[1] + Math.sin(a) * len * 0.5 - 14 * s;
    const nx = -Math.sin(a) * 13 * s;
    const ny = Math.cos(a) * 13 * s;
    d += `M${top[0].toFixed(1)} ${top[1].toFixed(1)}Q${(mx + nx).toFixed(1)} ${(my + ny).toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}Q${(mx - nx).toFixed(1)} ${(my - ny).toFixed(1)} ${top[0].toFixed(1)} ${top[1].toFixed(1)}Z`;
  });
  return d;
}

// A strip of art deco towers along the horizon, seeded so it is the same on every render.
function skyline() {
  let seed = 7;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const towers: { x: number; w: number; h: number; step: boolean; spire: boolean; neon: string | null }[] = [];
  for (let x = -10; x < W; ) {
    const w = 26 + rnd() * 46;
    const tall = rnd() < 0.18;
    towers.push({
      x,
      w,
      h: tall ? 110 + rnd() * 70 : 28 + rnd() * 70,
      step: rnd() < 0.5,
      spire: tall && rnd() < 0.6,
      neon: rnd() < 0.22 ? (rnd() < 0.5 ? '#ff3d8b' : '#2fd6d0') : null,
    });
    x += w + 2 + rnd() * 6;
  }
  return towers;
}

const TOWERS = skyline();
const PALMS_BACK = [
  palmPath(1250, HORIZON + 40, 260, -30, 0.8),
  palmPath(1330, HORIZON + 40, 300, 25, 0.9),
];
const PALMS_FRONT = [
  palmPath(1395, H + 10, 430, -70, 1.25),
  palmPath(1165, H + 10, 360, 40, 1.05),
  palmPath(-20, H + 10, 300, 60, 0.95),
];

export function SunsetScene() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#140820" />
          <stop offset="0.28" stopColor="#3b1263" />
          <stop offset="0.5" stopColor="#9c1f73" />
          <stop offset="0.62" stopColor="#ff3d6e" />
          <stop offset="0.7" stopColor="#ff8a3d" />
          <stop offset="0.76" stopColor="#ffcf5a" />
        </linearGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7a1f6e" />
          <stop offset="0.35" stopColor="#3a1460" />
          <stop offset="1" stopColor="#140820" />
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#fff3b8" />
          <stop offset="0.45" stopColor="#ffcf5a" />
          <stop offset="1" stopColor="#ff5a5f" />
        </radialGradient>
        <radialGradient id="glow">
          <stop offset="0" stopColor="#ffb347" stopOpacity="0.75" />
          <stop offset="1" stopColor="#ff3d8b" stopOpacity="0" />
        </radialGradient>
        <clipPath id="above">
          <rect x="0" y="0" width={W} height={HORIZON} />
        </clipPath>
      </defs>

      <rect width={W} height={HORIZON} fill="url(#sky)" />
      <circle cx="900" cy={HORIZON} r="420" fill="url(#glow)" clipPath="url(#above)" />
      {/* a big low sun, rising behind the featured project card */}
      <circle cx="1110" cy="180" r="230" fill="url(#glow)" opacity="0.7" />
      <circle cx="1110" cy="180" r="135" fill="url(#sun)" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="960" y={205 + i * 17} width="300" height={3 + i * 2} fill="#9c1f73" opacity="0.55" />
      ))}

      {/* distant skyline */}
      <g fill="#2c0d49">
        {TOWERS.map((t, i) => (
          <g key={i}>
            <rect x={t.x} y={HORIZON - t.h} width={t.w} height={t.h} />
            {t.step && <rect x={t.x + t.w * 0.2} y={HORIZON - t.h - 12} width={t.w * 0.6} height="12" />}
            {t.step && <rect x={t.x + t.w * 0.35} y={HORIZON - t.h - 22} width={t.w * 0.3} height="10" />}
            {t.spire && <rect x={t.x + t.w / 2 - 1.5} y={HORIZON - t.h - 60} width="3" height="60" />}
            {t.neon && (
              <rect x={t.x + 4} y={HORIZON - t.h + 10} width={t.w - 8} height="2.5" fill={t.neon} opacity="0.95" />
            )}
          </g>
        ))}
      </g>
      <g fill="#1d0833" opacity="0.9">
        {PALMS_BACK.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* the sea, with the sun's reflection */}
      <rect y={HORIZON} width={W} height={H - HORIZON} fill="url(#sea)" />
      {Array.from({ length: 9 }, (_, i) => {
        const w = 300 - i * 26;
        return (
          <rect
            key={i}
            x={1110 - w / 2 + ((i * 37) % 40) - 20}
            y={HORIZON + 8 + i * 13}
            width={w}
            height={3 - i * 0.2}
            rx="1.5"
            fill={i < 3 ? '#ffcf5a' : '#ff8a3d'}
            opacity={0.85 - i * 0.07}
          />
        );
      })}

      <g fill="#0d0416">
        {PALMS_FRONT.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}

const BAND_PALMS = [palmPath(70, 430, 330, 45, 1.0), palmPath(150, 430, 250, -20, 0.8), palmPath(1380, 430, 360, -55, 1.1)];

// A low sunset glow with palm silhouettes, for the bottom of a section.
export function SunsetBand() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_115%,rgba(255,138,61,0.45),rgba(255,61,139,0.22)_45%,transparent_75%)]" />
      <svg className="absolute inset-x-0 bottom-0 h-[70%] w-full" viewBox="0 0 1440 430" preserveAspectRatio="xMidYMax slice">
        <g fill="#0d0416" opacity="0.85">
          {BAND_PALMS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </g>
      </svg>
    </div>
  );
}
