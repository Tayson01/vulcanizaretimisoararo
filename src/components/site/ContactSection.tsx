import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { SectionLabel } from "@/components/site/ui";
import { ADDRESS, MAPS, PHONE, TEL, WA } from "@/lib/site-data";
import intrareClosca from "@/assets/locatie-closca-verde.jpg";



export function ContactSection() {
  return (
    <section id="contact" className="divider-fade bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-24">
        <div className="max-w-xl lg:mx-auto lg:text-center">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-2 text-[2rem] font-extrabold leading-[1.1] tracking-tight sm:text-4xl">
            Hai să vorbim.
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            Sună pentru intervenție urgentă sau trimite-ne locația pe WhatsApp.
          </p>
        </div>

        <div className="mt-6 max-w-2xl sm:mt-10 lg:mx-auto">
          {/* Detalii — listă fină */}
          <div className="rounded-[1.75rem] border border-border bg-card p-2 shadow-card sm:rounded-[2rem]">
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="group block min-w-0 overflow-hidden rounded-[1.4rem]"
            >
              <img
                src={intrareClosca}
                alt="Intrarea în atelierul Vulcanizare Non Stop Timișoara de pe Str. Cloșca 33, cu mașina verde parcată în față"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:aspect-[16/10]"
              />
              <span className="flex items-center justify-between gap-2 px-3 py-2.5 text-[11px] font-bold">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-brand" /> Intrarea în atelier · Str. Cloșca 33
                </span>
                <span className="whitespace-nowrap text-brand">Hartă →</span>
              </span>
            </a>


            {[
              { icon: Clock, label: "Program", value: "Non-stop · 24/24, 7 din 7", href: undefined },
              { icon: Phone, label: "Telefon", value: PHONE, href: `tel:${TEL}` },
              { icon: MessageCircle, label: "WhatsApp", value: "Trimite locația", href: WA },
              { icon: MapPin, label: "Atelier", value: ADDRESS, href: MAPS },
            ].map(({ icon: Icon, label, value, href }, i) => {
              const inner = (
                <>
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
                    <span className="mt-0.5 block truncate font-bold">{value}</span>
                  </span>
                  {href && <span className="text-muted-foreground transition-transform group-hover:translate-x-1">→</span>}
                </>
              );
              const cls = `group flex items-center gap-4 rounded-[1.4rem] px-4 py-4 transition-colors ${i > 0 ? "border-t border-border" : ""} ${href ? "hover:bg-surface" : ""}`;
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>{inner}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
