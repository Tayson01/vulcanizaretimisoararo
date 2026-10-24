import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";

import { zones } from "@/lib/site-data";

export function ServedAreas({ title = "Localități deservite" }: { title?: string }) {
  const [expanded, setExpanded] = useState(false);
  const extra = Array.from(new Set(zones.flatMap((z) => z.localities))).filter(
    (l) => !zones.some((z) => z.short === l),
  );
  return (
    <section className="mt-12">
      <h2 className="text-lg font-bold">{title}</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {(expanded ? zones : zones.slice(0, 10)).map((z) => (
          <li key={z.slug}>
            <Link
              to="/zone/$slug"
              params={{ slug: z.slug }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
            >
              <MapPin className="size-3.5 text-brand" /> {z.short}
            </Link>
          </li>
        ))}
      </ul>
      {expanded && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Venim și în: {extra.join(", ")} — în tot județul Timiș și pe A1 (Nădlac – Margina), non-stop.
        </p>
      )}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-bold text-muted-foreground transition-colors hover:border-brand hover:text-brand"
      >
        {expanded ? "Arată mai puțin" : `Vezi toate zonele (${zones.length})`}
      </button>
    </section>
  );
}
