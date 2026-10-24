import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function QuickPrices() {
  return (
    <div data-service-reveal className="qp mt-4">
      <Link
        to="/preturi"
        className="qp-cta group flex items-center gap-3 rounded-xl border border-brand/25 bg-brand-soft px-3 py-2.5 transition-colors hover:border-brand"
      >
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
          <Calculator className="size-4" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block text-[13px] font-black uppercase tracking-wide text-foreground">
            Vezi toată lista de prețuri
          </span>
          <span className="block text-[11px] font-semibold text-muted-foreground">
            Calculator de prețuri și lista completă 2026
          </span>
        </span>
        <ArrowRight className="ml-auto size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5" aria-hidden />
      </Link>
    </div>
  );
}
