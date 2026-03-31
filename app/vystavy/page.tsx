import Link from "next/link";
import { getAllExhibitions } from "@/lib/db";
import type { Exhibition, ExhibitionStatus } from "@/types";

const statusLabel: Record<ExhibitionStatus, string> = {
  current: "Aktuální",
  upcoming: "Připravované",
  past: "Archiv",
};

function ExhibitionRow({ ex }: { ex: Exhibition }) {
  return (
    <Link
      href={`/vystavy/${ex.id}`}
      className="block no-underline group"
      style={{ "--ex-color": ex.color } as React.CSSProperties}
    >
      <div className="flex items-stretch border-b-4 border-black">
        {/* Color stripe left */}
        <div className="w-3 ex-bg shrink-0" />

        <div className="flex-1 flex items-center gap-6 px-6 py-5">
          {/* Line number */}
          <div
            className="ex-text font-black shrink-0 leading-none"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", letterSpacing: "-0.04em", minWidth: "2.5ch" }}
          >
            {ex.lineNumber}
          </div>

          <div className="flex-1">
            {/* Artist + exhibition name */}
            {ex.artist && ex.artist !== "—" && (
              <div className="type-label mb-0.5" style={{ color: "#555" }}>{ex.artist}</div>
            )}
            <div
              className="font-black uppercase leading-none"
              style={{ fontSize: "clamp(18px, 2.5vw, 30px)", letterSpacing: "-0.03em" }}
            >
              {ex.subtitle ?? ex.title}
            </div>
            {/* Install date prominent */}
            <div className="flex items-center gap-2 mt-2">
              <span
                className="font-black"
                style={{ fontSize: "clamp(13px, 1.5vw, 16px)", letterSpacing: "-0.01em" }}
              >
                {new Date(ex.openedAt).toLocaleDateString("cs-CZ", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="type-label" style={{ color: "#aaa" }}>
                {ex.closedAt
                  ? `— ${new Date(ex.closedAt).toLocaleDateString("cs-CZ", { day: "numeric", month: "numeric", year: "numeric" })}`
                  : ex.status === "current"
                  ? "— probíhá"
                  : ""}
              </span>
            </div>
            <div className="type-label mt-1" style={{ color: "#bbb" }}>{ex.title}</div>
          </div>

          <div className="type-label shrink-0 group-hover:ex-text" style={{ color: "#bbb" }}>→</div>
        </div>
      </div>
    </Link>
  );
}

export default async function VystavyPage() {
  let exhibitions: Exhibition[] = [];

  try {
    exhibitions = await getAllExhibitions();
  } catch {
    // Firebase not configured
  }

  const groups: Record<ExhibitionStatus, Exhibition[]> = {
    current: exhibitions.filter((e) => e.status === "current"),
    upcoming: exhibitions.filter((e) => e.status === "upcoming"),
    past: exhibitions.filter((e) => e.status === "past"),
  };

  const order: ExhibitionStatus[] = ["current", "upcoming", "past"];

  return (
    <div>
      {/* Header */}
      <div className="px-6 pt-10 pb-8 flex items-end gap-6">
        <h1 className="type-xl">Výstavy</h1>
        <div
          className="font-black"
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            color: "var(--dpp)",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          {exhibitions.length > 0 ? exhibitions.length : ""}
        </div>
      </div>

      <div className="bar bar-thick" />

      {exhibitions.length === 0 ? (
        <div className="px-6 py-12">
          <div className="frame p-8">
            <p className="type-label" style={{ color: "#aaa" }}>
              Žádné výstavy — začněte v{" "}
              <Link href="/admin" className="underline">
                administraci
              </Link>
            </p>
          </div>
        </div>
      ) : (
        order.map((status) => {
          const list = groups[status];
          if (list.length === 0) return null;
          return (
            <section key={status}>
              {/* Section header */}
              <div className="px-6 py-6 flex items-baseline gap-4">
                <h2 className="type-md">{statusLabel[status]}</h2>
                <span className="type-label" style={{ color: "#aaa" }}>
                  {list.length}
                </span>
              </div>
              <div className="bar bar-thin" />
              {list.map((ex) => (
                <ExhibitionRow key={ex.id} ex={ex} />
              ))}
              <div className="bar bar-thick" />
            </section>
          );
        })
      )}
    </div>
  );
}
