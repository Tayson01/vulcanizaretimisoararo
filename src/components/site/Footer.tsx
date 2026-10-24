import { BrandLogo } from "./BrandLogo";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, ChevronRight, Clock } from "lucide-react";

import { COMPANY, PHONE, TEL, ADDRESS, WA, services, zones } from "@/lib/site-data";

export function Footer() {
  return (
    <>
      <footer className="relative bg-gradient-to-b from-background to-muted/40 pb-20 lg:pb-0">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" aria-label="Vulcanizare Non Stop Timișoara"><BrandLogo size="lg" /></Link>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-70 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              Deschis non-stop · 24/24
            </span>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Vulcanizare deschisă 24/24 în Timișoara, plus intervenții mobile tot județul Timiș și pe A1 (Nădlac – Margina).
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" /> {ADDRESS}
            </p>
          </div>

          <div>
            <p className="text-sm font-bold">Servicii</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to="/servicii/$slug" params={{ slug: s.slug }} className="group inline-flex items-center gap-1 py-1 transition-colors hover:text-brand">
                    <ChevronRight className="size-3.5 text-brand/60 transition-transform group-hover:translate-x-0.5" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold">Zone deservite</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {zones.map((z) => (
                <li key={z.slug}>
                  <Link
                    to="/zone/$slug"
                    params={{ slug: z.slug }}
                    className="inline-block rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                  >
                    {z.short}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold">
              <Link to="/blog" className="hover:text-brand">Blog</Link>
              <Link to="/intrebari-frecvente" className="hover:text-brand">Întrebări frecvente</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold">Contact</p>
            <div className="mt-3 grid gap-2">
              <a href={`tel:${TEL}`} className="flex items-center gap-3 rounded-xl bg-brand px-4 py-3 text-sm font-bold text-brand-foreground shadow-card transition-transform active:scale-[0.98]">
                <Phone className="size-4" /> <span className="tabular-nums">{PHONE}</span>
              </a>
              <a href={WA} className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold transition-colors hover:border-brand hover:text-brand">
                <MessageCircle className="size-4 text-brand" /> Scrie pe WhatsApp
              </a>
              <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="size-3.5 text-brand" /> Răspundem zi și noapte, inclusiv în weekend
              </p>
            </div>
          </div>
        </div>
        <div className="divider-fade">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {COMPANY.name}. Toate drepturile rezervate.</p>
            <p className="flex flex-wrap gap-x-4 gap-y-1">
              <span><span className="font-semibold text-foreground">CUI:</span> {COMPANY.cui}</span>
              <span><span className="font-semibold text-foreground">Nr. Reg. Com.:</span> {COMPANY.regCom}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
