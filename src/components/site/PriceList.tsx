import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Cable,
  ChevronRight,
  CircleDashed,
  CircleDot,
  Clock,
  Phone,
  Receipt,
  Wrench,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Btn } from "@/components/site/ui";
import { PHONE, TEL } from "@/lib/site-data";
import { EXTRA, REPAIRS, SINGLES, SIZES } from "@/lib/prices";

function Lei({ v, big }: { v: number; big?: boolean }) {
  return (
    <span className="whitespace-nowrap font-black tabular-nums text-brand">
      <span className={big ? "text-3xl sm:text-4xl" : "text-base"}>{v}</span>
      <span className={big ? "ml-1 text-sm font-bold" : "ml-0.5 text-[11px] font-bold"}>lei</span>
    </span>
  );
}

const sizeLabel = (r: string) => (r === "C-uri" ? "C-uri" : `R${r}`);

const REPAIR_ICONS = [CircleDashed, CircleDot, Cable];

const FACTS = [
  { icon: Receipt, t: "TVA inclus", s: "toate prețurile" },
  { icon: BadgeCheck, t: "Facturi", s: "persoane fizice și juridice" },
  { icon: Clock, t: "Non-stop", s: "24/7, Str. Cloșca 33" },
];

const ANCHORS = [
  { href: "#montaj", label: "Montaj & schimb" },
  { href: "#reparatii", label: "Reparații" },
  { href: "#suplimentare", label: "Suplimentare" },
];

const COLS: [string, string, string][] = [
  ["Montat + echilibrat", "1 roată", "Mont. + ech."],
  ["Schimb complet", "4 roți", "Schimb 4"],
  ["Cu valvă", "1 roată", "+ valvă"],
  ["Schimb cu valve", "4 roți", "Schimb + valve"],
];

export function PriceList() {
  const [i, setI] = useState(3);
  const s = SIZES[i] ?? SIZES[0]!;
  const secondary: [string, string, number][] = [
    ["Montat + echilibrat", "1 roată", s[1]],
    ["Montat + echilibrat + valvă", "1 roată", s[3]],
    ["Schimb cu valve", "set 4 roți", s[4]],
  ];

  return (
    <main className="bg-background">
      {/* ===== Hero ===== */}
      <section id="preturi" className="scroll-mt-20 border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-8 sm:pb-12 sm:pt-12">
          <nav aria-label="Rezultate" className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-brand">Acasă</Link>
            <ChevronRight className="size-3 shrink-0" aria-hidden />
            <span className="text-brand">Prețuri</span>
          </nav>

          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-brand">Listă de prețuri 2026</span>
              <h1 className="mt-2 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
                Prețuri clare,
                <br />
                fără surprize
              </h1>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Alege dimensiunea jantei și vezi imediat cât plătești. Toate prețurile conțin TVA.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {ANCHORS.map((a) => (
                  <a
                    key={a.href}
                    href={a.href}
                    className="rounded-full border border-border bg-card px-4 py-2 text-xs font-black uppercase tracking-wider text-foreground transition-colors hover:border-brand hover:text-brand"
                  >
                    {a.label}
                  </a>
                ))}
              </div>
            </div>

            <ul className="grid gap-2 sm:grid-cols-3 lg:w-[360px] lg:shrink-0">
              {FACTS.map((f) => (
                <li key={f.t} className="rounded-2xl border border-border bg-card p-4">
                  <f.icon className="size-4 text-brand" aria-hidden />
                  <div className="mt-2 text-sm font-black uppercase tracking-wide text-foreground">{f.t}</div>
                  <div className="mt-0.5 text-[11px] font-semibold text-muted-foreground">{f.s}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Bară fixă cu dimensiuni ===== */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-4 gap-y-2 px-5 py-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-brand">Dimensiunea jantei</span>
          <div
            role="group"
            aria-label="Dimensiunea jantei"
            className="qp-chips -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0"
          >
            {SIZES.map((r, k) => (
              <button
                key={r[0]}
                type="button"
                onClick={() => setI(k)}
                aria-pressed={k === i}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-black tabular-nums transition-colors ${
                  k === i
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border bg-surface text-foreground hover:border-brand/60 hover:bg-brand-soft"
                }`}
              >
                {sizeLabel(r[0])}
              </button>
            ))}
          </div>
          <span className="ml-auto hidden whitespace-nowrap text-[11px] font-black uppercase tracking-wider text-muted-foreground lg:inline">
            {sizeLabel(s[0])} · schimb 4 roți <span className="tabular-nums text-brand">{s[2]} lei</span>
          </span>
        </div>
      </div>

      {/* ===== Montaj & schimb ===== */}
      <section id="montaj" className="scroll-mt-32">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
          <h2 className="flex items-center gap-2 text-2xl font-black tracking-tight sm:text-3xl">
            <Wrench className="size-5 shrink-0 text-brand" aria-hidden /> Montaj & schimb anvelope
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Autoturisme, SUV / 4×4, microbuze și camionete până la 3,5 t.
          </p>

          <div className="mt-6 grid gap-3 lg:grid-cols-[1.1fr_1fr]">
            <div key={`hero-${i}`} className="pr-pop qp-hero overflow-hidden rounded-3xl border border-brand/20 bg-brand-soft p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-wider text-brand-foreground">
                  Cel mai cerut
                </span>
                <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                  Schimb complet · set 4 roți
                </span>
              </div>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-7xl font-black leading-none tracking-tight tabular-nums text-brand sm:text-8xl">
                  {s[2]}
                </span>
                <span className="pb-2 text-xl font-black text-brand">lei</span>
              </div>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-foreground">
                <BadgeCheck className="size-4 shrink-0 text-brand" aria-hidden />
                Montat + echilibrat pe toate cele 4 roți · jantă {sizeLabel(s[0])}
              </p>
            </div>

            <div key={`rows-${i}`} className="pr-pop divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
              {secondary.map(([t, sub, v]) => (
                <div key={t} className="flex items-center justify-between gap-3 px-5 py-5">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-black text-foreground">{t}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{sub}</div>
                  </div>
                  <span className="whitespace-nowrap text-2xl font-black tabular-nums text-brand">
                    {v}
                    <span className="ml-1 text-xs font-bold">lei</span>
                  </span>
                </div>
              ))}
              <div className="bg-surface px-5 py-4">
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand hover:underline"
                >
                  Vezi și prețurile rapide de pe prima pagină <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Tot tabelul de dimensiuni */}
          <div className="mt-4 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border bg-surface px-5 py-3">
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground">Toate dimensiunile</h3>
              <span className="ml-auto text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                apasă pe un rând <span className="lg:hidden">· derulează →</span>
              </span>
            </div>
            <div className="relative">
            <div className="overflow-x-auto">
              <table className="w-full text-[12px] sm:min-w-[620px] sm:text-sm">
                <caption className="sr-only">Prețuri pe dimensiuni de jantă, TVA inclus</caption>
                <thead>
                  <tr className="border-b border-border text-[9px] font-black uppercase tracking-wider text-muted-foreground sm:text-[10px]">
                    <th scope="col" className="px-2 py-3 text-left sm:px-5">Jantă</th>
                    {COLS.map(([t, sub, short]) => (
                      <th key={t} scope="col" className="px-1.5 py-3 text-right sm:px-4">
                        <span className="hidden sm:block">{t}</span>
                        <span className="sm:hidden">{short}</span>
                        <span className="block font-bold normal-case tracking-normal opacity-70">{sub}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {SIZES.map((r, k) => (
                    <tr
                      key={r[0]}
                      onClick={() => setI(k)}
                      className={`cursor-pointer transition-colors ${k === i ? "bg-brand-soft" : "hover:bg-surface"}`}
                    >
                      <th
                        scope="row"
                        className={`px-4 py-3 text-left text-[13px] font-black tabular-nums sm:px-5 ${k === i ? "text-brand" : "text-foreground"}`}
                      >
                        {sizeLabel(r[0])}
                      </th>
                      {r.slice(1).map((v, c) => (
                        <td
                          key={c}
                          className={`px-3 py-3 text-right font-bold tabular-nums sm:px-4 ${k === i ? "text-brand" : "text-foreground"}`}
                        >
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
              <span aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-card to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Reparații ===== */}
      <section id="reparatii" className="scroll-mt-32 border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Reparații anvelope</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Petec, ciupercă sau șnur — în funcție de zona și de mărimea tăieturii. Prețuri fixe, fără de dimensiunea jantei.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {REPAIRS.map((r, k) => {
              const Icon = REPAIR_ICONS[k] ?? CircleDashed;
              return (
                <div key={r.name} className="rounded-3xl border border-border bg-card p-5 shadow-card">
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <span className="text-lg font-black uppercase tracking-wide text-foreground">{r.name}</span>
                  </div>
                  {r.rows ? (
                    <ul className="mt-4 divide-y divide-border">
                      {r.rows.map(([a, v]) => (
                        <li key={a} className="flex items-center justify-between py-2.5 text-sm font-semibold">
                          <span className="text-muted-foreground">{a}</span>
                          <Lei v={v} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-4 flex items-end justify-between border-b border-border pb-3">
                      <Lei v={r.price!} big />
                      <span className="pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        / bucată
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Suplimentare ===== */}
      <section id="suplimentare" className="scroll-mt-32 border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Servicii suplimentare</h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {EXTRA.map((e) => (
              <div key={e.name} className="rounded-3xl border border-border bg-card p-5 shadow-card">
                <div className="text-sm font-black uppercase tracking-wide text-foreground">{e.name}</div>
                <ul className="mt-3 divide-y divide-border">
                  {e.rows.map(([a, v]) => (
                    <li key={a} className="flex items-center justify-between py-2.5 text-sm font-semibold">
                      <span className="text-muted-foreground">{a}</span>
                      <Lei v={v} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {SINGLES.map(([n, v]) => (
              <div key={n} className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-card">
                <span className="text-sm font-bold text-foreground">{n}</span>
                <Lei v={v} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Facturi + apel ===== */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:py-10">
          <p className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
            <Receipt className="size-5 shrink-0 text-brand" aria-hidden />
            Facturi pentru persoane fizice și juridice. Plată card, cash sau transfer.
          </p>
          <Btn href={`tel:${TEL}`} className="justify-center">
            <Phone className="size-4" /> {PHONE}
          </Btn>
        </div>
      </section>
    </main>
  );
}
