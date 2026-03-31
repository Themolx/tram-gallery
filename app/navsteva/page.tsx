import { getExhibitionsByStatus, getExhibitionStations, getStationsByIds } from "@/lib/db";
import type { Exhibition, Station } from "@/types";
import GalleryMapWrapper from "@/components/GalleryMapWrapper";

export default async function NavstevaPage() {
  let exhibitions: Exhibition[] = [];
  let activeStations: Array<{ station: Station; exhibition: Exhibition }> = [];
  let exhibitionLines: Array<{ exhibition: Exhibition; stations: Station[] }> = [];

  try {
    exhibitions = await getExhibitionsByStatus("current");

    for (const ex of exhibitions) {
      const exStations = await getExhibitionStations(ex.id);
      const allIds = exStations.map((s) => s.stationId);
      const stations = await getStationsByIds(allIds);
      const stationsMap = Object.fromEntries(stations.map((s) => [s.id, s]));

      // Ordered route for line drawing
      const ordered = exStations
        .sort((a, b) => a.position - b.position)
        .map((s) => stationsMap[s.stationId])
        .filter(Boolean) as Station[];
      exhibitionLines.push({ exhibition: ex, stations: ordered });

      // Active stations for dots
      exStations
        .filter((s) => s.hasInstallation)
        .forEach((s) => {
          const st = stationsMap[s.stationId];
          if (st) activeStations.push({ station: st, exhibition: ex });
        });
    }
  } catch {
    // static data fallback
  }

  return (
    <div>
      <div className="px-6 pt-10 pb-8">
        <h1 className="type-xl mb-4">Návštěva</h1>
        <div className="bar bar-thin" />
      </div>

      <div className="bar bar-thick" />
      <div className="grid grid-cols-2 lg:grid-cols-4 border-b-4 border-black">
        {[
          { label: "Otevírací doba", value: "0:00–24:00", note: "Denně, tramvaje jezdí vždy" },
          { label: "Vstupné", value: "Zdarma", note: "Součástí jízdného DPP" },
          { label: "Médium", value: "Paste-up", note: "Linoryt, papír" },
          { label: "Výstavní plochy", value: `${activeStations.length}`, note: "Aktivních zastávek" },
        ].map((item, i) => (
          <div
            key={i}
            className="px-6 py-6"
            style={{ borderRight: i < 3 ? "4px solid black" : "none" }}
          >
            <div className="type-label mb-2" style={{ color: "#888" }}>{item.label}</div>
            <div
              className="font-black leading-none"
              style={{ fontSize: "clamp(20px, 3vw, 36px)", letterSpacing: "-0.02em" }}
            >
              {item.value}
            </div>
            <div className="type-label mt-2" style={{ color: "#aaa", textTransform: "none", letterSpacing: "0.04em" }}>
              {item.note}
            </div>
          </div>
        ))}
      </div>

      <div className="relative" style={{ height: "60vh", minHeight: 400 }}>
        {activeStations.length === 0 ? (
          <div className="flex items-center justify-center h-full border-b-4 border-black">
            <p className="type-label" style={{ color: "#aaa" }}>Žádné aktivní výstavní plochy</p>
          </div>
        ) : (
          <GalleryMapWrapper
            exhibitions={exhibitions}
            activeStations={activeStations}
            exhibitionLines={exhibitionLines}
          />
        )}
      </div>

      <div className="bar bar-thick" />

      <div className="px-6 py-10">
        <h2 className="type-lg mb-8">Jak navštívit galerii</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { num: "01", title: "Vyberte výstavu", text: "Na stránce Výstavy najdete aktuálně probíhající výstavy. Každá výstava je jeden úsek tramvajové linky." },
            { num: "02", title: "Nastupte na tramvaj", text: "Nastupte na uvedenou tramvajovou linku a jeďte v uvedeném směru. Galerie se rozkládá podél celého úseku." },
            { num: "03", title: "Projíždějte galerií", text: "Na každé zastávce s instalací najdete v reklamním rámečku dílo. Díla jsou označena v plánu výstavy." },
          ].map((step) => (
            <div key={step.num} className="frame p-6">
              <div
                className="font-black leading-none mb-4"
                style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.04em", color: "var(--dpp)" }}
              >
                {step.num}
              </div>
              <div className="type-md mb-3" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>{step.title}</div>
              <p className="type-body" style={{ fontWeight: 400 }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      {exhibitions.length > 0 && (
        <>
          <div className="bar" />
          <div className="px-6 py-8">
            <div className="type-label mb-6" style={{ color: "#888" }}>Aktuálně probíhající výstavy</div>
            <div className="flex flex-wrap gap-3">
              {exhibitions.map((ex) => (
                <a key={ex.id} href={`/vystavy/${ex.id}`} className="frame px-4 py-2 no-underline" style={{ borderColor: ex.color } as React.CSSProperties}>
                  <span className="type-label" style={{ color: ex.color }}>Linka {ex.lineNumber} — {ex.title}</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="bar bar-thick" />
    </div>
  );
}
