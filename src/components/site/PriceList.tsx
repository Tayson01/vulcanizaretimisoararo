import { useState } from "react";
import { BadgeCheck, Phone, Receipt, Wrench } from "lucide-react";
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
        <div className="mt-8 rounded-3xl border border-border bg-card shadow-card">
          <div className="p-5 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Alege dimensiunea jantei</p>
            <p className="mt-1 text-xs text-muted-foreground">Autoturisme, SUV / 4×4, microbuze și camionete până la 3,5 t</p>
            <div className="mt-4 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
              {SIZES.map((r, k) => (
                <button
                  key={r[0]}
                  type="button"
                  onClick={() => setI(k)}
                  aria-pressed={k === i}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-black tabular-nums transition-colors ${
                    k === i
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-border bg-surface text-foreground hover:border-brand/60 hover:bg-brand-soft"
                  }`}
                >
                  {r[0] === "C-uri" ? "C-uri" : `R${r[0]}`}
                </button>
              ))}
            </div>

            <div key={`hero-${i}`} className="pr-pop mt-6 rounded-2xl bg-brand-soft p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-wider text-brand-foreground">
                  Cel mai cerut
                </span>
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Schimb complet · set 4 roți</p>
              </div>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-6xl font-black tabular-nums leading-none tracking-tight text-brand sm:text-7xl">{s[2]}</span>
                <span className="pb-1 text-lg font-bold text-muted-foreground">lei</span>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-foreground">
                <BadgeCheck className="size-4 shrink-0 text-brand" /> Montat + echilibrat pe toate cele 4 roți
              </p>
            </div>

            <div className="mt-3 divide-y divide-border rounded-2xl border border-border">
              {secondary.map(([t, sub, v]) => (
                <div key={`${t}-${i}`} className="pr-pop flex items-center justify-between gap-3 px-5 py-4">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-bold text-foreground">{t}</div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{sub}</div>
                  </div>
                  <span className="whitespace-nowrap text-xl font-black tabular-nums text-brand">
                    {v}<span className="ml-0.5 text-xs font-bold">lei</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reparații */}
        <h3 className="mt-12 flex items-center gap-2 text-xl font-black tracking-tight sm:text-2xl">
          <Wrench className="size-5 text-brand" /> Reparații anvelope
        </h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {REPAIRS.map((r) => (
            <div key={r.name} className="rounded-2xl border border-border bg-card p-5 shadow-card">
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
            <div key={e.name} className="rounded-2xl border border-border bg-card p-5 shadow-card">
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
