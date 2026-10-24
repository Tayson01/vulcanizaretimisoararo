// Lista de prețuri 2026 (TVA inclus) — sursa unică pentru toate afișările de preț.
// [jantă, montat+echilibrat 1 buc, schimb 4 buc, montat+echilibrat+valvă 1 buc, schimb cu valvă 4 buc]
export type SizeRow = [string, number, number, number, number];

export const SIZES: SizeRow[] = [
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

export const REPAIRS = [
  { name: "Petic", rows: [["10 cm", 80], ["12 cm", 120], ["20 cm", 170], ["25 cm", 200]] as [string, number][] },
  { name: "Ciupercă", price: 100 },
  { name: "Șnur", price: 50 },
];

export const EXTRA: { name: string; rows: [string, number][] }[] = [
  { name: "Dejantat roată", rows: [["13–15", 15], ["16–20", 20], ["21–24", 25], ["C-uri", 25]] },
  { name: "Montat anvelopă pe jantă (fără echilibrat)", rows: [["13–16", 30], ["17–20", 50], ["21–24", 60], ["C-uri", 60]] },
  { name: "Valve / buc", rows: [["Standard", 30], ["C-uri", 50], ["Mecanice", 75]] },
];

export const SINGLES: [string, number][] = [
  ["Verificat roată", 30],
  ["Etanșat roată", 50],
  ["Extragere prezon / antifurt", 75],
];

// Reparații care nu depind de dimensiunea jantei — afișate în banda „Prețuri rapide”.
export const QUICK_REPAIRS = [
  { name: "Petic", price: 80, from: true },
  { name: "Ciupercă", price: 100, from: false },
  { name: "Șnur", price: 50, from: false },
];

// ===== Calculator estimativ =====
export type CalcInput = {
  size: number; // index în SIZES
  service: "schimb" | "montaj";
  wheels: number; // 1–4, pentru ambele servicii
  valves: boolean;
  extras: Record<string, number>; // id -> cantitate
};

const isC = (r: string) => r === "C-uri";
export function dejantatPrice(r: string) {
  if (isC(r)) return 25;
  const n = Number(r);
  return n <= 15 ? 15 : n <= 20 ? 20 : 25;
}

export const CALC_EXTRAS: { id: string; name: string; price: (r: string) => number; perWheel?: boolean }[] = [
  { id: "dejantat", name: "Dejantat roată", price: dejantatPrice, perWheel: true },
  { id: "snur", name: "Reparație șnur", price: () => 50 },
  { id: "ciuperca", name: "Reparație ciupercă", price: () => 100 },
  { id: "petic", name: "Petic 10 cm", price: () => 80 },
  { id: "verificat", name: "Verificat roată", price: () => 30 },
  { id: "etansat", name: "Etanșat roată", price: () => 50 },
  { id: "prezon", name: "Extragere prezon / antifurt", price: () => 75 },
];

export function calcTotal(c: CalcInput) {
  const s = SIZES[c.size] ?? SIZES[0]!;
  const lines: [string, number][] = [];
  const w = Math.min(4, Math.max(1, c.wheels));
  const unit = c.valves ? s[3] : s[1];
  const wheelWord = w === 1 ? "roată" : `${w} roți`;
  if (c.service === "schimb" && w === 4) {
    lines.push([c.valves ? "Schimb complet cu valve · 4 roți" : "Schimb complet · 4 roți", c.valves ? s[4] : s[2]]);
  } else if (c.service === "schimb") {
    lines.push([`Schimb ${wheelWord}${c.valves ? " cu valvă" : ""} · ${w} × ${unit} lei`, unit * w]);
  } else {
    lines.push([`Montat + echilibrat${c.valves ? " + valvă" : ""} · ${w} × ${unit} lei`, unit * w]);
  }
  for (const e of CALC_EXTRAS) {
    const q = c.extras[e.id] ?? 0;
    if (q > 0) lines.push([`${e.name}${q > 1 ? ` × ${q}` : ""}`, e.price(s[0]) * q]);
  }
  return { lines, total: lines.reduce((a, l) => a + l[1], 0) };
}
