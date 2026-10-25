import { ArrowUpRight, MapPin, Truck } from "lucide-react";

import { MAPS, PHONE, TEL } from "@/lib/site-data";
import { SectionLabel } from "@/components/site/ui";
import fataAtelier from "@/assets/locatie-closca-33.jpg";
import dubaInterventie from "@/assets/duba-interventie.jpg";

const places = [
  {
    img: fataAtelier,
    icon: MapPin,
    tag: "Locație fixă",
    address: "Str. Cloșca 33",
    title: "Intrarea în atelier",
    text: "Recunoști intrarea după mașina verde.",
    href: MAPS,
    external: true,
    cta: "Deschide în Google Maps",
    pos: "object-[50%_75%]",
    ratio: "aspect-[16/10] md:aspect-auto md:h-[320px]",
    alt: "Fața atelierului Vulcanizare Non Stop de pe Str. Cloșca 33 Timișoara: mașina verde cu numărul 95 parcată în față, panoul roșu cu telefonul 0725 138 493 și omul gonflabil de service roți pe trotuar",
  },
  {
    img: dubaInterventie,
    icon: Truck,
    tag: "Echipă mobilă",
    address: null,
    title: "Duba de intervenție",
    text: "Pornește din Cloșca 33 spre tot județul Timiș și pe A1, cu aparatură de ultimă generație la bord.",
    href: `tel:${TEL}`,
    external: false,
    cta: `Sună: ${PHONE}`,
    pos: "object-[center_88%]",
    ratio: "aspect-[16/10] md:aspect-auto md:h-[320px]",
    alt: "Duba de intervenție Vulcanizare Auto Non Stop parcată în fața atelierului de pe Str. Cloșca 33",
  },
];

export function LocationSection() {
  return (
    <section id="locatie" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:py-16">
      <div className="min-w-0 max-w-2xl">
        <SectionLabel>Locația noastră · Timișoara</SectionLabel>
        <h2 className="mt-3 text-[1.5rem] font-black leading-[1.1] tracking-tight sm:text-[1.9rem]">
          Locație fixă și echipă mobilă, ambele din Cloșca 33.
        </h2>
      </div>

      <div className="mt-5 grid gap-3 sm:mt-7 md:grid-cols-5">
        {places.map((place) => (
          <a
            key={place.tag}
            href={place.href}
            target={place.external ? "_blank" : undefined}
            rel={place.external ? "noopener noreferrer" : undefined}
            className={`group relative min-w-0 overflow-hidden rounded-[22px] border border-border shadow-card transition-all hover:-translate-y-0.5 hover:shadow-float ${place.ratio} ${
              place.external ? "md:col-span-3" : "md:col-span-2"
            }`}
          >
            <img
              src={place.img}
              alt={place.alt}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${place.pos}`}
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-foreground/5" />

            <div className="absolute inset-x-3 top-3 flex min-w-0 flex-wrap items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-foreground shadow-card backdrop-blur">
                <place.icon className="size-3 text-brand" /> {place.tag}
              </span>
              {place.address && (
                <span className="inline-flex items-center rounded-full bg-background/60 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.1em] text-foreground/75 backdrop-blur">
                  {place.address}
                </span>
              )}
            </div>

            <div className="absolute inset-x-4 bottom-3.5 min-w-0">
              <h3 className="min-w-0 text-[17px] font-black leading-snug text-background sm:text-xl">{place.title}</h3>
              <p className="mt-1 min-w-0 max-w-md text-[11.5px] font-semibold leading-snug text-background/75">{place.text}</p>
              <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 text-[11px] font-black text-brand-foreground shadow-glow transition-all group-hover:brightness-110">
                {place.cta}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
