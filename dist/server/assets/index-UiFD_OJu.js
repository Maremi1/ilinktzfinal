import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { t as teamMeeting } from "./team-meeting-DcWP3Hiu.js";
import { i as ibank, a as ifinance, b as itank, c as imine, d as igrow, e as isupply, f as idetect, g as alma, m as mamamias, h as atomicstar, j as myestate, k as iclean } from "./atomicstar.png.asset-Jhmycved.js";
const heroBg = "/assets/hero-bg-D_AexbjT.jpg";
const networkOrb = "/assets/network-orb-zE_PSy7G.jpg";
const worldMap = "/assets/world-map-DcnFNFDw.jpg";
const items = [
  { name: "iBank", logo: ibank.url },
  { name: "iFinance", logo: ifinance.url },
  { name: "i Link Telecom" },
  { name: "iTank", logo: itank.url },
  { name: "iMine", logo: imine.url },
  { name: "iGrow", logo: igrow.url },
  { name: "iSupply", logo: isupply.url },
  { name: "iDetect", logo: idetect.url },
  { name: "Alma Beauty", logo: alma.url },
  { name: "Mama Mia's Soko", logo: mamamias.url },
  { name: "Dunamis" },
  { name: "Rehoboth" },
  { name: "AtomicStar", logo: atomicstar.url },
  { name: "myEstate", logo: myestate.url },
  { name: "myHeritage" },
  { name: "iClean", logo: iclean.url }
];
function BrandMarquee() {
  const loop = [...items, ...items];
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative overflow-hidden py-6 glass rounded-2xl",
      style: {
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      },
      children: /* @__PURE__ */ jsx("div", { className: "flex gap-12 animate-marquee whitespace-nowrap items-center", children: loop.map((b, i) => /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 shrink-0 h-12", children: b.logo ? /* @__PURE__ */ jsx(
        "img",
        {
          src: b.logo,
          alt: b.name,
          className: "h-10 w-auto object-contain",
          loading: "lazy"
        }
      ) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-primary" }),
        /* @__PURE__ */ jsx("span", { className: "font-display font-semibold text-lg text-foreground/80", children: b.name })
      ] }) }, i)) })
    }
  );
}
const pillars = [{
  name: "Operational Excellence",
  desc: "Uncompromising service backed by latest technologies and trained personnel.",
  icon: "◆"
}, {
  name: "Agility & Timeliness",
  desc: "Rapid response and continuous communication to deliver needs-based solutions.",
  icon: "◈"
}, {
  name: "Depth of Knowledge",
  desc: "Vast expertise through deep technological alliances and lifecycle support.",
  icon: "◇"
}, {
  name: "Market Penetration",
  desc: "Targeted niche marketing strategies maintaining a dominant competitive position.",
  icon: "◉"
}];
const stats = [{
  value: "16",
  label: "Specialized Brands"
}, {
  value: "4",
  label: "Operational Pillars"
}, {
  value: "3",
  label: "Market Tiers"
}, {
  value: "1",
  label: "Unified Standard"
}];
function Index() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[90vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("img", { src: heroBg, alt: "", className: "w-full h-full object-cover opacity-40 animate-ken-burns", width: 1920, height: 1080 }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "animate-slide-up", children: [
          /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight", children: [
            "Bridging ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "ideas" }),
            /* @__PURE__ */ jsx("br", {}),
            "with reality."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed", children: "i Link Tanzania engineers bespoke ICT and marketing solutions — linking businesses, communities and customers across sixteen specialized brands." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/ecosystem", className: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3.5 font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105", children: [
              "Explore the ecosystem ",
              /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "glass-strong inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold hover:border-primary/50 transition", children: "Partner with us" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-4 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-4 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-display font-bold text-gradient", children: s.value }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground", children: s.label })
          ] }, s.label)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative hidden lg:block", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-primary/30 blur-[100px] animate-pulse-glow" }),
          /* @__PURE__ */ jsx("img", { src: networkOrb, alt: "Connected ecosystem", className: "relative animate-float rounded-full", width: 1024, height: 1024 }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 -right-4 glass-strong rounded-2xl px-4 py-3 animate-float", style: {
            animationDelay: "1s"
          }, children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Connected Brands" }),
            /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-2xl text-gradient", children: "16" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -left-4 glass-strong rounded-2xl px-4 py-3 animate-float", style: {
            animationDelay: "2s"
          }, children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Pillars" }),
            /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-2xl text-gradient", children: "4" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "A portfolio of sixteen brands" }),
      /* @__PURE__ */ jsx(BrandMarquee, {})
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
      title: "Vision",
      body: "To be a trusted, reliable, and sought-after local and international business partner."
    }, {
      title: "Mission",
      body: "Linking businesses by engineering bespoke ICT and marketing solutions for various institutions."
    }, {
      title: "Goal",
      body: "Identifying community problems and delivering customized, value-added technological services that integrate seamlessly into existing workflows."
    }].map((b, i) => /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl p-8 relative overflow-hidden", style: {
      animationDelay: `${i * 100}ms`
    }, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/20 blur-2xl" }),
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-3", children: b.title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed", children: b.body })
    ] }, b.title)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-3", children: "Competitive Advantage" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold", children: "The four vectors of our edge" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: pillars.map((p) => /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl p-7 group", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-2xl text-primary mb-5 group-hover:scale-110 transition-transform", children: p.icon }),
        /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-lg mb-2", children: p.name }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.desc })
      ] }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-10 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-3", children: "Global to Local" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold leading-tight", children: [
          "Rooted in Tanzania.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Connected to the world." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground text-lg leading-relaxed", children: "From Dar es Salaam, our ecosystem reaches across borders — moving minerals, capital, ideas and goods through trusted international partnerships." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-3 gap-3", children: [{
          v: "3",
          l: "Continents"
        }, {
          v: "16",
          l: "Brands"
        }, {
          v: "24/7",
          l: "Operations"
        }].map((s) => /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-2xl p-4 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-bold text-gradient", children: s.v }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-1", children: s.l })
        ] }, s.l)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/20 blur-[100px] rounded-full" }),
        /* @__PURE__ */ jsxs("div", { className: "relative glass-strong rounded-3xl p-4 overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: worldMap, alt: "Global network reach", className: "w-full rounded-2xl", width: 1600, height: 900, loading: "lazy" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-8 left-8 glass rounded-xl px-3 py-2 text-xs", children: [
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: "HQ" }),
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Dar es Salaam" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-3", children: "Group Structure" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold mb-6", children: [
          "World-class infrastructure,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "local execution." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Three coordinated entities power our delivery — from global IP management to regional oversight to ground-level operations in Tanzania." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [{
        name: "i Link Global Holdings",
        role: "The IP Engine",
        body: "Acquires, licenses and manages proprietary methodologies, software, AI systems and trademarked brands globally."
      }, {
        name: "i Link International",
        role: "Regional Coordination",
        body: "Structures cross-border investments, financial oversight and regional joint ventures."
      }, {
        name: "i Link Tanzania",
        role: "Ground Operations",
        body: "Adapts licensed global systems to the Tanzanian market with direct client delivery and local service management."
      }].map((e, i) => /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-2xl p-6 flex gap-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-display text-3xl font-bold text-gradient w-10", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-primary", children: e.role }),
          /* @__PURE__ */ jsx("h3", { className: "font-display font-semibold text-lg mt-1", children: e.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2 leading-relaxed", children: e.body })
        ] })
      ] }, e.name)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-stretch", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden glass-strong p-2 group", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl", children: [
          /* @__PURE__ */ jsx("img", { src: teamMeeting, alt: "The i Link Tanzania team collaborating", className: "w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700", width: 1600, height: 1200, loading: "lazy" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6 glass-strong rounded-2xl p-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider text-primary", children: "Our People" }),
            /* @__PURE__ */ jsx("div", { className: "font-display font-semibold text-lg", children: "Trained · Trusted · Tireless" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-3xl", children: "◉" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-3", children: "The Culture" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-5xl font-bold leading-tight", children: [
          "A team built for ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "excellence" }),
          "."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground text-lg leading-relaxed", children: "Every i Link employee is selected, trained and supported to deliver with discipline. We believe people are the bridge between strategy and result." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 space-y-3", children: [{
          k: "Confidentiality",
          v: "Built into every workflow and contract."
        }, {
          k: "Continuous training",
          v: "We invest deeply in our personnel."
        }, {
          k: "Local pride",
          v: "Tanzanian roots, world-class delivery."
        }].map((x) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-xl p-4 flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0", children: "✓" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: x.k }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: x.v })
          ] })
        ] }, x.k)) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-50", style: {
        background: "var(--gradient-glow)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-4", children: "Your partner in business" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight", children: [
        "All we need is ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "a chance" }),
        " to add value to your business."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground max-w-xl mx-auto", children: "An opportunity for us to add value to you — and for you to add value to ours. We are potential." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105", children: [
        "Start the conversation ",
        /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
      ] })
    ] }) }) })
  ] });
}
export {
  Index as component
};
