import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { Btn, SectionLabel } from "@/components/site/ui";
import { ContactForm } from "@/components/site/ContactForm";
import { ADDRESS, COMPANY, MAPS, PHONE, TEL, WA } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Contact — Vulcanizare Non Stop Timișoara, non-stop" },
      {
        name: "description",
        content:
          "Sună la 0725 138 493 sau trimite locația pe WhatsApp. Vulcanizare non-stop în Timișoara și intervenții mobile, Str. Cloșca, Nr. 33, Timișoara.",
      },
      { property: "og:title", content: "Contact — Vulcanizare Non Stop Timișoara" },
      {
        property: "og:description",
        content: "Telefon, WhatsApp cu locație și adresă — vulcanizare non-stop în Timișoara, Timiș.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vulcanizaretimisoara.ro/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Stânga — titlu, text, acțiuni rapide */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl lg:leading-[1.05]">
            Hai să <span className="text-brand">vorbim.</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground lg:mt-5 lg:text-lg lg:leading-relaxed">
            Sună-ne pentru intervenții urgente sau trimite-ne mesajul direct pe WhatsApp — opțional cu locația ta
            exactă. Răspundem imediat, zi și noapte.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 lg:mt-8">
            <Btn href={`tel:${TEL}`}>
              <Phone className="size-4" /> Sună acum
            </Btn>
            <Btn href={WA} variant="ghost" target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" /> WhatsApp
            </Btn>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:mt-10 lg:grid-cols-1 lg:gap-4">
            <a
              href={`tel:${TEL}`}
              className="rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-card lg:p-6"
            >
              <Phone className="size-5 text-brand" />
              <p className="mt-3 text-xs font-semibold text-muted-foreground lg:mt-4">Telefon · WhatsApp</p>
              <p className="font-bold lg:text-lg">{PHONE}</p>
            </a>
            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-card lg:p-6"
            >
              <MapPin className="size-5 text-brand" />
              <p className="mt-3 text-xs font-semibold text-muted-foreground lg:mt-4">Vino la noi</p>
              <p className="font-bold lg:text-lg">{ADDRESS}</p>
            </a>
            <div className="rounded-3xl border border-border bg-card p-5 lg:p-6">
              <Clock className="size-5 text-brand" />
              <p className="mt-3 text-xs font-semibold text-muted-foreground lg:mt-4">Program</p>
              <p className="font-bold lg:text-lg">Non-stop în Timișoara, 24/24</p>
            </div>
          </div>
        </div>

        {/* Dreapta — formularul */}
        <div className="min-w-0">
          <ContactForm />
        </div>
      </div>
      <section className="divider-fade mt-12 pt-8">
        <h2 className="text-xl font-bold">Datele firmei</h2>
        <p className="mt-3 font-semibold">{COMPANY.name}</p>
        <dl className="mt-4 grid gap-x-10 gap-y-4 text-sm sm:grid-cols-2">
          {[
            ["CUI", COMPANY.cui],
            ["Nr. Registrul Comerțului", COMPANY.regCom],
            ["EUID", COMPANY.euid],
            ["Data înființării", COMPANY.foundedOn],
            ["Sediu social", COMPANY.registeredOffice],
          ].map(([label, value]) => (
            <div key={label} className="min-w-0">
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="mt-1 break-words font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <a href={COMPANY.source} target="_blank" rel="noreferrer" className="mt-5 inline-block text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
          Profilul firmei pe ListaFirme
        </a>
      </section>
    </main>
  );
}
