import { WA_NUMBER } from "@/lib/site-data";

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function locationMessage(lat: number, lng: number, vehicle?: string) {
  const v = vehicle ? ` (${vehicle})` : "";
  return `Bună ziua! Am nevoie de vulcanizare${v}. Locația mea: https://maps.google.com/?q=${lat.toFixed(6)},${lng.toFixed(6)}`;
}
