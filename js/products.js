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
const ASSET_V = "47";

const CATEGORIES = [
  { name: "Duftsprays", type: "spray", color: "#111111", img: "img/produkte/spray-pacific-cruise.webp?v=" + ASSET_V },
  { name: "Duftanhänger Premium", type: "haenger", color: "#111111", img: "img/produkte/haenger-pacific-cruise.webp?v=" + ASSET_V },
  { name: "Glasanhänger", type: "glas", color: "#1a1a1a", img: "img/produkte/glas-pacific-cruise.webp?v=" + ASSET_V },
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
    key: "pacific-cruise", name: "Pacific Cruise", color: "#5fb8e6", familie: "frisch",
    pyramide: { kopf: "Zitronatzitrone, Orange, Zitrone, Minze, Schwarze Johannisbeere, Koriander", herz: "Aprikose, Basilikum, Karottensamen, Mairose", basis: "Feige, Dattel, Ambrette" },
    notes: ["Zitrus", "Schwarze Johannisbeere", "Minze", "Basilikum"],
    short: "Frisch wie Morgenluft am Meer: Zitrus, schwarze Johannisbeere und kühle Minze.",
    spray: "Frisch wie die erste Fahrt an der Küste: spritzige Zitrusfrüchte, schwarze Johannisbeere und kühle Minze über Basilikum, Aprikose und einem weichen Hauch Feige. Klar, belebend und leicht – der Duft für lange Strecken mit offenem Fenster.",
    bestseller: { spray: true, haenger: true, glas: true, baum: true },
  },
  {
    key: "erba-carbon", name: "Erba Carbon", color: "#2b2b2e", familie: "frisch",
    pyramide: { kopf: "Sizilianische Orange, Kalabrische Bergamotte, Sizilianische Zitrone", herz: "Mediterrane Früchte", basis: "Weißer Moschus, Madagaskar-Vanille, Amber" },
    notes: ["Sizilianische Orange", "Bergamotte", "Mediterrane Früchte", "Weißer Moschus"],
    short: "Saftig und strahlend: sizilianische Orange, Bergamotte und reife Früchte auf weißem Moschus.",
    spray: "Saftig, strahlend, unverwechselbar: sizilianische Orange, Zitrone und kalabrische Bergamotte treffen auf reife mediterrane Früchte. Darunter weißer Moschus, Vanille und Amber, die den Innenraum lange und weich umhüllen.",
    bestseller: { spray: true, haenger: false, glas: true, baum: false },
  },
  {
    key: "fast-cherry", name: "Fast Cherry", color: "#a8122e", familie: "suess",
    pyramide: { kopf: "Schwarze Kirsche, Kirschlikör, Bittermandel", herz: "Sauerkirsche, Pflaume, Türkische Rose, Jasmin Sambac", basis: "Tonkabohne, Vanille, Perubalsam, Sandelholz, Zimt, Nelke, Benzoe, Zeder, Patchouli, Vetiver" },
    notes: ["Schwarze Kirsche", "Kirschlikör", "Bittermandel", "Tonkabohne"],
    short: "Verführerisch süß: schwarze Kirsche, Kirschlikör und ein Hauch Bittermandel.",
    spray: "Tiefrot und verführerisch: schwarze Kirsche und Kirschlikör, geschärft von Bittermandel. Im Herzen Pflaume und Rose, getragen von Tonkabohne, Vanille und warmem Sandelholz. Intensiv, süß, unvergesslich.",
    bestseller: { spray: true, haenger: false, glas: false, baum: false },
  },
  {
    key: "driveination", name: "Driveination", color: "#aeb6bf", familie: "frisch",
    pyramide: { kopf: "Zitronatzitrone, Kalabrische Bergamotte, Sizilianische Orange", herz: "Neroli, Ingwer, Ceylon-Zimt", basis: "Schwarzer Tee, Ambroxan, Guajakholz, Weihrauch" },
    notes: ["Zitrus", "Ingwer", "Schwarzer Tee", "Ambroxan"],
    short: "Klar und elegant: Zitrus, Ingwer und schwarzer Tee auf Ambroxan.",
    spray: "Klar, elegant, modern: Zitronatzitrone, Bergamotte und Orange starten mit Energie, Ingwer, Zimt und Neroli geben Tiefe. Schwarzer Tee, Ambroxan und Guajakholz bleiben als sauberer, edler Nachklang im Innenraum.",
    bestseller: { spray: true, haenger: true, glas: false, baum: true },
  },
  {
    key: "naxnos-asphalt", name: "Naxnos Asphalt", color: "#b8731c", familie: "suess",
    pyramide: { kopf: "Lavendel, Bergamotte, Zitrone", herz: "Honig, Zimt, Cashmeran, Jasmin Sambac", basis: "Tabakblatt, Vanille, Tonkabohne" },
    notes: ["Honig", "Tabak", "Vanille", "Lavendel"],
    short: "Warm und weich: goldener Honig, Tabakblatt und Vanille, aufgehellt von Lavendel.",
    spray: "Warm wie Asphalt nach einem Sommertag: goldener Honig, Tabakblatt und Vanille, aufgehellt von Lavendel, Bergamotte und Zitrone. Zimt und Tonkabohne machen ihn rund – ein Duft, der den Innenraum wie eine Lounge wirken lässt.",
    bestseller: { spray: false, haenger: false, glas: false, baum: false },
  },
  {
    key: "ombre-apex", name: "Ombre Apex", color: "#3d2418", familie: "orientalisch",
    pyramide: { kopf: "Himbeere, Safran", herz: "Rose, Oud (Adlerholz), Weihrauch", basis: "Amberholz, Benzoe, Birke, Geranie" },
    notes: ["Oud", "Himbeere", "Weihrauch", "Benzoe"],
    short: "Dunkel und kompromisslos: rauchiges Oud, ein Funken Himbeere, Weihrauch.",
    spray: "Dunkel und kompromisslos: rauchiges Oud und Weihrauch, durchzogen von Himbeere, Safran und Rose. Benzoe, Birke und Amberholz tragen ihn lange – der Duft für Nachtfahrten.",
    bestseller: { spray: false, haenger: true, glas: false, baum: false },
  },
  {
    key: "erba-tuned", name: "Erba Tuned", color: "#f0c419", familie: "frisch",
    pyramide: { kopf: "Amalfi-Zitrone, Kalabrische Bergamotte, Brasilianische Orange, Ingwer", herz: "Grüner Apfel, Melone, Birne, Nelke, Kardamom, Zimt", basis: "Moschus, Amber, Madagaskar-Vanille, Hölzer" },
    notes: ["Zitrone", "Ingwer", "Birne", "Melone"],
    short: "Hell und saftig: Amalfi-Zitrone, ein Kick Ingwer, reife Birne und Melone.",
    spray: "Hell, saftig, goldig: Amalfi-Zitrone, Orange und Bergamotte mit einem Kick Ingwer, dazu grüner Apfel, Birne und Melone, gewürzt mit Kardamom und Zimt. Amber, Vanille und Moschus runden ihn warm ab.",
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

// Linien, fuer die es echte Produktfotos gibt (img/fotos/<linie>-<duft>.webp)
const FOTO_LINIEN = ["spray", "haenger"];
// Linien mit Produktvideo (stumm, Dauerschleife) als letztes Bild in der Galerie
const VIDEO_LINIEN = ["haenger"];
// Düfte mit eigenem Foto für die Karten "Sieben Düfte" (img/duefte/<duft>.webp).
// Sobald alle Fotos da sind, einfach die weiteren Düfte hier eintragen.
const DUFT_FOTOS = ["pacific-cruise", "erba-carbon", "fast-cherry", "driveination", "naxnos-asphalt", "ombre-apex", "erba-tuned"];
// Linien mit zweitem Produktfoto (Stimmungsbild) – Dateiname <linie>-<duft>-2.webp
const FOTO2_LINIEN = ["spray"];

const SCENT_PRODUCTS = [];
LINES.forEach((line) => {
  SCENTS.forEach((s) => {
    SCENT_PRODUCTS.push({
      id: line.type + "-" + s.key,
      name: s.name + " " + line.suffix,
      type: line.type, category: line.category,
      color: s.color, label: s.name,
      img: line.noImg ? null : "img/produkte/" + line.type + "-" + s.key + ".webp?v=" + ASSET_V,
      // echte Produktfotos (Duftspray + Duftanhaenger); ohne Foto zeigt der Shop die Etikett-Grafik
      photo: FOTO_LINIEN.includes(line.type) ? "img/fotos/" + line.type + "-" + s.key + ".webp?v=" + ASSET_V : null,
      photo2: FOTO2_LINIEN.includes(line.type) ? "img/fotos/" + line.type + "-" + s.key + "-2.webp?v=" + ASSET_V : null,
      video: VIDEO_LINIEN.includes(line.type) ? "img/videos/" + line.type + "-" + s.key + ".mp4?v=" + ASSET_V : null,
      pyramide: s.pyramide,
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
    desc: "Fünf Premium-Duftanhänger, frei kombinierbar aus allen sieben Düften – unser Sparpreis für den Duftwechsel. Deine Wunsch-Düfte gibst du im Checkout an.",
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
    desc: "Drei Düfte deiner Wahl als 15-ml-Sprays zum Kennenlernen – bevor du dich für die große Flasche entscheidest. Deine Wunsch-Düfte gibst du im Checkout an.",
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
];

// ---- Einzelne 15-ml-Duftproben, je Duft eine ----
// Nur als Mitnahmeartikel im Warenkorb, deshalb hidden + upsellOnly.
// Eigene Produkte statt einer Sammel-ID, damit die Duftauswahl im
// Warenkorb echte Artikel trifft (wie bei Anhaenger und Glasanhaenger).
const PROBE_PRODUCTS = SCENTS.map((s) => ({
  id: "probe-" + s.key,
  name: s.name + " Duftprobe 15 ml",
  type: "probier", category: "Sets & Boxen",
  hidden: true, upsellOnly: true, einzel: true,
  color: s.color, label: s.name,
  price: 3.90, priceOld: null, bestseller: false,
  desc: s.short + " Als 15-ml-Spray zum Ausprobieren – nur als Mitnahmeartikel im Warenkorb.",
  notes: ["15 ml", s.name],
  scent: s.key, familie: s.familie, linie: "probe", linieName: "Duftprobe",
}));

const PRODUCTS = SCENT_PRODUCTS.concat(OTHER_PRODUCTS, PROBE_PRODUCTS);
