import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { Phone } from "lucide-react";

import { Btn, SectionLabel } from "@/components/site/ui";
import { ServedAreas } from "@/components/site/ServedAreas";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { PHONE, TEL, WA } from "@/lib/site-data";
import { posts, postCategory } from "@/lib/blog-data";
import { zones } from "@/lib/zones-data";

const SITE = "https://vulcanizaretimisoara.ro";

export const Route = createFileRoute("/blog/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return { meta: [{ title: "Articol negăsit — Vulcanizare Non Stop Timișoara" }, { name: "robots", content: "noindex" }] };
    const url = `${SITE}/blog/${p.slug}`;
    const title = `${p.title} | Vulcanizare Non Stop Timișoara`;
    const zone = p.area ? zones.find((z) => z.slug === p.area) : undefined;
    return {
      meta: [
        { title },
        { name: "description", content: p.desc },
        { property: "og:title", content: title },
        { property: "og:description", content: p.desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: `${SITE}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
            ],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            inLanguage: "ro-RO",
            keywords: p.keyword,
            articleSection: postCategory(p),
            ...(zone ? { contentLocation: { "@type": "Place", name: `${zone.short}, județul Timiș, România`, geo: { "@type": "GeoCoordinates", latitude: zone.coords[0], longitude: zone.coords[1] } } } : {}),
            headline: p.title,
            description: p.desc,
            datePublished: p.date,
            dateModified: p.date,
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: "Vulcanizare Non Stop Timișoara" },
            publisher: { "@type": "Organization", name: "Vulcanizare Non Stop Timișoara", url: `${SITE}/` },
          }),
        },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  const zone = post.area ? zones.find((z) => z.slug === post.area) : undefined;
  const words = post.sections.reduce((n, s) => n + s.p.join(" ").split(/\s+/).length, 0);
  const more = [...posts.filter((p) => p.slug !== post.slug && p.area && p.area !== post.area), ...posts.filter((p) => p.slug !== post.slug && !p.area)]
    .sort(() => 0).slice(0, 4);
  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <nav aria-label="Navigare" className="text-xs text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Acasă</Link> / <Link to="/blog" className="hover:text-foreground">Blog</Link>
      </nav>
      <div className="mt-6"><SectionLabel>{postCategory(post)}{zone ? ` · ${zone.short}` : ""}</SectionLabel></div>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{post.desc}</p>
      <p className="mt-4 text-xs font-semibold text-muted-foreground">
        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" })}</time> · {Math.max(1, Math.round(words / 200))} min de citit · Echipa Vulcanizare Non Stop Timișoara
      </p>
      {zone && (
        <Link to="/zone/$slug" params={{ slug: zone.slug }} className="mt-6 flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-4 py-3 hover:border-brand/40">
          <span className="min-w-0">
            <span className="block text-sm font-bold">Vulcanizare mobilă {zone.short}</span>
            <span className="block text-xs text-muted-foreground">{zone.eta} · {zone.km ? `${zone.km} km de atelier` : "atelier în oraș"}</span>
          </span>
          <span className="text-xs font-black uppercase tracking-wider text-brand">Vezi zona →</span>
        </Link>
      )}

      <article className="mt-10 space-y-8">
        {post.sections.map((s) => (
          <section key={s.h2}>
            <h2 className="text-xl font-bold">{s.h2}</h2>
            {s.p.map((t, i) => (
              <p key={i} className="mt-3 leading-relaxed text-muted-foreground">{t}</p>
            ))}
          </section>
        ))}
      </article>

      <div className="mt-12 rounded-3xl border border-brand/20 bg-card p-6 shadow-card">
        <p className="font-bold">{post.cta}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Btn href={`tel:${TEL}`} className="vm-callfx vm-callcta">
            <Phone className="size-4 shrink-0" /> <span className="tabular-nums">{PHONE}</span>
          </Btn>
          <Btn href={WA} variant="ghost" target="_blank" rel="noreferrer">
            <WhatsAppIcon className="size-4 shrink-0" /> WhatsApp
          </Btn>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-lg font-bold">Pagini utile</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {post.links.map((l) => (
            <li key={l.to}>
              <a href={l.to} className="inline-block rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-muted-foreground hover:border-brand/30 hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
      </section>

      <ServedAreas />

      <section className="mt-12">
        <h2 className="text-lg font-bold">Mai citește</h2>
        <ul className="mt-3 space-y-2">
          {more.map((p) => (
            <li key={p.slug}>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="font-semibold text-brand hover:underline">{p.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
