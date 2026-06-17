import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "Finance & Technology",
    message: ""
  });
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [`*New Inquiry from i Link Website*`, ``, `*Name:* ${form.name}`, `*Company:* ${form.company || "N/A"}`, `*Email:* ${form.email}`, `*Phone:* ${form.phone || "N/A"}`, `*Interest:* ${form.interest}`, ``, `*Message:*`, form.message].join("%0A");
    window.open(`https://wa.me/255765658595?text=${text}`, "_blank");
    setSent(true);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-4", children: "Get in touch" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-5xl md:text-7xl font-bold leading-tight", children: [
        "All we need is ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "a chance" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed", children: "Tell us about your business. We'll respond with a tailored path forward — agile, considered, and built around your reality." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-6xl", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-5 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3 glass-strong rounded-3xl p-8 md:p-10", children: sent ? /* @__PURE__ */ jsxs("div", { className: "py-16 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5 text-3xl text-primary", children: "✓" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-3xl font-bold", children: "Message received" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Thank you — our team will reply within one business day." })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(Field, { label: "Full name", name: "name", required: true, value: form.name, onChange: handleChange }),
          /* @__PURE__ */ jsx(Field, { label: "Company", name: "company", value: form.company, onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", required: true, value: form.email, onChange: handleChange }),
          /* @__PURE__ */ jsx(Field, { label: "Phone", name: "phone", type: "tel", value: form.phone, onChange: handleChange })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2 block", children: "Area of interest" }),
          /* @__PURE__ */ jsxs("select", { name: "interest", value: form.interest, onChange: handleChange, className: "w-full glass rounded-xl px-4 py-3 bg-background/40 outline-none focus:border-primary transition", children: [
            /* @__PURE__ */ jsx("option", { className: "bg-background", children: "Finance & Technology" }),
            /* @__PURE__ */ jsx("option", { className: "bg-background", children: "Resources & Infrastructure" }),
            /* @__PURE__ */ jsx("option", { className: "bg-background", children: "Trade, Retail & Logistics" }),
            /* @__PURE__ */ jsx("option", { className: "bg-background", children: "Professional Services & Lifestyle" }),
            /* @__PURE__ */ jsx("option", { className: "bg-background", children: "Other" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2 block", children: "Tell us about your project" }),
          /* @__PURE__ */ jsx("textarea", { name: "message", rows: 5, required: true, value: form.message, onChange: handleChange, className: "w-full glass rounded-xl px-4 py-3 bg-background/40 outline-none focus:border-primary transition resize-none", placeholder: "A few sentences about what you're trying to build, fix or scale..." })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "submit", className: "w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-7 py-3.5 font-semibold text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all hover:scale-[1.02]", children: [
          "Send message ",
          /* @__PURE__ */ jsx("span", { "aria-hidden": true, children: "→" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-5", children: [
        /* @__PURE__ */ jsx(InfoCard, { label: "Office", value: "Dar es Salaam, Tanzania", icon: "◉" }),
        /* @__PURE__ */ jsx(InfoCard, { label: "Phone", value: "+255 765 658 595", href: "tel:+255765658595", icon: "✆" }),
        /* @__PURE__ */ jsx(InfoCard, { label: "Email", value: "info@ilinkbiz.com", href: "mailto:info@ilinkbiz.com", icon: "✉" }),
        /* @__PURE__ */ jsx(InfoCard, { label: "Web", value: "www.ilinkbiz.com", href: "https://www.ilinkbiz.com", icon: "◐" }),
        /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-3xl p-6", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-primary mb-2", children: "Hours" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Mon — Fri" }),
              /* @__PURE__ */ jsx("span", { children: "08:00 — 18:00" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Sat" }),
              /* @__PURE__ */ jsx("span", { children: "09:00 — 13:00" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Sun" }),
              /* @__PURE__ */ jsx("span", { children: "Closed" })
            ] })
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: name, className: "text-xs uppercase tracking-wider text-muted-foreground mb-2 block", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsx("input", { id: name, name, type, required, value, onChange, className: "w-full glass rounded-xl px-4 py-3 bg-background/40 outline-none focus:border-primary transition" })
  ] });
}
function InfoCard({
  label,
  value,
  href,
  icon
}) {
  const inner = /* @__PURE__ */ jsxs("div", { className: "glass-card rounded-2xl p-5 flex items-center gap-4 group", children: [
    /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center text-xl text-primary group-hover:scale-110 transition-transform", children: icon }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("div", { className: "font-medium mt-0.5", children: value })
    ] })
  ] });
  return href ? /* @__PURE__ */ jsx("a", { href, children: inner }) : inner;
}
export {
  ContactPage as component
};
