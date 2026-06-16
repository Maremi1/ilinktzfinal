import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — iLink Tanzania" },
      { name: "description", content: "Reach iLink Tanzania in Dar es Salaam. Call +255 765 658 595 or email info@ilinkbiz.com to start a partnership." },
      { property: "og:title", content: "Contact iLink Tanzania" },
      { property: "og:description", content: "Start a conversation. We are potential." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "Finance & Technology",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `*New Inquiry from iLink Website*`,
      ``,
      `*Name:* ${form.name}`,
      `*Company:* ${form.company || "N/A"}`,
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone || "N/A"}`,
      `*Interest:* ${form.interest}`,
      ``,
      `*Message:*`,
      form.message,
    ].join("%0A");
    window.open(`https://wa.me/255765658595?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-xs uppercase tracking-[0.25em] text-primary mb-4">Get in touch</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
            All we need is <span className="text-gradient">a chance</span>.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Tell us about your business. We'll respond with a tailored path forward —
            agile, considered, and built around your reality.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Form */}
            <div className="lg:col-span-3 glass-strong rounded-3xl p-8 md:p-10">
              {sent ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5 text-3xl text-primary">✓</div>
                  <h2 className="font-display text-3xl font-bold">Message received</h2>
                  <p className="mt-3 text-muted-foreground">Thank you — our team will reply within one business day.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Full name" name="name" required />
                    <Field label="Company" name="company" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <Field label="Email" name="email" type="email" required />
                    <Field label="Phone" name="phone" type="tel" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Area of interest
                    </label>
                    <select className="w-full glass rounded-xl px-4 py-3 bg-background/40 outline-none focus:border-primary transition">
                      <option className="bg-background">Finance & Technology</option>
                      <option className="bg-background">Resources & Infrastructure</option>
                      <option className="bg-background">Trade, Retail & Logistics</option>
                      <option className="bg-background">Professional Services & Lifestyle</option>
                      <option className="bg-background">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full glass rounded-xl px-4 py-3 bg-background/40 outline-none focus:border-primary transition resize-none"
                      placeholder="A few sentences about what you're trying to build, fix or scale..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:scale-[1.02]"
                  >
                    Send message <span aria-hidden>→</span>
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              <InfoCard label="Office" value="Dar es Salaam, Tanzania" icon="◉" />
              <InfoCard label="Phone" value="+255 765 658 595" href="tel:+255765658595" icon="✆" />
              <InfoCard label="Email" value="info@ilinkbiz.com" href="mailto:info@ilinkbiz.com" icon="✉" />
              <InfoCard label="Web" value="www.ilinkbiz.com" href="https://www.ilinkbiz.com" icon="◐" />

              <div className="glass-card rounded-3xl p-6">
                <div className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Hours</div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Mon — Fri</span><span>08:00 — 18:00</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Sat</span><span>09:00 — 13:00</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Sun</span><span>Closed</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
        {label}{required && " *"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full glass rounded-xl px-4 py-3 bg-background/40 outline-none focus:border-primary transition"
      />
    </div>
  );
}

function InfoCard({ label, value, href, icon }: { label: string; value: string; href?: string; icon: string }) {
  const inner = (
    <div className="glass-card rounded-2xl p-5 flex items-center gap-4 group">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-xl text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="font-medium mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
