export const metadata = {
  title: "Jak nainstalovat — Tram Gallery",
};

const FRAME_FORMATS = [
  {
    name: "A3",
    width: "29,7 cm",
    height: "42,0 cm",
    note: "Nejčastější formát. Pasuje do menších označníkových rámečků na zastávkách bez přístřešku i do části větších rámů.",
    w: 30,
    h: 42,
  },
  {
    name: "A2",
    width: "42,0 cm",
    height: "59,4 cm",
    note: "Větší rámy na přístřešcích. Vždy změřte konkrétní rámeček před tiskem — rozměry se liší zastávka od zastávky.",
    w: 42,
    h: 59,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Změřte rámeček",
    text: "Každá zastávka je jiná. Před tiskem změřte konkrétní rámeček, který chcete obsadit. Standardní jsou A3 a A2, ale přesné rozměry ověřte na místě.",
  },
  {
    num: "02",
    title: "Připravte tisk",
    text: "Tiskněte na papír gramáže 90–160 g/m². Formát přesně dle rámečku — papír musí přesně sedět, není čím ho držet.",
  },
  {
    num: "03",
    title: "Vložte do rámečku",
    text: "Papír jednoduše vložte do rámu. Bez lepidla, bez pasty, bez fixace. Dílo drží samo — třením, tíhou nebo přítlačnou lištou rámu.",
  },
  {
    num: "04",
    title: "Zdokumentujte",
    text: "Vyfotografujte instalaci. Pokud chcete dílo přidat na tuto stránku, napište nám — přidáme ho do plánu výstavy.",
  },
];

export default function InstalacePage() {
  return (
    <div>
      {/* Header */}
      <div className="px-6 pt-10 pb-8">
        <h1 className="type-xl mb-2">Jak nainstalovat</h1>
        <p className="type-body mt-4" style={{ maxWidth: 640, fontWeight: 400 }}>
          Tram Gallery je otevřená platforma bez kurátora. Nerozhodujeme, co je a co není relevantní.
          Každý může nainstalovat dílo — stačí papír a volný rámeček.
        </p>
        <div className="bar bar-thin mt-8" />
      </div>

      {/* No glue statement */}
      <div className="bar bar-thick" />
      <div className="px-6 py-12 border-b-4 border-black" style={{ background: "#000", color: "#fff" }}>
        <div
          className="font-black uppercase leading-none"
          style={{ fontSize: "clamp(28px, 5vw, 64px)", letterSpacing: "-0.03em", maxWidth: 900 }}
        >
          Na tuto galerii se nelepi.
        </div>
        <p className="mt-6" style={{ fontSize: 15, fontWeight: 400, maxWidth: 560, opacity: 0.7 }}>
          Žádné lepidlo, žádná pasta. Papír se pouze vkládá do rámu. Dílo existuje, dokud ho město neodstraní nebo vítr nevytáhne.
        </p>
      </div>

      {/* Frame formats */}
      <div className="bar bar-thick" />
      <div className="px-6 py-10">
        <h2 className="type-lg mb-2">Formáty rámečků na pražských zastávkách</h2>
        <p className="type-body mb-8" style={{ fontWeight: 400, color: "#555" }}>
          Hlavní formáty jsou A3 a A2. Vždy změřte konkrétní zastávku před tiskem.
        </p>
        <div className="grid gap-0 lg:grid-cols-2">
          {FRAME_FORMATS.map((fmt, i) => (
            <div
              key={fmt.name}
              className="p-6 border-b-4 border-black"
              style={{ borderRight: i === 0 ? "4px solid black" : "none" }}
            >
              <div className="type-label mb-4" style={{ color: "#888" }}>Formát</div>
              <div
                className="font-black leading-none mb-2"
                style={{ fontSize: "clamp(40px, 6vw, 72px)", letterSpacing: "-0.04em" }}
              >
                {fmt.name}
              </div>

              {/* Visual size indicator — relative to each other */}
              <div className="my-6 flex items-end gap-4">
                <div
                  style={{
                    width: fmt.w * 1.2,
                    height: fmt.h * 1.2,
                    background: "#000",
                    flexShrink: 0,
                    maxWidth: 80,
                    maxHeight: 110,
                  }}
                />
                <div>
                  <div className="type-label mb-1" style={{ color: "#aaa" }}>Šířka × výška</div>
                  <div
                    className="font-black"
                    style={{ fontSize: "clamp(18px, 2.5vw, 28px)", letterSpacing: "-0.02em" }}
                  >
                    {fmt.width} × {fmt.height}
                  </div>
                </div>
              </div>

              <p className="type-body" style={{ fontWeight: 400 }}>{fmt.note}</p>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-b-4 border-black" style={{ background: "#f5f5f0" }}>
          <p className="type-label" style={{ color: "#888" }}>
            Přesný formát (motiv, rozměry, typ papíru) bude doplněn. Zatím platí: změřte, vytiskněte, vložte.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="bar bar-thick" />
      <div className="px-6 py-10">
        <h2 className="type-lg mb-8">Postup</h2>
        <div className="grid gap-0">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-[80px_1fr] border-b-4 border-black last:border-b-0 py-6"
            >
              <div
                className="font-black leading-none"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.04em", color: "#ddd" }}
              >
                {step.num}
              </div>
              <div>
                <div className="type-md mb-2" style={{ fontSize: "clamp(15px, 2vw, 18px)" }}>
                  {step.title}
                </div>
                <p className="type-body" style={{ fontWeight: 400 }}>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bar bar-thick" />
      <div className="px-6 py-12">
        <h2 className="type-lg mb-6">Kontakt</h2>
        <div className="grid gap-8 lg:grid-cols-2" style={{ maxWidth: 800 }}>
          <div>
            <p className="type-body mb-4" style={{ fontWeight: 400 }}>
              Chcete být součástí konkrétní výstavy? Potřebujete poradit s formátem nebo tiskem? Chcete poslat fotodokumentaci?
            </p>
            <p className="type-body" style={{ fontWeight: 400 }}>
              Napište na{" "}
              <a
                href="mailto:tramgallery@protonmail.com"
                className="font-black"
                style={{ color: "inherit", textDecoration: "underline" }}
              >
                tramgallery@protonmail.com
              </a>
            </p>
          </div>
          <div className="frame p-6">
            <div className="type-label mb-3" style={{ color: "#888" }}>Jedno pravidlo</div>
            <p className="type-body" style={{ fontWeight: 400 }}>
              Nevkládejte přes díla ostatních. Respektujte, že rámeček obsadil někdo jiný. Najděte prázdný.
            </p>
          </div>
        </div>
      </div>

      <div className="bar bar-thick" />
    </div>
  );
}
