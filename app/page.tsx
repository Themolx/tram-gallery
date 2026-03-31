import Link from "next/link";
import { getExhibitionsByStatus } from "@/lib/db";
import type { Exhibition } from "@/types";

function ExhibitionCard({ ex }: { ex: Exhibition }) {
  return (
    <Link
      href={`/vystavy/${ex.id}`}
      className="block no-underline group"
      style={{ "--ex-color": ex.color } as React.CSSProperties}
    >
      <div className="frame overflow-hidden">
        <div className="h-3 ex-bg" />
        <div className="p-6 flex gap-6 items-start">
          <div
            className="ex-text font-black leading-none shrink-0"
            style={{ fontSize: "clamp(48px, 6vw, 80px)", letterSpacing: "-0.04em" }}
          >
            {ex.lineNumber}
          </div>
          <div className="flex-1 min-w-0">
            <div className="type-label mb-2" style={{ color: "#666" }}>
              {ex.status === "current"
                ? "Probíhá"
                : ex.status === "upcoming"
                ? "Připravuje se"
                : "Ukončeno"}
              {" · "}
              {new Date(ex.openedAt).toLocaleDateString("cs-CZ", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              })}
              {ex.closedAt
                ? ` — ${new Date(ex.closedAt).toLocaleDateString("cs-CZ", { day: "numeric", month: "numeric", year: "numeric" })}`
                : ex.status === "current"
                ? " — probíhá"
                : ""}
            </div>
            <h2
              className="font-black uppercase leading-none"
              style={{ fontSize: "clamp(18px, 2.5vw, 28px)", letterSpacing: "-0.02em" }}
            >
              {ex.title}
            </h2>
            {ex.subtitle && (
              <p className="mt-2" style={{ fontSize: 12, color: "#666", letterSpacing: "0.04em" }}>
                {ex.subtitle}
              </p>
            )}
          </div>
          <div className="type-label shrink-0" style={{ color: "#aaa" }}>→</div>
        </div>
      </div>
    </Link>
  );
}

export default async function Home() {
  let current: Exhibition[] = [];
  let upcoming: Exhibition[] = [];

  try {
    [current, upcoming] = await Promise.all([
      getExhibitionsByStatus("current"),
      getExhibitionsByStatus("upcoming"),
    ]);
  } catch {
    // Firebase not configured yet
  }

  return (
    <div>
      {/* Hero */}
      <section className="px-6 pt-12 pb-0 overflow-hidden">
        <div className="flex items-start gap-6">
          <div className="rotate-label type-label mt-2 shrink-0" style={{ color: "#bbb" }}>
            Praha — Galerie současného umění
          </div>
          <div className="flex-1">
            <div
              className="font-black uppercase leading-none"
              style={{
                fontSize: "clamp(72px, 18vw, 220px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.85,
              }}
            >
              TRAM<br />
              GALLERY
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-2xl ml-12">
          <div className="bar bar-thin mb-4" />
          <p className="type-body" style={{ fontWeight: 400 }}>
            Výstavní prostory galerie jsou prázdné reklamní rámečky na pražských tramvajových zastávkách.
            Každý úsek linky je samostatná výstava. Cestující projíždí galerií, aniž to ví.
            Jízdenka DPP je vstupné.
          </p>
          <div className="bar bar-thin mt-4" />
        </div>
      </section>

      <div className="bar bar-thick mt-12" />

      {/* Current exhibitions */}
      <section className="px-6 py-12">
        <div className="flex items-baseline gap-6 mb-8">
          <h1 className="type-lg">Aktuální výstavy</h1>
          {current.length > 0 && (
            <span
              className="font-black"
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                color: "var(--dpp)",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {current.length}
            </span>
          )}
        </div>

        {current.length === 0 ? (
          <div className="frame p-8">
            <p className="type-label" style={{ color: "#aaa" }}>
              {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
                ? "Žádné aktuální výstavy"
                : "Firebase není nakonfigurovaný — doplňte .env.local"}
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {current.map((ex) => (
              <ExhibitionCard key={ex.id} ex={ex} />
            ))}
          </div>
        )}
      </section>

      {upcoming.length > 0 && (
        <>
          <div className="bar" />
          <section className="px-6 py-12">
            <h2 className="type-lg mb-8">Připravované</h2>
            <div className="flex flex-col gap-4">
              {upcoming.map((ex) => (
                <ExhibitionCard key={ex.id} ex={ex} />
              ))}
            </div>
          </section>
        </>
      )}

      <div className="bar bar-thick" />
      <div className="px-6 py-6 flex justify-between items-center">
        <span className="type-label" style={{ color: "#aaa" }}>
          Otevřeno 0:00–24:00 · Vstup zdarma (jízdenka DPP)
        </span>
        <Link href="/vystavy" className="nav-link">
          Všechny výstavy →
        </Link>
      </div>
      <div className="bar" />
    </div>
  );
}
