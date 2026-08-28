import type { ReactElement } from 'react';

/**
 * Flat illustrated artwork for the Shop by Category cards.
 * One drawing per category slug — no photography.
 *
 * Everything sits on a 0 0 200 200 canvas so the cards can swap art freely.
 */

const CREAM = '#F7F3EA';
const DARK = '#2E1C16';
const TAN = '#C9A06A';
const TAN_DARK = '#A9805A';
const MEAT = '#C4564F';
const MEAT_DARK = '#93332F';
const FAT = '#F2E4D0';
const BONE = '#F5EFE2';
const GREEN = '#7BA23F';
const BLUSH = '#F3A9A0';

/** Beef — cow head, front on. */
function CowArt() {
  return (
    <g>
      {/* Horns */}
      <path d="M62 62 C46 48 34 52 32 64 C30 76 42 82 56 76" fill={TAN} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      <path d="M138 62 C154 48 166 52 168 64 C170 76 158 82 144 76" fill={TAN} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      {/* Ears */}
      <ellipse cx="52" cy="94" rx="18" ry="12" fill={DARK} transform="rotate(-18 52 94)" />
      <ellipse cx="148" cy="94" rx="18" ry="12" fill={DARK} transform="rotate(18 148 94)" />
      {/* Head */}
      <path d="M100 54 C130 54 150 74 150 106 C150 136 128 158 100 158 C72 158 50 136 50 106 C50 74 70 54 100 54 Z" fill={DARK} />
      {/* Face patch */}
      <path d="M100 68 C120 68 132 82 132 104 C132 118 126 130 116 138 L84 138 C74 130 68 118 68 104 C68 82 80 68 100 68 Z" fill={CREAM} />
      {/* Eyes — big and glossy */}
      <ellipse cx="80" cy="102" rx="10" ry="11" fill={DARK} />
      <ellipse cx="120" cy="102" rx="10" ry="11" fill={DARK} />
      <circle cx="83" cy="98" r="3.6" fill="#fff" />
      <circle cx="123" cy="98" r="3.6" fill="#fff" />
      <circle cx="77" cy="106" r="1.8" fill="#fff" opacity=".8" />
      <circle cx="117" cy="106" r="1.8" fill="#fff" opacity=".8" />
      {/* Blush */}
      <ellipse cx="70" cy="118" rx="7" ry="4.5" fill={BLUSH} opacity=".75" />
      <ellipse cx="130" cy="118" rx="7" ry="4.5" fill={BLUSH} opacity=".75" />
      {/* Muzzle */}
      <ellipse cx="100" cy="138" rx="30" ry="21" fill="#E8B9A8" stroke={DARK} strokeWidth="3.5" />
      <ellipse cx="89" cy="135" rx="5" ry="6.5" fill={DARK} />
      <ellipse cx="111" cy="135" rx="5" ry="6.5" fill={DARK} />
      <path d="M88 148 C94 154 106 154 112 148" stroke={DARK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* Forelock */}
      <path d="M86 58 C92 48 108 48 114 58 C108 54 92 54 86 58 Z" fill={CREAM} />
    </g>
  );
}

/** Lamb — fluffy sheep, front on. */
function LambArt() {
  return (
    <g>
      {/* Fleece */}
      <g fill={CREAM} stroke={DARK} strokeWidth="3.5">
        <circle cx="62" cy="92" r="24" />
        <circle cx="138" cy="92" r="24" />
        <circle cx="54" cy="126" r="22" />
        <circle cx="146" cy="126" r="22" />
        <circle cx="78" cy="70" r="22" />
        <circle cx="122" cy="70" r="22" />
        <circle cx="100" cy="132" r="30" />
        <circle cx="76" cy="118" r="26" />
        <circle cx="124" cy="118" r="26" />
      </g>
      {/* Fleece inner (hides the seams) */}
      <g fill={CREAM}>
        <circle cx="100" cy="110" r="42" />
        <circle cx="76" cy="96" r="26" />
        <circle cx="124" cy="96" r="26" />
      </g>
      {/* Ears */}
      <ellipse cx="60" cy="104" rx="17" ry="10" fill={DARK} transform="rotate(-22 60 104)" />
      <ellipse cx="140" cy="104" rx="17" ry="10" fill={DARK} transform="rotate(22 140 104)" />
      {/* Face */}
      <ellipse cx="100" cy="116" rx="30" ry="34" fill={DARK} />
      {/* Eyes — big and glossy */}
      <ellipse cx="88" cy="110" rx="9" ry="10" fill="#fff" />
      <ellipse cx="112" cy="110" rx="9" ry="10" fill="#fff" />
      <circle cx="88" cy="111" r="5" fill={DARK} />
      <circle cx="112" cy="111" r="5" fill={DARK} />
      <circle cx="90" cy="108" r="2" fill="#fff" />
      <circle cx="114" cy="108" r="2" fill="#fff" />
      {/* Blush */}
      <ellipse cx="78" cy="124" rx="6" ry="4" fill={BLUSH} opacity=".8" />
      <ellipse cx="122" cy="124" rx="6" ry="4" fill={BLUSH} opacity=".8" />
      {/* Muzzle + smile */}
      <ellipse cx="100" cy="134" rx="13" ry="9" fill={CREAM} opacity=".9" />
      <path d="M94 132 C97 136 103 136 106 132" stroke={DARK} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Topknot curl */}
      <circle cx="100" cy="80" r="15" fill={CREAM} stroke={DARK} strokeWidth="3.5" />
    </g>
  );
}

/** Poultry — plump chicken in profile. */
function ChickenArt() {
  return (
    <g>
      {/* Tail */}
      <path d="M56 108 C34 96 26 74 34 60 C46 66 54 78 58 92" fill={CREAM} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      {/* Body */}
      <path d="M148 118 C148 148 124 166 98 166 C70 166 50 146 50 118 C50 92 70 74 98 74 C126 74 148 92 148 118 Z" fill={CREAM} stroke={DARK} strokeWidth="4" />
      {/* Wing */}
      <path d="M96 108 C118 104 132 116 128 132 C114 142 96 136 90 122 Z" fill={FAT} stroke={DARK} strokeWidth="3.5" strokeLinejoin="round" />
      {/* Head */}
      <circle cx="128" cy="72" r="24" fill={CREAM} stroke={DARK} strokeWidth="4" />
      {/* Comb */}
      <path d="M114 54 C114 44 122 44 124 50 C128 40 138 42 138 52 C144 46 150 52 146 60 Z" fill={MEAT} stroke={DARK} strokeWidth="3.5" strokeLinejoin="round" />
      {/* Beak */}
      <path d="M150 70 L170 76 L150 82 Z" fill={TAN} stroke={DARK} strokeWidth="3.5" strokeLinejoin="round" />
      {/* Wattle */}
      <path d="M144 86 C152 88 152 100 142 100 C136 98 136 88 144 86 Z" fill={MEAT} stroke={DARK} strokeWidth="3" />
      {/* Eye — big and glossy */}
      <circle cx="133" cy="66" r="7.5" fill={DARK} />
      <circle cx="135" cy="63" r="2.8" fill="#fff" />
      {/* Blush */}
      <ellipse cx="122" cy="80" rx="6" ry="4" fill={BLUSH} opacity=".8" />
      {/* Legs */}
      <g stroke={TAN} strokeWidth="6" strokeLinecap="round">
        <path d="M86 164 L86 180" />
        <path d="M112 164 L112 180" />
      </g>
      <g stroke={TAN} strokeWidth="5" strokeLinecap="round" fill="none">
        <path d="M76 182 L86 180 L96 182" />
        <path d="M102 182 L112 180 L122 182" />
      </g>
    </g>
  );
}

/** Whole carcass — butcher chart cow with cut lines. */
function ButcherChartArt() {
  return (
    <g>
      {/* Body */}
      <path d="M40 96 C40 80 54 70 74 70 L138 70 C156 70 168 82 168 100 L168 122 C168 134 158 142 146 142 L54 142 C44 142 40 134 40 122 Z"
        fill={CREAM} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      {/* Head */}
      <path d="M40 92 C26 92 18 100 18 110 C18 120 26 128 40 128 Z" fill={CREAM} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      <circle cx="31" cy="106" r="5" fill={DARK} />
      <circle cx="32.5" cy="104" r="1.8" fill="#fff" />
      {/* Legs */}
      <g fill={CREAM} stroke={DARK} strokeWidth="4" strokeLinejoin="round">
        <path d="M58 142 L58 172 L72 172 L72 142 Z" />
        <path d="M132 142 L132 172 L146 172 L146 142 Z" />
      </g>
      {/* Tail */}
      <path d="M168 96 C180 92 184 104 178 114" fill="none" stroke={DARK} strokeWidth="4" strokeLinecap="round" />
      {/* Cut lines */}
      <g stroke={MEAT_DARK} strokeWidth="3" strokeDasharray="7 6" strokeLinecap="round">
        <path d="M70 70 L70 142" />
        <path d="M100 70 L100 142" />
        <path d="M132 70 L132 142" />
        <path d="M70 106 L168 106" />
      </g>
      {/* Cut numbers */}
      <g fill={MEAT_DARK} fontFamily="Georgia, serif" fontSize="13" fontWeight="700" textAnchor="middle">
        <text x="85" y="94">1</text>
        <text x="116" y="94">2</text>
        <text x="150" y="94">3</text>
        <text x="85" y="130">4</text>
        <text x="116" y="130">5</text>
        <text x="150" y="130">6</text>
      </g>
    </g>
  );
}

/** Box collection — carton packed with cuts. */
function BoxArt() {
  return (
    <g>
      {/* Steaks poking out */}
      <ellipse cx="78" cy="74" rx="26" ry="18" fill={MEAT} stroke={DARK} strokeWidth="4" transform="rotate(-12 78 74)" />
      <ellipse cx="78" cy="74" rx="13" ry="8" fill={MEAT_DARK} transform="rotate(-12 78 74)" />
      <ellipse cx="124" cy="70" rx="24" ry="17" fill={MEAT} stroke={DARK} strokeWidth="4" transform="rotate(10 124 70)" />
      <ellipse cx="124" cy="70" rx="12" ry="7" fill={MEAT_DARK} transform="rotate(10 124 70)" />
      {/* Back flaps */}
      <path d="M44 92 L26 74 L46 66 L64 84 Z" fill={TAN} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      <path d="M156 92 L174 74 L154 66 L136 84 Z" fill={TAN} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      {/* Box */}
      <path d="M40 92 L160 92 L150 168 L50 168 Z" fill={TAN} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      <path d="M40 92 L160 92 L157 112 L43 112 Z" fill={TAN_DARK} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      {/* Label */}
      <rect x="80" y="124" width="40" height="28" rx="4" fill={CREAM} stroke={DARK} strokeWidth="3.5" />
      <path d="M88 134 L112 134 M88 142 L104 142" stroke={DARK} strokeWidth="3" strokeLinecap="round" />
    </g>
  );
}

/** Seasoned — mishkak skewer over a flame. */
function SkewerArt() {
  return (
    <g>
      {/* Flames */}
      <path d="M100 176 C74 164 70 140 84 122 C84 138 92 142 96 132 C102 116 96 106 92 100 C120 110 134 130 130 152 C128 166 116 176 100 176 Z"
        fill={MEAT} opacity=".28" />
      {/* Skewer rod */}
      <path d="M40 118 L168 74" stroke="#9CA3AF" strokeWidth="6" strokeLinecap="round" />
      <path d="M168 74 L182 69" stroke="#6B7280" strokeWidth="6" strokeLinecap="round" />
      {/* Meat chunks */}
      <g stroke={DARK} strokeWidth="4" strokeLinejoin="round">
        <rect x="52" y="96" width="30" height="30" rx="7" fill={MEAT} transform="rotate(-19 67 111)" />
        <rect x="92" y="82" width="30" height="30" rx="7" fill={MEAT_DARK} transform="rotate(-19 107 97)" />
        <rect x="132" y="68" width="30" height="30" rx="7" fill={MEAT} transform="rotate(-19 147 83)" />
      </g>
      {/* Herb flecks */}
      <g fill={GREEN}>
        <circle cx="64" cy="106" r="3" />
        <circle cx="74" cy="118" r="2.6" />
        <circle cx="104" cy="92" r="3" />
        <circle cx="114" cy="102" r="2.6" />
        <circle cx="144" cy="78" r="3" />
        <circle cx="154" cy="88" r="2.6" />
      </g>
    </g>
  );
}

/** Dry aged beef — tomahawk steak. */
function TomahawkArt() {
  return (
    <g>
      {/* Bone handle */}
      <path d="M132 108 L182 96" stroke={BONE} strokeWidth="16" strokeLinecap="round" />
      <path d="M132 108 L182 96" stroke={DARK} strokeWidth="4" strokeLinecap="round" fill="none" opacity=".25" />
      <circle cx="184" cy="95" r="11" fill={BONE} stroke={DARK} strokeWidth="4" />
      {/* Fat cap */}
      <path d="M46 88 C74 58 122 60 140 86 C152 104 148 130 128 144 C102 162 60 156 44 130 C34 114 36 98 46 88 Z"
        fill={FAT} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      {/* Meat */}
      <path d="M56 94 C80 70 118 72 132 94 C142 110 138 130 122 140 C100 154 66 148 54 126 C46 112 48 102 56 94 Z"
        fill={MEAT} />
      {/* Marbling */}
      <g stroke={FAT} strokeWidth="3.5" strokeLinecap="round" fill="none" opacity=".85">
        <path d="M72 104 C84 98 96 100 104 108" />
        <path d="M66 122 C80 114 98 116 110 126" />
        <path d="M86 136 C96 130 108 130 118 136" />
        <path d="M104 92 C112 96 118 104 120 112" />
      </g>
    </g>
  );
}

/** Dry aged lamb — frenched rack. */
function LambRackArt() {
  return (
    <g>
      {/* Rib bones */}
      <g stroke={BONE} strokeWidth="11" strokeLinecap="round">
        <path d="M64 96 L48 48" />
        <path d="M92 90 L86 40" />
        <path d="M120 92 L128 42" />
        <path d="M146 100 L164 54" />
      </g>
      <g stroke={DARK} strokeWidth="3.5" strokeLinecap="round" fill="none" opacity=".3">
        <path d="M64 96 L48 48" />
        <path d="M92 90 L86 40" />
        <path d="M120 92 L128 42" />
        <path d="M146 100 L164 54" />
      </g>
      {/* Fat cap */}
      <path d="M44 116 C60 92 148 92 164 116 C176 136 160 162 104 162 C48 162 32 136 44 116 Z"
        fill={FAT} stroke={DARK} strokeWidth="4" strokeLinejoin="round" />
      {/* Meat */}
      <path d="M56 120 C72 102 138 102 154 120 C164 134 150 152 104 152 C58 152 46 134 56 120 Z" fill={MEAT} />
      {/* Eye of the loin per rib */}
      <g fill={MEAT_DARK} opacity=".65">
        <ellipse cx="72" cy="128" rx="9" ry="8" />
        <ellipse cx="98" cy="130" rx="9" ry="8" />
        <ellipse cx="124" cy="130" rx="9" ry="8" />
        <ellipse cx="146" cy="128" rx="8" ry="7" />
      </g>
      {/* Rosemary sprig */}
      <path d="M40 158 C58 150 78 148 96 150" stroke={GREEN} strokeWidth="4" fill="none" strokeLinecap="round" />
      <g stroke={GREEN} strokeWidth="3" strokeLinecap="round">
        <path d="M52 156 L48 148" /><path d="M64 152 L62 144" /><path d="M78 150 L78 142" />
      </g>
    </g>
  );
}

const ART: Record<string, () => ReactElement> = {
  'all-beef': CowArt,
  'all-lamb': LambArt,
  'mls-poultry': ChickenArt,
  'tfm-poultry': ChickenArt,
  'poultry-camel': ChickenArt,
  'whole-carcass': ButcherChartArt,
  'box-collection': BoxArt,
  'seasoned': SkewerArt,
  'dry-aged-beef': TomahawkArt,
  'dry-aged-lamb': LambRackArt,
};

export default function CategoryArt({ slug, size = '100%' }: { slug: string; size?: number | string }) {
  const Art = ART[slug] || CowArt;
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', overflow: 'visible' }}>
      <Art />
    </svg>
  );
}
