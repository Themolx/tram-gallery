export const metadata = {
  title: "Výzva Zlobit — Tram Gallery",
};

export default function OpenCallPage() {
  return (
    <div>

      {/* Hero */}
      <section className="px-6 pt-12 pb-0">
        <div className="type-label mb-4" style={{ color: "#bbb" }}>Tram Gallery — Praha</div>
        <div
          className="font-black uppercase leading-none"
          style={{ fontSize: "clamp(64px, 14vw, 200px)", letterSpacing: "-0.05em", lineHeight: 0.85 }}
        >
          VÝZVA<br />
          <span style={{ color: "#E3000B" }}>ZLOBIT</span>
        </div>
      </section>

      <div className="bar bar-thick mt-12" />

      {/* Perex */}
      <section className="px-6 py-12 border-b-4 border-black">
        <p
          className="font-black leading-none uppercase"
          style={{ fontSize: "clamp(28px, 5vw, 64px)", letterSpacing: "-0.04em", lineHeight: 0.9, maxWidth: 900 }}
        >
          Hledáme autory pro kolektivní výstavu v pražských tramvajových zastávkách.
        </p>
      </section>

      {/* Detail bloky */}
      <section>
        {[
          {
            num: "01",
            title: "Co",
            text: "Výstava v reklamních rámečcích na zastávkách jedné tramvajové linky. Každá zastávka je výstavní sál. Každý autor dostane blok zastávek po sobě. Celý úsek projdete pěšky nebo projedete tramvají.",
          },
          {
            num: "02",
            title: "Formát díla",
            text: "Cokoliv co je na papíře. Série, variace, nebo pokaždé něco jiného. Dodáte hotové tisky, nainstalujeme je společně.",
          },
          {
            num: "03",
            title: "Vernisáž",
            text: "Společná instalace. Sejdeme se, projdeme trasu, každý nainstaluje svá díla do rámečků. Datum bude upřesněno.",
          },
          {
            num: "04",
            title: "Životnost",
            text: "Přibližně týden. Výstavu sundá DPP, počasí, nebo čas.",
          },
        ].map((item) => (
          <div key={item.num} className="flex border-b-4 border-black">
            <div
              className="font-black leading-none py-8 shrink-0 border-r-4 border-black flex items-center justify-center"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", letterSpacing: "-0.04em", color: "#E3000B", width: "clamp(100px, 14vw, 160px)" }}
            >
              {item.num}
            </div>
            <div className="px-8 py-8 flex-1">
              <div
                className="font-black uppercase mb-3"
                style={{ fontSize: "clamp(18px, 2.5vw, 28px)", letterSpacing: "-0.02em" }}
              >
                {item.title}
              </div>
              <p className="type-body" style={{ fontWeight: 400, maxWidth: 640 }}>{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="bar bar-thick" />

      {/* Co poslat */}
      <section className="px-6 py-12">
        <div className="type-label mb-6" style={{ color: "#888" }}>Co poslat</div>
        <p
          className="font-black leading-tight mb-8"
          style={{ fontSize: "clamp(16px, 2.5vw, 28px)", letterSpacing: "-0.02em", maxWidth: 640 }}
        >
          Jméno nebo pseudonym, náhled díla nebo série, kolik zastávek chcete obsadit.
        </p>
        <div className="flex items-start gap-12 flex-wrap">
          <div>
            <div className="type-label mb-2" style={{ color: "#888" }}>Kam</div>
            <a
              href="mailto:tramgallery@protonmail.com"
              className="font-black"
              style={{ fontSize: "clamp(18px, 3vw, 36px)", color: "#E3000B", textDecoration: "underline", letterSpacing: "-0.03em" }}
            >
              tramgallery@protonmail.com
            </a>
          </div>
          <div>
            <div className="type-label mb-2" style={{ color: "#888" }}>Deadline</div>
            <div
              className="font-black"
              style={{ fontSize: "clamp(18px, 3vw, 36px)", letterSpacing: "-0.03em", color: "#ccc" }}
            >
              [DOPLŇ]
            </div>
          </div>
        </div>
      </section>

      <div className="bar bar-thick" />

      {/* PDF download */}
      <div className="px-6 py-6 flex items-center justify-between border-b-4 border-black">
        <span className="type-label" style={{ color: "#aaa" }}>Verze pro tisk / sdílení</span>
        <a
          href="/api/open-call-pdf"
          target="_blank"
          className="font-black no-underline"
          style={{ fontSize: "clamp(13px, 1.5vw, 16px)", letterSpacing: "-0.01em", color: "#E3000B", border: "3px solid #E3000B", padding: "8px 16px" }}
        >
          Stáhnout PDF →
        </a>
      </div>
      <div className="bar bar-thick" />
    </div>
  );
}
