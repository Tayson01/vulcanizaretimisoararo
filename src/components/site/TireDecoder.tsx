import { useEffect, useState } from "react";

const parts = [
  { k: "205", sep: "/", t: "205 = lățimea", d: "Lățimea anvelopei, în milimetri, de la un flanc la celălalt." },
  { k: "55", sep: " ", t: "55 = profilul", d: "Înălțimea flancului, ca procent din lățime: 55% din 205 mm ≈ 113 mm." },
  { k: "R", sep: "", t: "R = construcție radială", d: "Tipul de construcție. Aproape toate anvelopele de azi sunt radiale." },
  { k: "16", sep: " ", t: "16 = diametrul jantei", d: "Pe ce jantă se montează, în țoli. Trebuie să fie identic cu janta ta." },
  { k: "91", sep: "", t: "91 = indice de sarcină", d: "Greutatea maximă pe o roată: 91 înseamnă 615 kg." },
  { k: "V", sep: "", t: "V = indice de viteză", d: "Viteza maximă admisă: V = 240 km/h, H = 210, T = 190." },
] as const;

const extra = [
  { k: "DOT", t: "DOT = data fabricației", d: "Ultimele 4 cifre: 3421 = săptămâna 34 din anul 2021. Îți spunem vârsta fiecărei anvelope." },
  { k: "M+S", t: "M+S = noroi și zăpadă", d: "Marcaj de iarnă / all-season. Cu fulg de zăpadă e anvelopă de iarnă certificată." },
] as const;

const all = [...parts, ...extra];

export function TireDecoder() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setActive((a) => (a + 1) % all.length), 2600);
    return () => clearInterval(id);
  }, [auto]);

  const pick = (i: number) => {
    setAuto(false);
    setActive(i);
  };
  const cur = all[active]!;

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-foreground p-5 text-background shadow-float sm:p-8">

      <svg viewBox="0 0 520 250" className="relative w-full" role="img" aria-label="Flancul unei anvelope cu marcajul 205/55 R16 91V">
        <defs>
          <path id="arcOuter" d="M 50 245 A 210 210 0 0 1 470 245" />
          <path id="arcInner" d="M 95 245 A 165 165 0 0 1 425 245" />
        </defs>
        <path d="M 0 250 A 260 260 0 0 1 520 250 L 400 250 A 140 140 0 0 0 120 250 Z" fill="currentColor" opacity="0.08" />
        <path d="M 120 250 A 140 140 0 0 1 400 250 L 340 250 A 80 80 0 0 0 180 250 Z" fill="currentColor" opacity="0.14" />
        <circle cx="260" cy="250" r="210" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeDasharray="2 6" />
        <text fontSize="38" fontWeight="900" letterSpacing="2">
          <textPath href="#arcOuter" startOffset="50%" textAnchor="middle">
            {parts.map((p, i) => (
              <tspan
                key={p.k}
                onClick={() => pick(i)}
                className="cursor-pointer transition-all"
                fill={active === i ? "var(--brand)" : "currentColor"}
                fillOpacity={active === i ? 1 : 0.85}
              >
                {p.k}
                {p.sep}
              </tspan>
            ))}
          </textPath>
        </text>
        <text fontSize="17" fontWeight="800" letterSpacing="4" fontFamily="ui-monospace, monospace">
          <textPath href="#arcInner" startOffset="50%" textAnchor="middle">
            <tspan onClick={() => pick(6)} className="cursor-pointer" fill={active === 6 ? "var(--brand)" : "currentColor"}>DOT XXXX XXX 3421</tspan>
            <tspan fill="currentColor">{"   "}</tspan>
            <tspan onClick={() => pick(7)} className="cursor-pointer" fill={active === 7 ? "var(--brand)" : "currentColor"}>M+S</tspan>
          </textPath>
        </text>
      </svg>

      <div key={active} className="animate-rise relative mt-2 rounded-2xl border border-background/15 bg-background/5 p-5">
        <p className="text-lg font-black">
          <span className="text-brand">{cur.t.split(" = ")[0]}</span> = {cur.t.split(" = ")[1]}
        </p>
        <p className="mt-1.5 text-sm opacity-75">{cur.d}</p>
        {auto && (
          <div className="absolute inset-x-5 bottom-0 h-0.5 overflow-hidden rounded-full bg-background/10">
            <div className="vm-progress h-full bg-brand" />
          </div>
        )}
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {all.map((p, i) => (
          <button
            key={p.k}
            type="button"
            onClick={() => pick(i)}
            className={`min-w-11 rounded-full border px-3.5 py-2 font-mono text-sm font-black transition-all ${
              active === i ? "scale-105 border-brand bg-brand text-brand-foreground shadow-glow" : "border-background/20 bg-background/5 hover:border-brand/60"
            }`}
          >
            {p.k}
          </button>
        ))}
      </div>
    </div>
  );
}
