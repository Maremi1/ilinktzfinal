import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
const appCss = "/assets/styles-Cle6qRRk.css";
const url = "/__l5e/assets-v1/dc47d266-2b90-454d-9185-fc64f1ab686c/ilinktanzanialogo.png";
const logoAsset = {
  url
};
function getInitial() {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = getInitial();
    setTheme(t);
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);
  const toggle = () => setTheme((t) => t === "dark" ? "light" : "dark");
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: toggle,
      "aria-label": `Switch to ${isDark ? "light" : "dark"} theme`,
      title: `Switch to ${isDark ? "light" : "dark"} theme`,
      className: "glass relative h-10 w-10 rounded-xl flex items-center justify-center hover:border-primary/50 transition-all hover:scale-105 group overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("span", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" }),
        /* @__PURE__ */ jsx("span", { className: "relative text-base transition-transform duration-500", style: { transform: isDark ? "rotate(0deg)" : "rotate(180deg)" }, children: isDark ? /* @__PURE__ */ jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }) }) : /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4" }),
          /* @__PURE__ */ jsx("path", { d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" })
        ] }) })
      ]
    }
  );
}
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ecosystem", label: "Ecosystem" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `glass-strong rounded-2xl flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-500 ${scrolled ? "shadow-[0_8px_40px_-10px_oklch(0.10_0.05_260/0.5)]" : ""}`,
            children: [
              /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-3 group", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-xl bg-primary/30 blur-lg group-hover:blur-xl transition-all" }),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: logoAsset.url,
                    alt: "i Link Tanzania",
                    className: "relative h-10 w-auto rounded-xl object-contain"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", children: nav.map((n) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: n.to,
                  className: "px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-white/5 transition-all relative",
                  activeProps: { className: "px-4 py-2 text-sm font-medium text-primary rounded-lg bg-white/5 relative" },
                  activeOptions: { exact: n.to === "/" },
                  children: n.label
                },
                n.to
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ThemeToggle, {}),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: "/contact",
                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-105",
                    children: [
                      "Get in touch",
                      /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "md:hidden flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ThemeToggle, {}),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    className: "glass rounded-lg p-2",
                    onClick: () => setOpen(!open),
                    "aria-label": "Toggle menu",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "w-5 h-0.5 bg-foreground mb-1" }),
                      /* @__PURE__ */ jsx("div", { className: "w-5 h-0.5 bg-foreground mb-1" }),
                      /* @__PURE__ */ jsx("div", { className: "w-5 h-0.5 bg-foreground" })
                    ]
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden glass-strong rounded-2xl mt-2 p-4 flex flex-col gap-1 animate-slide-up", children: nav.map((n) => /* @__PURE__ */ jsx(
          Link,
          {
            to: n.to,
            onClick: () => setOpen(false),
            className: "px-4 py-3 rounded-lg hover:bg-white/5 text-sm font-medium",
            activeProps: { className: "px-4 py-3 rounded-lg bg-white/5 text-primary text-sm font-medium" },
            activeOptions: { exact: n.to === "/" },
            children: n.label
          },
          n.to
        )) })
      ] })
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "relative mt-32", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 pb-10", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-3xl p-8 md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center gap-3", children: /* @__PURE__ */ jsx("img", { src: logoAsset.url, alt: "i Link", className: "h-12 w-auto rounded-xl object-contain" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-muted-foreground max-w-md leading-relaxed", children: "A multi-sector conglomerate engineering bespoke ICT and marketing solutions across 16 specialized brands and four operational pillars." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/90", children: "Explore" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-primary transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/ecosystem", className: "hover:text-primary transition-colors", children: "Ecosystem" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:text-primary transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/90", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "Dar es Salaam, Tanzania" }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "tel:+255765658595", className: "hover:text-primary transition-colors", children: "+255 765 658 595" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "mailto:info@ilinkbiz.com", className: "hover:text-primary transition-colors", children: "info@ilinkbiz.com" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.ilinkbiz.com", className: "hover:text-primary transition-colors", children: "www.ilinkbiz.com" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " i Link Tanzania. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("div", { children: "Local execution, global standards." })
    ] })
  ] }) }) });
}
function AmbientBackground() {
  return /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 -z-10 overflow-hidden pointer-events-none", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[140px] animate-pulse-glow", style: { animationDelay: "2s" } }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[120px] animate-pulse-glow", style: { animationDelay: "4s" } }),
    /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 w-full h-full opacity-[0.04]", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "grid", width: "60", height: "60", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M 60 0 L 0 0 0 60", fill: "none", stroke: "currentColor", strokeWidth: "1" }) }) }),
      /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#grid)" })
    ] })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-3xl p-10 max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-display font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsx(Link, { to: "/", className: "mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition", children: "Go home" })
  ] }) });
}
const Route$5 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "i Link Tanzania" },
      { name: "description", content: "i Link Tanzania engineers bespoke ICT and marketing solutions across 16 brands and four operational pillars." },
      { property: "og:title", content: "i Link Tanzania" },
      { property: "og:description", content: "i Link Tanzania engineers bespoke ICT and marketing solutions across 16 brands and four operational pillars." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "i Link Tanzania" },
      { name: "twitter:description", content: "i Link Tanzania engineers bespoke ICT and marketing solutions across 16 brands and four operational pillars." },
      { property: "og:image", content: "https://tanzania.ilinkbiz.com/og-image.jpeg" },
      { name: "twitter:image", content: "https://tanzania.ilinkbiz.com/og-image.jpeg" }
    ],
    links: [
      { rel: "canonical", href: "https://tanzania.ilinkbiz.com" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}if(t==='dark'){document.documentElement.classList.add('dark');}document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.classList.add('dark');}})();`;
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "i Link Tanzania",
  "url": "https://tanzania.ilinkbiz.com",
  "logo": "https://tanzania.ilinkbiz.com/og-image.jpeg",
  "description": "i Link Tanzania engineers bespoke ICT and marketing solutions across 16 brands and four operational pillars."
};
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(HeadContent, {}),
      /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: { __html: themeInitScript } }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(jsonLd) } })
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AmbientBackground, {}),
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
const $$splitComponentImporter$4 = () => import("./services-Cc2rkDcP.js");
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — i Link Tanzania"
    }, {
      name: "description",
      content: "ICT consulting, financial systems, supply networks, e-commerce, delivery, real estate, tourism and consultation services delivered with operational excellence."
    }, {
      property: "og:title",
      content: "Services — i Link Tanzania"
    }, {
      property: "og:description",
      content: "End-to-end solutions across technology, finance, infrastructure, trade and lifestyle."
    }],
    links: [{
      rel: "canonical",
      href: "https://tanzania.ilinkbiz.com/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./ecosystem-BmrWo4md.js");
const Route$3 = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [{
      title: "Ecosystem — i Link Tanzania"
    }, {
      name: "description",
      content: "Sixteen specialized brands organized into four operational pillars: Finance & Tech, Resources & Infrastructure, Trade & Logistics, and Professional Services & Lifestyle."
    }, {
      property: "og:title",
      content: "The i Link Ecosystem"
    }, {
      property: "og:description",
      content: "Explore 16 brands across 4 pillars driving Tanzania's multi-sector innovation."
    }],
    links: [{
      rel: "canonical",
      href: "https://tanzania.ilinkbiz.com/ecosystem"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-BELfyqXY.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — i Link Tanzania"
    }, {
      name: "description",
      content: "Reach i Link Tanzania in Dar es Salaam. Call +255 765 658 595 or email info@ilinkbiz.com to start a partnership."
    }, {
      property: "og:title",
      content: "Contact i Link Tanzania"
    }, {
      property: "og:description",
      content: "Start a conversation. We are potential."
    }],
    links: [{
      rel: "canonical",
      href: "https://tanzania.ilinkbiz.com/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-CB0DOh4d.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — i Link Tanzania"
    }, {
      name: "description",
      content: "Learn about i Link Tanzania — our vision, mission, governance and the values that drive our multi-sector ecosystem."
    }, {
      property: "og:title",
      content: "About i Link Tanzania"
    }, {
      property: "og:description",
      content: "A trusted, sought-after business partner — bridging ideas with reality through ICT and marketing solutions."
    }],
    links: [{
      rel: "canonical",
      href: "https://tanzania.ilinkbiz.com/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-UiFD_OJu.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "i Link Tanzania — Bridging Ideas with Reality"
    }, {
      name: "description",
      content: "Engineering bespoke ICT and marketing solutions across 16 specialized brands and four operational pillars in Tanzania."
    }, {
      property: "og:title",
      content: "i Link Tanzania — Bridging Ideas with Reality"
    }, {
      property: "og:description",
      content: "Engineering bespoke ICT and marketing solutions across 16 specialized brands and four operational pillars in Tanzania."
    }],
    links: [{
      rel: "canonical",
      href: "https://tanzania.ilinkbiz.com/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$5
});
const EcosystemRoute = Route$3.update({
  id: "/ecosystem",
  path: "/ecosystem",
  getParentRoute: () => Route$5
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$5
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$5
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$5
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  EcosystemRoute,
  ServicesRoute
};
const routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
