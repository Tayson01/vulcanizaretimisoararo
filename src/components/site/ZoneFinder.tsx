import { useMemo, useState } from "react";
import { ChevronRight, Search } from "lucide-react";

import { Link } from "@tanstack/react-router";
import { zones } from "@/lib/site-data";

export function ZoneFinder({ initialCount = 8 }: { initialCount?: number }) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const q = query.trim().toLowerCase();

  const matches = useMemo(
    () =>
      q
        ? zones.filter((z) =>
            [z.short, z.name, ...z.localities].some((t) => t.toLowerCase().includes(q)),
          )
        : [],
    [q],
  );

  const shown = q ? matches : expanded ? zones : zones.slice(0, initialCount);

  return (
    <div>
      <div className="relative mt-4">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Caută localitatea ta…"
          aria-label="Caută localitatea ta"
          className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-3 text-sm font-medium text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {q && matches.length === 0 ? (
        <p className="mt-3 rounded-xl bg-card px-3.5 py-3 text-sm leading-relaxed text-muted-foreground">
          Nu am găsit localitatea în listă, dar acoperim tot județul Timiș și A1 — <span className="font-semibold text-foreground">sună-ne și confirmăm sosirea.</span>
        </p>
      ) : (
        <ul className="mt-3 grid grid-cols-2 gap-2">
          {shown.map((z) => (
            <li key={z.slug}>
              <Link
                to="/zone/$slug"
                params={{ slug: z.slug }}
                className="group flex h-11 items-center justify-between gap-2 rounded-xl border border-border bg-card px-3.5 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
              >
                <span className="min-w-0 truncate">{z.short}</span>
                {q ? (
                  <span className="shrink-0 text-[11px] font-bold tabular-nums text-brand">{z.etaMinutes}</span>
                ) : (
                  <ChevronRight className="size-3.5 shrink-0 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-brand" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {!q && zones.length > initialCount && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 flex h-11 w-full items-center justify-center gap-1.5 rounded-xl border border-dashed border-border text-sm font-bold text-muted-foreground transition-colors hover:border-brand hover:text-brand"
        >
          {expanded ? "Arată mai puțin" : `Vezi toate zonele (${zones.length})`}
        </button>
      )}
    </div>
  );
}
