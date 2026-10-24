import { describe, expect, test } from "vitest";
import { QUICK_REPAIRS, REPAIRS, SIZES } from "./prices";

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
    expect(QUICK_REPAIRS).toEqual(["Petic de la 80 lei", "Ciupercă 100 lei", "Șnur 50 lei"]);
  });
});
