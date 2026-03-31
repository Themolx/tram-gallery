export default function OGaleriiPage() {
  return (
    <div>
      {/* Header */}
      <div className="px-6 pt-10 pb-0">
        <div className="flex items-start gap-6 overflow-hidden">
          <div className="rotate-label type-label shrink-0 mt-2" style={{ color: "#bbb" }}>
            O galerii
          </div>
          <div className="flex-1">
            <h1
              className="font-black uppercase leading-none"
              style={{
                fontSize: "clamp(56px, 14vw, 160px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.85,
              }}
            >
              TRAM<br />
              GALLERY
            </h1>
          </div>
        </div>
      </div>

      <div className="bar bar-thick mt-10" />

      {/* Manifest */}
      <div className="px-6 py-12 grid lg:grid-cols-2 gap-0">
        <div className="lg:pr-12 lg:border-r-4 lg:border-black">
          <div className="type-label mb-6" style={{ color: "#888" }}>Manifest</div>
          <div className="prose-gallery">
            <p>
              Tram Gallery je galerie současného umění, jejíž výstavní prostory jsou prázdné reklamní rámečky
              na pražských tramvajových zastávkách.
            </p>
            <p>
              Každý úsek tramvajové linky je samostatná výstava. Galerie nemá stálé sídlo —
              je rozptýlena po celém městě, v infrastruktuře každodenního pohybu.
            </p>
            <p>
              Cestující projíždí galerií, aniž to ví. Nebo ví. To je na nich.
            </p>
            <p>
              Reklamní plocha je obsazena jiným druhem obrazu. Médium je paste-up a linoryt —
              reprodukovatelný, fyzický, dočasný. Dílo existuje do té doby, než ho někdo sundá.
            </p>
            <p>
              Web funguje jako legitimní galerijní web. S výstavami, kurátorskými texty,
              informacemi pro návštěvníky. Žádné fotografie instalací.
              Fyzický zážitek zůstává na ulici.
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:pl-12">
          <div className="type-label mb-6" style={{ color: "#888" }}>Informace</div>

          <div className="flex flex-col gap-0">
            {[
              { label: "Umělec", value: "Ptáček / Chomps" },
              { label: "Médium", value: "Paste-up, linoryt" },
              { label: "Výstavní prostory", value: "Reklamní rámečky na pražských tramvajových zastávkách" },
              { label: "Vstupné", value: "Zdarma (jízdenka DPP)" },
              { label: "Otevírací doba", value: "0:00–24:00, denně" },
              { label: "Lokalita", value: "Praha, Česká republika" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex gap-6 py-4 border-b-4 border-black"
              >
                <div className="type-label shrink-0" style={{ color: "#888", width: 140 }}>
                  {item.label}
                </div>
                <div className="type-body flex-1" style={{ fontWeight: 700 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bar bar-thick" />

      {/* Inspirations */}
      <div className="px-6 py-10">
        <div className="type-label mb-6" style={{ color: "#888" }}>Inspirace</div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "László Moholy-Nagy",
            "El Lissitzky",
            "Karel Teige",
            "DPP signage",
          ].map((name) => (
            <div
              key={name}
              className="frame px-4 py-3"
            >
              <div className="type-label">{name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bar bar-thick" />

      {/* Large TG mark */}
      <div className="px-6 py-8 flex items-center justify-between">
        <div
          className="font-black leading-none"
          style={{
            fontSize: "clamp(80px, 20vw, 240px)",
            letterSpacing: "-0.06em",
            color: "var(--dpp)",
            lineHeight: 0.8,
          }}
        >
          TG
        </div>
        <div className="text-right">
          <div className="type-label mb-1" style={{ color: "#aaa" }}>Kontakt</div>
          <div className="type-label">tramgallery@protonmail.com</div>
        </div>
      </div>
      <div className="bar bar-thick" />
    </div>
  );
}
