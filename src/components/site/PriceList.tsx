import { useState } from "react";
import { BadgeCheck, Phone, Receipt, Wrench } from "lucide-react";
import { Btn } from "@/components/site/ui";
import { PHONE, TEL } from "@/lib/site-data";

// [jantă, montat+echilibrat 1 buc, schimb 4 buc, montat+echilibrat+valve 1 buc, schimb cu valve 4 buc]
const SIZES: [string, number, number, number, number][] = [
  ["13", 50, 180, 70, 250],
  ["14", 50, 180, 70, 250],
  ["15", 60, 200, 80, 260],
  ["16", 60, 210, 80, 260],
  ["17", 65, 250, 85, 300],
  ["18", 70, 260, 90, 320],
  ["19", 75, 280, 95, 350],
  ["20", 80, 300, 100, 370],
  ["21", 85, 320, 100, 370],
  ["22", 90, 350, 110, 400],
  ["23", 100, 380, 120, 450],
  ["24", 100, 400, 120, 450],
  ["C-uri", 75, 300, 100, 400],
];

const REPAIRS = [
  { name: "Petic", rows: [["10 cm", 80], ["12 cm", 120], ["20 cm", 170], ["25 cm", 200]] as [string, number][] },
  { name: "Ciupercă", price: 100 },
  { name: "Șnur", price: 50 },
];

const EXTRA: { name: string; rows: [string, number][] }[] = [
  { name: "Dejantat roată", rows: [["13–15", 15], ["16–20", 20], ["21–24", 25], ["C-uri", 25]] },
  { name: "Montat anvelopă pe jantă (fără echilibrat)", rows: [["13–16", 30], ["17–20", 50], ["21–24", 60], ["C-uri", 60]] },
  { name: "Valve / buc", rows: [["Standard", 30], ["C-uri", 50], ["Mecanice", 75]] },
];

const SINGLES: [string, number][] = [
  ["Verificat roată", 30],
  ["Etanșat roată", 50],
  ["Extragere prezon / antifurt", 75],
];

function Lei({ v, big }: { v: number; big?: boolean }) {
  return (
    <span className="whitespace-nowrap font-black tabular-nums text-brand">
      <span className={big ? "text-3xl sm:text-4xl" : "text-base"}>{v}</span>
      <span className={big ? "ml-1 text-sm font-bold" : "ml-0.5 text-[11px] font-bold"}>lei</span>
    </span>
  );
}

export function PriceList() {
  const [i, setI] = useState(3);
  const s = SIZES[i] ?? SIZES[0]!;
  const secondary: [string, string, number][] = [
    ["Montat + echilibrat", "1 roată", s[1]],
    ["Montat + echilibrat + valvă", "1 roată", s[3]],
    ["Schimb cu valve", "set 4 roți", s[4]],
  ];

  return (
    <section id="preturi" className="scroll-mt-20 bg-background py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-brand">Listă de prețuri 2026</span>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">Prețuri clare, fără surprize</h2>
          <p className="mt-3 text-muted-foreground">
            Prețurile conțin TVA. Atelier non-stop pe Str. Cloșca nr. 33, Timișoara. Emitem facturi pentru persoane fizice și juridice.
          </p>
        </div>

        {/* Panou principal — calculator de preț pe dimensiune */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
          <div className="h-1 bg-brand" />
          <div className="p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Alege dimensiunea jantei</p>
              <p className="text-xs font-semibold text-muted-foreground">Autoturisme, SUV / 4x4, microbuze și camionete până la 3,5 t</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {SIZES.map((r, k) => (
                <button
                  key={r[0]}
                  type="button"
                  onClick={() => setI(k)}
                  aria-pressed={k === i}
                  className={`min-w-12 rounded-full border px-3.5 py-2 text-sm font-black tabular-nums transition-all ${
                    k === i
                      ? "border-brand bg-brand text-brand-foreground shadow-card scale-105"
                      : "border-border bg-surface text-foreground hover:border-brand/60 hover:bg-brand-soft"
                  }`}
                >
                  {r[0] === "C-uri" ? "C-uri" : `R${r[0]}`}
                </button>
              ))}
            </div>

            <div className="mt-7 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
              {/* Prețul vedetă */}
              <div key={`hero-${i}`} className="pr-pop relative overflow-hidden rounded-2xl border border-brand/30 bg-brand-soft p-6 sm:p-8">
                <div className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-[11px] font-black uppercase tracking-wider text-brand-foreground">
                  Cel mai cerut
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Schimb complet · set 4 roți</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-6xl font-black tabular-nums leading-none tracking-tight text-brand sm:text-7xl">{s[2]}</span>
                  <span className="pb-1 text-lg font-bold text-muted-foreground">lei</span>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  <BadgeCheck className="size-4 text-brand" /> Montat + echilibrat pe toate cele 4 roți
                </p>
              </div>

              {/* Variante secundare */}
              <div className="grid gap-3">
                {secondary.map(([t, sub, v]) => (
                  <div key={`${t}-${i}`} className="pr-pop flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-5 py-4">
                    <div>
                      <div className="text-sm font-bold leading-tight text-foreground">{t}</div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{sub}</div>
                    </div>
                    <span className="whitespace-nowrap text-2xl font-black tabular-nums text-brand">
                      {v}<span className="ml-0.5 text-xs font-bold">lei</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reparații */}
        <h3 className="mt-12 flex items-center gap-2 text-xl font-black tracking-tight sm:text-2xl">
          <Wrench className="size-5 text-brand" /> Reparații anvelope
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {REPAIRS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-float">
              <div className="text-lg font-black text-foreground">{r.name}</div>
              {r.rows ? (
                <ul className="mt-3 divide-y divide-border">
                  {r.rows.map(([a, v]) => (
                    <li key={a} className="flex items-center justify-between py-2 text-sm font-semibold">
                      <span>{a}</span><Lei v={v} />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-3"><Lei v={r.price!} big /><span className="ml-1 text-xs text-muted-foreground">/ bucată</span></div>
              )}
            </div>
          ))}
        </div>

        {/* Suplimentare */}
        <h3 className="mt-12 text-xl font-black tracking-tight sm:text-2xl">Servicii suplimentare</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {EXTRA.map((e) => (
            <div key={e.name} className="rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-float">
              <div className="font-black text-foreground">{e.name}</div>
              <ul className="mt-3 divide-y divide-border">
                {e.rows.map(([a, v]) => (
                  <li key={a} className="flex items-center justify-between py-2 text-sm font-semibold">
                    <span>{a}</span><Lei v={v} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {SINGLES.map(([n, v]) => (
            <div key={n} className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 shadow-card">
              <span className="text-sm font-bold text-foreground">{n}</span><Lei v={v} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-3 rounded-3xl border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Receipt className="size-5 shrink-0 text-brand" /> Facturi pentru persoane fizice și juridice. Plată card, cash sau transfer.
          </p>
          <Btn href={`tel:${TEL}`} className="justify-center"><Phone className="size-4" /> {PHONE}</Btn>
        </div>
      </div>
    </section>
  );
}
