export type BlogPost = {
  slug: string;
  title: string;
  keyword: string;
  intent: string;
  desc: string;
  date: string;
  sections: { h2: string; p: string[] }[];
  cta: string;
  links: { label: string; to: string }[];
  /** Slug-ul zonei din zones-data, pentru articole locale. */
  area?: string;
  category?: "Urgență" | "Sfaturi" | "Ghid local";
};

const ZD = "/zone/vulcanizare-non-stop-timisoara";
const ZG = "/zone/vulcanizare-mobila-dumbravita";

const basePosts: BlogPost[] = [
  {
    slug: "pana-pe-dn7-ce-faci",
    title: "Ce faci când faci pană pe DN6?",
    keyword: "pană pe DN6",
    intent: "Urgență: șoferul are pană acum și caută pașii corecți.",
    desc: "Pașii siguri când rămâi cu pană pe DN6 între Recaș, Dumbrăvița și Ghiroda: oprirea, semnalizarea și când chemi vulcanizarea mobilă.",
    date: "2026-10-11",
    sections: [
      { h2: "1. Oprește în siguranță, nu pe loc", p: ["Când simți că mașina trage într-o parte sau auzi un zgomot ritmic, nu frâna brusc. Ține volanul ferm, încetinește treptat și caută un acostament larg, o parcare sau intrarea într-o stradă laterală. Câteva sute de metri parcurși încet sunt mai puțin periculoși decât oprirea pe banda de mers."] },
      { h2: "2. Semnalizează corect", p: ["Pornește avariile, îmbracă vesta înainte să cobori și pune triunghiul la distanță suficientă în spatele mașinii, astfel încât ceilalți șoferi să te vadă din timp. Pasagerii stau în afara carosabilului, nu lângă mașină."] },
      { h2: "3. Schimbi singur roata sau chemi ajutor?", p: ["Dacă ai roată de rezervă, cric funcțional și loc sigur, poți schimba roata. Pe un acostament îngust, cu trafic greu, e mai bine să chemi o echipă care vine cu echipament de semnalizare și cu sculele potrivite."] },
      { h2: "4. Ce ne spui la telefon", p: ["Locația (ideal trimisă pe WhatsApp), modelul mașinii, ce roată e afectată și dacă ai rezervă. Cu aceste informații îți spunem prețul și timpul de sosire înainte să plecăm."] },
    ],
    cta: "Ai pană pe DN6 acum? Sună la 0725 138 493 sau trimite locația pe WhatsApp.",
    links: [{ label: "Vulcanizare mobilă Recaș", to: "/zone/vulcanizare-mobila-recas-a1" }, { label: "Vulcanizare mobilă Dumbrăvița", to: ZG }, { label: "Asistență rutieră", to: "/servicii/asistenta-rutiera" }],
  },
  {
    slug: "reparatie-sau-inlocuire-anvelopa",
    title: "Când trebuie reparată și când trebuie înlocuită o anvelopă?",
    keyword: "reparație anvelope",
    intent: "Informațional, înainte de decizie: merită reparată anvelopa?",
    desc: "Ce defecte de anvelopă se pot repara în siguranță și când singura variantă corectă este înlocuirea. Explicații simple, fără jargon.",
    date: "2026-10-11",
    sections: [
      { h2: "Defecte care se pot repara", p: ["Un cui sau un șurub în banda de rulare, cu o gaură mică, se repară de regulă în siguranță cu ciupercă sau plombă aplicată din interior. Condiția este ca anvelopa să nu fi rulat mult timp dezumflată."] },
      { h2: "Defecte care nu se repară", p: ["Tăieturile sau umflăturile pe flanc, deteriorarea talonului, găurile mari și anvelopele cu interiorul ros după rulare fără aer nu se mai repară. Acolo structura anvelopei e compromisă, iar riscul de explozie e real."] },
      { h2: "Vârsta și uzura contează", p: ["O anvelopă foarte veche sau cu profilul aproape de limita legală nu merită reparată, chiar dacă defectul e mic. Banii merg mai bine într-o anvelopă nouă."] },
      { h2: "Cum decidem noi", p: ["Demontăm anvelopa, o verificăm pe interior și îți spunem clar ce variantă e sigură. Dacă nu se poate repara, îți explicăm de ce, nu doar îți vindem alta."] },
    ],
    cta: "Nu știi dacă anvelopa ta se mai poate repara? Trimite-ne o poză pe WhatsApp.",
    links: [{ label: "Reparații pe loc", to: "/servicii/reparatii-pe-loc" }, { label: "Vulcanizare Non Stop Timișoara", to: ZD }],
  },
  {
    slug: "cand-schimbi-anvelopele-de-iarna",
    title: "Cum alegi anvelopele potrivite pentru sezon și când le schimbi",
    keyword: "anvelope de iarnă",
    intent: "Informațional sezonier: când și ce anvelope montezi.",
    desc: "Regula temperaturii, ce înseamnă marcajele M+S și fulgul de zăpadă și când merită anvelopele all season pentru drumurile din Timiș.",
    date: "2026-10-11",
    sections: [
      { h2: "Regula celor 7 grade", p: ["Când temperaturile coboară constant sub aproximativ 7°C, cauciucul anvelopelor de vară se întărește și aderența scade. Acesta e momentul bun pentru anvelopele de iarnă, chiar dacă încă nu a nins."] },
      { h2: "Ce marcaje să cauți", p: ["Simbolul muntelui cu fulg de zăpadă (3PMSF) arată că anvelopa a trecut teste pe zăpadă. Marcajul M+S singur e o declarație a producătorului, mai puțin strictă. În România, pe drum acoperit cu zăpadă, gheață sau polei, sunt obligatorii anvelopele de iarnă."] },
      { h2: "All season: pentru cine merită", p: ["Pentru cine circulă mai ales pe drumuri curățate și parcurge puțini kilometri, anvelopele all season cu 3PMSF pot fi un compromis bun. Pentru drumuri de deal sau navetă zilnică pe vreme grea, un set dedicat de iarnă rămâne mai sigur."] },
      { h2: "Schimbul fără coadă", p: ["Poți veni la atelier, oricând, fără programare, sau ne chemi să facem schimbul acasă."] },
    ],
    cta: "Programează schimbul sezonier la 0725 138 493.",
    links: [{ label: "Montaj la domiciliu", to: "/servicii/montaj-domiciliu" }, { label: "Vulcanizare mobilă Giroc", to: "/zone/vulcanizare-mobila-giroc" }, { label: "Echilibrare roți", to: "/servicii/echilibrare-roti" }],
  },
  {
    slug: "schimb-anvelope-la-domiciliu-ghid",
    title: "Schimb anvelope la domiciliu: cum funcționează și ce pregătești",
    keyword: "schimb anvelope la domiciliu",
    intent: "Comercial: clientul vrea serviciul și caută detalii.",
    desc: "Cum decurge schimbul de anvelope la domiciliu, de ce spațiu avem nevoie, cât durează și ce trebuie să pregătești înainte să venim.",
    date: "2026-10-11",
    sections: [
      { h2: "Ce înseamnă concret", p: ["Venim cu duba echipată: demontăm roțile, schimbăm anvelopele pe jante sau montăm roțile complete, echilibrăm și verificăm presiunea. Tu nu trebuie să mergi nicăieri."] },
      { h2: "Ce spațiu ne trebuie", p: ["Un loc plan, unde mașina nu blochează circulația: curte, alee, parcare. Pe pantă sau pe pământ moale lucrul e mai greu și mai puțin sigur."] },
      { h2: "Ce pregătești", p: ["Anvelopele de sezon la îndemână, șurubul antifurt (dacă ai) și, ideal, dimensiunea anvelopelor notată. Dacă ai jante separate, spune-ne dinainte."] },
      { h2: "Cât durează", p: ["Pentru un autoturism obișnuit, lucrarea ia de obicei sub o oră. Prețul pentru deplasare și lucrare îl afli la telefon, înainte să venim."] },
    ],
    cta: "Cere o programare pentru schimbul la domiciliu: 0725 138 493.",
    links: [{ label: "Montaj la domiciliu", to: "/servicii/montaj-domiciliu" }, { label: "Vulcanizare mobilă Dumbrăvița", to: ZG }, { label: "Zone acoperite", to: "/zone" }],
  },
  {
    slug: "presiunea-corecta-in-anvelope",
    title: "Presiunea corectă în anvelope: unde o găsești și de ce contează",
    keyword: "presiune anvelope",
    intent: "Informațional: întreținere preventivă.",
    desc: "Unde găsești presiunea recomandată pentru mașina ta, cât de des o verifici și ce se întâmplă când roțile sunt prea moi sau prea umflate.",
    date: "2026-10-11",
    sections: [
      { h2: "Unde găsești valoarea corectă", p: ["Presiunea recomandată e scrisă pe o etichetă în cadrul ușii șoferului, în bușonul rezervorului sau în manual. Nu folosi valoarea maximă scrisă pe flancul anvelopei."] },
      { h2: "Verifică la rece", p: ["Măsoară presiunea înainte de drum sau după ce mașina a stat. După câțiva kilometri, aerul se încălzește și valoarea crește. O verificare lunară e un obicei bun."] },
      { h2: "Ce se întâmplă la presiune greșită", p: ["Roțile prea moi se încălzesc, se uzează pe margini și cresc consumul. Roțile prea umflate se uzează pe mijloc și țin mai slab drumul. Ambele variante scurtează viața anvelopei."] },
      { h2: "Pierzi aer constant?", p: ["Dacă o roată se dezumflă mereu, cauza poate fi un cui, valva sau janta. Merită verificată înainte să devină pană."] },
    ],
    cta: "Roata pierde aer? Treci pe la atelierul din Timișoara, deschis non-stop.",
    links: [{ label: "Vulcanizare Non Stop Timișoara", to: ZD }, { label: "Echilibrare roți", to: "/servicii/echilibrare-roti" }, { label: "Valva pierde aer", to: "/blog/valva-anvelopa-pierde-aer" }],
  },
  {
    slug: "pana-noaptea-ce-faci",
    title: "Pană noaptea: cum rămâi în siguranță până vine ajutorul",
    keyword: "vulcanizare non stop",
    intent: "Urgență nocturnă.",
    desc: "Ce faci dacă rămâi cu pană noaptea pe un drum din Timiș: vizibilitate, siguranță și cum chemi o vulcanizare non-stop.",
    date: "2026-10-11",
    sections: [
      { h2: "Fii vizibil", p: ["Noaptea, problema principală e că ceilalți șoferi te văd târziu. Lasă avariile pornite, poartă vesta reflectorizantă și pune triunghiul mai departe decât ziua."] },
      { h2: "Nu sta în mașină pe carosabil", p: ["Dacă mașina a rămas parțial pe bandă, ieși cu pasagerii pe partea dinspre acostament și stați departe de trafic, după parapet dacă există."] },
      { h2: "Trimite locația exactă", p: ["Pe drumuri neiluminate e greu să descrii unde ești. Locația trimisă pe WhatsApp ne ajută să ajungem direct la tine."] },
      { h2: "Lucrăm non-stop", p: ["Atelierul din Timișoara e deschis 24/24, iar echipa mobilă pleacă și noaptea."] },
    ],
    cta: "Ai pană noaptea? Sună acum la 0725 138 493.",
    links: [{ label: "Asistență rutieră 24/24", to: "/servicii/asistenta-rutiera" }, { label: "Vulcanizare Non Stop Timișoara", to: ZD }, { label: "Zone acoperite", to: "/zone" }],
  },
  {
    slug: "roata-rezerva-galet",
    title: "Roata de rezervă tip galet: cât poți merge cu ea",
    keyword: "roată de rezervă galet",
    intent: "Informațional, după schimbarea roții.",
    desc: "Ce limite are roata de rezervă subțire (galet), cu ce viteză circuli și de ce trebuie înlocuită cât mai repede.",
    date: "2026-10-11",
    sections: [
      { h2: "De ce e diferită", p: ["Roata galet e mai îngustă și mai ușoară, gândită doar ca soluție temporară. Are aderență mai mică și se uzează repede."] },
      { h2: "Viteza și distanța", p: ["Limita de viteză e scrisă pe roată, de cele mai multe ori 80 km/h. Distanța recomandată e scurtă: până la cea mai apropiată vulcanizare."] },
      { h2: "Verifică presiunea", p: ["Roata galet stă ani de zile în portbagaj și se poate dezumfla. Presiunea ei e, de regulă, mai mare decât a roților normale; verifică eticheta."] },
      { h2: "Ce faci după", p: ["Repară sau înlocuiește roata principală cât mai repede. La atelier o facem pe loc, iar dacă nu poți ajunge, venim noi."] },
    ],
    cta: "Ai pus galetul? Vino la atelier să repari roata principală.",
    links: [{ label: "Reparații pe loc", to: "/servicii/reparatii-pe-loc" }, { label: "Vulcanizare mobilă Recaș", to: "/zone/vulcanizare-mobila-recas-a1" }, { label: "Pană pe DN6", to: "/blog/pana-pe-dn7-ce-faci" }],
  },
  {
    slug: "valva-anvelopa-pierde-aer",
    title: "Anvelopa pierde aer încet: valvă, jantă sau cui?",
    keyword: "anvelopa pierde aer",
    intent: "Diagnostic: clientul vrea să afle cauza.",
    desc: "Cauzele cele mai frecvente pentru o anvelopă care se dezumflă încet și cum se verifică fiecare.",
    date: "2026-10-11",
    sections: [
      { h2: "Cuiul ascuns", p: ["Un cui mic poate sta în anvelopă zile întregi, lăsând aerul să iasă foarte încet. Se vede la verificarea cu apă și săpun."] },
      { h2: "Valva", p: ["Valvele de cauciuc îmbătrânesc și crapă. Înlocuirea valvei e o lucrare ieftină și rapidă, de obicei făcută la schimbul anvelopei."] },
      { h2: "Janta", p: ["Coroziunea sau o lovitură în bordura jantei pot strica etanșarea dintre jantă și anvelopă. Uneori ajută curățarea și etanșarea, alteori janta trebuie îndreptată."] },
      { h2: "Ce faci", p: ["Nu umfla roata în fiecare dimineață la nesfârșit. Verificarea durează puțin și te scapă de o pană pe drum."] },
    ],
    cta: "Treci pe la atelierul din Timișoara pentru o verificare rapidă.",
    links: [{ label: "Vulcanizare Non Stop Timișoara", to: ZD }, { label: "Vulcanizare mobilă Giroc", to: "/zone/vulcanizare-mobila-sacalaz" }, { label: "Presiunea corectă", to: "/blog/presiunea-corecta-in-anvelope" }],
  },
  {
    slug: "adancime-profil-anvelope",
    title: "Adâncimea profilului: când anvelopa nu mai e sigură",
    keyword: "adâncime profil anvelope",
    intent: "Informațional, preventiv.",
    desc: "Cum măsori profilul anvelopelor, ce spune legea și de ce aderența pe ud scade mult înainte de limita legală.",
    date: "2026-10-11",
    sections: [
      { h2: "Indicatorii de uzură", p: ["În canalele anvelopei există mici proeminențe (TWI). Când banda de rulare ajunge la nivelul lor, anvelopa e la limită."] },
      { h2: "Ce spune legea", p: ["Pentru autoturisme, profilul minim este 1,6 mm. Pentru anvelopele de iarnă, o adâncime mai mare îți păstrează aderența pe zăpadă."] },
      { h2: "De ce nu aștepți limita", p: ["Pe drum ud, distanța de frânare crește vizibil cu fiecare milimetru pierdut. Pe ploaie, apa nu mai e evacuată și apare riscul de acvaplanare."] },
      { h2: "Verificare gratuită la schimb", p: ["La fiecare schimb sau reparație îți spunem cum stau toate anvelopele, nu doar cea cu problema."] },
    ],
    cta: "Vrei să știi cum stau anvelopele tale? Sună la 0725 138 493.",
    links: [{ label: "Vulcanizare mobilă Ghiroda", to: "/zone/vulcanizare-mobila-ghiroda" }, { label: "Uzură neuniformă", to: "/blog/uzura-neuniforma-anvelope" }],
  },
  {
    slug: "uzura-neuniforma-anvelope",
    title: "Uzură neuniformă a anvelopelor: ce îți spune despre mașină",
    keyword: "uzură neuniformă anvelope",
    intent: "Diagnostic.",
    desc: "Uzura pe margini, pe mijloc sau pe o singură parte: ce cauze are și când trebuie făcută geometria roților.",
    date: "2026-10-11",
    sections: [
      { h2: "Uzură pe ambele margini", p: ["De obicei indică presiune prea mică pentru o perioadă lungă."] },
      { h2: "Uzură pe mijloc", p: ["Apare la anvelopele umflate constant peste valoarea recomandată."] },
      { h2: "Uzură pe o singură parte", p: ["Poate semnala o geometrie dereglată, după o groapă sau o lovitură de bordură. Aici e nevoie de un service cu stand de geometrie."] },
      { h2: "Pete de uzură și vibrații", p: ["Roțile neechilibrate pot produce vibrații în volan și uzură în pete. Echilibrarea rezolvă problema dacă anvelopa nu e deja deformată."] },
    ],
    cta: "Simți vibrații în volan? Fă o echilibrare la atelierul din Timișoara.",
    links: [{ label: "Echilibrare roți", to: "/servicii/echilibrare-roti" }, { label: "Vulcanizare mobilă Giroc", to: "/zone/vulcanizare-mobila-giroc" }, { label: "Presiunea corectă", to: "/blog/presiunea-corecta-in-anvelope" }],
  },
  {
    slug: "ce-sa-spui-cand-suni-la-vulcanizare",
    title: "Ce să spui când suni la vulcanizarea mobilă ca să ajungă repede",
    keyword: "vulcanizare mobilă la domiciliu",
    intent: "Pre-conversie: clientul e pe cale să sune.",
    desc: "Informațiile care scurtează timpul de sosire al vulcanizării mobile și te ajută să afli prețul corect de la început.",
    date: "2026-10-11",
    sections: [
      { h2: "Locația", p: ["Cel mai simplu: trimite locația pe WhatsApp. Dacă nu poți, spune drumul, kilometrul aproximativ sau un reper vizibil."] },
      { h2: "Mașina și roata", p: ["Marca, modelul și dimensiunea anvelopei de pe flanc (de exemplu 195/65 R15). Așa știm dacă aducem o anvelopă de schimb."] },
      { h2: "Ce s-a întâmplat", p: ["Cui, tăietură, roată complet dezumflată, jantă lovită. O poză face mai mult decât o descriere lungă."] },
      { h2: "Ai rezervă?", p: ["Spune-ne dacă ai roată de rezervă, cric și cheie, și dacă ai șurub antifurt."] },
    ],
    cta: "Gata? Sună la 0725 138 493 sau scrie pe WhatsApp.",
    links: [{ label: "Contact", to: "/contact" }, { label: "Vulcanizare mobilă Giroc", to: "/zone/vulcanizare-mobila-sacalaz" }, { label: "Zone acoperite", to: "/zone" }],
  },
  {
    slug: "anvelope-utilaje-agricole-pana",
    title: "Pană la tractor sau remorcă: ce faci în plin sezon agricol",
    keyword: "vulcanizare utilaje agricole",
    intent: "Comercial local, rural.",
    desc: "Cum gestionezi o pană la tractor sau remorcă în câmp, ce informații ne dai și ce putem repara la fața locului.",
    date: "2026-10-11",
    sections: [
      { h2: "Siguranța înainte de toate", p: ["Oprește utilajul pe teren cât mai plat, coboară accesoriile și nu ridica o remorcă încărcată cu un cric nepotrivit."] },
      { h2: "Ce ne spui", p: ["Tipul utilajului, dimensiunea anvelopei, dacă are cameră și cum arată accesul: asfalt, pietriș sau pământ."] },
      { h2: "Ce putem face pe loc", p: ["Reparăm camere și anvelope, schimbăm valve și, când accesul permite, demontăm roata pentru o lucrare mai sigură."] },
      { h2: "Zonele rurale din jur", p: ["Venim în comunele din jurul Timișoarei, Girocului și Dumbrăviței, tot județul Timiș și pe A1 (Nădlac – Margina)."] },
    ],
    cta: "Utilaj blocat în câmp? Sună la 0725 138 493.",
    links: [{ label: "Vulcanizare mobilă Giroc", to: "/zone/vulcanizare-mobila-sacalaz" }, { label: "Vulcanizare camioane", to: "/servicii/vulcanizare-camioane" }, { label: "Zone acoperite", to: "/zone" }],
  },
  {
    slug: "raza-acoperire-50-km",
    title: "Pe ce rază venim la tine: tot județul Timiș + A1",
    keyword: "vulcanizare mobilă raza de acoperire",
    intent: "Informațional local: șoferul vrea să știe dacă ajungem la el.",
    desc: "Ce înseamnă tot județul Timiș: localitățile acoperite, timpii reali de sosire pe direcții și de ce am ales această limită.",
    date: "2026-10-11",
    sections: [
      { h2: "Tot județul Timiș și autostrada A1", p: ["Ne deplasăm oriunde în județul Timiș — de la Jimbolia și Sânnicolau Mare până la Lugoj, Făget și Deta — și pe autostrada A1, pe tot tronsonul dintre vama Nădlac și Margina. Mulți șoferi de pe A1, DN6, DN69 și DN59 rămân cu pana departe de orice atelier deschis, așa că venim noi, zi și noapte."] },
      { h2: "Spre est: Ghiroda și Dudeștii Noi", p: ["Pe direcția Arad ajungem în Ghiroda în 20–30 de minute și în Dudeștii Noi în 30–45 de minute, cu comunele dintre ele: Produlești, Costeștii din Vale, Braniștea, Sălcioara."] },
      { h2: "Spre nord: Giroc, Moșnița și Recaș", p: ["Giroc e la 25–40 de minute, Moșnița la 30–50 de minute pe DN69, iar Recaș la 35–55 de minute, în funcție de trafic. Pe vreme rea sau pe serpentine, timpul poate crește — îl confirmăm la telefon."] },
      { h2: "Spre vest: Recaș și Lugoj", p: ["Pe DN6 ajungem în Recaș în 25–40 de minute și spre Lugoj în 35–55 de minute. Aici intervenim mai ales noaptea, în weekend sau când mașina nu mai poate fi mutată de pe drum."] },
      { h2: "Cum afli dacă ajungem la tine", p: ["Sună-ne sau trimite locația pe WhatsApp. Îți spunem imediat dacă ești în rază, cât durează și cât costă, înainte să plecăm."] },
    ],
    cta: "Nu știi dacă ești în raza noastră? Sună la 0725 138 493 sau trimite locația pe WhatsApp.",
    links: [{ label: "Zone acoperite", to: "/zone" }, { label: "Vulcanizare mobilă Lugoj", to: "/zone/vulcanizare-mobila-recas-a1" }, { label: "Vulcanizare mobilă Dudeștii Noi", to: "/zone/vulcanizare-mobila-dudestii-noi" }],
  },
];

import { localPosts } from "./blog-local";
import { localPosts2 } from "./blog-local-2";

export const posts: BlogPost[] = [...localPosts, ...localPosts2, ...basePosts].sort((a, b) => b.date.localeCompare(a.date));

export const postCategory = (p: BlogPost) => p.category ?? (p.area ? "Ghid local" : /pană|noaptea|spui/i.test(p.title) ? "Urgență" : "Sfaturi");
