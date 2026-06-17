import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/ilinktanzanialogo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="relative mt-32">
      <div className="container mx-auto px-4 pb-10">
        <div className="glass-strong rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-3">
                <img src={logoAsset.url} alt="i Link" className="h-12 w-auto rounded-xl object-contain" />
              </Link>
              <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
                A multi-sector conglomerate engineering bespoke ICT and marketing
                solutions across 16 specialized brands and four operational pillars.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/90">
                Explore
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/ecosystem" className="hover:text-primary transition-colors">Ecosystem</Link></li>
                <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-foreground/90">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Dar es Salaam, Tanzania</li>
                <li><a href="tel:+255765658595" className="hover:text-primary transition-colors">+255 765 658 595</a></li>
                <li><a href="mailto:info@ilinkbiz.com" className="hover:text-primary transition-colors">info@ilinkbiz.com</a></li>
                <li><a href="https://www.ilinkbiz.com" className="hover:text-primary transition-colors">www.ilinkbiz.com</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
            <div>© {new Date().getFullYear()} i Link Tanzania. All rights reserved.</div>
            <div>Local execution, global standards.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
