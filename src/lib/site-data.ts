export const PHONE = "0725 138 493";
export const TEL = "+40725138493";
export const WA_NUMBER = "40725138493";
export const WA =
  "https://wa.me/40725138493?text=Bun%C4%83%20ziua!%20Am%20nevoie%20de%20vulcanizare.";
export const MAPS = "https://share.google/zFf8sUj8ZdYxTATsm";
export const REVIEWS = MAPS;

export const COVERAGE = {
  county: "Timiș",
  highway: "A1",
  highwayFrom: "Nădlac (vamă)",
  highwayTo: "Margina",
  label: "tot județul Timiș + A1 (Nădlac – Margina)",
};

export const BASE: [number, number] = [45.7647293, 21.2036795];

export type Service = {
  slug: string;
  icon:
    | "lifebuoy"
    | "wrench"
    | "circle"
    | "gauge"
    | "truck"
    | "navigation";
  title: string;
  desc: string;
  intro: string;
  price: string;
  priceFrom: string;
  priceNote?: string;
  pricing?: { label: string; value: string; note?: string }[];
  duration: string;
  bullets: string[];
  steps: string[];
};

export type FAQ = {
  q: string;
  a: string;
  category: "prețuri" | "disponibilitate" | "timp-sosire" | "servicii" | "plată" | "siguranță";
};

export const services: Service[] = [
  {
    slug: "vulcanizare-atelier-non-stop",
    icon: "wrench",
    title: "Vulcanizare non-stop în atelier",
    desc: "Atelier deschis 24/24 pe Str. Cloșca 33, Timișoara — vii oricând, fără programare.",
    intro:
      "Atelierul nostru din Timișoara, pe Str. Cloșca 33, este deschis zi și noapte, inclusiv în weekend și de sărbători. Vii cu mașina oricând și rezolvăm pe loc pene, montaj, echilibrare sau schimb de anvelope.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "fără programare, 24/24",
    pricing: [
      { label: "Reparație pană", value: "la telefon", note: "în funcție de defect" },
    ],
    duration: "15–60 minute, în funcție de lucrare",
    bullets: [
      "Deschis 24/24, 7 zile din 7",
      "Montaj, demontaj și echilibrare electronică",
      "Reparații pene, valve și senzori de presiune",
      "Autoturisme, SUV-uri, utilitare și camioane",
    ],
    steps: [
      "Vii pe Str. Cloșca 33, Timișoara, oricând",
      "Verificăm anvelopele și îți spunem prețul",
      "Facem lucrarea pe loc",
      "Plătești cu cardul, transfer sau numerar",
    ],
  },
  {
    slug: "asistenta-rutiera",
    icon: "lifebuoy",
    title: "Asistență rutieră 24/24",
    desc: "Intervenim non-stop pe A1, DN6, DN69 și în toată zona Timișoarei, indiferent de oră.",
    intro:
      "Rămâi cu pana pe autostradă sau pe drum național? Venim la tine cu duba de intervenție, complet echipată, la orice oră din zi sau din noapte. Vulcanizarea mobilă rezolvă pe teren, 24/24, fără să îți muți mașina.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "deplasare inclusă în oraș",
    pricing: [
      { label: "Timișoara oraș", value: "la telefon", note: "deplasare inclusă" },
      { label: "A1 / DN6 / DN69 / Centură", value: "la telefon", note: "autostradă & drum național" },
      { label: "Camioane & utilitare", value: "personalizat", note: "contracte flote" },
    ],
    duration: "20–40 minute pe loc",
    bullets: [
      "Intervenții pe A1, DN6, DN69, DN59, Centura Timișoarei și drumurile județene",
      "Aparatură de ultimă generație și compresor la bord",
      "Anvelope de schimb pentru cele mai comune dimensiuni",
      "Semnalizare corectă a zonei de lucru, în siguranță",
    ],
    steps: [
      "Ne suni sau trimiți locația pe WhatsApp",
      "Confirmăm timpul de sosire și prețul estimat",
      "Ajungem la tine și reparăm pe loc",
      "Plătești cu cardul, transfer sau numerar",
    ],
  },
  {
    slug: "reparatii-pe-loc",
    icon: "wrench",
    title: "Reparație pană pe loc",
    desc: "Pene sau valve defecte — reparate la fața locului, cu vulcanizarea mobilă.",
    intro:
      "Reparăm pana direct acolo unde ești: petec, ciupercă sau șnur, schimb de valvă sau resigilare jantă. Anvelopa rămâne sigură pentru rulaj normal, cu garanție pentru lucrare.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "reparație simplă pe loc",
    duration: "15–30 minute",
    bullets: [
      "Petec, ciupercă sau șnur, după tipul defectului",
      "Schimb valve și senzori de presiune",
      "Verificare presiune la toate roțile, gratuit",
    ],
    steps: [
      "Diagnosticăm anvelopa la fața locului",
      "Îți spunem dacă reparația e sigură sau e nevoie de anvelopă nouă",
      "Reparăm, umflăm și verificăm etanșeitatea",
      "Primești garanție pentru lucrare",
    ],
  },
  {
    slug: "montaj-domiciliu",
    icon: "circle",
    title: "Schimb anvelope la domiciliu",
    desc: "Montaj vară/iarnă direct acasă sau la birou, fără timpi de așteptare.",
    intro:
      "Venim cu utilajul mobil de montat și echilibrat direct în curtea ta sau în parcarea de la birou. Schimbăm setul sezonier în aproximativ o oră, fără să pierzi timpul la coadă în service.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "set de 4 anvelope",
    duration: "45–75 minute pentru un set complet",
    bullets: [
      "Montaj și demontaj pe jantă, cu mașină mobilă",
      "Echilibrare electronică inclusă la cerere",
      "Cuplu de strângere corect, cu cheie dinamometrică",
      "Preluăm anvelopele vechi la cerere",
    ],
    steps: [
      "Stabilim ziua și ora prin telefon sau WhatsApp",
      "Venim la adresa ta cu tot echipamentul",
      "Montăm, echilibrăm și verificăm presiunile",
      "Îți lăsăm factură sau bon, la alegere",
    ],
  },
  {
    slug: "echilibrare-roti",
    icon: "gauge",
    title: "Echilibrare roți",
    desc: "Echilibrare electronică precisă pentru rulare lină și uzură uniformă.",
    intro:
      "Vibrațiile în volan la 90–120 km/h vin aproape mereu de la roți neechilibrate. Facem echilibrare electronică cu aparatură mobilă, direct la tine, cu contragreutăți adezive sau cu clemă.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "per roată",
    duration: "10 minute pe roată",
    bullets: [
      "Echilibrare pentru jante de aluminiu și de oțel",
      "Contragreutăți invizibile pentru jante de aluminiu",
      "Verificare deformări de jantă și uzură neuniformă",
      "Recomandări de rotire a anvelopelor",
    ],
    steps: [
      "Verificăm vibrațiile și starea roților",
      "Echilibrăm fiecare roată pe aparat",
      "Remontăm la cuplul corect",
      "Test scurt de rulare, dacă e nevoie",
    ],
  },
  {
    slug: "vulcanizare-camioane",
    icon: "truck",
    title: "Vulcanizare camioane",
    desc: "Intervenții pentru TIR-uri și autoutilitare, contracte pentru flote.",
    intro:
      "Avem echipament special pentru camioane, autotrenuri și autoutilitare: pistoale de impact de mare cuplu, cricuri de tonaj și anvelope de intervenție. Lucrăm cu transportatori și flote pe bază de contract.",
    price: "Preț la telefon",
    priceFrom: "Preț la telefon",
    priceNote: "contracte flote",
    duration: "30–60 minute pe roată",
    bullets: [
      "Intervenții pe A1, Centura Timișoarei și în zonele industriale din jur",
      "Reparații și schimb pentru roți de camion și remorcă",
      "Contracte și facturare lunară pentru flote",
      "Prioritate la dispecerat pentru clienții pe contract",
    ],
    steps: [
      "Dispecerul tău ne trimite locația și dimensiunea",
      "Confirmăm disponibilitatea anvelopei",
      "Intervenim pe loc, cu semnalizare de siguranță",
      "Primești documentele pentru flotă",
    ],
  },
];

export { zones, zoneRedirects, RADIUS_KM } from "./zones-data";
export type { Zone } from "./zones-data";

export const mapRings = [
  { minutes: "Timișoara & periurban · 15–30 min", km: 25, radius: 25000 },
  { minutes: "Lugoj, Jimbolia, Deta · 40–60 min", km: 60, radius: 60000 },
  { minutes: "Tot județul Timiș + A1 · 60–90 min", km: 100, radius: 100000 },
];

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const EMAIL = "contact@vulcanizaretimisoara.ro";
export const ADDRESS = "Str. Cloșca, Nr. 33, Timișoara";

export const stats = [
  { value: "15 min", label: "Timp mediu de răspuns în oraș" },
  { value: "2.000+", label: "Clienți ajutați cu pene și anvelope" },
  { value: "365 zile", label: "Intervenții fără programare" },
  { value: "100%", label: "Prețuri clare, fără costuri ascunse" },
];

export const reviews = [
  {
    initials: "LS",
    name: "Laur Solomon",
    when: "Timișoara",
    text: "Cel mai bun pe cuvânt și punctual, lucrează cel mai bine și cel mai rapid oriunde ai fi.",
  },
  {
    initials: "CI",
    name: "Ciprian",
    when: "Timișoara",
    text: "A fost la fața locului în 15 minute. Politicos și corect, prețul foarte rezonabil. Pneul a fost reparat în 10 minute.",
  },
  {
    initials: "AM",
    name: "Andrei M.",
    when: "acum 3 săptămâni",
    text: "Pană pe Centură la 23:00. Au ajuns rapid, montaj profesionist, preț corect. Salvatori!",
  },
  {
    initials: "EP",
    name: "Elena P.",
    when: "acum o lună",
    text: "Mi-au schimbat setul de iarnă direct în curte. Punctuali, curați, recomand cu încredere.",
  },
];

export const faqs = [
  {
    q: "Cât costă o intervenție la Vulcanizare Non Stop Timișoara?",
    a: "În atelierul din Timișoara, prețul îl afli la telefon, înainte de lucrare. Pentru intervențiile mobile, tariful depinde de tipul lucrării și de distanță și îl primești la telefon înainte de plecare, fără surprize.",
    category: "prețuri",
  },
  {
    q: "Veniți și noaptea sau în weekend?",
    a: "Da, suntem disponibili 24/24, inclusiv noaptea, sâmbăta, duminica și de sărbători. Dacă rămâneți cu pana la 3 dimineața, sunați și venim.",
    category: "disponibilitate",
  },
  {
    q: "Cât durează până ajungeți la mine?",
    a: "Atelierul din Timișoara e deschis 24/24, poți veni oricând. Cu intervenția mobilă ajungem în Timișoara în 10–20 minute, în Dumbrăvița, Giroc sau Ghiroda în 15–25 de minute, iar spre Lugoj sau Recaș în 30–45 de minute, în funcție de trafic. Acoperim tot județul Timiș și pe A1 (Nădlac – Margina).",
    category: "timp-sosire",
  },
  {
    q: "Ce servicii faceți la fața locului?",
    a: "Reparație pană (petec, ciupercă, șnur), schimb roată cu cea de rezervă, montaj anvelope noi, echilibrare roți cu aparatură mobilă, verificare presiune și schimb valve. Totul se face pe teren, cu vulcanizarea mobilă.",

    category: "servicii",
  },
  {
    q: "Pot plăti cu cardul?",
    a: "Da, acceptăm plata cu cardul (POS mobil), transfer bancar și numerar. Emitem facturi pentru persoane fizice și juridice.",
    category: "plată",
  },
  {
    q: "Lucrați și cu camioane sau TIR?",
    a: "Da, avem echipament special pentru vulcanizare camioane și autotrenuri. Intervenim pe A1, DN6 și în zonele industriale din tot județul Timiș pentru flote și transportatori.",
    category: "servicii",
  },
  {
    q: "Este sigur să reparați pană pe autostradă?",
    a: "Intervenim doar după semnalizarea corectă a zonei de lucru, cu triunghiuri, veste reflectorizante și lumină de avertizare. Siguranța ta și a echipei noastre e prioritatea zero.",
    category: "siguranță",
  },
  {
    q: "Dacă anvelopa nu poate fi reparată, ce fac?",
    a: "Îți spunem de la început dacă reparația e sigură sau dacă e nevoie de anvelopă nouă. Dacă anvelopa nu poate fi reparată, montăm roata de rezervă sau aducem o anvelopă de intervenție. Vulcanizarea mobilă vine la tine cu tot echipamentul și rezolvăm pe teren, 24/24.",

    category: "servicii",
  },
];

export const COMPANY = {
  name: "NON STOP MAGIC20 SRL",
  cui: "42438996",
  regCom: "J2020000895358",
  euid: "ROONRC.J2020000895358",
  registeredOffice: "Str. Cloșca nr. 33, cam. 3, Timișoara, județul Timiș, cod poștal 300375",
  foundedOn: "02.04.2020",
  source: "https://listafirme.ro/non-stop-magic20-srl-42438996/",
};

// Traseu aproximativ A1 pe tronsonul acoperit: vama Nădlac → Arad → Timișoara → Lugoj → Margina.
export const A1_ROUTE: [number, number][] = [
  [46.155, 20.73], [46.17, 21.07], [46.2, 21.3], [46.15, 21.38], [46.03, 21.34],
  [45.9, 21.3], [45.83, 21.29], [45.79, 21.37], [45.79, 21.62], [45.77, 21.76],
  [45.73, 21.87], [45.78, 22.05], [45.85, 22.26],
];

// Contur aproximativ al județului Timiș (orientativ, pentru hartă).
export const TIMIS_OUTLINE: [number, number][] = [
  [46.17, 20.27], [46.12, 20.62], [46.06, 20.95], [45.97, 21.22], [46.03, 21.45], [45.98, 21.68],
  [46.02, 21.95], [45.93, 22.2], [45.84, 22.42], [45.7, 22.38], [45.6, 22.2], [45.52, 21.98],
  [45.45, 21.7], [45.42, 21.45], [45.48, 21.2], [45.6, 20.98], [45.75, 20.78], [45.9, 20.6], [46.05, 20.4],
];

// Drumuri principale pe care intervenim, cu etichetă pe hartă.
export const ROADS: { name: string; desc: string; at: [number, number]; path: [number, number][] }[] = [
  { name: "DN6", desc: "Timișoara – Lugoj – Caransebeș", at: [45.74, 21.55], path: [[45.75, 21.23], [45.73, 21.5], [45.69, 21.9], [45.6, 22.05]] },
  { name: "DN69", desc: "Timișoara – Arad", at: [45.88, 21.24], path: [[45.78, 21.23], [45.9, 21.25], [46.0, 21.27]] },
  { name: "DN59", desc: "Timișoara – Deta – Moravița", at: [45.55, 21.25], path: [[45.73, 21.22], [45.6, 21.23], [45.4, 21.22]] },
  { name: "DN59A", desc: "Timișoara – Jimbolia", at: [45.78, 20.95], path: [[45.77, 21.18], [45.79, 20.95], [45.79, 20.72]] },
  { name: "DN6 Vest", desc: "Timișoara – Sânnicolau Mare", at: [45.92, 20.9], path: [[45.77, 21.18], [45.95, 20.85], [46.07, 20.63]] },
];
