import { useState } from "react";
import { ArrowRight, Cable, Calculator, CircleDashed, CircleDot } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { QUICK_REPAIRS, SIZES } from "@/lib/prices";

const REPAIR_ICONS = [CircleDashed, CircleDot, Cable];

export function QuickPrices() {
  const [i, setI] = useState(3);
  const s = SIZES[i] ?? SIZES[0]!;
  const [size, montat, , , schimbValva] = s;

  const rows: [string, string, number][] = [
    ["Montat + echilibrat", "1 roată", montat],
    ["Schimb cu valvă", "set 4 roți", schimbValva],
  ];

  return (
    <div data-service-reveal className="qp mt-4 overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-surface px-3 py-2 sm:px-5">
        <span className="text-[10px] font-black uppercase tracking-widest text-brand">Prețuri rapide</span>
        <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />
        <span className="hidden text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:inline">
          Alege dimensiunea jantei
        </span>
        <Link
          to="/preturi"
          className="ml-auto inline-flex items-center gap-1 rounded-full border border-brand/30 bg-card px-2.5 py-0.5 text-[11px] font-black text-brand transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground dark:border-brand/50"
        >
          Toate prețurile <ArrowRight className="size-3" />
        </Link>
      </div>

      <div className="relative px-3 pt-2.5 sm:px-5">
        <div
          role="group"
          aria-label="Dimensiunea jantei"
          className="qp-chips -mx-3 flex gap-1.5 overflow-x-auto px-3 pb-0.5 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {SIZES.map((r, k) => (
            <button
              key={r[0]}
              type="button"
              onClick={() => setI(k)}
              aria-pressed={k === i}
              className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-bold tabular-nums transition-colors ${
                k === i
                  ? "border-brand bg-brand text-brand-foreground"
                  : "border-border bg-surface text-foreground hover:border-brand/60 hover:bg-brand-soft"
              }`}
            >
              {r[0] === "C-uri" ? "C-uri" : `R${r[0]}`}
            </button>
          ))}
        </div>
        <span aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-card to-transparent sm:hidden" />
      </div>

      <div className="px-3 pb-3 pt-2 sm:px-5">
        <Link
          to="/preturi"
          className="qp-cta group flex items-center gap-3 rounded-xl border border-brand/25 bg-brand-soft px-3 py-2.5 transition-colors hover:border-brand"
        >
          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
            <Calculator className="size-4" aria-hidden />
          </span>
          <span className="min-w-0">
            <span className="block text-[13px] font-black uppercase tracking-wide text-foreground">
              Vezi toată lista de prețuri
            </span>
            <span className="block text-[11px] font-semibold text-muted-foreground">
              Alege janta și afli totalul în 10 secunde
            </span>
          </span>
          <ArrowRight className="ml-auto size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>

        <div key={`rows-${i}`} className="pr-pop mt-2 divide-y divide-border overflow-hidden rounded-xl border border-border">
          {rows.map(([t, sub, v]) => (
            <div key={t} className="flex items-center justify-between gap-3 bg-card px-3 py-2">
              <div className="min-w-0 truncate">
                <span className="text-[12px] font-bold text-foreground">{t}</span>
                <span className="ml-1.5 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">{sub}</span>
              </div>
              <span className="whitespace-nowrap text-[15px] font-black tabular-nums text-brand">
                {v}
                <span className="ml-0.5 text-[10px] font-bold">lei</span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-foreground">Reparații pană</span>
          <span aria-hidden className="h-px flex-1 bg-border" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">preț fix</span>
        </div>

        <div className="mt-1.5 grid grid-cols-3 gap-1.5">
          {QUICK_REPAIRS.map((r, k) => {
            const Icon = REPAIR_ICONS[k] ?? CircleDashed;
            return (
              <div key={r.name} className="qp-repair rounded-lg border border-border bg-surface px-1.5 py-2 text-center">
                <Icon className="mx-auto size-3.5 shrink-0 text-brand" aria-hidden />
                <div className="mt-1 truncate text-[10px] font-black uppercase tracking-wide text-foreground">{r.name}</div>
                <div className="mt-0.5 whitespace-nowrap text-[14px] font-black tabular-nums text-brand">
                  {r.from && <span className="mr-0.5 align-middle text-[9px] font-bold uppercase text-muted-foreground">de la</span>}
                  {r.price}
                  <span className="ml-0.5 text-[9px] font-bold">lei</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
