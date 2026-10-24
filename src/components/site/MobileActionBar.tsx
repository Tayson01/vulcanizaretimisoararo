import { MapPin, MessageCircle, Phone } from "lucide-react";

import { MAPS, TEL, WA } from "@/lib/site-data";

export function MobileActionBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 lg:hidden">
      <nav
        aria-label="Acțiuni rapide"
        className="pointer-events-auto border-t border-border bg-background px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2"
      >
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${TEL}`}
            className="vm-callfx vm-callcta flex min-h-13 flex-col items-center justify-center gap-1 rounded-2xl bg-brand text-brand-foreground active:scale-[0.97]"
          >
            <Phone className="size-4" />
            <span className="text-[13px] font-black">Sună acum</span>
          </a>
          <a
            href={MAPS}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-13 flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-card text-foreground active:scale-[0.97]"
          >
            <MapPin className="size-4 text-brand" />
            <span className="text-[11px] font-semibold">Locația</span>
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-13 flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-card text-foreground active:scale-[0.97]"
          >
            <MessageCircle className="size-5 text-brand" />
            <span className="text-[11px] font-semibold">Ofertă</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
