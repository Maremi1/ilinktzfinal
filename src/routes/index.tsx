import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import networkOrb from "@/assets/network-orb.jpg";
import worldMap from "@/assets/world-map.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import cityBg from "@/assets/city-bg.jpg";
import abstractCube from "@/assets/abstract-cube.jpg";
import { BrandMarquee } from "@/components/BrandMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iLink Tanzania — Bridging Ideas with Reality" },
      { name: "description", content: "Engineering bespoke ICT and marketing solutions across 16 specialized brands and four operational pillars in Tanzania." },
    ],
  }),
  component: Index,
});

const pillars = [
  { name: "Operational Excellence", desc: "Uncompromising service backed by latest technologies and trained personnel.", icon: "◆" },
  { name: "Agility & Timeliness", desc: "Rapid response and continuous communication to deliver needs-based solutions.", icon: "◈" },
  { name: "Depth of Knowledge", desc: "Vast expertise through deep technological alliances and lifecycle support.", icon: "◇" },
  { name: "Market Penetration", desc: "Targeted niche marketing strategies maintaining a dominant competitive position.", icon: "◉" },
];

const stats = [
  { value: "16", label: "Specialized Brands" },
  { value: "4", label: "Operational Pillars" },
  { value: "3", label: "Market Tiers" },
  { value: "1", label: "Unified Standard" },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40 animate-ken-burns" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Tanzania · Est. Conglomerate
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Bridging <span className="text-gradient">ideas</span><br />
              with reality.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              iLink Tanzania engineers bespoke ICT and marketing solutions —
              linking businesses, communities and customers across sixteen
              specialized brands.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/ecosystem" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105">
                Explore the ecosystem <span aria-hidden>→</span>
              </Link>
              <Link to="/contact" className="glass-strong inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold hover:border-primary/50 transition">
                Partner with us
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-[100px] animate-pulse-glow" />
            <img
              src={networkOrb}
              alt="Connected ecosystem"
              className="relative animate-float rounded-full"
              width={1024}
              height={1024}
            />
            <div className="absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-xs text-muted-foreground">Connected Brands</div>
              <div className="font-display font-bold text-2xl text-gradient">16</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
              <div className="text-xs text-muted-foreground">Pillars</div>
              <div className="font-display font-bold text-2xl text-gradient">4</div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            A portfolio of sixteen brands
          </div>
          <BrandMarquee />
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Vision", body: "To be a trusted, reliable, and sought-after local and international business partner." },
              { title: "Mission", body: "Linking businesses by engineering bespoke ICT and marketing solutions for various institutions." },
              { title: "Goal", body: "Identifying community problems and delivering customized, value-added technological services that integrate seamlessly into existing workflows." },
            ].map((b, i) => (
              <div key={b.title} className="glass-card rounded-3xl p-8 relative overflow-hidden" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">{b.title}</div>
                <p className="text-lg leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGE */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Competitive Advantage</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              The four vectors of our edge
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div key={p.name} className="glass-card rounded-3xl p-7 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-2xl text-primary mb-5 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Global to Local</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Rooted in Tanzania.<br />
                <span className="text-gradient">Connected to the world.</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                From Dar es Salaam, our ecosystem reaches across borders — moving
                minerals, capital, ideas and goods through trusted international
                partnerships.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { v: "3", l: "Continents" },
                  { v: "16", l: "Brands" },
                  { v: "24/7", l: "Operations" },
                ].map((s) => (
                  <div key={s.l} className="glass-card rounded-2xl p-4 text-center">
                    <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3 relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
              <div className="relative glass-strong rounded-3xl p-4 overflow-hidden">
                <img
                  src={worldMap}
                  alt="Global network reach"
                  className="w-full rounded-2xl"
                  width={1600}
                  height={900}
                  loading="lazy"
                />
                <div className="absolute top-8 left-8 glass rounded-xl px-3 py-2 text-xs">
                  <div className="text-muted-foreground">HQ</div>
                  <div className="font-semibold">Dar es Salaam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP STRUCTURE */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Group Structure</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                World-class infrastructure,<br />
                <span className="text-gradient">local execution.</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Three coordinated entities power our delivery — from global IP
                management to regional oversight to ground-level operations in
                Tanzania.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { name: "iLink Global Holdings", role: "The IP Engine", body: "Acquires, licenses and manages proprietary methodologies, software, AI systems and trademarked brands globally." },
                { name: "iLink International", role: "Regional Coordination", body: "Structures cross-border investments, financial oversight and regional joint ventures." },
                { name: "iLink Tanzania", role: "Ground Operations", body: "Adapts licensed global systems to the Tanzanian market with direct client delivery and local service management." },
              ].map((e, i) => (
                <div key={e.name} className="glass-card rounded-2xl p-6 flex gap-5">
                  <div className="font-display text-3xl font-bold text-gradient w-10">0{i + 1}</div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary">{e.role}</div>
                    <h3 className="font-display font-semibold text-lg mt-1">{e.name}</h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{e.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-strong rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-glow)" }} />
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Your partner in business</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
              All we need is <span className="text-gradient">a chance</span> to add value to your business.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              An opportunity for us to add value to you — and for you to add value to ours. We are potential.
            </p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105">
              Start the conversation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
