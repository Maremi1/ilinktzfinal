import { createFileRoute } from "@tanstack/react-router";
import cityBg from "@/assets/city-bg.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import abstractCube from "@/assets/abstract-cube.jpg";
import aboutTech from "@/assets/about-tech.jpg";
import aboutBrands from "@/assets/about-brands.jpg";
import aboutGovernance from "@/assets/about-governance.jpg";
import aboutCollab from "@/assets/about-collab.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — i Link Tanzania" },
      { name: "description", content: "Learn about i Link Tanzania — our vision, mission, governance and the values that drive our multi-sector ecosystem." },
      { property: "og:title", content: "About i Link Tanzania" },
      { property: "og:description", content: "A trusted, sought-after business partner — bridging ideas with reality through ICT and marketing solutions." },
    ],
    links: [
      { rel: "canonical", href: "https://tanzania.ilinkbiz.com/about" },
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
          <div className="text-sm tracking-[0.2em] text-primary mb-4 font-semibold">About i Link</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            A conglomerate built to <span className="text-gradient">link possibility</span>.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-3xl">
            i Link Tanzania identifies community problems and delivers customized,
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
              alt="African business team collaborating in a modern office"
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs uppercase tracking-[0.2em] text-primary">Engineered</div>
                <div className="font-display font-bold text-lg">Bespoke systems</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise & Standard with media */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <img
                src={aboutTech}
                alt="African tech professionals in a futuristic innovation lab"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                width={1024}
                height={768}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-transparent" />
            </div>
            <div className="p-10 -mt-8 relative">
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">The Promise</div>
              <h2 className="font-display text-3xl font-bold mb-4">Bridging businesses to customized solutions</h2>
              <p className="text-muted-foreground leading-relaxed">
                We engineer bespoke ICT and marketing solutions — not generic
                templates. Every system is shaped around the institution it serves,
                from biometric field tools to integrated SMS gateways and
                demographic intelligence.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="relative h-56 overflow-hidden">
              <img
                src={aboutBrands}
                alt="Abstract network of interconnected brands"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                width={1024}
                height={768}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-transparent" />
            </div>
            <div className="p-10 -mt-8 relative">
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">The Standard</div>
              <h2 className="font-display text-3xl font-bold mb-4">Sixteen brands. One discipline.</h2>
              <p className="text-muted-foreground leading-relaxed">
                Across finance, infrastructure, trade and lifestyle, every i Link
                brand operates by a single standard of excellence — disciplined
                execution, rapid response and uncompromising confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance section with media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden mb-10 glass-strong p-2">
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9]">
              <img
                src={aboutGovernance}
                alt="African executives in a corporate boardroom overlooking the city"
                className="w-full h-full object-cover animate-ken-burns"
                width={1024}
                height={768}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/10 to-transparent" />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 max-w-lg">
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">Governance</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold">Streamlined for an agile conglomerate</h2>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-muted-foreground">
              Local execution spearheaded by Managing Director Dorice Emmanuel
              Malle, supported by robust international corporate oversight.
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-10">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { tier: "Holdings", role: "Strategic IP & Brand Ownership", node: "i Link Global Holdings Co. Ltd." },
                { tier: "International", role: "Cross-border Coordination", node: "i Link International Ltd." },
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

      {/* Tier section with side media */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden glass-strong p-2 sticky top-24">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <img
                  src={aboutCollab}
                  alt="African entrepreneurs collaborating on a rooftop terrace with city skyline views"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  width={768}
                  height={1024}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-primary mb-1">Our Reach</div>
                  <div className="font-display font-bold text-xl">Serving every tier of the economy</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 grid gap-6">
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
        </div>
      </section>

      {/* Company Profile Download */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-3xl glass-card overflow-hidden p-8 md:p-12 relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10 flex-1">
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Learn More</div>
              <h2 className="font-display text-3xl font-bold mb-4">i Link Company Profile</h2>
              <p className="text-muted-foreground leading-relaxed max-w-xl">
                Discover our full ecosystem, complete service catalog, and detailed governance structure. Download our comprehensive company profile to see how i Link can bridge your business to customized solutions.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <a 
                href="/I_Link_Tanzania_Corporate_Profile.pdf" 
                download 
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
