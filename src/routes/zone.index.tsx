import { Link, createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";

import { BtnLink, SectionLabel } from "@/components/site/ui";
import { CoverageMapSection } from "@/components/site/CoverageMapSection";
import { PHONE, TEL, zones } from "@/lib/site-data";

const TITLE = "Zone acoperite — vulcanizare mobilă pe tot județul Timiș + A1";
const DESC =
  "Unde ajunge echipa mobilă Vulcanizare Non Stop Timișoara: toată Timișoara, Dumbrăvița, Giroc, Ghiroda, Moșnița, Săcălaz și comunele din jur, tot județul Timiș și pe A1 (Nădlac – Margina). Timpi estimați de sosire.";

export const Route = createFileRoute("/zone/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://vulcanizaretimisoara.ro/zone" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://vulcanizaretimisoara.ro/zone" }],
  }),
  component: ZonePage,
});

const Z = (slug: string, label: string) => (
  <Link to="/zone/$slug" params={{ slug }} className="font-semibold text-brand underline-offset-4 hover:underline">
    {label}
  </Link>
);

const groups = [
  {
    h2: "În Timișoara: toate cartierele",
    list: ["Mehala", "Centru", "Iosefin", "Fabric", "Circumvalațiunii", "Calea Aradului", "Calea Șagului", "Freidorf", "Ronaț"],
    body: (
      <p>
        Atelierul e pe Str. Cloșca 33, în Mehala, aproape de Calea Torontalului și de Circumvalațiunii. De aici ajungem
        repede în orice cartier al Timișoarei, de regulă în 10–20 de minute. Dacă poți conduce, vino direct la atelier:
        fără programare, zi și noapte.
      </p>
    ),
  },
  {
    h2: "Spre nord și est: Dumbrăvița, Ghiroda, Remetea Mare, Recaș",
    list: ["Dumbrăvița", "Giarmata", "Ghiroda", "Remetea Mare", "Recaș", "A1 spre Lugoj"],
    body: (
      <p>
        Dumbrăvița și Ghiroda sunt practic lipite de oraș, așa că ajungem în 15–25 de minute. Pe DN6 și pe A1, spre
        Recaș și Lugoj, intervenim non-stop pentru autoturisme și camioane, de obicei în 30–45 de minute.
      </p>
    ),
  },
  {
    h2: "Spre sud și vest: Giroc, Moșnița, Săcălaz, Dudeștii Noi",
    list: ["Giroc", "Chișoda", "Moșnița Nouă", "Urseni", "Săcălaz", "Sânandrei", "Dudeștii Noi", "Becicherecu Mic"],
    body: (
      <p>
        Giroc, Chișoda și Moșnița Nouă au crescut mult, cu multe case noi — venim la domiciliu pentru pene și schimbul
        sezonier. Spre vest, pe DN6 către Săcălaz și pe Centura Timișoarei, ajungem în 20–35 de minute.
      </p>
    ),
  },
];

function ZonePage() {
  return (
    <main>
      <div className="mx-auto max-w-5xl px-5 pt-14">
        <SectionLabel>Zone acoperite</SectionLabel>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          Unde ajunge vulcanizarea mobilă: tot județul Timiș + A1
        </h1>
        <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Pornim din atelierul de pe Str. Cloșca 33, din Timișoara, și ne deplasăm în tot județul Timiș, plus pe autostrada A1 pe tronsonul Nădlac (vamă) – Margina. Prețul deplasării îl afli la telefon, înainte de plecare. Mai jos
            găsești localitățile grupate pe direcții, cu distanța aproximativă și timpul estimat de sosire.
          </p>
          <p>
            Timpii sunt orientativi. Traficul, vremea și ora din zi pot schimba durata drumului, așa că îți spunem la
            telefon, înainte de plecare, cât durează și cât costă intervenția.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((z) => (
            <div key={z.slug} className="flex flex-col rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-card">
              <p className="inline-flex items-center gap-2 font-bold">
                <MapPin className="size-4 shrink-0 text-brand" /> {z.name}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{z.desc}</p>
              <p className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <Clock className="size-3.5 shrink-0 text-brand" /> {z.etaMinutes} · {z.km === 0 ? "sediul atelierului" : `~${z.km} km`}
              </p>
              <BtnLink to="/zone/$slug" params={{ slug: z.slug }} variant="ghost" className="mt-4 self-start px-4 py-2">
                Vezi pagina {z.name} →
              </BtnLink>
            </div>
          ))}
        </div>

        <div className="mt-14 max-w-3xl space-y-12">
          {groups.map((g) => (
            <section key={g.h2}>
              <h2 className="text-xl font-bold sm:text-2xl">{g.h2}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">{g.body}</div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.list.map((l) => (
                  <li key={l} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">{l}</li>
                ))}
              </ul>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-bold sm:text-2xl">Dacă localitatea ta nu e în listă</h2>
            <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
              <p>
                Lista nu cuprinde fiecare sat. Dacă te afli între localitățile de mai sus și oriunde în județul Timiș sau pe A1 între Nădlac și Margina, ajungem. Sună la{" "}
                <a href={`tel:${TEL}`} className="font-semibold text-foreground">{PHONE}</a> sau trimite locația pe
                WhatsApp și îți confirmăm imediat.
              </p>
              <p>
                Pentru distanțe mai mari, îți recomandăm cinstit să cauți un service mai apropiat: vei aștepta mai puțin
                și vei plăti mai puțin pentru deplasare. Dacă poți conduce, atelierul nostru e deschis non-stop, fără
                programare. Citește și sfaturile noastre din <Link to="/blog" className="font-semibold text-brand hover:underline">blog</Link>{" "}
                sau răspunsurile din <Link to="/intrebari-frecvente" className="font-semibold text-brand hover:underline">întrebările frecvente</Link>.
              </p>
            </div>
          </section>
        </div>
      </div>

      <CoverageMapSection />
    </main>
  );
}
