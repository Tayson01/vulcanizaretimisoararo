import { describe, expect, test } from "bun:test";
import { COMPANY, MAPS, PHONE, TEL, WA_NUMBER, WA, waLink } from "./site-data";

describe("Timișoara business contact", () => {
  test("company legal name matches the supplied company profile", () => {
    expect(COMPANY.name).toBe("NON STOP MAGIC20 SRL");
  });
  test("company CUI matches the supplied company profile", () => {
    expect(COMPANY.cui).toBe("42438996");
  });
  test("company registration number matches the supplied company profile", () => {
    expect(COMPANY.regCom).toBe("J2020000895358");
  });
  test("company EUID matches the supplied company profile", () => {
    expect(COMPANY.euid).toBe("ROONRC.J2020000895358");
  });
  test("registered office preserves room and postal code from the company profile", () => {
    expect(COMPANY.registeredOffice).toBe("Str. Cloșca nr. 33, cam. 3, Timișoara, județul Timiș, cod poștal 300375");
  });
  test("founding date matches the company profile", () => {
    expect(COMPANY.foundedOn).toBe("02.04.2020");
  });
  test("the displayed number matches the supplied 0725138493", () => {
    expect(PHONE.replaceAll(" ", "")).toBe("0725138493");
  });
  test("calls use the Romanian international number", () => {
    expect(TEL).toBe("+40725138493");
  });
  test("WhatsApp uses the same real number", () => {
    expect(WA_NUMBER).toBe("40725138493");
    expect(new URL(WA).pathname).toBe("/40725138493");
    const message = "Pană în Giroc, 205/55 R16";
    const link = new URL(waLink(message));
    expect(link.pathname).toBe("/40725138493");
    expect(link.searchParams.get("text")).toBe(message);
  });
  test("the Locație button opens the workshop on Google Maps", () => {
    expect(MAPS).toBe("https://share.google/zFf8sUj8ZdYxTATsm");
    expect(new URL(MAPS).host).toBe("share.google");
  });
  test("WhatsApp opens with the pre-filled Romanian message", () => {
    expect(new URL(WA).searchParams.get("text")).toBe(
      "Bună ziua! Am nevoie de vulcanizare.",
    );
  });
});
import { zones as allZones, zoneRedirects, COVERAGE } from "./site-data";
import { services, faqs } from "./site-data";
import { posts } from "./blog-data";
test("acoperire: tot județul Timiș + A1 Nădlac–Margina", () => {
  expect(COVERAGE.county).toBe("Timiș");
  expect(COVERAGE.highway).toBe("A1");
  expect(COVERAGE.highwayFrom).toMatch(/Nădlac/);
  expect(COVERAGE.highwayTo).toBe("Margina");
  expect(allZones.length).toBeGreaterThan(0);
});
test("zonele îndepărtate redirecționează spre pagina principală", () => {
  expect(zoneRedirects.pitesti).toBe("/zone/vulcanizare-mobila-recas-a1");
    expect(zoneRedirects["dragodana-gaesti"]).toMatch(/^\/zone\/vulcanizare-/);
});

describe("servicii oferite", () => {
  test("nu se oferă tractări sau transport către service nicăieri", () => {
    expect(services.map((s) => s.slug)).not.toContain("transport-auto");
    const totText = JSON.stringify({ services, faqs, zones: allZones, posts });
    expect(totText).not.toMatch(/organizăm tractar|oferim și transport|propunem transport|Tractare și transport/);
    expect(totText).not.toMatch(/servicii\/transport-auto/);
  });
  test("vulcanizarea mobilă pe teren rămâne 24/24", () => {
    expect(JSON.stringify({ services, faqs })).toMatch(/24\/24/);
  });
});

describe("prețul la atelier", () => {
  test("niciun «schimb» nu este anunțat la 40 sau 50 lei (preț vechi de flyer)", () => {
    for (const s of services) {
      for (const p of s.pricing ?? []) {
        if (/schimb/i.test(p.label)) expect(p.value).not.toMatch(/\b(40|50)\s?(de )?lei/);
      }
    }
    expect(JSON.stringify({ services, faqs, zones: allZones, posts, priceHighlights })).not.toMatch(/\b40 (de )?lei/);
  });
  test("serviciile afișează preț real, nu „Preț la telefon”", () => {
    const preturi = services.map((s) => s.price).join(" | ");
    expect(preturi).toContain("de la 50 lei");
    expect(preturi).toContain("de la 180 lei");
    expect(preturi).not.toContain("Preț la telefon");
  });
  test("prețurile rapide din secțiunea servicii coincid cu lista 2026", () => {
    expect(priceHighlights).toEqual([
      { label: "Montat + echilibrat", value: "de la 50 lei" },
      { label: "Schimb 4 roți", value: "de la 180 lei" },
      { label: "Petic", value: "de la 80 lei" },
      { label: "Ciupercă", value: "100 lei" },
      { label: "Șnur", value: "50 lei" },
    ]);
  });
});
