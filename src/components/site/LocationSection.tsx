import { ArrowUpRight, MapPin, Truck } from "lucide-react";

import { MAPS, PHONE, TEL } from "@/lib/site-data";
import { SectionLabel } from "@/components/site/ui";
import intrareClosca from "@/assets/locatie-closca-verde.jpg";
import dubaInterventie from "@/assets/duba-interventie.jpg";

const places = [
  {
    img: intrareClosca,
    icon: MapPin,
    tag: "Locație fixă",
    title: "Intrarea în atelier",
    text: "Str. Cloșca 33, Timișoara. Recunoști ușor fața clădirii — mașina verde e parcată în dreptul intrării.",
    href: MAPS,
    external: true,
    cta: "Deschide în Google Maps",
    alt: "Intrarea în atelierul Vulcanizare Non Stop Timișoara de pe Str. Cloșca 33, cu mașina verde parcată în față",
  },
  {
    img: dubaInterventie,
    icon: Truck,
    tag: "Echipă mobilă",
    title: "Duba de intervenție",
    text: "Pornește din Cloșca 33 spre tot județul Timiș și pe A1, cu aparatură de ultimă generație la bord.",
    href: `tel:${TEL}`,
    external: false,
    cta: `Sună: ${PHONE}`,
    alt: "Duba de intervenție Vulcanizare Auto Non Stop parcată în fața atelierului de pe Str. Cloșca 33",
  },
];

export function LocationSection() {
  return (
    <section id="locatie" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:py-20">
      <div className="max-w-2xl">
        <SectionLabel>Locația noastră · Timișoara</SectionLabel>
        <h2 className="mt-3 text-[1.75rem] font-black leading-[1.1] tracking-tight sm:text-4xl">
          Locație fixă și echipă mobilă, ambele din Cloșca 33.
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          Vii la noi oricând, zi sau noapte — recunoști intrarea din stradă. Iar dacă nu poți ajunge, duba de intervenție vine la tine.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2">
        {places.map((place) => (
          <a
            key={place.tag}
            href={place.href}
            target={place.external ? "_blank" : undefined}
            rel={place.external ? "noopener noreferrer" : undefined}
            className="group relative flex min-w-0 flex-col overflow-hidden rounded-[24px] border border-border bg-card shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-float"
          >
            <div className="relative min-w-0 overflow-hidden">
              <img
                src={place.img}
                alt={place.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-foreground shadow-card backdrop-blur">
                <place.icon className="size-3.5 text-brand" /> {place.tag}
              </span>
            </div>
            <div className="flex min-w-0 flex-1 flex-col p-5">
              <h3 className="text-lg font-black leading-snug">{place.title}</h3>
              <p className="mt-2 min-w-0 text-[13px] leading-relaxed text-muted-foreground">{place.text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 border-t border-border pt-4 text-[13px] font-bold text-brand">
                {place.cta}
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
