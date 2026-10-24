import { useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight, Car, Check, Clock, House, Landmark, MapPin, Moon, Phone, Route, Signpost, Truck, Wrench, LayoutGrid } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PHONE, TEL, WA, priceHighlights, services, zones } from "@/lib/site-data";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Btn, BtnLink, SectionLabel } from "@/components/site/ui";
import { Button } from "@/components/ui/button";

type Category = "all" | "urgente" | "montaj" | "camioane";
const zoneIcon: Record<string, typeof MapPin> = {
  "vulcanizare-non-stop-timisoara": House,
  "vulcanizare-mobila-gaesti": Route,
  "vulcanizare-mobila-matasaru": Signpost,
  "vulcanizare-mobila-targoviste": Landmark,
};
const categories: { id: Category; label: string; icon: typeof Car }[] = [
  { id: "all", label: "Toate serviciile", icon: LayoutGrid },
  { id: "urgente", label: "Urgențe pe drum", icon: Route },
  { id: "montaj", label: "Montaj & întreținere", icon: Wrench },
  { id: "camioane", label: "Camioane & flote", icon: Truck },
];
const serviceCategory: Record<string, Category> = {
  "asistenta-rutiera": "urgente", "reparatii-pe-loc": "urgente",
  "montaj-domiciliu": "montaj", "echilibrare-roti": "montaj", "vulcanizare-camioane": "camioane",
};

export function ServicesSection() {
  const active: Category = "all";
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("svc-visible", entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.add("svc-entered");
        }
      }
    }, { threshold: 0.08 });
    section.querySelectorAll("[data-service-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [active]);
  const mobile = services.find((service) => service.slug === "asistenta-rutiera");
  if (!mobile) return null;
  const grid = services.filter((service) => service.slug !== "vulcanizare-atelier-non-stop" && service.slug !== mobile.slug && (active === "all" || serviceCategory[service.slug] === active));
  const showMobile = active === "all" || active === "urgente";
  const count = grid.length + (showMobile ? 1 : 0);

  return (
    <section ref={sectionRef} id="servicii" className="svc-section relative divider-fade py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl px-5">
        <div data-service-reveal className="svc-heading mx-auto max-w-3xl lg:text-center">
          <div className="flex flex-wrap items-center justify-between gap-4 lg:flex-col lg:justify-center lg:gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3 py-1 text-[11px] font-bold text-success lg:order-first"><span className="svc-status size-1.5 rounded-full bg-success" />Dispecerat activ chiar acum</span>
            <SectionLabel>Servicii · Timișoara și județul Timiș</SectionLabel>
          </div>
          <h2 className="mt-3 text-[26px] font-extrabold leading-[1.15] tracking-tight sm:text-3xl lg:text-4xl">
            Atelier deschis <span className="svc-hours inline-block text-brand">24/24.</span>
            <span className="svc-title-second mt-1 block">Echipă mobilă la tine.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground lg:mx-auto lg:max-w-xl">Vii la noi pe Str. Cloșca oricând, zi sau noapte — sau venim noi la tine, pe A1, Centură, DN69, DN59, tot județul Timiș și pe A1 (Nădlac – Margina).</p>
          <div className="mt-6 flex flex-wrap gap-2.5 text-xs font-semibold lg:justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-card"><Moon className="size-4 text-brand" />Zi și noapte, fără program</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-card"><Car className="size-4 text-brand" />Tot județul + A1</span>
          </div>
        </div>


        <div id="service-results" className="svc-results mt-8 sm:mt-10">
          {showMobile && (
            <article data-service-reveal className="svc-feature group relative overflow-hidden rounded-lg border border-border bg-card">
              <div className="min-w-0 p-5 sm:p-8">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand"><Truck className="svc-mobile-icon size-4" />Mobil · tot Timișul</span>
                  <span className="svc-always inline-flex items-center gap-1.5 text-xs font-black tabular-nums text-brand"><Clock className="size-4" />24/24</span>
                </div>
                <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:gap-12">
                <div>
                  <h3 className="text-2xl font-black leading-tight sm:text-3xl">{mobile.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mobile.intro}</p>
                </div>
                <ul className="svc-benefits grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {mobile.bullets.slice(0, 4).map((bullet) => <li key={bullet} className="flex items-start gap-2 text-[13px] leading-snug"><Check className="mt-0.5 size-4 shrink-0 text-brand" /><span>{bullet}</span></li>)}
                </ul>
                </div>
                <div className="mt-6 grid gap-4 border-t border-border pt-5 sm:flex sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-muted-foreground"><span className="flex items-center gap-2"><Clock className="size-4 shrink-0 text-brand" />{mobile.duration}</span><span className="text-[15px] font-black tabular-nums text-brand">{mobile.price}</span></div>
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 sm:flex">
                  <Btn href={`tel:${TEL}`} className="svc-call min-w-0 rounded-lg px-3 text-[13px] font-bold sm:px-5"><Phone className="size-4 shrink-0" /><span className="tabular-nums">{PHONE}</span></Btn>
                  <BtnLink to="/servicii/$slug" params={{ slug: mobile.slug }} variant="ghost" className="rounded-lg px-3 text-[13px] sm:px-5">Detalii<ArrowRight className="size-4" /></BtnLink>
                </div>
                </div>
              </div>
            </article>
          )}
          {grid.length > 0 && (
            <div className={`svc-grid grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${showMobile ? "mt-4" : ""}`}>
              {grid.map((service) => (
                <Link key={service.slug} to="/servicii/$slug" params={{ slug: service.slug }} data-service-reveal className="svc-card group relative flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="svc-icon grid size-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><ServiceIcon name={service.icon} className="size-5" /></span>
                    <span aria-hidden className="svc-number text-3xl font-black tabular-nums text-border">{String(services.indexOf(service)).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug">{service.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{service.desc}</p>
                  <ul className="svc-benefits my-5 space-y-2.5">
                    {service.bullets.slice(0, 3).map((bullet) => <li key={bullet} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground"><Check className="mt-0.5 size-3.5 shrink-0 text-brand" strokeWidth={2.5} /><span>{bullet}</span></li>)}
                  </ul>
                  <div className="mt-auto flex items-center gap-2 border-t border-border pt-4 text-[11px] font-semibold text-muted-foreground"><Clock className="size-3.5 shrink-0 text-brand" /><span>{service.duration}</span><span className="ml-auto whitespace-nowrap text-[13px] font-black tabular-nums text-brand">{service.price}</span></div>
                  <div className="mt-4 flex items-center justify-between text-xs font-bold"><span className="svc-details">Vezi serviciul</span><span className="svc-arrow grid size-8 place-items-center rounded-md bg-surface text-brand"><ArrowUpRight className="size-4" /></span></div>
                </Link>
              ))}
            </div>
          )}
          <div data-service-reveal className="svc-prices mt-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-widest text-brand">Prețuri rapide</span>
              {priceHighlights.map((p) => (
                <span key={p.label} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-bold">
                  <span className="text-muted-foreground">{p.label}</span>
                  <span className="tabular-nums text-brand">{p.value}</span>
                </span>
              ))}
              <Link to="/" hash="preturi" className="ml-auto inline-flex items-center gap-1 text-xs font-black text-brand hover:underline">
                Toate prețurile <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
