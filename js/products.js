// ============================================================
// Caroud – Produktdaten
//
// Die sieben Düfte stehen zentral in SCENTS. Daraus werden die
// Linien Duftspray, Duftanhänger und Lüftungsclip erzeugt –
// ein neuer Duft muss also nur EINMAL eingetragen werden.
//
//   type:       "spray" | "baum" | "haenger" | "clip" | "tuch" | "abzieher" | "bundle"
//   category:   Anzeige-Kategorie
//   priceOld:   Streichpreis (null = kein Sale-Badge)
//   bestseller: true = erscheint in der Start-Ansicht "Bestseller"
//   notes:      Duftnoten, werden in der Detailansicht als Chips angezeigt
// ============================================================

// Bilder: die gedruckten Etiketten, gerendert aus den Druck-PDFs
// (img/produkte/<typ>-<duft>.webp). Ohne img zeichnet main.js die Ersatzgrafik.
const CATEGORIES = [
  { name: "Duftsprays", type: "spray", color: "#111111", img: "img/produkte/spray-midnight.webp" },
  { name: "Duftanhänger", type: "haenger", color: "#111111", img: "img/produkte/haenger-midnight.webp" },
  { name: "Lüftungsclips", type: "clip", color: "#3a3a3a", img: "img/produkte/clip-carbon.webp" },
  { name: "Pflege", type: "tuch", color: "#3d3d3d" },
  { name: "Bundles", type: "bundle", color: "#3b6ea5" },
];

// ---- Die Caroud-Düfte ----
//   key:     ID-Bestandteil (klein)
//   name:    Duftname (so auch auf dem Etikett)
//   color:   Farbe der Platzhalter-Grafik
//   familie: Duftrichtung für den Duft-Finder (siehe FAMILIEN)
//   short:   Kurzbeschreibung für Anhänger/Baum/Clip
//   spray:   ausführliche Beschreibung für das Duftspray
const FAMILIEN = [
  { key: "frisch", name: "Frisch" },
  { key: "suess", name: "Süß" },
  { key: "holzig", name: "Holzig" },
  { key: "orientalisch", name: "Orientalisch" },
];

const SCENTS = [
  {
    key: "midnight", name: "Midnight", color: "#111111", familie: "holzig",
    notes: ["Oud", "Amber", "Schwarzer Pfeffer"],
    short: "Dunkel, elegant, souverän – würzig-holzig mit einem Hauch Amber.",
    spray: "Dunkel, elegant, souverän. Midnight legt sich wie ein Maßanzug über deinen Innenraum – würzig-holzig mit einem Hauch Amber.",
    bestseller: { spray: true, haenger: true, clip: true, baum: true },
  },
  {
    key: "airflow", name: "Airflow", color: "#a9c4d4", familie: "frisch",
    notes: ["Zitrus", "Grüner Tee", "Ingwer", "Ambroxan"],
    short: "Frische Luft aus der Lüftung: Zitrus, grüner Tee und ein Hauch Ingwer.",
    spray: "Frische Luft, die durch die Lüftung strömt: spritzige Zitrus, grüner Tee und ein Hauch Ingwer auf einem klaren, sauberen Fundament. Für den Kopf-frei-Moment am Morgen.",
    bestseller: { spray: true, haenger: false, clip: true, baum: false },
  },
  {
    key: "velour", name: "Velour", color: "#7a5a2e", familie: "suess",
    notes: ["Honig", "Tabak", "Vanille", "Lavendel"],
    short: "Weich wie Velours: warmer Honig, süßer Tabak und Vanille.",
    spray: "Weich wie Velours: warmer Honig, süßer Tabak und Vanille, aufgehellt von Bergamotte und Lavendel. Ein Duft, der den Innenraum wie eine Lounge wirken lässt.",
    bestseller: { spray: true, haenger: false, clip: false, baum: false },
  },
  {
    key: "redline", name: "Redline", color: "#8e1b1b", familie: "suess",
    notes: ["Schwarze Kirsche", "Bittermandel", "Tonkabohne"],
    short: "Bis an den roten Bereich: dunkle Kirsche, bittersüße Mandel und Tonka.",
    spray: "Bis an den roten Bereich: dunkle Kirsche, bittersüße Mandel und Tonkabohne. Verführerisch, intensiv, unvergesslich.",
    bestseller: { spray: true, haenger: true, clip: false, baum: true },
  },
  {
    key: "carbon", name: "Carbon", color: "#2a2a2a", familie: "orientalisch",
    notes: ["Oud", "Himbeere", "Weihrauch", "Benzoe"],
    short: "Dunkel und kompromisslos: rauchiges Oud, ein Funken Himbeere, Weihrauch.",
    spray: "Dunkel und kompromisslos: rauchiges Oud, ein Funken Himbeere und Weihrauch, getragen von Benzoe. Der Duft für Nachtfahrten.",
    bestseller: { spray: false, haenger: false, clip: false, baum: false },
  },
  {
    key: "sunroof", name: "Sunroof", color: "#e0a83a", familie: "frisch",
    notes: ["Zitrus", "Sommerfrucht", "Weißer Moschus"],
    short: "Dach auf, Sonne rein: saftige Zitrusfrüchte und süße Sommerfrucht.",
    spray: "Dach auf, Sonne rein: saftige Zitrusfrüchte und süße Sommerfrucht auf weichem Moschus. Leicht, fröhlich, macht gute Laune bei jeder Fahrt.",
    bestseller: { spray: false, haenger: true, clip: false, baum: false },
  },
  {
    key: "ignition", name: "Ignition", color: "#c98a2c", familie: "suess",
    notes: ["Ananas", "Honig", "Vanille", "Tonkabohne"],
    short: "Der Funke, der alles startet: reife Ananas, goldener Honig, cremige Vanille.",
    spray: "Der Funke, der alles startet: reife Ananas, goldener Honig und cremige Vanille. Süß, warm und sofort präsent.",
    bestseller: { spray: false, haenger: false, clip: true, baum: false },
  },
];

// ---- Linien aus den Düften erzeugen ----
const LINES = [
  { type: "spray",   category: "Duftsprays",    suffix: "Duftspray",
    text: (s) => s.spray },
  { type: "haenger", category: "Duftanhänger",  suffix: "Duftanhänger",
    text: (s) => s.short + " Als schlichter Anhänger für den Rückspiegel – dezent im Look, präsent im Duft." },
  { type: "clip",    category: "Lüftungsclips", suffix: "Lüftungsclip",
    text: (s) => s.short + " Als Clip fürs Lüftungsgitter: duftet über den Luftstrom der Klimaanlage, Refill nachkaufbar." },
];

const SCENT_PRODUCTS = [];
LINES.forEach((line) => {
  SCENTS.forEach((s) => {
    SCENT_PRODUCTS.push({
      id: line.type + "-" + s.key,
      name: s.name + " " + line.suffix,
      type: line.type, category: line.category,
      color: s.color, label: s.name,
      img: "img/produkte/" + line.type + "-" + s.key + ".webp",
      price: 0, priceOld: null, bestseller: !!s.bestseller[line.type],
      desc: line.text(s),
      notes: s.notes,
      // für Duft-Finder und Cross-Selling zwischen den Linien
      scent: s.key, familie: s.familie, linie: line.type, linieName: line.suffix,
    });
  });
});

// ---- Weitere Produkte ----
const OTHER_PRODUCTS = [
  // Pflege (Upsell / Waschzubehör)
  {
    id: "pflege-innenraum",
    name: "Innenraum-Tuch",
    type: "tuch", category: "Pflege",
    color: "#4a4a4a", label: "Innenraum",
    price: 0, priceOld: null, bestseller: false,
    desc: "Weiches Mikrofasertuch für Cockpit, Armaturen und Display – nimmt Staub auf, statt ihn zu verteilen. Fusselfrei und schonend zu empfindlichen Oberflächen.",
    notes: ["Mikrofaser", "Fusselfrei", "40 × 40 cm"],
  },
  {
    id: "pflege-trockentuch",
    name: "Trockentuch",
    type: "tuch", category: "Pflege",
    color: "#2b2b2b", label: "Trocken",
    price: 0, priceOld: null, bestseller: false,
    desc: "Extra saugstarkes Trockentuch für den Lack nach der Wäsche – trocknet große Flächen in einem Zug, streifenfrei und ohne Wasserflecken.",
    notes: ["Extra saugstark", "Streifenfrei", "60 × 90 cm"],
  },
  {
    id: "pflege-mikrofaser",
    name: "Mikrofasertücher 3er-Set",
    type: "tuch", category: "Pflege",
    color: "#5c5c5c", label: "Mikrofaser",
    price: 0, priceOld: null, bestseller: false,
    desc: "Der Allrounder im Dreierpack: für Scheiben, Lack und Innenraum. Waschbar, langlebig und weich genug für jede Oberfläche.",
    notes: ["3 Stück", "Allround", "Waschbar"],
  },
  {
    id: "pflege-abzieher",
    name: "Wasserabzieher",
    type: "abzieher", category: "Pflege",
    color: "#333333", label: "Abzieher",
    price: 0, priceOld: null, bestseller: false,
    desc: "Flexibler Wasserabzieher mit weicher Silikonlippe – zieht Scheiben und Lack in Sekunden trocken, ohne Kratzer und ohne Streifen.",
    notes: ["Silikonlippe", "Kratzfrei", "Streifenfrei"],
  },
  // Bundles
  {
    id: "bundle-starter",
    name: "Starter Bundle",
    type: "bundle", category: "Bundles",
    color: "#111111", label: "Starter",
    price: 0, priceOld: null, bestseller: true,
    desc: "Der perfekte Einstieg: 1 Duftspray deiner Wahl + 2 Duftanhänger. Spare gegenüber dem Einzelkauf.",
    notes: ["1× Spray", "2× Anhänger"],
  },
  {
    id: "bundle-signature",
    name: "Signature Bundle",
    type: "bundle", category: "Bundles",
    color: "#8e1b1b", label: "Signature",
    price: 0, priceOld: null, bestseller: false,
    desc: "Für Sammler: 2 Duftsprays + 3 Duftanhänger – frei kombinierbar aus allen Düften.",
    notes: ["2× Spray", "3× Anhänger"],
  },
];

const PRODUCTS = SCENT_PRODUCTS.concat(OTHER_PRODUCTS);
