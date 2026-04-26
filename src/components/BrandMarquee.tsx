const items = [
  "iBank", "iFinance", "iLink Telecom", "iTank",
  "iMine", "iGrow", "iSupply", "iDetect",
  "Alma Beauty", "Mama Mia's Soko", "Dunamis", "Rehoboth",
  "AtomicStar", "myEstate", "myHeritage", "iClean",
];

export function BrandMarquee() {
  const loop = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden py-6 glass rounded-2xl"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex gap-10 animate-marquee whitespace-nowrap">
        {loop.map((b, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-display font-semibold text-lg text-foreground/80">{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
