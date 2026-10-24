import { useState } from "react";
import { Calculator, MessageCircle, Minus, Phone, Plus, RotateCcw, ReceiptText } from "lucide-react";
import { CALC_EXTRAS, SIZES, calcTotal, type CalcInput } from "@/lib/prices";
import { TEL, waLink } from "@/lib/site-data";

const sizeLabel = (r: string) => (r === "C-uri" ? "C-uri" : `R${r}`);

function Stepper({ v, set, max = 4, label }: { v: number; set: (n: number) => void; max?: number; label: string }) {
  return (
    <div className="flex items-center gap-1" aria-label={label}>
      <button type="button" aria-label={`Scade ${label}`} onClick={() => set(Math.max(0, v - 1))}
        className="grid size-7 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-brand hover:text-brand disabled:opacity-40" disabled={v === 0}>
        <Minus className="size-3.5" />
      </button>
      <span className="w-6 text-center text-sm font-black tabular-nums">{v}</span>
      <button type="button" aria-label={`Crește ${label}`} onClick={() => set(Math.min(max, v + 1))}
        className="grid size-7 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-brand hover:text-brand disabled:opacity-40" disabled={v === max}>
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}

function StepTitle({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid size-5 place-items-center rounded-full bg-brand text-[10px] font-black text-brand-foreground">{n}</span>
      <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">{children}</span>
    </div>
  );
}

export function PriceCalculator({ size, setSize }: { size: number; setSize: (i: number) => void }) {
  const [service, setService] = useState<CalcInput["service"]>("schimb");
  const [wheels, setWheels] = useState(4);
  const [valves, setValves] = useState(false);
  const [extras, setExtras] = useState<Record<string, number>>({});
  const { lines, total } = calcTotal({ size, service, wheels, valves, extras });
  const r = SIZES[size]?.[0] ?? "16";

  const reset = () => { setService("schimb"); setWheels(4); setValves(false); setExtras({}); };
  const msg = `Bună! Aș vrea o programare (${sizeLabel(r)}):\n${lines.map((l) => `• ${l[0]} — ${l[1]} lei`).join("\n")}\nTotal estimat: ${total} lei`;

  const seg = (on: boolean) =>
    `flex-1 rounded-xl px-3 py-2.5 text-left transition-all ${on ? "bg-brand text-brand-foreground shadow-md shadow-brand/25" : "bg-card text-foreground hover:bg-brand-soft"}`;

  return (
    <section id="calculator" className="scroll-mt-32">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-brand">
              <Calculator className="size-3.5" aria-hidden /> Calculator
            </span>
            <h2 className="mt-1 text-2xl font-black tracking-tight sm:text-4xl">Află cât plătești, în 10 secunde</h2>
          </div>
          <button type="button" onClick={reset} className="hidden items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-brand sm:inline-flex">
            <RotateCcw className="size-3.5" /> Resetează
          </button>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 rounded-3xl border border-border bg-card p-4 shadow-sm sm:p-6">
            {/* 1. Jantă */}
            <div>
              <StepTitle n="1">Dimensiunea jantei</StepTitle>
              <div className="no-scrollbar -mx-4 mt-3 flex gap-1.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-7 sm:overflow-visible sm:px-0 sm:pb-0">
                {SIZES.map((row, k) => (
                  <button key={row[0]} type="button" onClick={() => setSize(k)} aria-pressed={k === size}
                    className={`shrink-0 rounded-xl border px-3 py-2 text-xs font-black tabular-nums transition-all sm:px-0 ${k === size ? "border-brand bg-brand text-brand-foreground shadow-md shadow-brand/25" : "border-border bg-card hover:border-brand hover:text-brand"}`}>
                    {sizeLabel(row[0])}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Serviciu */}
            <div>
              <StepTitle n="2">Ce faci</StepTitle>
              <div className="mt-3 flex gap-1.5 rounded-2xl border border-border bg-surface p-1.5">
                <button type="button" className={seg(service === "schimb")} onClick={() => setService("schimb")} aria-pressed={service === "schimb"}>
                  <div className="text-sm font-black">Schimb complet</div>
                  <div className="text-[11px] font-semibold opacity-80">1–4 roți</div>
                </button>
                <button type="button" className={seg(service === "montaj")} onClick={() => setService("montaj")} aria-pressed={service === "montaj"}>
                  <div className="text-sm font-black">Montat + echilibrat</div>
                  <div className="text-[11px] font-semibold opacity-80">pe roată</div>
                </button>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold">Câte roți</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((n) => (
                      <button key={n} type="button" onClick={() => setWheels(n)} aria-pressed={wheels === n}
                        className={`size-8 rounded-full border text-sm font-black transition-all ${wheels === n ? "border-brand bg-brand text-brand-foreground shadow-md shadow-brand/25" : "border-border hover:border-brand"}`}>{n}</button>
                    ))}
                  </div>
                </div>
                <label className="flex cursor-pointer items-center gap-2 text-sm font-bold">
                  <input type="checkbox" checked={valves} onChange={(e) => setValves(e.target.checked)} className="size-4 accent-[var(--brand)]" />
                  Cu valve noi
                </label>
              </div>
              {service === "schimb" && wheels < 4 && (
                <p className="mt-2 text-[11px] font-semibold text-muted-foreground">La mai puțin de 4 roți, schimbul se facturează la prețul pe roată.</p>
              )}
            </div>

            {/* 3. Extra */}
            <div>
              <StepTitle n="3">Extra (opțional)</StepTitle>
              <ul className="mt-3 divide-y divide-border overflow-hidden rounded-2xl border border-border">
                {CALC_EXTRAS.map((e) => {
                  const q = extras[e.id] ?? 0;
                  return (
                    <li key={e.id} className={`flex items-center justify-between gap-3 px-3 py-2 transition-colors ${q ? "bg-brand-soft" : "hover:bg-surface"}`}>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-bold">{e.name}</div>
                        <div className="text-[11px] font-semibold text-muted-foreground tabular-nums">{e.price(r)} lei{e.perWheel ? " / roată" : ""}</div>
                      </div>
                      <Stepper v={q} label={e.name} set={(n) => setExtras((x) => ({ ...x, [e.id]: n }))} />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Bon */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-foreground/5">
              <div className="flex items-center justify-between bg-brand px-5 py-3 text-brand-foreground">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest">
                  <ReceiptText className="size-3.5" aria-hidden /> Estimare · {sizeLabel(r)}
                </span>
                <span className="text-[11px] font-black uppercase tracking-widest opacity-80">TVA inclus</span>
              </div>
              <div className="p-5 sm:p-6">
                <ul className="space-y-2 border-b border-dashed border-border pb-4">
                  {lines.map((l) => (
                    <li key={l[0]} className="flex justify-between gap-3 text-sm">
                      <span className="text-muted-foreground">{l[0]}</span>
                      <span className="shrink-0 font-bold tabular-nums">{l[1]} lei</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-end justify-between">
                  <span className="text-sm font-black uppercase tracking-wider">Total</span>
                  <span key={total} className="pr-pop font-black tabular-nums text-brand">
                    <span className="text-5xl">{total}</span><span className="ml-1 text-base">lei</span>
                  </span>
                </div>
                <div className="mt-5 grid gap-2">
                  <a href={waLink(msg)} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-black uppercase tracking-wider text-brand-foreground shadow-md shadow-brand/25 transition-opacity hover:opacity-90">
                    <MessageCircle className="size-4" aria-hidden /> Trimite pe WhatsApp
                  </a>
                  <a href={`tel:${TEL}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-black uppercase tracking-wider hover:border-brand hover:text-brand">
                    <Phone className="size-4" /> Sună acum
                  </a>
                </div>
                <p className="mt-3 text-[11px] font-semibold text-muted-foreground">
                  Preț estimativ din lista 2026. Deplasarea în afara orașului se stabilește la telefon.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
