import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { ChevronRight, Clock, MapPin, Phone, Radar, Zap } from "lucide-react";

import { PHONE, TEL, mapRings, zones } from "@/lib/site-data";
import { ZoneFinder } from "./ZoneFinder";

const CoverageMap = lazy(() => import("./CoverageMap"));

const ringTones = ["bg-brand", "bg-brand/60", "bg-brand/30"];

const stats = [
  { value: "15'", label: "sosire în oraș", icon: Zap },
  { value: "100 km", label: "rază maximă", icon: Radar },
  { value: "24/24", label: "non-stop", icon: Clock },
];

export function CoverageMapSection() {
  const [mounted, setMounted] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (setMounted(true), io.disconnect()), { rootMargin: "400px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const barsRef = useRef<HTMLUListElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    // Start as soon as the list enters the screen, including on short mobile viewports.
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      setInView(true);
      io.disconnect();
    }, { threshold: 0, rootMargin: "0px 0px -48px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="harta" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-12 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Zona de acoperire</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Cât de repede ajungem la tine?</h2>
        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
          Plecăm din Timișoara spre tot județul Timiș și pe A1. În oraș ajungem în aproximativ 15 minute, non-stop, până la 100 km.
        </p>
      </div>

      <div className="mt-8 grid gap-8 sm:mt-12 lg:grid-cols-[1.6fr_1fr] lg:items-start lg:gap-12">
        <div ref={mapRef} className="relative isolate overflow-hidden rounded-[24px] shadow-float ring-1 ring-border sm:rounded-[28px] lg:sticky lg:top-24">
          {mounted ? (
            <Suspense
              fallback={<div className="h-[70svh] min-h-[480px] w-full animate-pulse bg-surface sm:h-[620px]" aria-hidden="true" />}
            >
              <div className="dark:[&_.leaflet-container]:brightness-[.9]">
                <CoverageMap />
              </div>
            </Suspense>
          ) : (
            <div className="h-[70svh] min-h-[480px] w-full bg-surface sm:h-[620px]" aria-hidden="true" />
          )}
        </div>

        <div className="grid content-start gap-10">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <Clock className="size-3.5 text-brand" /> Timp estimat de sosire
            </p>
            <ul ref={barsRef} className="mt-4 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
              {mapRings.map((r, i) => {
                const [place, time] = r.minutes.split(" · ");
                return (
                  <li key={r.km} className="vm-ring-row group/ring px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className={`vm-dot-glow vm-dot-pulse size-2.5 shrink-0 rounded-full ${ringTones[i]}`} style={{ animationDelay: `${i * 400}ms` }} />
                      <span className="min-w-0 flex-1 text-[15px] font-extrabold leading-snug">{place}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-3 pl-[1.375rem]">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-border">
                        <div
                          className={`vm-bar-fill relative h-full overflow-hidden rounded-full bg-brand ${inView ? "vm-bar-run" : ""}`}
                          style={{ width: `${r.km}%`, animationDelay: `${i * 180}ms` }}
                        >
                          <span className="vm-bar-shine absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-brand-foreground/60 to-transparent" style={{ animationDelay: `${1200 + i * 300}ms` }} />
                        </div>
                      </div>
                      <span className="shrink-0 text-sm font-bold tabular-nums">{time ?? ""}</span>
                      <span className="shrink-0 text-xs font-black tabular-nums text-brand">≤{r.km} km</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <MapPin className="size-3.5 text-brand" /> Localități deservite · {zones.length}
            </p>
            <ZoneFinder initialCount={8} />
            <a
              href={`tel:${TEL}`}
              className="group mt-6 flex items-center gap-3 rounded-2xl bg-brand px-4 py-3.5 text-brand-foreground shadow-glow transition hover:brightness-110"
            >
              <Phone className="size-4 shrink-0" />
              <span className="min-w-0 flex-1 text-sm font-bold leading-tight">
                Nu-ți vezi localitatea? <span className="block font-black tabular-nums">Sună: {PHONE}</span>
              </span>
              <ChevronRight className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
