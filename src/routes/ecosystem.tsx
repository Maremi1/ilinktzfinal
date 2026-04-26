import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import pillarFinance from "@/assets/pillar-finance.jpg";
import pillarResources from "@/assets/pillar-resources.jpg";
import pillarTrade from "@/assets/pillar-trade.jpg";
import pillarLifestyle from "@/assets/pillar-lifestyle.jpg";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem — iLink Tanzania" },
      { name: "description", content: "Sixteen specialized brands organized into four operational pillars: Finance & Tech, Resources & Infrastructure, Trade & Logistics, and Professional Services & Lifestyle." },
      { property: "og:title", content: "The iLink Ecosystem" },
      { property: "og:description", content: "Explore 16 brands across 4 pillars driving Tanzania's multi-sector innovation." },
    ],
  }),
  component: EcosystemPage,
});

type Brand = { name: string; tag: string };
type Pillar = { id: string; title: string; subtitle: string; accent: string; image: string; brands: Brand[] };

const pillars: Pillar[] = [
  {
    id: "finance",
    title: "Finance & Technology",
    subtitle: "Pillar I",
    accent: "from-primary/40 to-accent/30",
    image: pillarFinance,
    brands: [
      { name: "iBank", tag: "Banking & Forex Bureau — smart cards, biometric devices, mobile money, SMS gateways." },
      { name: "iFinance", tag: "Microfinance systems for small groups, biometric field tools and managed investment funds." },
      { name: "iLink Telecom", tag: "Premier IT consultation, comprehensive ISP solutions and telecommunications infrastructure." },
      { name: "iTank", tag: "Targeted database collection — demographic intelligence powering specialized campaigns." },
    ],
  },
  {
    id: "resources",
    title: "Resources & Infrastructure",
    subtitle: "Pillar II",
    accent: "from-accent/40 to-secondary/40",
    image: pillarResources,
    brands: [
      { name: "iMine", tag: "End-to-end mineral activities — gemstone cutting, domestic sales, certified international marketing." },
      { name: "iGrow", tag: "Agriculture & horticulture — production, processing, domestic and international marketing." },
      { name: "iSupply", tag: "Reliable supply networks for power, energy, gas and commercial fuel requirements." },
      { name: "iDetect", tag: "Industrial petroleum services — calibration, inspection, fuel-level detector setups." },
    ],
  },
  {
    id: "trade",
    title: "Trade, Retail & Logistics",
    subtitle: "Pillar III",
    accent: "from-secondary/40 to-primary/40",
    image: pillarTrade,
    brands: [
      { name: "Alma Beauty", tag: "Cosmetics, Alma clothing line, interior décor and reproductive health products." },
      { name: "Mama Mia's Soko", tag: "E-commerce hub — manufacturer-to-consumer with tiered membership and physical stores." },
      { name: "Dunamis", tag: "Coordinated rapid pickup and delivery network with specialized riders." },
      { name: "Rehoboth", tag: "Online consultation marketplace — voice and video sessions with experts across fields." },
    ],
  },
  {
    id: "lifestyle",
    title: "Professional Services & Lifestyle",
    subtitle: "Pillar IV",
    accent: "from-primary/30 to-secondary/30",
    image: pillarLifestyle,
    brands: [
      { name: "AtomicStar", tag: "PR, HR, employment agency, project management, feasibility studies and iLink media." },
      { name: "myEstate", tag: "Real estate development, property agency, interior design and finance portfolios." },
      { name: "myHeritage", tag: "Tourism ecosystem — museums, hotels, recreation and land/water/air transport." },
      { name: "iClean", tag: "Trusted facility management — cleaning, laundry, grocery, pet care, relocation." },
    ],
  },
];

function EcosystemPage() {
  const [active, setActive] = useState<string>(pillars[0].id);
  const current = pillars.find((p) => p.id === active)!;

  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">The Ecosystem</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            Sixteen brands.<br />
            <span className="text-gradient">Four pillars.</span> One discipline.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A unified multi-sector portfolio driven by a single standard of excellence —
            each brand engineered to integrate, scale and serve.
          </p>
        </div>
      </section>

      {/* Pillar tabs */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="glass-strong rounded-2xl p-2 flex flex-wrap gap-2">
            {pillars.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`flex-1 min-w-[180px] rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  active === p.id
                    ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "hover:bg-white/5 text-foreground/80"
                }`}
              >
                <div className="text-[10px] uppercase tracking-wider opacity-70">{p.subtitle}</div>
                <div className="mt-0.5">{p.title}</div>
              </button>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {current.brands.map((b, i) => (
              <div
                key={b.name}
                className="glass-card rounded-3xl p-7 group relative overflow-hidden animate-slide-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${current.accent} blur-3xl opacity-50`} />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                      {b.name.replace(/[^A-Z]/g, "").slice(0, 2) || b.name[0]}
                    </div>
                    <h3 className="font-display text-2xl font-bold">{b.name}</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{b.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">All pillars at a glance</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">A connected portfolio</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.id} className="glass-card rounded-3xl p-8">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-primary">{p.subtitle}</div>
                    <h3 className="font-display text-2xl font-bold mt-1">{p.title}</h3>
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.accent} blur-[1px]`} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.brands.map((b) => (
                    <span key={b.name} className="glass rounded-lg px-3 py-1.5 text-sm">{b.name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
