// Pagini locale: fiecare zonă are text propriu, scris separat (nu șablon cu numele înlocuit).
// Acoperire: tot județul Timiș + autostrada A1 între vama Nădlac și Margina (vezi COVERAGE în site-data).

export type ZoneSection = { h2: string; p: string[] };
export type ZoneFaq = { q: string; a: string };

export type Zone = {
  slug: string;
  name: string;
  short: string;
  eta: string;
  etaMinutes: string;
  km: number;
  coords: [number, number];
  desc: string;
  intro: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  roads: string[];
  localities: string[];
  sections: ZoneSection[];
  serviceSlugs: string[];
  faqs: ZoneFaq[];
  blogSlugs: string[];
};

export const RADIUS_KM = 50;

export const zones: Zone[] = [
  {
    "slug": "vulcanizare-non-stop-timisoara",
    "name": "Timișoara — Mehala și centru",
    "short": "Timișoara",
    "eta": "Sosire ~10–30 min",
    "etaMinutes": "10–30 min",
    "km": 0,
    "coords": [
      45.7647,
      21.2037
    ],
    "desc": "Atelier non-stop în Mehala, aproape de orice cartier.",
    "intro": "Vulcanizare Non Stop Timișoara te așteaptă pe Str. Cloșca, nr. 33, în Mehala, 24/24. Pentru o roată complet dezumflată, sună înainte să pornești: venim noi, ca să nu riști janta.",
    "metaTitle": "Vulcanizare Non Stop Timișoara | 0725 138 493",
    "metaDesc": "Atelier non-stop în Mehala, aproape de orice cartier. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare non-stop în Timișoara — atelier în Mehala",
    "roads": [
      "Str. Cloșca",
      "Calea Circumvalațiunii",
      "Calea Aradului",
      "Calea Șagului"
    ],
    "localities": [
      "Timișoara",
      "Mehala",
      "Cetate",
      "Iosefin",
      "Fabric",
      "Freidorf"
    ],
    "sections": [
      {
        "h2": "Atelier în Mehala sau intervenție în oraș?",
        "p": [
          "Dacă anvelopa pierde aer, nu presupune că poți traversa orașul în siguranță. Descrie-ne problema și îți spunem dacă e mai bine să vii la atelier sau să aștepți echipa mobilă."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Timișoara?",
        "a": "De obicei în 10–30 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-dumbravita",
    "name": "Dumbrăvița",
    "short": "Dumbrăvița",
    "eta": "Sosire ~15–30 min",
    "etaMinutes": "15–30 min",
    "km": 8,
    "coords": [
      45.7978,
      21.2425
    ],
    "desc": "Pene și schimburi de anvelope la nord de Timișoara.",
    "intro": "În Dumbrăvița, o pană în fața casei nu înseamnă un drum pe roata goală până în oraș. Trimite adresa și dimensiunea anvelopei; venim cu tot echipamentul.",
    "metaTitle": "Vulcanizare mobilă Dumbrăvița 24/24 | 0725 138 493",
    "metaDesc": "Pene și schimburi de anvelope la nord de Timișoara. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Dumbrăvița",
    "roads": [
      "Calea Aradului",
      "DN69",
      "DJ691",
      "Centura Timișoarei"
    ],
    "localities": [
      "Dumbrăvița"
    ],
    "sections": [
      {
        "h2": "Accesul în cartierele rezidențiale",
        "p": [
          "Indică un loc plan și liber, fără să blochezi poarta vecinilor. Traficul de pe Calea Aradului și DJ691 influențează timpul de sosire."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Dumbrăvița?",
        "a": "De obicei în 15–30 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-giroc",
    "name": "Giroc și Chișoda",
    "short": "Giroc",
    "eta": "Sosire ~20–40 min",
    "etaMinutes": "20–40 min",
    "km": 12,
    "coords": [
      45.6942,
      21.2358
    ],
    "desc": "Intervenții în Giroc și Chișoda, acasă sau în parcare.",
    "intro": "Pentru șoferii din Giroc și Chișoda, drumul până în Mehala poate fi aglomerat. Dacă roata nu mai ține aer, rămâi într-un loc sigur și cere intervenția la adresă.",
    "metaTitle": "Vulcanizare mobilă Giroc 24/24 | 0725 138 493",
    "metaDesc": "Intervenții în Giroc și Chișoda, acasă sau în parcare. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Giroc și Chișoda",
    "roads": [
      "Calea Martirilor",
      "Calea Șagului",
      "DN59",
      "Centura Timișoarei"
    ],
    "localities": [
      "Giroc",
      "Chișoda"
    ],
    "sections": [
      {
        "h2": "Contează pe ce parte a comunei ești",
        "p": [
          "Spune dacă ești în Giroc sau Chișoda și trimite locația. Pentru schimbul sezonier pregătește setul de anvelope și cheia antifurt."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Giroc?",
        "a": "De obicei în 20–40 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-ghiroda",
    "name": "Ghiroda",
    "short": "Ghiroda",
    "eta": "Sosire ~20–40 min",
    "etaMinutes": "20–40 min",
    "km": 8,
    "coords": [
      45.7636,
      21.3
    ],
    "desc": "Asistență pe ieșirea estică a orașului și lângă aeroport.",
    "intro": "Pe Calea Lugojului și în Ghiroda, traficul de tranzit se întâlnește cu cel local. La o pană, caută un loc ferit de circulație și spune-ne sensul de mers.",
    "metaTitle": "Vulcanizare mobilă Ghiroda 24/24 | 0725 138 493",
    "metaDesc": "Asistență pe ieșirea estică a orașului și lângă aeroport. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Ghiroda",
    "roads": [
      "DN6",
      "Calea Lugojului",
      "Centura Timișoarei"
    ],
    "localities": [
      "Ghiroda",
      "Giarmata-Vii"
    ],
    "sections": [
      {
        "h2": "Repere utile pe DN6",
        "p": [
          "Un număr de imobil, o parcare sau locația trimisă din telefon ne ajută mai mult decât «spre aeroport»."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Ghiroda?",
        "a": "De obicei în 20–40 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-mosnita-noua",
    "name": "Moșnița Nouă",
    "short": "Moșnița",
    "eta": "Sosire ~25–45 min",
    "etaMinutes": "25–45 min",
    "km": 12,
    "coords": [
      45.7183,
      21.325
    ],
    "desc": "Schimburi și reparații în zona rezidențială din sud-est.",
    "intro": "În Moșnița Nouă adresa completă contează: străzile noi pot schimba traseul. Te ajutăm la domiciliu dacă ai o suprafață plană pentru lucru.",
    "metaTitle": "Vulcanizare mobilă Moșnița 24/24 | 0725 138 493",
    "metaDesc": "Schimburi și reparații în zona rezidențială din sud-est. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Moșnița Nouă",
    "roads": [
      "DJ592",
      "Calea Buziașului",
      "Centura Timișoarei"
    ],
    "localities": [
      "Moșnița Nouă",
      "Moșnița Veche",
      "Urseni"
    ],
    "sections": [
      {
        "h2": "O intervenție pregătită dinainte",
        "p": [
          "Trimite locația porții, nu doar numele ansamblului. Dacă accesul e pe pietriș sau pământ, spune-ne dinainte."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Moșnița?",
        "a": "De obicei în 25–45 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-sacalaz",
    "name": "Săcălaz",
    "short": "Săcălaz",
    "eta": "Sosire ~20–40 min",
    "etaMinutes": "20–40 min",
    "km": 11,
    "coords": [
      45.7583,
      21.1122
    ],
    "desc": "Intervenții spre vest, pentru autoturisme și utilaje.",
    "intro": "Spre Săcălaz mergem în principal pe DN59A. Venim și când vehiculul a rămas într-o curte sau lângă un teren agricol.",
    "metaTitle": "Vulcanizare mobilă Săcălaz 24/24 | 0725 138 493",
    "metaDesc": "Intervenții spre vest, pentru autoturisme și utilaje. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Săcălaz",
    "roads": [
      "DN59A",
      "Calea Torontalului",
      "DN6"
    ],
    "localities": [
      "Săcălaz",
      "Beregsău Mare",
      "Beregsău Mic"
    ],
    "sections": [
      {
        "h2": "Accesul până la vehicul",
        "p": [
          "Pentru o pană în afara asfaltului spune-ne cum e terenul și ce vehicul ai, ca să aducem echipamentul potrivit."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Săcălaz?",
        "a": "De obicei în 20–40 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-dudestii-noi",
    "name": "Dudeștii Noi",
    "short": "Dudeștii Noi",
    "eta": "Sosire ~25–45 min",
    "etaMinutes": "25–45 min",
    "km": 14,
    "coords": [
      45.8372,
      21.1028
    ],
    "desc": "Ajutor pe direcția nord-vest, lângă DN6.",
    "intro": "Dudeștii Noi și Becicherecu Mic sunt pe ieșirea spre Cenad. Dacă ai o problemă la roată pe DN6, spune-ne localitatea apropiată și sensul de mers.",
    "metaTitle": "Vulcanizare mobilă Dudeștii Noi 24/24 | 0725 138 493",
    "metaDesc": "Ajutor pe direcția nord-vest, lângă DN6. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Dudeștii Noi",
    "roads": [
      "DN6",
      "Calea Torontalului",
      "Centura Timișoarei"
    ],
    "localities": [
      "Dudeștii Noi",
      "Becicherecu Mic",
      "Sânandrei"
    ],
    "sections": [
      {
        "h2": "Pană pe drum sau în localitate",
        "p": [
          "Pe DN6, prioritatea e să ieși din trafic fără manevre bruște. Nu schimba roata lângă camioane în mișcare."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Dudeștii Noi?",
        "a": "De obicei în 25–45 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-recas-a1",
    "name": "Recaș și A1 spre Lugoj",
    "short": "Recaș / A1",
    "eta": "Sosire ~35–60 min",
    "etaMinutes": "35–60 min",
    "km": 25,
    "coords": [
      45.8011,
      21.5008
    ],
    "desc": "Spre Recaș și pe A1, în tot județul Timiș.",
    "intro": "Venim spre Recaș pe DN6 și pe A1, oriunde în județul Timiș, zi și noapte.",
    "metaTitle": "Vulcanizare mobilă Recaș / A1 24/24 | 0725 138 493",
    "metaDesc": "Spre Recaș și pe A1, în tot județul Timiș. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Recaș și A1 spre Lugoj",
    "roads": [
      "DN6",
      "A1 Timișoara–Lugoj",
      "Centura Timișoarei"
    ],
    "localities": [
      "Recaș",
      "Izvin",
      "Remetea Mare"
    ],
    "sections": [
      {
        "h2": "Pe autostradă avem nevoie de sens și kilometru",
        "p": [
          "Trimite poziția, sensul de mers și kilometrul. Stai departe de trafic, după parapet dacă poți; pentru pericol imediat sună la 112."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Recaș / A1?",
        "a": "De obicei în 35–60 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-sanandrei",
    "name": "Sânandrei și Carani",
    "short": "Sânandrei",
    "eta": "Sosire ~25–45 min",
    "etaMinutes": "25–45 min",
    "km": 13,
    "coords": [
      45.8569,
      21.17
    ],
    "desc": "Pene și schimb de anvelope spre nord, pe DN69.",
    "intro": "Venim non-stop în Sânandrei și Carani și în Carani, Covaci: reparăm pana pe loc, schimbăm roata sau montăm anvelope la domiciliu. Atelierul nostru din Timișoara, de pe Str. Cloșca 33, e deschis 24/24.",
    "metaTitle": "Vulcanizare mobilă Sânandrei 24/24 | 0725 138 493",
    "metaDesc": "Pene și schimb de anvelope spre nord, pe DN69. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Sânandrei și Carani",
    "roads": [
      "DN69",
      "Calea Aradului"
    ],
    "localities": [
      "Sânandrei",
      "Carani",
      "Covaci"
    ],
    "sections": [
      {
        "h2": "Cum ajungem în Sânandrei",
        "p": [
          "Venim pe DN69, Calea Aradului. De obicei ajungem în 25–45 min, în funcție de trafic și ora din zi. Trimite locația pe WhatsApp și dimensiunea anvelopei, ca să aducem ce trebuie."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Sânandrei?",
        "a": "De obicei în 25–45 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-giarmata",
    "name": "Giarmata",
    "short": "Giarmata",
    "eta": "Sosire ~25–45 min",
    "etaMinutes": "25–45 min",
    "km": 14,
    "coords": [
      45.8364,
      21.3089
    ],
    "desc": "Intervenții lângă aeroport și în Giarmata.",
    "intro": "Venim non-stop în Giarmata și în Giarmata-Vii, Cerneteaz: reparăm pana pe loc, schimbăm roata sau montăm anvelope la domiciliu. Atelierul nostru din Timișoara, de pe Str. Cloșca 33, e deschis 24/24.",
    "metaTitle": "Vulcanizare mobilă Giarmata 24/24 | 0725 138 493",
    "metaDesc": "Intervenții lângă aeroport și în Giarmata. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Giarmata",
    "roads": [
      "DJ691",
      "Aeroportul Timișoara"
    ],
    "localities": [
      "Giarmata",
      "Giarmata-Vii",
      "Cerneteaz"
    ],
    "sections": [
      {
        "h2": "Cum ajungem în Giarmata",
        "p": [
          "Venim pe DJ691, Aeroportul Timișoara. De obicei ajungem în 25–45 min, în funcție de trafic și ora din zi. Trimite locația pe WhatsApp și dimensiunea anvelopei, ca să aducem ce trebuie."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Giarmata?",
        "a": "De obicei în 25–45 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-remetea-mare",
    "name": "Remetea Mare",
    "short": "Remetea Mare",
    "eta": "Sosire ~25–45 min",
    "etaMinutes": "25–45 min",
    "km": 14,
    "coords": [
      45.7786,
      21.38
    ],
    "desc": "Ajutor pe DN6 spre est, în Remetea Mare și Ianova.",
    "intro": "Venim non-stop în Remetea Mare și în Ianova, Bazoșu Nou: reparăm pana pe loc, schimbăm roata sau montăm anvelope la domiciliu. Atelierul nostru din Timișoara, de pe Str. Cloșca 33, e deschis 24/24.",
    "metaTitle": "Vulcanizare mobilă Remetea Mare 24/24 | 0725 138 493",
    "metaDesc": "Ajutor pe DN6 spre est, în Remetea Mare și Ianova. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Remetea Mare",
    "roads": [
      "DN6",
      "Calea Lugojului"
    ],
    "localities": [
      "Remetea Mare",
      "Ianova",
      "Bazoșu Nou"
    ],
    "sections": [
      {
        "h2": "Cum ajungem în Remetea Mare",
        "p": [
          "Venim pe DN6, Calea Lugojului. De obicei ajungem în 25–45 min, în funcție de trafic și ora din zi. Trimite locația pe WhatsApp și dimensiunea anvelopei, ca să aducem ce trebuie."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Remetea Mare?",
        "a": "De obicei în 25–45 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-sag",
    "name": "Șag și Parța",
    "short": "Șag",
    "eta": "Sosire ~25–45 min",
    "etaMinutes": "25–45 min",
    "km": 13,
    "coords": [
      45.6464,
      21.1767
    ],
    "desc": "Intervenții pe DN59 spre Deta, în Șag și Parța.",
    "intro": "Venim non-stop în Șag și Parța și în Parța, Sânmihaiu Român: reparăm pana pe loc, schimbăm roata sau montăm anvelope la domiciliu. Atelierul nostru din Timișoara, de pe Str. Cloșca 33, e deschis 24/24.",
    "metaTitle": "Vulcanizare mobilă Șag 24/24 | 0725 138 493",
    "metaDesc": "Intervenții pe DN59 spre Deta, în Șag și Parța. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Șag și Parța",
    "roads": [
      "DN59",
      "Calea Șagului"
    ],
    "localities": [
      "Șag",
      "Parța",
      "Sânmihaiu Român"
    ],
    "sections": [
      {
        "h2": "Cum ajungem în Șag",
        "p": [
          "Venim pe DN59, Calea Șagului. De obicei ajungem în 25–45 min, în funcție de trafic și ora din zi. Trimite locația pe WhatsApp și dimensiunea anvelopei, ca să aducem ce trebuie."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Șag?",
        "a": "De obicei în 25–45 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-utvin",
    "name": "Utvin și Sânmihaiu Român",
    "short": "Utvin",
    "eta": "Sosire ~20–40 min",
    "etaMinutes": "20–40 min",
    "km": 9,
    "coords": [
      45.7178,
      21.135
    ],
    "desc": "Pene și schimburi de anvelope la sud-vest de oraș.",
    "intro": "Venim non-stop în Utvin și Sânmihaiu Român și în Sânmihaiu Român, Sânmihaiu German: reparăm pana pe loc, schimbăm roata sau montăm anvelope la domiciliu. Atelierul nostru din Timișoara, de pe Str. Cloșca 33, e deschis 24/24.",
    "metaTitle": "Vulcanizare mobilă Utvin 24/24 | 0725 138 493",
    "metaDesc": "Pene și schimburi de anvelope la sud-vest de oraș. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Utvin și Sânmihaiu Român",
    "roads": [
      "DJ591",
      "Centura Timișoarei"
    ],
    "localities": [
      "Utvin",
      "Sânmihaiu Român",
      "Sânmihaiu German"
    ],
    "sections": [
      {
        "h2": "Cum ajungem în Utvin",
        "p": [
          "Venim pe DJ591, Centura Timișoarei. De obicei ajungem în 20–40 min, în funcție de trafic și ora din zi. Trimite locația pe WhatsApp și dimensiunea anvelopei, ca să aducem ce trebuie."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Utvin?",
        "a": "De obicei în 20–40 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-bucovat",
    "name": "Bucovăț și Dumbrăvița de sud",
    "short": "Bucovăț",
    "eta": "Sosire ~30–50 min",
    "etaMinutes": "30–50 min",
    "km": 15,
    "coords": [
      45.69,
      21.37
    ],
    "desc": "Intervenții pe DJ592, spre Buziaș.",
    "intro": "Venim non-stop în Bucovăț și Dumbrăvița de sud și în Sânmihaiu de Câmp, Urseni: reparăm pana pe loc, schimbăm roata sau montăm anvelope la domiciliu. Atelierul nostru din Timișoara, de pe Str. Cloșca 33, e deschis 24/24.",
    "metaTitle": "Vulcanizare mobilă Bucovăț 24/24 | 0725 138 493",
    "metaDesc": "Intervenții pe DJ592, spre Buziaș. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Bucovăț și Dumbrăvița de sud",
    "roads": [
      "DJ592",
      "Calea Buziașului"
    ],
    "localities": [
      "Bucovăț",
      "Sânmihaiu de Câmp",
      "Urseni"
    ],
    "sections": [
      {
        "h2": "Cum ajungem în Bucovăț",
        "p": [
          "Venim pe DJ592, Calea Buziașului. De obicei ajungem în 30–50 min, în funcție de trafic și ora din zi. Trimite locația pe WhatsApp și dimensiunea anvelopei, ca să aducem ce trebuie."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Bucovăț?",
        "a": "De obicei în 30–50 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-jimbolia",
    "name": "Jimbolia și Cenad",
    "short": "Jimbolia",
    "eta": "Sosire ~45–60 min",
    "etaMinutes": "45–60 min",
    "km": 38,
    "coords": [
      45.7914,
      20.7178
    ],
    "desc": "Spre vest, pe DN59C, până la Jimbolia.",
    "intro": "Venim non-stop în Jimbolia și Cenad și în Cărpiniș, Biled, Lenauheim: reparăm pana pe loc, schimbăm roata sau montăm anvelope la domiciliu. Atelierul nostru din Timișoara, de pe Str. Cloșca 33, e deschis 24/24.",
    "metaTitle": "Vulcanizare mobilă Jimbolia 24/24 | 0725 138 493",
    "metaDesc": "Spre vest, pe DN59C, până la Jimbolia. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Jimbolia și Cenad",
    "roads": [
      "DN59C",
      "DN6"
    ],
    "localities": [
      "Jimbolia",
      "Cărpiniș",
      "Biled",
      "Lenauheim"
    ],
    "sections": [
      {
        "h2": "Cum ajungem în Jimbolia",
        "p": [
          "Venim pe DN59C, DN6. De obicei ajungem în 45–60 min, în funcție de trafic și ora din zi. Trimite locația pe WhatsApp și dimensiunea anvelopei, ca să aducem ce trebuie."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Jimbolia?",
        "a": "De obicei în 45–60 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-deta",
    "name": "Deta și Ciacova",
    "short": "Deta",
    "eta": "Sosire ~45–60 min",
    "etaMinutes": "45–60 min",
    "km": 40,
    "coords": [
      45.39,
      21.22
    ],
    "desc": "Spre sud, pe DN59, în Ciacova, Jebel și Deta.",
    "intro": "Venim non-stop în Deta și Ciacova și în Ciacova, Voiteg, Jebel: reparăm pana pe loc, schimbăm roata sau montăm anvelope la domiciliu. Atelierul nostru din Timișoara, de pe Str. Cloșca 33, e deschis 24/24.",
    "metaTitle": "Vulcanizare mobilă Deta 24/24 | 0725 138 493",
    "metaDesc": "Spre sud, pe DN59, în Ciacova, Jebel și Deta. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Deta și Ciacova",
    "roads": [
      "DN59",
      "DJ588"
    ],
    "localities": [
      "Deta",
      "Ciacova",
      "Voiteg",
      "Jebel"
    ],
    "sections": [
      {
        "h2": "Cum ajungem în Deta",
        "p": [
          "Venim pe DN59, DJ588. De obicei ajungem în 45–60 min, în funcție de trafic și ora din zi. Trimite locația pe WhatsApp și dimensiunea anvelopei, ca să aducem ce trebuie."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Deta?",
        "a": "De obicei în 45–60 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-buzias",
    "name": "Buziaș",
    "short": "Buziaș",
    "eta": "Sosire ~40–60 min",
    "etaMinutes": "40–60 min",
    "km": 33,
    "coords": [
      45.65,
      21.605
    ],
    "desc": "Intervenții în Buziaș și satele din jur.",
    "intro": "Venim non-stop în Buziaș și în Bacova, Silagiu: reparăm pana pe loc, schimbăm roata sau montăm anvelope la domiciliu. Atelierul nostru din Timișoara, de pe Str. Cloșca 33, e deschis 24/24.",
    "metaTitle": "Vulcanizare mobilă Buziaș 24/24 | 0725 138 493",
    "metaDesc": "Intervenții în Buziaș și satele din jur. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Buziaș",
    "roads": [
      "DJ592"
    ],
    "localities": [
      "Buziaș",
      "Bacova",
      "Silagiu"
    ],
    "sections": [
      {
        "h2": "Cum ajungem în Buziaș",
        "p": [
          "Venim pe DJ592. De obicei ajungem în 40–60 min, în funcție de trafic și ora din zi. Trimite locația pe WhatsApp și dimensiunea anvelopei, ca să aducem ce trebuie."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Buziaș?",
        "a": "De obicei în 40–60 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  },
  {
    "slug": "vulcanizare-mobila-ortisoara",
    "name": "Orțișoara și Vinga",
    "short": "Orțișoara",
    "eta": "Sosire ~30–50 min",
    "etaMinutes": "30–50 min",
    "km": 22,
    "coords": [
      45.96,
      21.2
    ],
    "desc": "Pe DN69 și pe A1 spre Arad.",
    "intro": "Venim non-stop în Orțișoara și Vinga și în Vinga, Călacea: reparăm pana pe loc, schimbăm roata sau montăm anvelope la domiciliu. Atelierul nostru din Timișoara, de pe Str. Cloșca 33, e deschis 24/24.",
    "metaTitle": "Vulcanizare mobilă Orțișoara 24/24 | 0725 138 493",
    "metaDesc": "Pe DN69 și pe A1 spre Arad. Atelier 24/24 pe Str. Cloșca 33, Timișoara.",
    "h1": "Vulcanizare mobilă în Orțișoara și Vinga",
    "roads": [
      "DN69",
      "A1 spre Arad"
    ],
    "localities": [
      "Orțișoara",
      "Vinga",
      "Călacea"
    ],
    "sections": [
      {
        "h2": "Cum ajungem în Orțișoara",
        "p": [
          "Venim pe DN69, A1 spre Arad. De obicei ajungem în 30–50 min, în funcție de trafic și ora din zi. Trimite locația pe WhatsApp și dimensiunea anvelopei, ca să aducem ce trebuie."
        ]
      },
      {
        "h2": "Reparație sigură și preț clar",
        "p": [
          "Verificăm dacă anvelopa poate fi reparată în siguranță. Dacă flancul e deteriorat, îți spunem cinstit că trebuie înlocuită.",
          "Sună la 0725 138 493 și spune modelul mașinii, dimensiunea anvelopei și locul unde ești. Atelierul e deschis non-stop; timpul și prețul ți le confirmăm înainte de plecare."
        ]
      }
    ],
    "serviceSlugs": [
      "vulcanizare-atelier-non-stop",
      "reparatii-pe-loc",
      "montaj-domiciliu",
      "echilibrare-roti"
    ],
    "faqs": [
      {
        "q": "În cât timp ajungeți în Orțișoara?",
        "a": "De obicei în 30–50 min, în funcție de trafic și adresă. Îți confirmăm la telefon."
      },
      {
        "q": "Unde e atelierul și ce program are?",
        "a": "Pe Str. Cloșca, nr. 33, Timișoara. Deschis non-stop, 24/24. Telefon: 0725 138 493."
      }
    ],
    "blogSlugs": [
      "pana-pe-dn7-ce-faci",
      "reparatie-sau-inlocuire-anvelopa",
      "cand-schimbi-anvelopele-de-iarna"
    ]
  }
];

// URL-uri vechi → 301.
export const zoneRedirects: Record<string, string> = {
  "vulcanizare-mobila-dragodana": "/zone/vulcanizare-non-stop-timisoara",
  "vulcanizare-mobila-gaesti": "/zone/vulcanizare-mobila-dumbravita",
  "vulcanizare-mobila-matasaru": "/zone/vulcanizare-mobila-sacalaz",
  "vulcanizare-mobila-targoviste": "/zone/vulcanizare-mobila-giroc",
  "vulcanizare-mobila-topoloveni": "/zone/vulcanizare-mobila-recas-a1",
  "vulcanizare-mobila-titu": "/zone/vulcanizare-mobila-ghiroda",
  "vulcanizare-mobila-racari": "/zone/vulcanizare-mobila-dudestii-noi",
  "vulcanizare-mobila-moreni": "/zone/vulcanizare-mobila-mosnita-noua",
  "vulcanizare-mobila-pucioasa": "/zone/vulcanizare-mobila-recas-a1",
  "vulcanizare-mobila-pitesti": "/zone/vulcanizare-mobila-recas-a1",
  "dragodana-gaesti": "/zone/vulcanizare-mobila-dumbravita",
  "targoviste": "/zone/vulcanizare-mobila-giroc",
  "titu": "/zone/vulcanizare-mobila-ghiroda",
  "topoloveni": "/zone/vulcanizare-mobila-recas-a1",
  "autostrada-a1": "/zone/vulcanizare-non-stop-timisoara",
  "pitesti": "/zone/vulcanizare-mobila-recas-a1",
  "bucuresti-vest": "/zone/vulcanizare-non-stop-timisoara",
  "ploiesti": "/zone/vulcanizare-non-stop-timisoara",
  "moreni": "/zone/vulcanizare-mobila-mosnita-noua",
  "pucioasa-fieni": "/zone/vulcanizare-mobila-recas-a1",
  "racari": "/zone/vulcanizare-mobila-dudestii-noi",
  "bolintin": "/zone/vulcanizare-non-stop-timisoara",
  "videle": "/zone/vulcanizare-non-stop-timisoara",
  "campulung": "/zone/vulcanizare-non-stop-timisoara"
};
