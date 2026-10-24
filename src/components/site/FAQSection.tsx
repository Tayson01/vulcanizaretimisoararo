import { useMemo, useState } from "react";
import {
  Clock,
  CreditCard,
  HelpCircle,
  LayoutGrid,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Search,
  ShieldCheck,
  Tag,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";

import { Btn, BtnLink, SectionLabel } from "@/components/site/ui";
import { ADDRESS, MAPS, PHONE, TEL, WA, faqs } from "@/lib/site-data";

const categories: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "all", label: "Toate", icon: LayoutGrid },
  { id: "prețuri", label: "Prețuri", icon: Tag },
  { id: "disponibilitate", label: "Program", icon: Clock },
  { id: "timp-sosire", label: "Timp sosire", icon: MapPin },
  { id: "servicii", label: "Servicii", icon: Wrench },
  { id: "plată", label: "Plată", icon: CreditCard },
  { id: "siguranță", label: "Siguranță", icon: ShieldCheck },
];

export function FAQSection() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: faqs.length };
    faqs.forEach((f) => (c[f.category] = (c[f.category] ?? 0) + 1));
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter(
      (f) =>
        (category === "all" || f.category === category) &&
        (!q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)),
    );
  }, [query, category]);

  return (
    <section id="intrebari" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="text-center">
          <SectionLabel>Întrebări frecvente</SectionLabel>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.5rem]">
            Ai o întrebare? <span className="text-brand">Avem răspunsul.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Prețuri, program, timpi de sosire și plată — tot ce trebuie să știi despre
            Vulcanizare Non Stop Timișoara, într-un singur loc.
          </p>
        </div>

        {/* Search */}
        <div className="relative mx-auto mt-10 max-w-2xl">
          <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Caută: preț, noaptea, card, camion..."
            className="h-14 w-full rounded-full border border-border bg-card pl-14 pr-12 text-base font-medium shadow-card outline-none transition-all focus:border-brand focus:ring-4 focus:ring-brand/10"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Șterge căutarea"
              className="absolute right-4 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full bg-surface text-muted-foreground hover:text-foreground"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="-mx-5 mt-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {categories.map((c) => {
            const on = category === c.id;
            const n = counts[c.id] ?? 0;
            if (c.id !== "all" && n === 0) return null;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                aria-pressed={on}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  on
                    ? "bg-brand text-brand-foreground shadow-card"
                    : "border border-border bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground"
                }`}
              >
                <c.icon className="size-4" />
                {c.label}
                <span className={`rounded-full px-1.5 text-[11px] ${on ? "bg-brand-foreground/20" : "bg-surface"}`}>{n}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* Accordion */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-border bg-card p-10 text-center">
                <HelpCircle className="mx-auto size-12 text-muted-foreground/40" />
                <p className="mt-4 text-lg font-bold">Nu am găsit răspuns</p>
                <p className="mt-1 text-sm text-muted-foreground">Sună-ne — îți răspundem pe loc, 24/24.</p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                  <Btn href={`tel:${TEL}`} className="vm-callfx vm-callcta">
                    <Phone className="size-4" /> <span className="tabular-nums">{PHONE}</span>
                  </Btn>
                  <Btn href={WA} variant="ghost">
                    <MessageCircle className="size-4" /> WhatsApp
                  </Btn>
                </div>
              </div>
            ) : (
              filtered.map((f, i) => {
                const isOpen = open === f.q;
                const cat = categories.find((c) => c.id === f.category);
                return (
                  <div
                    key={f.q}
                    className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                      isOpen ? "border-brand/50 bg-card shadow-card" : "border-border bg-card hover:border-brand/30"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : f.q)}
                      className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-2xl text-sm font-black transition-colors ${
                          isOpen ? "bg-brand text-brand-foreground" : "bg-brand-soft text-brand"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0 flex-1">
                        {cat && (
                          <span className="text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
                            {cat.label}
                          </span>
                        )}
                        <span className={`mt-0.5 block text-base font-bold leading-snug sm:text-lg ${isOpen ? "text-brand" : ""}`}>
                          {f.q}
                        </span>
                      </span>
                      <span
                        className={`mt-1 grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen ? "rotate-45 border-brand bg-brand text-brand-foreground" : "border-border text-muted-foreground"
                        }`}
                      >
                        <Plus className="size-4" />
                      </span>
                    </button>
                    <div
                      className="grid transition-[grid-template-rows] duration-300 ease-out"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <div className="mx-5 mb-5 rounded-2xl border-l-4 border-brand bg-surface p-4 text-sm leading-relaxed text-foreground/85 sm:mx-6 sm:mb-6 sm:ml-20">
                          {f.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-8 lg:self-start">
            <div className="relative overflow-hidden rounded-[28px] bg-brand p-7 text-brand-foreground shadow-card">
              <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-foreground/10 blur-2xl" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-brand-foreground/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide">
                <span className="size-2 animate-pulse rounded-full bg-brand-foreground" /> Disponibil acum
              </span>
              <p className="relative mt-5 text-2xl font-black tracking-tight">Nu găsești răspunsul?</p>
              <p className="relative mt-2 text-sm opacity-90">Sună-ne direct — răspundem 24/24, zi și noapte.</p>
              <a
                href={`tel:${TEL}`}
                className="vm-callfx relative mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-foreground px-5 py-4 text-lg font-black text-brand transition-transform hover:-translate-y-0.5"
              >
                <Phone className="size-5" /> <span className="tabular-nums">{PHONE}</span>
              </a>
              <a
                href={WA}
                className="relative mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-foreground/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-brand-foreground/10"
              >
                <MessageCircle className="size-4" /> Scrie pe WhatsApp
              </a>
            </div>

            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-3xl border border-border bg-card p-5 transition-colors hover:border-brand/40"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand-soft text-brand">
                <MapPin className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-bold">Atelier non-stop</span>
                <span className="block text-xs text-muted-foreground">{ADDRESS}</span>
                <span className="mt-1 block text-xs font-semibold text-brand">Deschide în Google Maps →</span>
              </span>
            </a>
          </aside>
        </div>

        <div className="mt-10 text-center">
          <BtnLink to="/intrebari-frecvente" variant="ghost">
            Pagina completă de întrebări frecvente →
          </BtnLink>
        </div>
      </div>
    </section>
  );
}
