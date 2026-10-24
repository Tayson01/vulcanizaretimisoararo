import { describe, expect, it } from "vitest";
import { locationMessage, waLink } from "./whatsapp";

describe("whatsapp location", () => {
  it("includes Google Maps pin with coordinates", () => {
    expect(locationMessage(44.7307159, 25.3662932)).toContain(
      "https://maps.google.com/?q=44.730716,25.366293",
    );
  });
  it("targets the business WhatsApp number", () => {
    expect(waLink("x")).toBe("https://wa.me/40725138493?text=x");
  });
});
