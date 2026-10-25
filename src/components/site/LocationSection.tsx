import { ArrowUpRight, Clock, MapPin, Truck } from "lucide-react";

import { MAPS, PHONE, TEL } from "@/lib/site-data";
import { SectionLabel } from "@/components/site/ui";
import fataAtelier from "@/assets/locatie-closca-33.jpg";
import dubaInterventie from "@/assets/duba-interventie.jpg";

const places = [
  {
    img: fataAtelier,
    icon: MapPin,
    tag: "Locație fixă",
    title: "Intrarea în atelier",
    text: "Str. Cloșca 33 — recunoști fața clădirii după mașina verde și omul gonflabil de pe trotuar.",
    href: MAPS,
    external: true,
    cta: "Deschide în Google Maps",
    pos: "object-[50%_62%]",
    ratio: "aspect-[16/10] md:aspect-[2/1]",
    alt: "Fața atelierului Vulcanizare Non Stop de pe Str. Cloșca 33 Timișoara: mașina verde cu numărul 95 parcată în față, panoul roșu cu telefonul 0725 138 493 și omul gonflabil de service roți pe trotuar",
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
    pos: "object-[center_72%]",
    ratio: "aspect-[16/10] md:aspect-[4/3]",
    alt: "Duba de intervenție Vulcanizare Auto Non Stop parcată în fața atelierului de pe Str. Cloșca 33",
  },
];

export function LocationSection() {
  return (
    <section id="locatie" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
        <div className="min-w-0 max-w-xl">
          <SectionLabel>Locația noastră · Timișoara</SectionLabel>
          <h2 className="mt-3 text-[1.5rem] font-black leading-[1.1] tracking-tight sm:text-[1.9rem]">
            Locație fixă și echipă mobilă, ambele din Cloșca 33.
          </h2>
        </div>
        <a
          href={MAPS}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[12px] font-bold text-foreground shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40"
        >
          <MapPin className="size-3.5 text-brand" />
          Str. Cloșca 33
          <ArrowUpRight className="size-3.5 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
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
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-foreground/5" />
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-foreground shadow-card backdrop-blur">
              <place.icon className="size-3 text-brand" /> {place.tag}
            </span>
            <div className="absolute inset-x-4 bottom-3.5 min-w-0">
              <h3 className="text-[15px] font-black leading-snug text-background sm:text-lg">{place.title}</h3>
              <p className="mt-1 min-w-0 text-[11.5px] font-semibold leading-snug text-background/75">{place.text}</p>
              <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-background/15 px-3 py-1.5 text-[11px] font-black text-background ring-1 ring-background/25 backdrop-blur-md transition-colors group-hover:bg-background/25">
                {place.cta}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 px-1 text-[11.5px] font-semibold text-muted-foreground">
        <Clock className="size-3.5 text-brand" />
        Deschis non-stop 24/24 · județul Timiș și A1 (Nădlac – Margina)
      </p>
    </section>
  );
}
