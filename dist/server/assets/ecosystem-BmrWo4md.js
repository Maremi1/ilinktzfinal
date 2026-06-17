import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { i as ibank, a as ifinance, b as itank, c as imine, d as igrow, e as isupply, f as idetect, g as alma, m as mamamias, h as atomicstar, j as myestate, k as iclean } from "./atomicstar.png.asset-Jhmycved.js";
const pillarFinance = "/assets/pillar-finance-pRAP8iec.jpg";
const pillarResources = "/assets/pillar-resources-CHchOTq2.jpg";
const pillarTrade = "/assets/pillar-trade-BXsPcDge.jpg";
const pillarLifestyle = "/assets/pillar-lifestyle-DbO7w96G.jpg";
const pillars = [{
  id: "finance",
  title: "Finance & Technology",
  subtitle: "Pillar I",
  accent: "from-primary/40 to-accent/30",
  image: pillarFinance,
  brands: [{
    name: "iBank",
    tag: "Banking & Forex Bureau — smart cards, biometric devices, mobile money, SMS gateways.",
    logo: ibank.url
  }, {
    name: "iFinance",
    tag: "Microfinance systems for small groups, biometric field tools and managed investment funds.",
    logo: ifinance.url
  }, {
    name: "i Link Telecom",
    tag: "Premier IT consultation, comprehensive ISP solutions and telecommunications infrastructure."
  }, {
    name: "iTank",
    tag: "Targeted database collection — demographic intelligence powering specialized campaigns.",
    logo: itank.url
  }]
}, {
  id: "resources",
  title: "Resources & Infrastructure",
  subtitle: "Pillar II",
  accent: "from-accent/40 to-secondary/40",
  image: pillarResources,
  brands: [{
    name: "iMine",
    tag: "End-to-end mineral activities — gemstone cutting, domestic sales, certified international marketing.",
    logo: imine.url
  }, {
    name: "iGrow",
    tag: "Agriculture & horticulture — production, processing, domestic and international marketing.",
    logo: igrow.url
  }, {
    name: "iSupply",
    tag: "Reliable supply networks for power, energy, gas and commercial fuel requirements.",
    logo: isupply.url
  }, {
    name: "iDetect",
    tag: "Industrial petroleum services — calibration, inspection, fuel-level detector setups.",
    logo: idetect.url
  }]
}, {
  id: "trade",
  title: "Trade, Retail & Logistics",
  subtitle: "Pillar III",
  accent: "from-secondary/40 to-primary/40",
  image: pillarTrade,
  brands: [{
    name: "Alma Beauty",
    tag: "Cosmetics, Alma clothing line, interior décor and reproductive health products.",
    logo: alma.url
  }, {
    name: "Mama Mia's Soko",
    tag: "E-commerce hub — manufacturer-to-consumer with tiered membership and physical stores.",
    logo: mamamias.url
  }, {
    name: "Dunamis",
    tag: "Coordinated rapid pickup and delivery network with specialized riders."
  }, {
    name: "Rehoboth",
    tag: "Online consultation marketplace — voice and video sessions with experts across fields."
  }]
}, {
  id: "lifestyle",
  title: "Professional Services & Lifestyle",
  subtitle: "Pillar IV",
  accent: "from-primary/30 to-secondary/30",
  image: pillarLifestyle,
  brands: [{
    name: "AtomicStar",
    tag: "PR, HR, employment agency, project management, feasibility studies and i Link media.",
    logo: atomicstar.url
  }, {
    name: "myEstate",
    tag: "Real estate development, property agency, interior design and finance portfolios.",
    logo: myestate.url
  }, {
    name: "myHeritage",
    tag: "Tourism ecosystem — museums, hotels, recreation and land/water/air transport."
  }, {
    name: "iClean",
    tag: "Trusted facility management — cleaning, laundry, grocery, pet care, relocation.",
    logo: iclean.url
  }]
}];
function EcosystemPage() {
  const [active, setActive] = useState(pillars[0].id);
  const current = pillars.find((p) => p.id === active);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-5xl", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-4", children: "The Ecosystem" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold leading-tight", children: [
        "Sixteen brands.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Four pillars." }),
        " One discipline."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-xl text-muted-foreground max-w-3xl leading-relaxed", children: "A unified multi-sector portfolio driven by a single standard of excellence — each brand engineered to integrate, scale and serve." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-12", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "glass-strong rounded-2xl p-2 flex flex-wrap gap-2", children: pillars.map((p) => /* @__PURE__ */ jsxs("button", { onClick: () => setActive(p.id), className: `flex-1 min-w-[180px] rounded-xl px-4 py-3 text-sm font-medium transition-all ${active === p.id ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[var(--shadow-glow)]" : "hover:bg-white/5 text-foreground/80"}`, children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider opacity-70", children: p.subtitle }),
        /* @__PURE__ */ jsx("div", { className: "mt-0.5", children: p.title })
      ] }, p.id)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 relative rounded-3xl overflow-hidden glass-strong p-2 animate-slide-up", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden aspect-[21/9]", children: [
        /* @__PURE__ */ jsx("img", { src: current.image, alt: current.title, className: "w-full h-full object-cover animate-ken-burns", width: 1024, height: 1024, loading: "lazy" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/40 via-background/10 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute left-8 bottom-8 right-8 max-w-md", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-2", children: current.subtitle }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-4xl font-bold", children: current.title })
        ] })
      ] }) }, current.id),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid md:grid-cols-2 gap-5", children: current.brands.map((b, i) => /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl p-7 group relative overflow-hidden animate-slide-up", style: {
        animationDelay: `${i * 80}ms`
      }, children: [
        /* @__PURE__ */ jsx("div", { className: `absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${current.accent} blur-3xl opacity-50` }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            b.logo ? /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-xl bg-white/95 flex items-center justify-center p-1.5 shrink-0", children: /* @__PURE__ */ jsx("img", { src: b.logo, alt: `${b.name} logo`, className: "max-w-full max-h-full object-contain", loading: "lazy" }) }) : /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-display font-bold text-sm", children: b.name.replace(/[^A-Z]/g, "").slice(0, 2) || b.name[0] }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold", children: b.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: b.tag })
        ] })
      ] }, b.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-3", children: "All pillars at a glance" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold", children: "A connected portfolio" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: pillars.map((p) => /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-primary", children: p.subtitle }),
            /* @__PURE__ */ jsx("h3", { className: "font-display text-2xl font-bold mt-1", children: p.title })
          ] }),
          /* @__PURE__ */ jsx("div", { className: `w-14 h-14 rounded-2xl bg-gradient-to-br ${p.accent} blur-[1px]` })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: p.brands.map((b) => /* @__PURE__ */ jsx("span", { className: "glass rounded-lg px-3 py-1.5 text-sm", children: b.name }, b.name)) })
      ] }, p.id)) })
    ] }) })
  ] });
}
export {
  EcosystemPage as component
};
