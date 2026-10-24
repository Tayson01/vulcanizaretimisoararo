import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PriceCalculator } from "@/components/site/PriceCalculator";
import { EXTRA, REPAIRS, SINGLES, SIZES } from "@/lib/prices";

const sizeLabel = (r: string) => (r === "C-uri" ? "C-uri" : `R${r}`);

const COLS: [string, string][] = [
  ["Mont. + ech.", "1 roată"],
  ["Schimb", "4 roți"],
  ["+ valvă", "1 roată"],
  ["Schimb + valve", "4 roți"],
];

const TABS = ["Montaj", "Reparații", "Extra"] as const;

function Row({ n, v }: { n: string; v: number }) {
  return (
    <li className="flex items-baseline gap-2 py-2.5 text-sm">
      <span className="font-semibold text-foreground">{n}</span>
      <span aria-hidden className="flex-1 translate-y-[-3px] border-b border-dotted border-border" />
      <span className="font-black tabular-nums text-brand">{v} lei</span>
    </li>
  );
}

export function PriceList() {
  const [i, setI] = useState(3);
  const [tab, setTab] = useState<(typeof TABS)[number]>("Montaj");

  return (
    <main className="bg-background">
      <section id="preturi" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:py-12">
          <nav aria-label="Rezultate" className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
            <Link to="/" className="hover:text-brand">Acasă</Link>
            <ChevronRight className="size-3" aria-hidden />
            <span className="text-brand">Prețuri</span>
          </nav>
          <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">Prețuri 2026</h1>
          <p className="mt-3 text-sm font-semibold text-muted-foreground sm:text-base">
            TVA inclus · Facturi persoane fizice & juridice · Non-stop, Str. Cloșca 33
          </p>
        </div>
      </section>

      <PriceCalculator size={i} setSize={setI} />

      <section id="lista" className="scroll-mt-32 border-t border-border">
        <div className="mx-auto max-w-3xl px-5 py-10 sm:py-14">
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">Lista completă</h2>
          <div role="tablist" className="mt-5 flex gap-1 rounded-full border border-border bg-surface p-1">
            {TABS.map((t) => (
              <button key={t} role="tab" type="button" aria-selected={tab === t} onClick={() => setTab(t)}
                className={`flex-1 rounded-full py-2 text-xs font-black uppercase tracking-wider transition-colors ${tab === t ? "bg-card text-brand shadow-card" : "text-muted-foreground hover:text-foreground"}`}>
                {t}
              </button>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-3xl border border-border bg-card">
            {tab === "Montaj" && (
              <table className="w-full text-[12px] sm:text-sm">
                <caption className="sr-only">Prețuri pe dimensiuni de jantă, TVA inclus</caption>
                <thead>
                  <tr className="border-b border-border bg-surface text-[9px] font-black uppercase tracking-wider text-muted-foreground sm:text-[10px]">
                    <th scope="col" className="px-3 py-3 text-left sm:px-5">Jantă</th>
                    {COLS.map(([t, sub]) => (
                      <th key={t} scope="col" className="px-1.5 py-3 text-right sm:px-4">
                        {t}<span className="block font-bold normal-case tracking-normal">{sub}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {SIZES.map((r, k) => (
                    <tr key={r[0]} onClick={() => setI(k)}
                      className={`cursor-pointer transition-colors ${k === i ? "bg-brand-soft text-brand" : "hover:bg-surface"}`}>
                      <th scope="row" className="px-3 py-2.5 text-left font-black tabular-nums sm:px-5">{sizeLabel(r[0])}</th>
                      {r.slice(1).map((v, c) => (
                        <td key={c} className="px-1.5 py-2.5 text-right font-bold tabular-nums sm:px-4">{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {tab === "Reparații" && (
              <div className="px-5 py-3">
                <ul>
                  {REPAIRS[0]!.rows!.map(([a, v]) => <Row key={a} n={`Petic ${a}`} v={v} />)}
                  <Row n="Ciupercă" v={REPAIRS[1]!.price!} />
                  <Row n="Șnur" v={REPAIRS[2]!.price!} />
                </ul>
              </div>
            )}

            {tab === "Extra" && (
              <div className="divide-y divide-border">
                {EXTRA.map((e) => (
                  <div key={e.name} className="px-5 py-3">
                    <div className="pt-1 text-[11px] font-black uppercase tracking-widest text-muted-foreground">{e.name}</div>
                    <ul>{e.rows.map(([a, v]) => <Row key={a} n={a} v={v} />)}</ul>
                  </div>
                ))}
                <div className="px-5 py-3">
                  <div className="pt-1 text-[11px] font-black uppercase tracking-widest text-muted-foreground">Altele</div>
                  <ul>{SINGLES.map(([n, v]) => <Row key={n} n={n} v={v} />)}</ul>
                </div>
              </div>
            )}
          </div>
          <p className="mt-3 text-center text-[11px] font-semibold text-muted-foreground">Prețuri în lei, TVA inclus.</p>
        </div>
      </section>
    </main>
  );
}
