// ============================================================
// Caroud – Produktdaten
//
// Die sieben Düfte stehen zentral in SCENTS. Daraus werden die
// Linien Duftspray, Duftanhänger Premium und Glasanhänger erzeugt –
// ein neuer Duft muss also nur EINMAL eingetragen werden.
//
//   type:       "spray" | "haenger" (Premium) | "glas" | "tuch" | "abzieher" | "bundle"
//   category:   Anzeige-Kategorie
//   priceOld:   Streichpreis (null = kein Sale-Badge)
//   bestseller: true = erscheint in der Start-Ansicht "Bestseller"
//   notes:      Duftnoten, werden in der Detailansicht als Chips angezeigt
// ============================================================

// Bilder: die gedruckten Etiketten, gerendert aus den Druck-PDFs
// (img/produkte/<typ>-<duft>.webp). Ohne img zeichnet main.js die Ersatzgrafik.
// Version an Bild-URLs, damit Browser nach Etikett-Updates nicht alte Bilder aus dem Cache zeigen
const ASSET_V = "39";

const CATEGORIES = [
  { name: "Duftsprays", type: "spray", color: "#111111", img: "img/produkte/spray-midnight.webp + "?v=" + ASSET_V },
  { name: "Duftanhänger Premium", type: "haenger", color: "#111111", img: "img/produkte/haenger-midnight.webp + "?v=" + ASSET_V },
  { name: "Glasanhänger", type: "glas", color: "#1a1a1a", img: "img/produkte/glas-midnight.webp + "?v=" + ASSET_V },
  { name: "Pflege", type: "tuch", color: "#3d3d3d" },
  { name: "Sets & Boxen", type: "bundle", color: "#3b6ea5" },
];

// ---- Die Caroud-Düfte ----
//   key:     ID-Bestandteil (klein)
//   name:    Duftname (so auch auf dem Etikett)
//   color:   Farbe der Platzhalter-Grafik
//   familie: Duftrichtung für den Duft-Finder (siehe FAMILIEN)
//   short:   Kurzbeschreibung für Anhänger/Baum/Glasanhänger
//   spray:   ausführliche Beschreibung für das Duftspray
const FAMILIEN = [
  { key: "frisch", name: "Frisch" },
  { key: "suess", name: "Süß" },
  { key: "orientalisch", name: "Orientalisch" },
];

const SCENTS = [
  {
    key: "midnight", name: "Midnight", color: "#3fae6a", familie: "frisch",
    notes: ["Zitrus", "Schwarze Johannisbeere", "Minze", "Basilikum"],
    short: "Kühl und klar wie Nachtluft: spritzige Zitrus, schwarze Johannisbeere und ein Hauch Minze.",
    spray: "Kühl, klar, tiefenentspannt. Midnight bringt frische Nachtluft in den Innenraum: spritzige Zitrus, schwarze Johannisbeere und kühle Minze über grünem Basilikum. Der Duft zum Runterkommen auf der Fahrt nach Hause.",
    bestseller: { spray: true, haenger: true, glas: true, baum: true },
  },
  {
    key: "airflow", name: "Airflow", color: "#2e9ad9", familie: "frisch",
    notes: ["Zitrus", "Grüner Tee", "Ingwer", "Ambroxan"],
    short: "Frische Luft aus der Lüftung: Zitrus, grüner Tee und ein Hauch Ingwer.",
    spray: "Frische Luft, die durch die Lüftung strömt: spritzige Zitrus, grüner Tee und ein Hauch Ingwer auf einem klaren, sauberen Fundament. Für den Kopf-frei-Moment am Morgen.",
    bestseller: { spray: true, haenger: false, glas: true, baum: false },
  },
  {
    key: "velour", name: "Velour", color: "#23418f", familie: "suess",
    notes: ["Honig", "Tabak", "Vanille", "Lavendel"],
    short: "Weich wie Velours: warmer Honig, süßer Tabak und Vanille.",
    spray: "Weich wie Velours: warmer Honig, süßer Tabak und Vanille, aufgehellt von Bergamotte und Lavendel. Ein Duft, der den Innenraum wie eine Lounge wirken lässt.",
    bestseller: { spray: true, haenger: false, glas: false, baum: false },
  },
  {
    key: "redline", name: "Redline", color: "#a8323e", familie: "suess",
    notes: ["Schwarze Kirsche", "Bittermandel", "Tonkabohne"],
    short: "Bis an den roten Bereich: dunkle Kirsche, bittersüße Mandel und Tonka.",
    spray: "Bis an den roten Bereich: dunkle Kirsche, bittersüße Mandel und Tonkabohne. Verführerisch, intensiv, unvergesslich.",
    bestseller: { spray: true, haenger: true, glas: false, baum: true },
  },
  {
    key: "carbon", name: "Carbon", color: "#141414", familie: "orientalisch",
    notes: ["Oud", "Himbeere", "Weihrauch", "Benzoe"],
    short: "Dunkel und kompromisslos: rauchiges Oud, ein Funken Himbeere, Weihrauch.",
    spray: "Dunkel und kompromisslos: rauchiges Oud, ein Funken Himbeere und Weihrauch, getragen von Benzoe. Der Duft für Nachtfahrten.",
    bestseller: { spray: false, haenger: false, glas: false, baum: false },
  },
  {
    key: "sunroof", name: "Sunroof", color: "#e8821e", familie: "frisch",
    notes: ["Zitrus", "Sommerfrucht", "Weißer Moschus"],
    short: "Dach auf, Sonne rein: saftige Zitrusfrüchte und süße Sommerfrucht.",
    spray: "Dach auf, Sonne rein: saftige Zitrusfrüchte und süße Sommerfrucht auf weichem Moschus. Leicht, fröhlich, macht gute Laune bei jeder Fahrt.",
    bestseller: { spray: false, haenger: true, glas: false, baum: false },
  },
  {
    key: "ignition", name: "Ignition", color: "#c9a227", familie: "suess",
    notes: ["Ananas", "Honig", "Vanille", "Tonkabohne"],
    short: "Der Funke, der alles startet: reife Ananas, goldener Honig, cremige Vanille.",
    spray: "Der Funke, der alles startet: reife Ananas, goldener Honig und cremige Vanille. Süß, warm und sofort präsent.",
    bestseller: { spray: false, haenger: false, glas: true, baum: false },
  },
];

// ---- Linien aus den Düften erzeugen ----
const LINES = [
  { type: "spray",   category: "Duftsprays",    suffix: "Duftspray",
    price: 26.90, priceOld: 34.90,
    text: (s) => s.spray },
  { type: "haenger", category: "Duftanhänger Premium", suffix: "Duftanhänger Premium",
    price: 3.50, priceOld: 5.99,
    text: (s) => s.short + " Als Premium-Anhänger in der eigenen Caroud-Form: beidseitig bedruckt, mit schwarzer Kordel – unser Aushängeschild für den Rückspiegel." },
  { type: "glas",    category: "Glasanhänger",  suffix: "Glasanhänger",
    price: 12.90, priceOld: 16.90,
    text: (s) => s.short + " Im 8-ml-Glasflakon für den Rückspiegel: das Duftöl verdunstet langsam über den Verschluss – ergiebiger und langlebiger als ein Anhänger aus Papier." },
];

const SCENT_PRODUCTS = [];
LINES.forEach((line) => {
  SCENTS.forEach((s) => {
    SCENT_PRODUCTS.push({
      id: line.type + "-" + s.key,
      name: s.name + " " + line.suffix,
      type: line.type, category: line.category,
      color: s.color, label: s.name,
      img: line.noImg ? null : "img/produkte/" + line.type + "-" + s.key + ".webp?v=" + ASSET_V,
      price: line.price, priceOld: line.priceOld, bestseller: !!s.bestseller[line.type],
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
    price: 6.90, priceOld: null, bestseller: false,
    desc: "Weiches Mikrofasertuch für Cockpit, Armaturen und Display – nimmt Staub auf, statt ihn zu verteilen. Fusselfrei und schonend zu empfindlichen Oberflächen.",
    notes: ["Mikrofaser", "Fusselfrei", "40 × 40 cm"],
  },
  {
    id: "pflege-trockentuch",
    name: "Trockentuch",
    type: "tuch", category: "Pflege",
    color: "#2b2b2b", label: "Trocken",
    price: 14.90, priceOld: null, bestseller: false,
    desc: "Extra saugstarkes Trockentuch für den Lack nach der Wäsche – trocknet große Flächen in einem Zug, streifenfrei und ohne Wasserflecken.",
    notes: ["Extra saugstark", "Streifenfrei", "60 × 90 cm"],
  },
  {
    id: "pflege-mikrofaser",
    name: "Mikrofasertücher 3er-Set",
    type: "tuch", category: "Pflege",
    color: "#5c5c5c", label: "Mikrofaser",
    price: 11.90, priceOld: null, bestseller: false,
    desc: "Der Allrounder im Dreierpack: für Scheiben, Lack und Innenraum. Waschbar, langlebig und weich genug für jede Oberfläche.",
    notes: ["3 Stück", "Allround", "Waschbar"],
  },
  {
    id: "pflege-abzieher",
    name: "Wasserabzieher",
    type: "abzieher", category: "Pflege",
    color: "#333333", label: "Abzieher",
    price: 11.90, priceOld: null, bestseller: false,
    desc: "Flexibler Wasserabzieher mit weicher Silikonlippe – zieht Scheiben und Lack in Sekunden trocken, ohne Kratzer und ohne Streifen.",
    notes: ["Silikonlippe", "Kratzfrei", "Streifenfrei"],
  },
  // Bundles
  {
    id: "bundle-starter",
    name: "Starter Bundle",
    type: "bundle", category: "Sets & Boxen",
    color: "#111111", label: "Starter",
    price: 29.90, priceOld: 33.90, bestseller: true,
    desc: "Der perfekte Einstieg: 1 Duftspray deiner Wahl + 2 Duftanhänger. Spare gegenüber dem Einzelkauf.",
    notes: ["1× Spray", "2× Anhänger"],
  },
  {
    id: "bundle-signature",
    name: "Signature Bundle",
    type: "bundle", category: "Sets & Boxen",
    color: "#a8323e", label: "Signature",
    price: 56.90, priceOld: 64.30, bestseller: false,
    desc: "Für Sammler: 2 Duftsprays + 3 Duftanhänger – frei kombinierbar aus allen Düften.",
    notes: ["2× Spray", "3× Anhänger"],
  },
  // Sets – gleiche Produkte, bessere Staffelpreise. Düfte frei wählbar (Angabe im Checkout).
  {
    id: "set-spray-2",
    name: "Duftspray 2er-Set",
    type: "spray", category: "Duftsprays", set: true,
    color: "#111111", label: "2er-Set",
    price: 47.90, priceOld: 53.80, bestseller: false,
    desc: "Zwei Duftsprays à 150 ml, frei kombinierbar aus allen sieben Düften – einer fürs Auto, einer als Reserve oder zum Verschenken. Deine Wunsch-Düfte gibst du im Checkout an.",
    notes: ["2 × 150 ml", "Düfte frei wählbar"],
  },
  {
    id: "set-spray-3",
    name: "Duftspray 3er-Set",
    type: "spray", category: "Duftsprays", set: true,
    color: "#2a2a2a", label: "3er-Set",
    price: 66.90, priceOld: 80.70, bestseller: false,
    desc: "Drei Duftsprays à 150 ml, frei kombinierbar aus allen sieben Düften – der günstigste Weg zur großen Flasche. Deine Wunsch-Düfte gibst du im Checkout an.",
    notes: ["3 × 150 ml", "Düfte frei wählbar"],
  },
  {
    id: "set-haenger-3",
    name: "Duftanhänger 3er-Set",
    type: "haenger", category: "Duftanhänger Premium", set: true,
    color: "#111111", label: "3er-Set",
    price: 8.90, priceOld: 10.50, bestseller: true,
    desc: "Drei Premium-Duftanhänger in der eigenen Caroud-Form, frei kombinierbar aus allen sieben Düften. Deine Wunsch-Düfte gibst du im Checkout an.",
    notes: ["3 Anhänger", "Düfte frei wählbar"],
  },
  {
    id: "set-haenger-5",
    name: "Duftanhänger 5er-Set",
    type: "haenger", category: "Duftanhänger Premium", set: true,
    color: "#2a2a2a", label: "5er-Set",
    price: 13.90, priceOld: 17.50, bestseller: false,
    desc: "Fünf Premium-Duftanhänger, frei kombinierbar aus allen sieben Düften – der beste Preis pro Anhänger. Deine Wunsch-Düfte gibst du im Checkout an.",
    notes: ["5 Anhänger", "Düfte frei wählbar"],
  },
  {
    id: "set-glas-2",
    name: "Glasanhänger 2er-Set",
    type: "glas", category: "Glasanhänger", set: true,
    color: "#1a1a1a", label: "2er-Set",
    price: 22.90, priceOld: 25.80, bestseller: false,
    desc: "Zwei Glasanhänger mit je 8 ml Duftöl, frei kombinierbar aus allen sieben Düften – einer für dich, einer zum Verschenken. Deine Wunsch-Düfte gibst du im Checkout an.",
    notes: ["2 × 8 ml", "Düfte frei wählbar"],
  },
  // Probiersets – 15-ml-Sprühfläschchen zum Kennenlernen
  {
    id: "probierset-3",
    name: "Probierset – 3 Düfte",
    type: "probier", category: "Sets & Boxen", set: true,
    color: "#b9a06a", label: "3 Düfte",
    price: 16.90, priceOld: 21.90, bestseller: true,
    desc: "Drei Düfte deiner Wahl als 15-ml-Spray zum Kennenlernen – bevor du dich für die große Flasche entscheidest. Deine Wunsch-Düfte gibst du im Checkout an.",
    notes: ["3 × 15 ml", "Düfte frei wählbar"],
  },
  {
    id: "probierset-7",
    name: "Probierset – Alle 7 Düfte",
    type: "probier", category: "Sets & Boxen", set: true,
    color: "#b9a06a", label: "Alle 7",
    price: 29.90, priceOld: 39.90, bestseller: true,
    desc: "Die komplette Caroud-Kollektion als 15-ml-Sprays: alle sieben Düfte in einer Box. Finde deinen Favoriten – oder verschenke die ganze Reihe.",
    notes: ["7 × 15 ml", "Alle 7 Düfte", "Geschenk-Box"],
  },
  // Mystery Box
  {
    id: "mystery-box",
    name: "Mystery Box",
    type: "mystery", category: "Sets & Boxen", set: true,
    color: "#111111", label: "Mystery",
    price: 34.90, priceOld: null, bestseller: true,
    desc: "Wir packen, du wirst überrascht: mindestens 1 Duftspray, 3 Duftanhänger und 1 Glasanhänger – Warenwert über 50 €. Welche Düfte drin sind, verraten wir nicht.",
    notes: ["Warenwert über 50 €", "Mind. 1 Spray + 3 Anhänger + 1 Glasanhänger", "Überraschungs-Düfte"],
  },
  // Nur im Warenkorb als Mitnahmeartikel (nicht im Katalog)
  {
    id: "probe-15",
    name: "Duftprobe 15 ml",
    type: "probier", category: "Sets & Boxen", hidden: true, upsellOnly: true,
    color: "#b9a06a", label: "Probe",
    price: 3.90, priceOld: null, bestseller: false,
    desc: "Ein Duft deiner Wahl als 15-ml-Spray – nur als Mitnahmeartikel im Warenkorb. Deinen Wunsch-Duft gibst du im Checkout an.",
    notes: ["15 ml", "Duft frei wählbar"],
  },
];

const PRODUCTS = SCENT_PRODUCTS.concat(OTHER_PRODUCTS);
