import { createFileRoute, Link } from "@tanstack/react-router";
import abstractCube from "@/assets/abstract-cube.jpg";
import networkOrb from "@/assets/network-orb.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — iLink Tanzania" },
      { name: "description", content: "ICT consulting, financial systems, supply networks, e-commerce, delivery, real estate, tourism and consultation services delivered with operational excellence." },
      { property: "og:title", content: "Services — iLink Tanzania" },
      { property: "og:description", content: "End-to-end solutions across technology, finance, infrastructure, trade and lifestyle." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: "⌬", title: "ICT & Telecommunications", body: "Premier IT consultation, ISP solutions, infrastructure design and managed services across enterprise environments." },
  { icon: "◈", title: "Financial Systems", body: "Banking & forex platforms, smart card issuance, biometric authentication, microfinance systems and managed investment funds." },
  { icon: "◊", title: "Data Intelligence", body: "Targeted demographic database collection and management powering precision marketing campaigns." },
  { icon: "△", title: "Resources & Supply", body: "Mineral marketing, agricultural lifecycle management, petroleum services and reliable energy supply networks." },
  { icon: "◇", title: "Trade & E-commerce", body: "Direct manufacturer-to-consumer distribution, importation, retail networks and tiered membership platforms." },
  { icon: "◯", title: "Logistics & Delivery", body: "Coordinated rapid pickup and last-mile delivery with specialized riders for vendor-to-customer execution." },
  { icon: "▣", title: "Real Estate & Facilities", body: "Property development, agency, interior design, facility management, cleaning, laundry and relocation." },
  { icon: "✦", title: "Tourism & Hospitality", body: "Hotels, museums, recreational centers and integrated land, water and air transport solutions." },
  { icon: "⬢", title: "Consultation Marketplace", body: "Online consultation platform enabling seamless voice and video sessions between experts and clients." },
];

const process = [
  { step: "01", title: "Discover", body: "We listen to your problem deeply — mapping workflows, constraints and opportunities." },
  { step: "02", title: "Design", body: "Bespoke architecture: not templates. Engineered for your sector, scale and timeline." },
  { step: "03", title: "Deliver", body: "Rapid execution backed by trained personnel and continuous, transparent communication." },
  { step: "04", title: "Sustain", body: "Lifecycle support — integration, training, maintenance and iterative improvement." },
];

function ServicesPage() {
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">What we do</div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                End-to-end <span className="text-gradient">solutions</span><br />
                engineered for impact.
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Every service is built to integrate seamlessly with your existing
                workflows — backed by trained personnel, deep technological alliances
                and uncompromising confidentiality.
              </p>
            </div>
            <div className="lg:col-span-2 relative hidden lg:block">
              <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full" />
              <img
                src={abstractCube}
                alt="Abstract systems cube"
                className="relative animate-float rounded-3xl"
                width={1024}
                height={1024}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="glass-card rounded-3xl p-7 group animate-slide-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-2xl text-primary mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs uppercase tracking-[0.25em] text-primary mb-3">How we work</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Disciplined. Iterative. Transparent.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <div key={p.step} className="glass-card rounded-3xl p-7 relative">
                <div className="text-5xl font-display font-bold text-gradient opacity-90">{p.step}</div>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-strong rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10 opacity-50" style={{ background: "var(--gradient-glow)" }} />
            <h2 className="font-display text-3xl md:text-5xl font-bold max-w-2xl mx-auto">
              Tell us your problem. We'll engineer the solution.
            </h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105">
              Request a consultation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
