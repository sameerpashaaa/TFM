/**
 * Small line-art glyph set for the "Shop by Cuts" mega-menu rows.
 * Dispatch is by keyword match on the cut name, not by slug — the same
 * handful of shapes cover both the Beef and Lamb & Mutton cut lists, which
 * share nearly identical vocabulary (mince, ribs, mishkak, burgers, ...).
 */

import type { ReactNode } from 'react';

const INK = '#5B1A1C';

function base(children: ReactNode) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {children}
    </svg>
  );
}

const icons: Record<string, ReactNode> = {
  cubes: base(<>
    <path d="M12 3 L20 7 L20 17 L12 21 L4 17 L4 7 Z" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M4 7 L12 11 L20 7 M12 11 L12 21" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
  </>),
  mince: base(<>
    <ellipse cx="12" cy="15" rx="8" ry="4" stroke={INK} strokeWidth="1.6" />
    <path d="M5 15 C5 11 8 8 12 8 C16 8 19 11 19 15" stroke={INK} strokeWidth="1.6" />
    <circle cx="9" cy="12.5" r="1" fill={INK} /><circle cx="14" cy="11.5" r="1" fill={INK} /><circle cx="12" cy="14" r="1" fill={INK} />
  </>),
  steak: base(<>
    <path d="M5 9 C5 5 9 3 13 4 C18 5 20 9 18 13 C16 17 11 19 7 17 C4 15 3 12 5 9 Z" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="9" cy="9" r="1" fill={INK} /><circle cx="13" cy="8" r="1" fill={INK} /><circle cx="14" cy="13" r="1" fill={INK} />
  </>),
  ribs: base(<>
    <path d="M6 4 C10 4 10 20 6 20" stroke={INK} strokeWidth="1.6" />
    <path d="M8 6 L18 6 M8 9.5 L18 9.5 M8 13 L18 13 M8 16.5 L18 16.5" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
  </>),
  brisket: base(<>
    <path d="M4 14 C4 8 8 5 14 5 C18 5 20 8 19 12 C18 16 13 19 8 18 C6 17.5 4 16 4 14 Z" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M7 12 C10 10 14 10 16 12" stroke={INK} strokeWidth="1.3" />
  </>),
  roast: base(<>
    <ellipse cx="12" cy="12" rx="8" ry="7" stroke={INK} strokeWidth="1.6" />
    <path d="M6 12 Q12 8 18 12 M6 15 Q12 12 18 15" stroke={INK} strokeWidth="1.3" />
  </>),
  stroganoff: base(<>
    <ellipse cx="12" cy="15" rx="8" ry="4.5" stroke={INK} strokeWidth="1.6" />
    <path d="M6 13 L9 11 M10 14 L13 11.5 M14 13.5 L17 11.5" stroke={INK} strokeWidth="1.4" strokeLinecap="round" />
  </>),
  burgers: base(<>
    <path d="M4 10 Q12 4 20 10" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4 13 L20 13" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4 16 Q12 19 20 16" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
  </>),
  mishkak: base(<>
    <path d="M3 12 L21 12" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
    <rect x="6" y="9" width="3.4" height="6" rx="1" stroke={INK} strokeWidth="1.4" />
    <rect x="10.3" y="9" width="3.4" height="6" rx="1" stroke={INK} strokeWidth="1.4" />
    <rect x="14.6" y="9" width="3.4" height="6" rx="1" stroke={INK} strokeWidth="1.4" />
  </>),
  thinSlices: base(<>
    <path d="M4 8 Q12 4 20 8" stroke={INK} strokeWidth="1.5" />
    <path d="M4 12 Q12 8 20 12" stroke={INK} strokeWidth="1.5" />
    <path d="M4 16 Q12 12 20 16" stroke={INK} strokeWidth="1.5" />
    <path d="M4 20 Q12 16 20 20" stroke={INK} strokeWidth="1.5" />
  </>),
  dryAged: base(<>
    <path d="M12 3 C8 3 6 7 6 11 C6 16 9 20 12 21 C15 20 18 16 18 11 C18 7 16 3 12 3 Z" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 10 L15 10 M9.5 13 L14.5 13 M10 16 L14 16" stroke={INK} strokeWidth="1.2" strokeLinecap="round" opacity=".7" />
  </>),
  sausages: base(<>
    <path d="M5 14 C5 10 8 8 11 9 C13 9.7 13.5 11.5 12.3 13 C11 14.6 11.5 16.8 14 17 C17 17.2 19 15 19 12"
      stroke={INK} strokeWidth="1.7" strokeLinecap="round" />
    <path d="M8 10.5 L8.5 12.5 M11.5 11.5 L12.5 13" stroke={INK} strokeWidth="1.1" opacity=".7" />
  </>),
  shanks: base(<>
    <path d="M9 4 L11 13 L9 20" stroke={INK} strokeWidth="1.7" strokeLinecap="round" />
    <path d="M15 4 L13 13 L15 20" stroke={INK} strokeWidth="1.7" strokeLinecap="round" />
    <ellipse cx="12" cy="13" rx="5" ry="4" stroke={INK} strokeWidth="1.5" />
  </>),
  carcass: base(<>
    <path d="M12 3 C8 3 6 6 6 9 C6 12 8 13 8 15 L8 20 M12 3 C16 3 18 6 18 9 C18 12 16 13 16 15 L16 20"
      stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M9 8 L15 8" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
  </>),
  leg: base(<>
    <path d="M9 3 C7 6 7 10 9 13 L8 20 L11 20 L11.5 14 M9 13 L14 12 C17 11 18 8 16 5"
      stroke={INK} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
  </>),
  chops: base(<>
    <circle cx="9" cy="9" r="5.2" stroke={INK} strokeWidth="1.6" />
    <path d="M13 12 C16 13 19 16 19 19" stroke={INK} strokeWidth="1.7" strokeLinecap="round" />
  </>),
  rack: base(<>
    <path d="M12 3 L12 8" stroke={INK} strokeWidth="1.4" />
    <path d="M6 8 L18 8 L16 20 L8 20 Z" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 8 L9 20 M12 8 L12 20 M15 8 L15 20" stroke={INK} strokeWidth="1.1" opacity=".6" />
  </>),
  wagyu: base(<>
    <rect x="4.5" y="6" width="15" height="12" rx="2.5" stroke={INK} strokeWidth="1.6" />
    <path d="M4.5 10.5 L19.5 10.5 M4.5 14 L19.5 14" stroke={INK} strokeWidth="1.1" opacity=".55" />
  </>),
  seasoned: base(<>
    <path d="M6 20 C6 12 8 6 12 4 C16 6 18 12 18 20" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="10" cy="12" r="1" fill={INK} /><circle cx="14" cy="10" r="1" fill={INK} /><circle cx="12" cy="15" r="1" fill={INK} />
  </>),
  sauce: base(<>
    <path d="M9 3 L15 3 L14 8 L17 8 L17 20 L7 20 L7 8 L10 8 Z" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M7 12 L17 12" stroke={INK} strokeWidth="1.3" opacity=".6" />
  </>),
  box: base(<>
    <path d="M4 8 L12 4 L20 8 L20 17 L12 21 L4 17 Z" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M4 8 L12 12 L20 8 M12 12 L12 21" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
  </>),
  globe: base(<>
    <circle cx="12" cy="12" r="8" stroke={INK} strokeWidth="1.6" />
    <path d="M4 12 L20 12 M12 4 C15 7 15 17 12 20 C9 17 9 7 12 4" stroke={INK} strokeWidth="1.3" />
  </>),
  cleaver: base(<>
    <path d="M4 15 L16 6 L20 10 L9 19 Z" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M4 15 L2 19" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
  </>),
};

const rules: [RegExp, keyof typeof icons][] = [
  [/sausage/i, 'sausages'],
  [/mince/i, 'mince'],
  [/bone.?in cube|boneless cube|cube/i, 'cubes'],
  [/steak/i, 'steak'],
  [/rib/i, 'ribs'],
  [/brisket/i, 'brisket'],
  [/roast/i, 'roast'],
  [/stroganoff/i, 'stroganoff'],
  [/burger/i, 'burgers'],
  [/mishkak/i, 'mishkak'],
  [/thin slice/i, 'thinSlices'],
  [/dry.?aged/i, 'dryAged'],
  [/shank/i, 'shanks'],
  [/whole carcass/i, 'carcass'],
  [/leg/i, 'leg'],
  [/chop/i, 'chops'],
  [/rack/i, 'rack'],
  [/wagyu|angus|mb \d/i, 'wagyu'],
  [/sauce|dip/i, 'sauce'],
  [/box/i, 'box'],
  [/seasoned|kofta|kebab/i, 'seasoned'],
  [/beef|lamb|mutton|chicken|camel|african|australian|zealand|brazilian|pakistan|japanese|salalah|somali|omani|indian|us\b/i, 'globe'],
];

/** Best-guess glyph for a cut/origin/box label. Falls back to a cleaver. */
export default function CutIcon({ name, size = 20 }: { name: string; size?: number }) {
  let key: keyof typeof icons = 'cleaver';
  for (const [re, k] of rules) {
    if (re.test(name)) { key = k; break; }
  }
  return (
    <span style={{ display: 'inline-flex', flexShrink: 0, width: size, height: size }}>
      {icons[key]}
    </span>
  );
}
