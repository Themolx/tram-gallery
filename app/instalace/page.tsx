export const metadata = {
  title: "Jak nainstalovat — Tram Gallery",
};

const FRAME_FORMATS = [
  {
    name: "CLV — City Light Vitrine",
    width: "118,5 cm",
    height: "175,5 cm",
    note: "Standardní formát přístřešků DPP. Podsvícený box, aluminiový rám. Nejčastější typ na zastávkách s čekárnou.",
    printArea: "cca 114 × 170 cm (s okrajem)",
  },
  {
    name: "A1 — menší označník",
    width: "59,4 cm",
    height: "84,1 cm",
    note: "Rámeček na samostatném sloupu označníku bez přístřešku. Méně časté, závisí na konkrétní zastávce.",
    printArea: "cca 56 × 80 cm (s okrajem)",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Změřte rámeček",
    text: "Každá zastávka je trochu jiná. Před tiskem změřte konkrétní rámeček, který chcete obsadit. Formáty uvedené níže jsou orientační.",
  },
  {
    num: "02",
    title: "Připravte tisk",
    text: "Tiskněte na papír gramáže 90–120 g/m². Silnější papír lépe odolává dešti. Lesklá křída se lepí hůř — preferujte mat nebo ofset.",
  },
  {
    num: "03",
    title: "Připravte pšeničnou pastu",
    text: "Uvařte pšeničný škrob s vodou (poměr cca 1:8) do hladké pasty. Nechte vychladnout. Alternativně: Metylan Uni bez fungicidů.",
  },
  {
    num: "04",
    title: "Nalepte",
    text: "Naneste pastu na rámeček i na rub papíru. Přiložte, vyhlaďte od středu ven, odstraňte vzduchové bubliny. Dílo drží i za deště.",
  },
  {
    num: "05",
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
          Tram Gallery je otevřená platforma bez kurátora. Nerozhodujeme, co je a co není relevantní — o tom rozhoduje město, tramvaj a čas. Každý může nainstalovat dílo.
        </p>
        <div className="bar bar-thin mt-8" />
      </div>

      {/* Democratic statement */}
      <div className="bar bar-thick" />
      <div className="px-6 py-12 border-b-4 border-black" style={{ background: "#000", color: "#fff" }}>
        <div
          className="font-black uppercase leading-none"
          style={{ fontSize: "clamp(28px, 5vw, 64px)", letterSpacing: "-0.03em", maxWidth: 900 }}
        >
          Galerie patří každému, kdo projede.
        </div>
        <p className="mt-6" style={{ fontSize: 15, fontWeight: 400, maxWidth: 560, opacity: 0.7 }}>
          Paste-up je demokratické médium. Funguje bez povolení, bez otevírací doby, bez vernisáže. Dílo existuje, dokud ho město neodstraní nebo příroda nerozmočí.
        </p>
      </div>

      {/* Frame formats */}
      <div className="bar bar-thick" />
      <div className="px-6 py-10">
        <h2 className="type-lg mb-8">Formáty reklamních rámečků DPP</h2>
        <div className="grid gap-0 lg:grid-cols-2">
          {FRAME_FORMATS.map((fmt, i) => (
            <div
              key={fmt.name}
              className="p-6 border-b-4 border-black"
              style={{ borderRight: i === 0 ? "4px solid black" : "none" }}
            >
              <div className="type-label mb-4" style={{ color: "#888" }}>Formát {i + 1}</div>
              <div
                className="font-black leading-none mb-2"
                style={{ fontSize: "clamp(16px, 2.5vw, 24px)", letterSpacing: "-0.02em" }}
              >
                {fmt.name}
              </div>

              {/* Visual size indicator */}
              <div className="my-6 flex items-end gap-4">
                <div
                  style={{
                    width: i === 0 ? 60 : 42,
                    height: i === 0 ? 88 : 59,
                    background: "#000",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div className="type-label mb-1" style={{ color: "#aaa" }}>Šířka × výška</div>
                  <div
                    className="font-black"
                    style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.03em" }}
                  >
                    {fmt.width} × {fmt.height}
                  </div>
                  <div className="type-label mt-2" style={{ color: "#888" }}>
                    Tisková plocha: {fmt.printArea}
                  </div>
                </div>
              </div>

              <p className="type-body" style={{ fontWeight: 400 }}>{fmt.note}</p>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-b-4 border-black" style={{ background: "#f5f5f0" }}>
          <p className="type-label" style={{ color: "#888" }}>
            Důležité: Rozměry se liší zastávka od zastávky. Vždy změřte konkrétní rámeček před tiskem. Výše uvedené jsou standardní formáty, realita může být jiná.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="bar bar-thick" />
      <div className="px-6 py-10">
        <h2 className="type-lg mb-8">Postup instalace</h2>
        <div className="grid gap-0">
          {STEPS.map((step, i) => (
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

      {/* Materials */}
      <div className="bar bar-thick" />
      <div className="px-6 py-10 border-b-4 border-black">
        <h2 className="type-lg mb-8">Co budete potřebovat</h2>
        <div className="grid gap-3 lg:grid-cols-2" style={{ maxWidth: 700 }}>
          {[
            ["Papír", "90–120 g/m², mat nebo ofset, formát dle zastávky"],
            ["Pšeničná pasta", "Metylan Uni nebo domácí (škrob + voda)"],
            ["Štětec nebo váleček", "Širší štětec pro rovnoměrné nanesení pasty"],
            ["Hadřík / houby", "Na vytlačení vzduchových bublin"],
            ["Nůžky", "Na případné dořezání okrajů na místě"],
            ["Dokumentační foto", "Zdokumentujte instalaci — pro vás i pro nás"],
          ].map(([item, desc]) => (
            <div key={item} className="flex gap-4 py-3 border-b border-black border-opacity-10">
              <div className="font-black shrink-0" style={{ width: 120, fontSize: 13 }}>{item}</div>
              <div className="type-body" style={{ fontWeight: 400, fontSize: 13, color: "#555" }}>{desc}</div>
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
              Chcete být součástí konkrétní výstavy? Potřebujete pomoc s tiskem nebo instalací? Chcete nám poslat fotodokumentaci?
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
              Nenalepujte přes díla ostatních. Respektujte, že rámeček obsadil někdo jiný. Najděte prázdný.
            </p>
          </div>
        </div>
      </div>

      <div className="bar bar-thick" />
    </div>
  );
}
