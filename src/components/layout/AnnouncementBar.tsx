const announcements = [
  '★ FREE delivery + FREE 2x AUS Grass-Fed Burgers with every whole carcass – Shop now',
  '★ 100% free returns & replacements because you deserve only the best!',
  '★ Fresh AUS Angus and AUS Wagyu beef delivered within 1 hour across Melbourne.',
  '★ Delivered fresh within 1 hour across Melbourne all days of the week.',
];

export default function AnnouncementBar() {
  const doubled = [...announcements, ...announcements];
  return (
    <div style={{ background: 'var(--accent-deep)', color: '#fff', height: 32, overflow: 'hidden', position: 'relative' }}>
      <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap', height: '100%', alignItems: 'center', width: 'max-content' }}>
        {doubled.map((a, i) => (
          <span key={i} style={{ padding: '0 40px', fontSize: 12, fontWeight: 500 }}>{a}</span>
        ))}
      </div>
    </div>
  );
}
