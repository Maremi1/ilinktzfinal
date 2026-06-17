import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { a as abstractCube } from "./abstract-cube-DTu7TfI8.js";
const svcIct = "/assets/svc-ict-mUynocUO.jpg";
const svcFinance = "/assets/svc-finance-Clmi5Wxm.jpg";
const svcData = "/assets/svc-data-CZycqWi7.jpg";
const svcResources = "/assets/svc-resources-BcmKwq3g.jpg";
const svcTrade = "/assets/svc-trade-DEDCSX0S.jpg";
const svcLogistics = "/assets/svc-logistics-BT0xIjUQ.jpg";
const svcRealestate = "/assets/svc-realestate-6JFAsThW.jpg";
const svcTourism = "/assets/svc-tourism-CthTxNFC.jpg";
const svcConsultation = "/assets/svc-consultation-fxQDTJD1.jpg";
const services = [{
  icon: "⌬",
  image: svcIct,
  title: "ICT & Telecommunications",
  body: "Premier IT consultation, ISP solutions, infrastructure design and managed services across enterprise environments."
}, {
  icon: "◈",
  image: svcFinance,
  title: "Financial Systems",
  body: "Banking & forex platforms, smart card issuance, biometric authentication, microfinance systems and managed investment funds."
}, {
  icon: "◊",
  image: svcData,
  title: "Data Intelligence",
  body: "Targeted demographic database collection and management powering precision marketing campaigns."
}, {
  icon: "△",
  image: svcResources,
  title: "Resources & Supply",
  body: "Mineral marketing, agricultural lifecycle management, petroleum services and reliable energy supply networks."
}, {
  icon: "◇",
  image: svcTrade,
  title: "Trade & E-commerce",
  body: "Direct manufacturer-to-consumer distribution, importation, retail networks and tiered membership platforms."
}, {
  icon: "◯",
  image: svcLogistics,
  title: "Logistics & Delivery",
  body: "Coordinated rapid pickup and last-mile delivery with specialized riders for vendor-to-customer execution."
}, {
  icon: "▣",
  image: svcRealestate,
  title: "Real Estate & Facilities",
  body: "Property development, agency, interior design, facility management, cleaning, laundry and relocation."
}, {
  icon: "✦",
  image: svcTourism,
  title: "Tourism & Hospitality",
  body: "Hotels, museums, recreational centers and integrated land, water and air transport solutions."
}, {
  icon: "⬢",
  image: svcConsultation,
  title: "Consultation Marketplace",
  body: "Online consultation platform enabling seamless voice and video sessions between experts and clients."
}];
const process = [{
  step: "01",
  title: "Discover",
  body: "We listen to your problem deeply — mapping workflows, constraints and opportunities."
}, {
  step: "02",
  title: "Design",
  body: "Bespoke architecture: not templates. Engineered for your sector, scale and timeline."
}, {
  step: "03",
  title: "Deliver",
  body: "Rapid execution backed by trained personnel and continuous, transparent communication."
}, {
  step: "04",
  title: "Sustain",
  body: "Lifecycle support — integration, training, maintenance and iterative improvement."
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-10 items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-4", children: "What we do" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold leading-tight", children: [
          "End-to-end ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "solutions" }),
          /* @__PURE__ */ jsx("br", {}),
          "engineered for impact."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed", children: "Every service is built to integrate seamlessly with your existing workflows — backed by trained personnel, deep technological alliances and uncompromising confidentiality." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 relative hidden lg:block", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/30 blur-[100px] rounded-full" }),
        /* @__PURE__ */ jsx("img", { src: abstractCube, alt: "Abstract systems cube", className: "relative animate-float rounded-3xl", width: 1024, height: 1024, loading: "lazy" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl overflow-hidden group animate-slide-up flex flex-col", style: {
      animationDelay: `${i * 60}ms`
    }, children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-[16/10] overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: s.image, alt: s.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700", width: 1024, height: 768, loading: "lazy" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 w-11 h-11 rounded-xl glass-strong flex items-center justify-center text-xl text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform", children: s.icon })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-7 pt-5", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold mb-2", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: s.body })
      ] })
    ] }, s.title)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-3", children: "How we work" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold", children: "Disciplined. Iterative. Transparent." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: process.map((p, i) => /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl p-7 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-display font-bold text-gradient opacity-90", children: p.step }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-xl font-semibold", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.body }),
        i < process.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/40" })
      ] }, p.step)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-50", style: {
        background: "var(--gradient-glow)"
      } }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl md:text-5xl font-bold max-w-2xl mx-auto", children: "Tell us your problem. We'll engineer the solution." }),
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105", children: [
        "Request a consultation ",
        /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
      ] })
    ] }) }) })
  ] });
}
export {
  ServicesPage as component
};
