import { useState } from "react";
import { ArrowRight, Cable, CircleDashed, CircleDot } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { QUICK_REPAIRS, SIZES } from "@/lib/prices";

const REPAIR_ICONS = [CircleDashed, CircleDot, Cable];

export function QuickPrices() {
  const [i, setI] = useState(3);
  const s = SIZES[i] ?? SIZES[0]!;
  const [size, montat, schimb, , schimbValva] = s;

  const rows: [string, string, number][] = [
    ["Montat + echilibrat", "1 roată", montat],
    ["Schimb cu valvă", "set 4 roți", schimbValva],
  ];

  return (
    <div data-service-reveal className="qp mt-5 overflow-hidden rounded-3xl border border-border bg-card">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b border-border bg-surface px-4 py-3 sm:px-6">
        <span className="text-[11px] font-black uppercase tracking-widest text-brand">Prețuri rapide</span>
        <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          Alege dimensiunea jantei
        </span>
        <Link
          to="/preturi"
          className="ml-auto inline-flex items-center gap-1 rounded-full border border-brand/25 bg-card px-3 py-1 text-xs font-black text-brand transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
        >
          Toate prețurile <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <div className="px-4 pt-4 sm:px-6">
        <div
          role="group"
          aria-label="Dimensiunea jantei"
          className="qp-chips -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0"
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
              {r[0] === "C-uri" ? "C-uri" : `R${r[0]}`}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 pb-4 pt-3 sm:px-6">
        <div key={`hero-${i}`} className="pr-pop qp-hero overflow-hidden rounded-2xl border border-brand/20 bg-brand-soft px-4 py-4 sm:px-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[11px] font-black uppercase tracking-widest text-brand">
              Schimb complet · set 4 roți
            </span>
            <span className="ml-auto rounded-full bg-brand px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-brand-foreground">
              Cel mai cerut
            </span>
          </div>
          <div className="mt-2 flex items-end justify-between gap-3">
            <span className="text-5xl font-black leading-none tabular-nums text-brand sm:text-6xl">
              {schimb}
              <span className="ml-1.5 text-base font-black sm:text-lg">lei</span>
            </span>
            <span className="pb-1 whitespace-nowrap text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              jantă {size === "C-uri" ? "C-uri" : `R${size}`}
            </span>
          </div>
        </div>

        <div key={`rows-${i}`} className="pr-pop mt-3 divide-y divide-border overflow-hidden rounded-2xl border border-border">
          {rows.map(([t, sub, v]) => (
            <div key={t} className="flex items-center justify-between gap-3 bg-card px-4 py-3">
              <div className="min-w-0">
                <div className="truncate text-[13px] font-bold text-foreground">{t}</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{sub}</div>
              </div>
              <span className="whitespace-nowrap text-lg font-black tabular-nums text-brand">
                {v}
                <span className="ml-0.5 text-[11px] font-bold">lei</span>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="text-[11px] font-black uppercase tracking-widest text-foreground">Reparații pană</span>
          <span aria-hidden className="h-px flex-1 bg-border" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">preț fix</span>
        </div>

        <div className="mt-2 grid grid-cols-3 gap-2">
          {QUICK_REPAIRS.map((r, k) => {
            const Icon = REPAIR_ICONS[k] ?? CircleDashed;
            return (
              <div key={r.name} className="qp-repair rounded-xl border border-border bg-surface px-2 py-3 text-center">
                <Icon className="mx-auto size-4 shrink-0 text-brand" aria-hidden />
                <div className="mt-1.5 text-[11px] font-black uppercase tracking-wide text-foreground">{r.name}</div>
                <div className="mt-0.5 whitespace-nowrap text-[15px] font-black tabular-nums text-brand">
                  {r.from && <span className="mr-0.5 align-middle text-[10px] font-bold uppercase text-muted-foreground">de la</span>}
                  {r.price}
                  <span className="ml-0.5 text-[10px] font-bold">lei</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
