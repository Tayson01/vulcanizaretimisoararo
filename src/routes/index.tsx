import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Btn } from "@/components/site/ui";
import { CountUp, LiveClock } from "@/components/site/ScrollFx";
import heroNoapte from "@/assets/hero-noapte.webp";
import heroNoapteSm from "@/assets/hero-noapte-sm.webp";
import intrareClosca from "@/assets/locatie-closca-verde.jpg";

import { CoverageMapSection } from "@/components/site/CoverageMapSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { FAQSection } from "@/components/site/FAQSection";
import { ContactSection } from "@/components/site/ContactSection";
import { InterventionsGallery } from "@/components/site/InterventionsGallery";
import { LocationSection } from "@/components/site/LocationSection";

import { BASE, MAPS, PHONE, TEL, WA, zones } from "@/lib/site-data";


export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  component: Index,
  head: () => ({
    meta: [
      { title: "Vulcanizare Non Stop Timișoara 24/24 – Non-stop & Mobilă | 0725 138 493" },
      {
        name: "description",
        content:
          "Vulcanizare deschisă non-stop în Timișoara, pe Str. Cloșca 33, plus vulcanizare mobilă în Dumbrăvița, Giroc, Ghiroda, Moșnița și Săcălaz, tot județul Timiș și pe A1 (Nădlac – Margina), pentru autoturisme, camioane și flote.",
      },
      { property: "og:title", content: "Vulcanizare Non Stop Timișoara 24/24 – Non-stop & Mobilă" },
      {
        property: "og:description",
        content:
          "Intervenții rapide 24/24 pentru autoturisme, camioane și flote, în atelier sau direct la locația ta, în Timiș.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vulcanizaretimisoara.ro/" }, { rel: "preload", as: "image", href: heroNoapteSm, imageSrcSet: `${heroNoapteSm} 400w, ${heroNoapte} 639w`, imageSizes: "(min-width: 1024px) 560px, 100vw", fetchPriority: "high" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Vulcanizare Non Stop Timișoara",
          telephone: TEL,
          url: "https://vulcanizaretimisoara.ro/",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Str. Cloșca, Nr. 33, Timișoara",
            addressLocality: "Timișoara",
            postalCode: "300350",
            addressCountry: "RO",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: BASE[0],
            longitude: BASE[1],
          },
          openingHours: "Mo-Su 00:00-23:59",
          areaServed: [...new Set(zones.flatMap((z) => [z.name, ...z.localities]))].map((name) => ({ "@type": "Place", name: `${name}, județul Timiș` })),
          image: "https://vulcanizaretimisoara.ro/favicon.png",
          sameAs: [MAPS],
        }),
      },
    ],
  }),
});


function Index() {
  return (
    <main>
      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-5 pb-7 pt-10 md:pb-14 md:pt-16">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-12">
            <div className="animate-rise max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-card/80 px-3 py-1.5 text-[11px] font-semibold text-muted-foreground shadow-card backdrop-blur sm:px-3.5 sm:text-xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                <span className="font-bold text-foreground">Deschis acum</span>
                <span aria-hidden className="h-3 w-px bg-border" />
                <span><LiveClock /> · Non-stop</span>
              </span>


              <h1 className="mt-4 text-[2.6rem] font-black leading-[1.04] tracking-tight sm:text-6xl md:leading-[0.98]">
                <span className="fx-word" style={{ animationDelay: "80ms" }}>Vulcanizare</span>{" "}
                <span className="fx-word" style={{ animationDelay: "200ms" }}>în</span>{" "}
                <span className="fx-word fx-text-gradient relative inline-block">
                  Timișoara
                  <svg
                    aria-hidden
                    viewBox="0 0 220 12"
                    className="fx-underline absolute -bottom-1 left-0 w-full text-brand/50"
                    preserveAspectRatio="none"
                  >
                    <path d="M2 9 Q 110 -2 218 8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
                Vulcanizare non-stop în Timișoara, pe Str. Cloșca 33.{" "}
                <span className="hidden sm:inline">Vino la noi oricând sau venim noi la tine: Dumbrăvița, Giroc, Ghiroda, Moșnița și Săcălaz, tot județul Timiș și pe A1 (Nădlac – Margina).</span>
                <span className="sm:hidden">Venim la tine tot județul Timiș și pe A1 (Nădlac – Margina).</span>
              </p>

              <div className="fx-hero-media fx-cam mt-5 shadow-float lg:hidden">
                <span aria-hidden className="fx-scan" />
                <img src={heroNoapte} srcSet={`${heroNoapteSm} 400w, ${heroNoapte} 639w`} sizes="(min-width: 1024px) 560px, 100vw" width={639} height={664} fetchPriority="high" decoding="async" alt="Intervenție non-stop noaptea în Timișoara" className="aspect-[16/10] w-full object-cover" />
                <div aria-hidden className="absolute inset-0 z-[1] bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 z-[2] flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-foreground shadow-glow"><span className="fx-rec" />Live · Non-stop</span>
                  <span className="rounded-full bg-card/90 px-3 py-1 text-[11px] font-bold text-foreground backdrop-blur">Echipaj gata de plecare</span>
                </div>
              </div>

              <div className="mt-5 grid gap-2.5 sm:mt-8">
                <Btn href={`tel:${TEL}`} className="fx-rings vm-callfx vm-callcta group min-h-16 w-full justify-center text-lg font-black shadow-glow transition-transform hover:-translate-y-0.5 sm:min-h-14 sm:text-base">
                  <span className="relative flex size-8 items-center justify-center rounded-full bg-brand-foreground/20">
                    <Phone className="size-4 transition-transform group-hover:rotate-12" />
                  </span>
                  <span className="tabular-nums tracking-tight">{PHONE}</span>
                  <span className="rounded-full bg-brand-foreground/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest">24/24</span>
                </Btn>
                <p className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-muted-foreground">
                  <Clock className="size-3.5 text-brand" />
                  Sosire medie 15–30 min · prețuri clare, fără surprize
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <Btn href={MAPS} target="_blank" rel="noreferrer" variant="ghost" className="group min-h-13 justify-center px-3 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card">
                    <MapPin className="size-4 text-brand transition-transform group-hover:scale-110" /> Locație
                  </Btn>
                  <Btn href={WA} target="_blank" rel="noreferrer" variant="ghost" className="group min-h-13 justify-center px-3 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card">
                    <MessageCircle className="size-4 text-brand transition-transform group-hover:scale-110" /> Cere ofertă
                  </Btn>
                </div>
              </div>

              {/* Mobil: card premium cu cifre cheie, fără fotografie */}
              <div className="relative mt-6 overflow-hidden rounded-3xl border border-border bg-card shadow-card lg:hidden">
                <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand/60 to-brand" />
                <div className="grid grid-cols-3 divide-x divide-border pt-1">
                  {[["24/24","non-stop"],["15–30","min sosire"],["Timiș","+ A1"]].map(([a,b]) => (
                    <div key={a} className="px-2 py-4 text-center">
                      <div className="text-xl font-black tabular-nums leading-none tracking-tight text-foreground">
                        {a === "24/24" ? <><CountUp to={24} />/<CountUp to={24} /></> : a === "15–30" ? <><CountUp to={15} />–<CountUp to={30} /></> : a}
                      </div>
                      <div className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-brand">{b}</div>
                    </div>
                  ))}
                </div>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 border-t border-border bg-muted/40 px-4 py-4 text-[12px] font-semibold text-foreground/80">
                  {["Fără programare", "Plată card / cash", "Autoturisme & camioane", "Facturi persoane fizice & juridice"].map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand text-[10px] font-black text-brand-foreground">✓</span>
                      <span className="min-w-0">{t}</span>
                    </li>
                  ))}
                </ul>
                <a href="#harta" className="group flex items-center gap-3 border-t border-border px-4 py-3.5 transition-colors active:bg-muted/60">
                  <span className="relative grid size-10 shrink-0 place-items-center">
                    <span className="absolute inset-0 animate-ping rounded-xl bg-brand/30 motion-reduce:animate-none" />
                    <img src={intrareClosca} alt="" aria-hidden decoding="async" className="relative size-9 rounded-xl border-2 border-card object-cover shadow-card" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[13px] font-black text-foreground">Str. Cloșca nr. 33</span>
                    <span className="block text-[11px] font-semibold text-muted-foreground">Vezi pe hartă în cât timp ajungem</span>
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-brand px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-brand-foreground shadow-card transition-transform group-hover:translate-y-0.5">
                    Hartă <span aria-hidden>↓</span>
                  </span>
                </a>
              </div>

              {/* Mobil: cum funcționează, în 3 pași */}
            </div>

            <div className="min-w-0">
              <div className="relative hidden lg:block">
                <div className="fx-hero-media group relative overflow-hidden rounded-[32px] shadow-float ring-1 ring-border">
                  <img src={heroNoapte} srcSet={`${heroNoapteSm} 400w, ${heroNoapte} 639w`} sizes="(min-width: 1024px) 560px, 100vw" width={639} height={664} fetchPriority="high" decoding="async" alt="Intervenție non-stop noaptea: autospeciala Vulcanizare Non Stop Timișoara la lucru lângă mașina clientului" className="hero-kb aspect-[4/3] w-full object-cover" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-foreground/30" />

                  <div className="absolute inset-x-5 top-5 z-[2] flex items-center justify-between">
                    <span className="flex items-center gap-2 rounded-full bg-brand px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest text-brand-foreground shadow-glow"><span className="fx-rec" />Live · Non-stop</span>
                    <span className="rounded-full bg-background/15 px-3.5 py-1.5 text-[11px] font-bold text-background ring-1 ring-background/25 backdrop-blur-md">Intervenție reală · Timișoara</span>
                  </div>

                  <div className="absolute inset-x-5 bottom-5 z-[2]">
                    <div className="grid grid-cols-3 divide-x divide-background/20 rounded-2xl bg-background/10 py-3.5 ring-1 ring-background/20 backdrop-blur-xl">
                      {[["24/24","non-stop"],["15–30","min sosire"],["Timiș","+ A1"]].map(([a,b]) => (
                        <div key={a} className="text-center">
                          <div className="text-2xl font-black tabular-nums leading-none text-background">{a}</div>
                          <div className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-background/70">{b}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a href="#harta" className="group mt-4 flex items-center gap-4 rounded-3xl border border-border bg-card px-5 py-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-brand/40">
                  <span className="relative grid size-11 shrink-0 place-items-center">
                    <span className="absolute inset-0 animate-ping rounded-xl bg-brand/30 motion-reduce:animate-none" />
                    <img src={intrareClosca} alt="" aria-hidden decoding="async" className="relative size-10 rounded-xl border-2 border-card object-cover shadow-card" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-black text-foreground">Str. Cloșca nr. 33, Timișoara</span>
                    <span className="block text-xs font-semibold text-muted-foreground">Vezi pe hartă în cât timp ajungem</span>
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-brand px-4 py-2 text-xs font-black uppercase tracking-wider text-brand-foreground shadow-card transition-transform group-hover:translate-y-0.5">
                    Hartă <span aria-hidden>↓</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Servicii */}
      <ServicesSection />





      {/* Hartă acoperire */}
      <div className="divider-fade bg-background">
        <CoverageMapSection />
      </div>

      {/* Locație fixă & echipă mobilă — poze reale din Cloșca 33 */}
      <LocationSection />

      {/* Dovadă: intervenții reale + recenzii */}
      <InterventionsGallery />


      {/* FAQ */}
      <FAQSection />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}

