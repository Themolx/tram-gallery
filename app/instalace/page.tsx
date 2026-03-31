export const metadata = {
  title: "Jak nainstalovat — Tram Gallery",
};

const DPP = "#E3000B";

const FRAME_FORMATS = [
  {
    name: "A3",
    width: "29,7 cm",
    height: "42,0 cm",
    note: "Nejčastější formát.",
    w: 30,
    h: 42,
  },
  {
    name: "A2",
    width: "42,0 cm",
    height: "59,4 cm",
    note: "Formát náhradní autobusové dopravy",
    w: 42,
    h: 59,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Najděte prázdný rámeček",
    text: "Ne každý rámeček je volný. Hledejte ty, kde není nic, nebo kde je stará reklama. Nikdy nepřelepujte informace o mimořádných výlukách nebo změnách v dopravě. Ty tam jsou pro lidi, kteří je potřebují.",
  },
  {
    num: "02",
    title: "Připravte dílo",
    text: "Formát A3 (29,7 x 42,0 cm). Papír gramáže kolem 220 g/m². Drží tvar, nevlní se, vejde se za plastový kryt. Tenčí papír se kroutí, tlustší nejde zasunout. Tiskněte, malujte, tiskněte z lina. Médium je na vás.",
  },
  {
    num: "03",
    title: "Odšroubujte rámeček",
    text: "Rámečky jsou zajištěné šrouby s bitem [TBD]. Odšroubujte, opatrně sejměte plastový kryt. Za ním je prostor kam se vkládá papír.",
  },
  {
    num: "04",
    title: "Vložte a zašroubujte zpět",
    text: "Papír zasuňte za plastový kryt do slotu. Nasaďte kryt zpět a zašroubujte. Zastávku nechte tak, jak jste ji našli. Žádné stopy, žádný nepořádek. Dílo je za sklem, chráněné před deštěm.",
  },
  {
    num: "05",
    title: "Zdokumentujte",
    text: "Vyfoťte instalaci. Pokud chcete dílo zařadit do programu Tram Gallery, napište nám název zastávky, linku, datum a fotku.",
  },
];

export default function InstalacePage() {
  return (
    <div>
      {/* Top accent */}
      <div style={{ background: DPP, height: 8 }} />

      {/* Hero — hlavní sdělení */}
      <div className="px-6 pt-10 pb-0">
        <div className="type-label mb-4" style={{ color: DPP }}>Tram Gallery / Instalace</div>
        <div
          className="font-black uppercase leading-none"
          style={{
            fontSize: "clamp(56px, 12vw, 160px)",
            letterSpacing: "-0.05em",
            lineHeight: 0.85,
          }}
        >
          Každý<br />
          <span style={{ color: DPP }}>může.</span>
        </div>
      </div>

      <div className="bar bar-thick mt-10" />

      {/* Perex — democratic statement */}
      <div className="px-6 py-10 border-b-4 border-black" style={{ background: "#000", color: "#fff" }}>
        <p
          className="font-black leading-tight"
          style={{ fontSize: "clamp(18px, 3vw, 32px)", maxWidth: 800, letterSpacing: "-0.01em" }}
        >
          Tram Gallery je otevřená galerie bez kurátora. Výstavní prostory jsou prázdné reklamní rámečky na pražských tramvajových zastávkách. Pokud je rámeček prázdný nebo obsahuje reklamu, je váš.
          <span style={{ color: DPP }}> Stačí papír, šroubovák a něco, co chcete říct.</span>
        </p>
      </div>

      {/* Frame formats */}
      <div className="bar bar-thick" />
      <div className="px-6 pt-10 pb-0">
        <h2
          className="font-black uppercase leading-none mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
        >
          Formáty rámečků
        </h2>
      </div>
      <div className="grid lg:grid-cols-2">
        {FRAME_FORMATS.map((fmt, i) => (
          <div
            key={fmt.name}
            className="px-6 py-8 border-b-4 border-black"
            style={{ borderRight: i === 0 ? "4px solid black" : "none" }}
          >
            <div
              className="font-black leading-none mb-6"
              style={{ fontSize: "clamp(80px, 14vw, 160px)", letterSpacing: "-0.05em", color: DPP, lineHeight: 0.85 }}
            >
              {fmt.name}
            </div>
            <div className="flex items-end gap-6 mb-5">
              <div
                style={{
                  width: Math.round(fmt.w * 1.3),
                  height: Math.round(fmt.h * 1.3),
                  background: "#000",
                  flexShrink: 0,
                  maxWidth: 65,
                  maxHeight: 95,
                }}
              />
              <div>
                <div className="type-label mb-1" style={{ color: "#aaa" }}>Šířka x výška</div>
                <div
                  className="font-black"
                  style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.02em" }}
                >
                  {fmt.width}<br />{fmt.height}
                </div>
              </div>
            </div>
            <p style={{ fontWeight: 400, fontSize: 14, color: "#555" }}>{fmt.note}</p>
          </div>
        ))}
      </div>
      

      {/* Steps */}
      <div className="bar bar-thick" />
      <div className="px-6 pt-10 pb-0">
        <h2
          className="font-black uppercase leading-none mb-8"
          style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}
        >
          Postup
        </h2>
      </div>
      <div>
        {STEPS.map((step) => (
          <div
            key={step.num}
            className="grid border-b-4 border-black"
            style={{ gridTemplateColumns: "100px 1fr" }}
          >
            <div
              className="font-black leading-none flex items-start pt-6 pl-6 pb-6"
              style={{ fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "-0.05em", color: DPP, lineHeight: 0.85 }}
            >
              {step.num}
            </div>
            <div className="py-6 pr-6 pl-6 border-l-4 border-black">
              <div
                className="font-black uppercase mb-2"
                style={{ fontSize: "clamp(13px, 1.8vw, 16px)", letterSpacing: "0.06em" }}
              >
                {step.title}
              </div>
              <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.6 }}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact */}
      <div className="bar bar-thick" />
      <div className="px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2" style={{ maxWidth: 800 }}>
          <div>
            <div className="type-label mb-4" style={{ color: DPP }}>Kontakt</div>
            <p style={{ fontWeight: 400, fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
              Pošlete nám: název zastávky, číslo linky, datum instalace, fotku. Zařadíme vás do aktuální výstavy.
            </p>
            <a
              href="mailto:tramgallery@protonmail.com"
              className="font-black"
              style={{ fontSize: "clamp(15px, 2vw, 22px)", color: DPP, textDecoration: "underline", letterSpacing: "-0.01em" }}
            >
              tramgallery@protonmail.com
            </a>
          </div>
          <div className="p-6 border-4 border-black">
            <div className="type-label mb-3" style={{ color: DPP }}>Jedno pravidlo</div>
            <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.6 }}>
              Respektujte ostatní. Pokud je v rámečku dílo někoho jiného, najděte prázdný. A nikdy nepřekrývejte provozní informace DPP. Výluky, změny tras, mimořádnosti. Ty tam jsou pro cestující, ne pro nás.
            </p>
          </div>
        </div>
      </div>

      <div style={{ background: DPP, height: 8 }} />
      <div className="bar bar-thick" />
    </div>
  );
}
