import { describe, expect, test } from "vitest";
import { CALC_EXTRAS, QUICK_REPAIRS, REPAIRS, SIZES, calcTotal, faraEchilibratPrice } from "./prices";

const row = (size: string) => SIZES.find((r) => r[0] === size)!;

describe("lista de prețuri 2026 (flyer, TVA inclus)", () => {
  test("R16: montat+echilibrat 60, schimb 4 roți 210, cu valvă 80 / 260", () => {
    expect(row("16")).toEqual(["16", 60, 210, 80, 260]);
  });
  test("R20: 80 / 300 / 100 / 370", () => {
    expect(row("20")).toEqual(["20", 80, 300, 100, 370]);
  });
  test("C-uri: 75 / 300 / 100 / 400", () => {
    expect(row("C-uri")).toEqual(["C-uri", 75, 300, 100, 400]);
  });
  test("niciun «schimb» nu este anunțat la 40 sau 50 lei", () => {
    for (const r of SIZES) expect(r[2]).toBeGreaterThanOrEqual(180);
  });
  test("reparațiile nu depind de jantă: petic 80–200, ciupercă 100, șnur 50", () => {
    expect(REPAIRS[0]!.rows).toEqual([["10 cm", 80], ["12 cm", 120], ["20 cm", 170], ["25 cm", 200]]);
    expect(REPAIRS[1]!.price).toBe(100);
    expect(REPAIRS[2]!.price).toBe(50);
    expect(QUICK_REPAIRS).toEqual([
      { name: "Petic", price: 80, from: true },
      { name: "Ciupercă", price: 100, from: false },
      { name: "Șnur", price: 50, from: false },
    ]);
  });
  test("banda rapidă nu anunță un preț diferit de lista completă", () => {
    const petic = QUICK_REPAIRS[0]!;
    const ciuperca = QUICK_REPAIRS[1]!;
    const snur = QUICK_REPAIRS[2]!;
    expect(petic.price).toBe(Math.min(...REPAIRS[0]!.rows!.map(([, v]) => v)));
    expect(ciuperca.price).toBe(REPAIRS[1]!.price);
    expect(snur.price).toBe(REPAIRS[2]!.price);
    expect(QUICK_REPAIRS.length).toBe(REPAIRS.length);
  });
});

describe("calculator", () => {
  const it = test;
  it("schimb R16 = 210 lei, cu valve 260", () => {
    expect(calcTotal({ size: 3, service: "schimb", wheels: 4, valves: false, extras: {} }).total).toBe(210);
    expect(calcTotal({ size: 3, service: "schimb", wheels: 4, valves: true, extras: {} }).total).toBe(260);
  });
  it("montaj 2 roți R20 + șnur = 2×80 + 50", () => {
    expect(calcTotal({ size: 7, service: "montaj", wheels: 2, valves: false, extras: { snur: 1 } }).total).toBe(210);
  });
  it("dejantat R22 = 25 lei/roată", () => {
    expect(calcTotal({ size: 9, service: "montaj", wheels: 1, valves: false, extras: { dejantat: 4 } }).total).toBe(90 + 100);
  });
  it("schimb pe 1–3 roți se facturează la prețul pe roată", () => {
    expect(calcTotal({ size: 3, service: "schimb", wheels: 2, valves: false, extras: {} }).total).toBe(120);
    expect(calcTotal({ size: 3, service: "schimb", wheels: 3, valves: true, extras: {} }).total).toBe(240);
    expect(calcTotal({ size: 7, service: "schimb", wheels: 1, valves: false, extras: {} }).total).toBe(80);
  });
});

describe("calculator — extra noi din flaier", () => {
  it("peticul pe toate mărimile are prețurile din flaier", () => {
    const p = (id: string) => CALC_EXTRAS.find((e) => e.id === id)!.price("16");
    expect(p("petic")).toBe(80);
    expect(p("petic12")).toBe(120);
    expect(p("petic20")).toBe(170);
    expect(p("petic25")).toBe(200);
  });

  it("montatul fără echilibrat urmează grila din flaier", () => {
    expect(faraEchilibratPrice("13")).toBe(30);
    expect(faraEchilibratPrice("16")).toBe(30);
    expect(faraEchilibratPrice("17")).toBe(50);
    expect(faraEchilibratPrice("20")).toBe(50);
    expect(faraEchilibratPrice("21")).toBe(60);
    expect(faraEchilibratPrice("C-uri")).toBe(60);
  });

  it("totalul include montatul fără echilibrat pe roată", () => {
    const { total } = calcTotal({ size: 3, service: "montaj", wheels: 1, valves: false, extras: { "montat-fara-ech": 2 } });
    expect(total).toBe(60 + 2 * 30); // R16: montat+ech 60 + 2×30
  });
});
