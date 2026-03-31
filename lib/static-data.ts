import type { Station, Exhibition, ExhibitionStation } from "@/types";

export const STATIONS: Station[] = [
  // Linka 22 — Bílá Hora → Nádraží Hostivař (úsek centrum)
  { id: "U31Z1P", name: "Bílá Hora", lat: 50.075546, lng: 14.322789, lines: [22] },
  { id: "U999A",  name: "Vypich", lat: 50.080800, lng: 14.329500, lines: [22] },
  { id: "U999B",  name: "Kotlářka", lat: 50.079200, lng: 14.337800, lines: [22] },
  { id: "U999C",  name: "Kajetánka", lat: 50.079900, lng: 14.347200, lines: [22] },
  { id: "U15Z1P", name: "Baterie", lat: 50.092392, lng: 14.369829, lines: [22] },
  { id: "U999D",  name: "Malovanka", lat: 50.094200, lng: 14.376100, lines: [22] },
  { id: "U999E",  name: "Pohořelec", lat: 50.090800, lng: 14.388500, lines: [22] },
  { id: "U999F",  name: "Královský letohrádek", lat: 50.093700, lng: 14.397400, lines: [22] },
  { id: "U999G",  name: "Pražský hrad", lat: 50.090400, lng: 14.400200, lines: [22] },
  { id: "U999H",  name: "Malostranské náměstí", lat: 50.088200, lng: 14.404100, lines: [22] },
  { id: "U999I",  name: "Hellichova", lat: 50.085500, lng: 14.406900, lines: [22] },
  { id: "U999J",  name: "Újezd", lat: 50.082900, lng: 14.408100, lines: [22] },

  // Linka 9 — Spojovací → Palmovka
  { id: "U999K",  name: "Palmovka", lat: 50.100200, lng: 14.463300, lines: [9] },
  { id: "U999L",  name: "Vysočanská", lat: 50.100900, lng: 14.476400, lines: [9] },
  { id: "U999M",  name: "Hloubětín", lat: 50.099600, lng: 14.490200, lines: [9] },
  { id: "U999N",  name: "Hostavice", lat: 50.096700, lng: 14.501300, lines: [9] },
  { id: "U999O",  name: "Lehovec", lat: 50.097400, lng: 14.511600, lines: [9] },
  { id: "U999P",  name: "Rajská zahrada", lat: 50.093200, lng: 14.519800, lines: [9] },
  { id: "U999Q",  name: "Černý most", lat: 50.093800, lng: 14.529200, lines: [9] },

  // Linka 17 — Průhonice → Letňany (úsek náměstí Republiky)
  { id: "U32Z1P", name: "Bílá labuť", lat: 50.090168, lng: 14.435472, lines: [17] },
  { id: "U999R",  name: "Náměstí Republiky", lat: 50.088000, lng: 14.429800, lines: [17] },
  { id: "U999S",  name: "Dlouhá třída", lat: 50.090100, lng: 14.422400, lines: [17] },
  { id: "U999T",  name: "Právnická fakulta", lat: 50.091900, lng: 14.416000, lines: [17] },
  { id: "U999U",  name: "Staroměstská", lat: 50.086900, lng: 14.416800, lines: [17] },
  { id: "U999V",  name: "Národní divadlo", lat: 50.081000, lng: 14.413600, lines: [17] },
  { id: "U999W",  name: "Jiráskovo náměstí", lat: 50.075300, lng: 14.414900, lines: [17] },
];

export const EXHIBITIONS: Exhibition[] = [
  {
    id: "ex-22-bila-hora",
    title: "LINKA 22: BÍLÁ HORA — ÚJEZD",
    subtitle: "Chomps",
    artist: "Martin Tomek",
    color: "#E3000B",
    lineNumber: 22,
    direction: "směr Nádraží Hostivař",
    startStationId: "U31Z1P",
    endStationId: "U999J",
    status: "current",
    openedAt: "2026-02-01T00:00:00.000Z",
    closedAt: undefined,
    curatorialText: `Linka 22 prochází Prahou jako přímka přes sedm staletí zástavby. Z Bílé Hory — místa porážky stavovského povstání 1620 — přes Hradčany, Malou Stranu, až k Újezdu pod Petřínem.

Výstava **Chomps** obsazuje dvanáct zastávek na tomto úseku. Každý reklamní rámeček nese tisk formátu A2/A3. Motiv se opakuje a variuje — jako zastávky na lince, jako rytmus kol na kolejích.

Díla jsou vložena do volných reklamních rámečků — bez lepidla, bez povolení. Existují, dokud je město neodstraní.`,
    visitInfo: `Nastupte na tramvaj linky 22 na zastávce **Bílá Hora** (směr Nádraží Hostivař). Díla najdete v reklamních rámečcích na označnících zastávek. Výstava končí na zastávce Újezd.`,
    createdAt: "2026-01-15T10:00:00.000Z",
  },
  {
    id: "ex-17-namrep",
    title: "LINKA 17: BÍLÁ LABUŤ — JIRÁSKOVO NÁM.",
    subtitle: "Golden Shit",
    artist: "Tomáš Vrána",
    color: "#0057A8",
    lineNumber: 17,
    direction: "směr Průhonice",
    startStationId: "U32Z1P",
    endStationId: "U999W",
    status: "current",
    openedAt: "2026-03-01T00:00:00.000Z",
    closedAt: undefined,
    curatorialText: `Sedm zastávek podél Vltavy. Linka 17 kopíruje nábřeží od Starého Města přes Národní třídu k Jiráskovu náměstí — historická trasa, která existuje od roku 1891.

Výstava **Golden Shit** pracuje s motivem hodnoty a odpadku. Tisky jsou vloženy do volných reklamních rámečků bez lepidla — čistě fyzickou přítomností papíru v rámu.`,
    visitInfo: `Linka 17, směr Průhonice. Nastoupte na Bílé labuti nebo Náměstí Republiky. Výstava končí na Jiráskově náměstí.`,
    createdAt: "2026-02-10T10:00:00.000Z",
  },
  {
    id: "ex-9-palmovka",
    title: "LINKA 9: PALMOVKA — ČERNÝ MOST",
    subtitle: "Periferie",
    artist: "—",
    color: "#00843D",
    lineNumber: 9,
    direction: "směr Spojovací",
    startStationId: "U999K",
    endStationId: "U999Q",
    status: "upcoming",
    openedAt: "2026-05-01T00:00:00.000Z",
    closedAt: undefined,
    curatorialText: `Připravovaná výstava na lince 9, úsek Palmovka–Černý most. Více informací brzy.`,
    visitInfo: "",
    createdAt: "2026-03-01T10:00:00.000Z",
  },
];

export const EXHIBITION_STATIONS: ExhibitionStation[] = [
  // Linka 22
  { id: "es-22-01", exhibitionId: "ex-22-bila-hora", stationId: "U31Z1P",  position: 0,  hasInstallation: true,  workTitle: "Bílá Hora #1" },
  { id: "es-22-02", exhibitionId: "ex-22-bila-hora", stationId: "U999A",   position: 1,  hasInstallation: false },
  { id: "es-22-03", exhibitionId: "ex-22-bila-hora", stationId: "U999B",   position: 2,  hasInstallation: true,  workTitle: "Kotlářka #2" },
  { id: "es-22-04", exhibitionId: "ex-22-bila-hora", stationId: "U999C",   position: 3,  hasInstallation: false },
  { id: "es-22-05", exhibitionId: "ex-22-bila-hora", stationId: "U15Z1P",  position: 4,  hasInstallation: true,  workTitle: "Baterie #3" },
  { id: "es-22-06", exhibitionId: "ex-22-bila-hora", stationId: "U999D",   position: 5,  hasInstallation: false },
  { id: "es-22-07", exhibitionId: "ex-22-bila-hora", stationId: "U999E",   position: 6,  hasInstallation: true,  workTitle: "Pohořelec #4" },
  { id: "es-22-08", exhibitionId: "ex-22-bila-hora", stationId: "U999F",   position: 7,  hasInstallation: false },
  { id: "es-22-09", exhibitionId: "ex-22-bila-hora", stationId: "U999G",   position: 8,  hasInstallation: true,  workTitle: "Pražský hrad #5" },
  { id: "es-22-10", exhibitionId: "ex-22-bila-hora", stationId: "U999H",   position: 9,  hasInstallation: true,  workTitle: "Malostranské #6" },
  { id: "es-22-11", exhibitionId: "ex-22-bila-hora", stationId: "U999I",   position: 10, hasInstallation: false },
  { id: "es-22-12", exhibitionId: "ex-22-bila-hora", stationId: "U999J",   position: 11, hasInstallation: true,  workTitle: "Újezd #7" },

  // Linka 17
  { id: "es-17-01", exhibitionId: "ex-17-namrep", stationId: "U32Z1P",  position: 0, hasInstallation: true,  workTitle: "Bílá labuť #1" },
  { id: "es-17-02", exhibitionId: "ex-17-namrep", stationId: "U999R",   position: 1, hasInstallation: false },
  { id: "es-17-03", exhibitionId: "ex-17-namrep", stationId: "U999S",   position: 2, hasInstallation: true,  workTitle: "Dlouhá třída #2" },
  { id: "es-17-04", exhibitionId: "ex-17-namrep", stationId: "U999T",   position: 3, hasInstallation: false },
  { id: "es-17-05", exhibitionId: "ex-17-namrep", stationId: "U999U",   position: 4, hasInstallation: true,  workTitle: "Staroměstská #3" },
  { id: "es-17-06", exhibitionId: "ex-17-namrep", stationId: "U999V",   position: 5, hasInstallation: true,  workTitle: "Národní divadlo #4" },
  { id: "es-17-07", exhibitionId: "ex-17-namrep", stationId: "U999W",   position: 6, hasInstallation: false },

  // Linka 9 (upcoming — no installations yet)
  { id: "es-9-01", exhibitionId: "ex-9-palmovka", stationId: "U999K", position: 0, hasInstallation: false },
  { id: "es-9-02", exhibitionId: "ex-9-palmovka", stationId: "U999L", position: 1, hasInstallation: false },
  { id: "es-9-03", exhibitionId: "ex-9-palmovka", stationId: "U999M", position: 2, hasInstallation: false },
  { id: "es-9-04", exhibitionId: "ex-9-palmovka", stationId: "U999N", position: 3, hasInstallation: false },
  { id: "es-9-05", exhibitionId: "ex-9-palmovka", stationId: "U999O", position: 4, hasInstallation: false },
  { id: "es-9-06", exhibitionId: "ex-9-palmovka", stationId: "U999P", position: 5, hasInstallation: false },
  { id: "es-9-07", exhibitionId: "ex-9-palmovka", stationId: "U999Q", position: 6, hasInstallation: false },
];
