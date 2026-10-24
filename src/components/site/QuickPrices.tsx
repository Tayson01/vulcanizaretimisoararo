import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { QUICK_REPAIRS, SIZES } from "@/lib/prices";

export function QuickPrices() {
  const [i, setI] = useState(3);
  const s = SIZES[i] ?? SIZES[0]!;
  const rows: [string, string, number][] = [
    ["Montat + echilibrat", "1 roată", s[1]],
    ["Schimb complet", "set 4 roți", s[2]],
    ["Schimb cu valvă", "set 4 roți", s[4]],
  ];

  return (
    <div data-service-reveal className="svc-prices mt-4 rounded-2xl border border-border bg-card p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-[11px] font-black uppercase tracking-widest text-brand">Prețuri rapide</span>
        <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Alege dimensiunea jantei</span>
        <Link to="/preturi" className="ml-auto inline-flex items-center gap-1 text-xs font-black text-brand hover:underline">
          Toate prețurile <ArrowRight className="size-3.5" />
        </Link>
      </div>

      <div role="group" aria-label="Dimensiunea jantei" className="mt-3 -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
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

      <div key={i} className="pr-pop mt-3 divide-y divide-border overflow-hidden rounded-xl border border-border">
        {rows.map(([t, sub, v]) => (
          <div key={t} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="min-w-0">
              <div className="truncate text-[13px] font-bold text-foreground">{t}</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{sub}</div>
            </div>
            <span className="whitespace-nowrap text-lg font-black tabular-nums text-brand">
              {v}<span className="ml-0.5 text-[11px] font-bold">lei</span>
            </span>
          </div>
        ))}
      </div>

      <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-semibold text-muted-foreground">
        {QUICK_REPAIRS.map((r, k) => (
          <span key={r} className="inline-flex items-center gap-2">
            {k > 0 && <span aria-hidden className="text-border">|</span>}
            {r}
          </span>
        ))}
      </p>
    </div>
  );
}
