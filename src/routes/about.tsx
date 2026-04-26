import { createFileRoute } from "@tanstack/react-router";
import cityBg from "@/assets/city-bg.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import abstractCube from "@/assets/abstract-cube.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — iLink Tanzania" },
      { name: "description", content: "Learn about iLink Tanzania — our vision, mission, governance and the values that drive our multi-sector ecosystem." },
      { property: "og:title", content: "About iLink Tanzania" },
      { property: "og:description", content: "A trusted, sought-after business partner — bridging ideas with reality through ICT and marketing solutions." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={cityBg} alt="" className="w-full h-full object-cover opacity-25" width={1600} height={900} loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
        </div>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">About iLink</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            A conglomerate built to <span className="text-gradient">link possibility</span>.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl">
            iLink Tanzania identifies community problems and delivers customized,
            value-added technological services and devices that integrate
            seamlessly into existing workflows.
          </p>
        </div>
      </section>

      {/* Image strip */}
      <section className="py-10">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden glass-strong p-2 group">
            <img
              src={teamMeeting}
              alt="iLink Tanzania team in a glass-walled office"
              className="w-full h-full object-cover aspect-[16/10] rounded-2xl group-hover:scale-105 transition-transform duration-700"
              width={1600}
              height={1000}
              loading="lazy"
            />
          </div>
          <div className="relative rounded-3xl overflow-hidden glass-strong p-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
              <img
                src={abstractCube}
                alt="Abstract data cube"
                className="w-full h-full object-cover animate-ken-burns"
                width={1024}
                height={1024}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs uppercase tracking-[0.2em] text-primary">Engineered</div>
                <div className="font-display font-bold text-lg">Bespoke systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-3xl p-10">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">The Promise</div>
            <h2 className="font-display text-3xl font-bold mb-4">Bridging businesses to customized solutions</h2>
            <p className="text-muted-foreground leading-relaxed">
              We engineer bespoke ICT and marketing solutions — not generic
              templates. Every system is shaped around the institution it serves,
              from biometric field tools to integrated SMS gateways and
              demographic intelligence.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-10">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">The Standard</div>
            <h2 className="font-display text-3xl font-bold mb-4">Sixteen brands. One discipline.</h2>
            <p className="text-muted-foreground leading-relaxed">
              Across finance, infrastructure, trade and lifestyle, every iLink
              brand operates by a single standard of excellence — disciplined
              execution, rapid response and uncompromising confidentiality.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Governance</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Streamlined for an agile conglomerate</h2>
            <p className="mt-4 text-muted-foreground">
              Local execution spearheaded by Managing Director Dorice Emmanuel
              Malle, supported by robust international corporate oversight.
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-10">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tier: "Holdings", role: "Strategic IP & Brand Ownership", node: "iLink Global Holdings Co. Ltd." },
                { tier: "International", role: "Cross-border Coordination", node: "iLink International Ltd." },
                { tier: "Tanzania", role: "Ground Execution", node: "Managing Director — Dorice Emmanuel Malle" },
              ].map((g) => (
                <div key={g.tier} className="glass rounded-2xl p-6 relative">
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <div className="text-xs uppercase tracking-wider text-primary">{g.tier}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{g.role}</div>
                  <div className="mt-4 font-display font-semibold">{g.node}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { tier: "Tier I", aud: "Corporates", body: "Finance & Tech, Resources & Infrastructure, Trade & Logistics, Professional Services & Lifestyle." },
              { tier: "Tier II", aud: "Small Businesses", body: "Tailored ICT, supply, retail and logistics support for SMEs across all sectors." },
              { tier: "Tier III", aud: "Home & Individuals", body: "Direct-to-consumer trade, delivery, lifestyle and consultation services." },
            ].map((t) => (
              <div key={t.tier} className="glass-card rounded-3xl p-8">
                <div className="text-xs uppercase tracking-[0.25em] text-primary">{t.tier}</div>
                <div className="font-display text-2xl font-bold mt-2">{t.aud}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
