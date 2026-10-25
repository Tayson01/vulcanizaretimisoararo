import { ArrowUpRight, Clock, CreditCard, MapPin, Receipt, Truck } from "lucide-react";

import { ADDRESS, MAPS, PHONE, TEL } from "@/lib/site-data";
import { SectionLabel } from "@/components/site/ui";
import fataAtelier from "@/assets/locatie-closca-33.jpg";
import dubaInterventie from "@/assets/duba-interventie.jpg";

const places = [
  {
    img: fataAtelier,
    icon: MapPin,
    tag: "Locație fixă",
    title: "Intrarea în atelier",
    text: "Recunoști intrarea după mașina verde și omul gonflabil de pe trotuar.",
    href: MAPS,
    external: true,
    cta: "Deschide în Google Maps",
    pos: "object-[50%_75%]",
    ratio: "aspect-[16/10] md:aspect-auto md:h-[330px]",
    pin: "left-[49%] top-[35%] md:top-[25%]",
    address: "Str. Cloșca 33",
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
    pos: "object-[center_88%]",
    ratio: "aspect-[16/10] md:aspect-auto md:h-[330px]",
    pin: null,
    address: null,
    alt: "Duba de intervenție Vulcanizare Auto Non Stop parcată în fața atelierului de pe Str. Cloșca 33",
  },
];

const facts = [
  { icon: MapPin, label: "Adresă", value: ADDRESS },
  { icon: Clock, label: "Program", value: "Non-stop 24/24" },
  { icon: CreditCard, label: "Plată", value: "Card sau cash" },
  { icon: Receipt, label: "Facturi", value: "Persoane fizice & juridice" },
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
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-foreground/5" />

            {place.pin && (
              <span aria-hidden className={`pointer-events-none absolute z-[1] size-7 -translate-x-1/2 -translate-y-1/2 ${place.pin}`}>
                <span className="absolute inset-0 animate-ping rounded-full bg-brand/40 motion-reduce:animate-none" />
                <span className="relative grid size-7 place-items-center rounded-full bg-brand text-brand-foreground shadow-glow ring-2 ring-background/50">
                  <MapPin className="size-3.5" />
                </span>
              </span>
            )}

            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-foreground shadow-card backdrop-blur">
              <place.icon className="size-3 text-brand" /> {place.tag}
            </span>

            <div className="absolute inset-x-4 bottom-3.5 min-w-0">
              {place.address && (
                <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-background/15 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-background ring-1 ring-background/25 backdrop-blur-md">
                  <MapPin className="size-3 text-brand" /> {place.address}
                </span>
              )}
              <h3 className="text-[15px] font-black leading-snug text-background sm:text-lg">{place.title}</h3>
              <p className="mt-1 min-w-0 text-[11.5px] font-semibold leading-snug text-background/75">{place.text}</p>
              <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 text-[11px] font-black text-brand-foreground shadow-glow transition-all group-hover:brightness-110">
                {place.cta}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="flex min-w-0 items-start gap-2.5 bg-card px-3.5 py-3">
            <fact.icon className="mt-0.5 size-4 shrink-0 text-brand" />
            <span className="min-w-0">
              <span className="block text-[9px] font-black uppercase tracking-[0.16em] text-muted-foreground">{fact.label}</span>
              <span className="mt-0.5 block text-[12.5px] font-extrabold leading-tight text-foreground">{fact.value}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
