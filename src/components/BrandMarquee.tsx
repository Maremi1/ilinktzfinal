import itank from "@/assets/brands/itank.png.asset.json";
import ifinance from "@/assets/brands/ifinance.png.asset.json";
import imine from "@/assets/brands/imine.png.asset.json";
import idetect from "@/assets/brands/idetect.png.asset.json";
import igrow from "@/assets/brands/igrow.png.asset.json";
import alma from "@/assets/brands/alma-beauty.png.asset.json";
import mamamias from "@/assets/brands/mamamias.png.asset.json";
import isupply from "@/assets/brands/isupply.png.asset.json";
import myestate from "@/assets/brands/myestate.png.asset.json";
import iclean from "@/assets/brands/iclean.png.asset.json";

type Item = { name: string; logo?: string };

const items: Item[] = [
  { name: "iBank" },
  { name: "iFinance", logo: ifinance.url },
  { name: "iLink Telecom" },
  { name: "iTank", logo: itank.url },
  { name: "iMine", logo: imine.url },
  { name: "iGrow", logo: igrow.url },
  { name: "iSupply", logo: isupply.url },
  { name: "iDetect", logo: idetect.url },
  { name: "Alma Beauty", logo: alma.url },
  { name: "Mama Mia's Soko", logo: mamamias.url },
  { name: "Dunamis" },
  { name: "Rehoboth" },
  { name: "AtomicStar" },
  { name: "myEstate", logo: myestate.url },
  { name: "myHeritage" },
  { name: "iClean", logo: iclean.url },
];

export function BrandMarquee() {
  const loop = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden py-6 glass rounded-2xl"
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
        {loop.map((b, i) => (
          <div key={i} className="flex items-center gap-3 shrink-0 h-12">
            {b.logo ? (
              <img
                src={b.logo}
                alt={b.name}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-display font-semibold text-lg text-foreground/80">{b.name}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
