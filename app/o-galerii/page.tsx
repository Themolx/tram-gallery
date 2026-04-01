import { getExhibitionsByStatus } from "@/lib/db";
import type { Exhibition } from "@/types";

export const metadata = {
  title: "O galerii — Tram Gallery",
};

const DPP = "#E3000B";

const FRAME_FORMATS = [
  { name: "A3", width: "29,7 cm", height: "42,0 cm", note: "Nejčastější formát.", w: 30, h: 42 },
  { name: "A2", width: "42,0 cm", height: "59,4 cm", note: "Formát náhradní autobusové dopravy.", w: 42, h: 59 },
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

export default async function OGaleriiPage() {
  let exhibitions: Exhibition[] = [];
  try {
    exhibitions = await getExhibitionsByStatus("current");
  } catch {
    // static fallback
  }

  return (
    <div>

      {/* ── O GALERII ─────────────────────────────────────────────────────── */}
      <div className="px-6 pt-10 pb-0">
        <div className="flex items-start gap-6 overflow-hidden">
          <div className="rotate-label type-label shrink-0 mt-2" style={{ color: "#bbb" }}>
            O galerii
          </div>
          <div className="flex-1">
            <h1
              className="font-black uppercase leading-none"
              style={{ fontSize: "clamp(56px, 14vw, 160px)", letterSpacing: "-0.04em", lineHeight: 0.85 }}
            >
              TRAM<br />
              GALLERY
            </h1>
          </div>
        </div>
      </div>

      <div className="bar bar-thick mt-10" />

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
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:pl-12">
          <div className="type-label mb-6" style={{ color: "#888" }}>Informace</div>
          <div className="flex flex-col gap-0">
            {[
              { label: "Umělci", value: "Martin Tomek, Tomáš Vrána, Michal Tancjura" },
              { label: "Médium", value: "Paste-up, linoryt, tisk" },
              { label: "Výstavní prostory", value: "Reklamní rámečky na pražských tramvajových zastávkách" },
              { label: "Vstupné", value: "Zdarma (jízdenka DPP)" },
              { label: "Otevírací doba", value: "0:00–24:00, denně" },
              { label: "Lokalita", value: "Praha, Česká republika" },
            ].map((item) => (
              <div key={item.label} className="flex gap-6 py-4 border-b-4 border-black">
                <div className="type-label shrink-0" style={{ color: "#888", width: 140 }}>{item.label}</div>
                <div className="type-body flex-1" style={{ fontWeight: 700 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bar bar-thick" />

      {/* ── NÁVŠTĚVA ──────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-b-4 border-black">
        {[
          { label: "Otevírací doba", value: "0:00–24:00", note: "Denně, tramvaje jezdí vždy" },
          { label: "Vstupné", value: "Zdarma", note: "Součástí jízdného DPP" },
        ].map((item, i) => (
          <div key={i} className="px-6 py-6" style={{ borderRight: i === 0 ? "4px solid black" : "none" }}>
            <div className="type-label mb-2" style={{ color: "#888" }}>{item.label}</div>
            <div className="font-black leading-none" style={{ fontSize: "clamp(20px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
              {item.value}
            </div>
            <div className="type-label mt-2" style={{ color: "#aaa", textTransform: "none", letterSpacing: "0.04em" }}>
              {item.note}
            </div>
          </div>
        ))}
      </div>

      <div className="px-6 py-10">
        <h2 className="type-lg mb-8">Jak navštívit galerii</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { num: "01", title: "Vyberte výstavu", text: "Na stránce Výstavy najdete aktuálně probíhající výstavy. Každá výstava je jeden úsek tramvajové linky." },
            { num: "02", title: "Nastupte na tramvaj", text: "Nastupte na uvedenou tramvajovou linku a jeďte v uvedeném směru. Galerie se rozkládá podél celého úseku." },
            { num: "03", title: "Projíždějte galerií", text: "Na každé zastávce s instalací najdete v reklamním rámečku dílo. Díla jsou označena v plánu výstavy." },
          ].map((step) => (
            <div key={step.num} className="frame p-6">
              <div className="font-black leading-none mb-4" style={{ fontSize: "clamp(32px, 5vw, 56px)", letterSpacing: "-0.04em", color: DPP }}>
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
                  <span className="type-label" style={{ color: ex.color }}>Linka {ex.lineNumbers.join(" · ")} — {ex.title}</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="bar bar-thick" />

      {/* ── KAŽDÝ MŮŽE ────────────────────────────────────────────────────── */}
      <div style={{ background: "#000", color: "#fff" }}>
        <div className="px-6 pt-10 pb-0">
          <div
            className="font-black uppercase leading-none"
            style={{ fontSize: "clamp(56px, 12vw, 160px)", letterSpacing: "-0.05em", lineHeight: 0.85 }}
          >
            Každý<br />
            <span style={{ color: DPP }}>může.</span>
          </div>
        </div>
        <div className="bar bar-thick mt-10" style={{ borderColor: "#222" }} />
        <div className="px-6 py-10">
          <p
            className="font-black leading-tight"
            style={{ fontSize: "clamp(18px, 3vw, 32px)", maxWidth: 800, letterSpacing: "-0.01em" }}
          >
            Tram Gallery je otevřená galerie bez kurátora. Pokud je rámeček prázdný nebo obsahuje reklamu, je váš.
            <span style={{ color: DPP }}> Stačí papír, šroubovák a něco, co chcete říct.</span>
          </p>
        </div>
      </div>

      <div className="bar bar-thick" />

      {/* ── FORMÁTY ───────────────────────────────────────────────────────── */}
      <div className="px-6 pt-10 pb-0">
        <h2 className="font-black uppercase leading-none mb-8" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
          Formáty rámečků
        </h2>
      </div>
      <div className="grid lg:grid-cols-2">
        {FRAME_FORMATS.map((fmt, i) => (
          <div key={fmt.name} className="px-6 py-8 border-b-4 border-black" style={{ borderRight: i === 0 ? "4px solid black" : "none" }}>
            <div className="font-black leading-none mb-6" style={{ fontSize: "clamp(80px, 14vw, 160px)", letterSpacing: "-0.05em", color: DPP, lineHeight: 0.85 }}>
              {fmt.name}
            </div>
            <div className="flex items-end gap-6 mb-5">
              <div style={{ width: Math.round(fmt.w * 1.3), height: Math.round(fmt.h * 1.3), background: "#000", flexShrink: 0, maxWidth: 65, maxHeight: 95 }} />
              <div>
                <div className="type-label mb-1" style={{ color: "#aaa" }}>Šířka x výška</div>
                <div className="font-black" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.02em" }}>
                  {fmt.width}<br />{fmt.height}
                </div>
              </div>
            </div>
            <p style={{ fontWeight: 400, fontSize: 14, color: "#555" }}>{fmt.note}</p>
          </div>
        ))}
      </div>

      <div className="bar bar-thick" />

      {/* ── POSTUP ────────────────────────────────────────────────────────── */}
      <div className="px-6 pt-10 pb-0">
        <h2 className="font-black uppercase leading-none mb-8" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.03em" }}>
          Postup
        </h2>
      </div>
      <div>
        {STEPS.map((step) => (
          <div key={step.num} className="grid border-b-4 border-black" style={{ gridTemplateColumns: "100px 1fr" }}>
            <div className="font-black leading-none flex items-start pt-6 pl-6 pb-6" style={{ fontSize: "clamp(40px, 6vw, 64px)", letterSpacing: "-0.05em", color: DPP, lineHeight: 0.85 }}>
              {step.num}
            </div>
            <div className="py-6 pr-6 pl-6 border-l-4 border-black">
              <div className="font-black uppercase mb-2" style={{ fontSize: "clamp(13px, 1.8vw, 16px)", letterSpacing: "0.06em" }}>
                {step.title}
              </div>
              <p style={{ fontWeight: 400, fontSize: 14, lineHeight: 1.6 }}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bar bar-thick" />

      {/* ── JEDNO PRAVIDLO ────────────────────────────────────────────────── */}
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

      {/* ── TG MARK ───────────────────────────────────────────────────────── */}
      <div className="bar bar-thick" />
      <div className="px-6 py-8">
        <div className="font-black leading-none" style={{ fontSize: "clamp(80px, 20vw, 240px)", letterSpacing: "-0.06em", color: DPP, lineHeight: 0.8 }}>
          TG
        </div>
      </div>
      <div style={{ background: DPP, height: 8 }} />
      <div className="bar bar-thick" />
    </div>
  );
}
