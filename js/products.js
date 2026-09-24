// ============================================================
// Caroud – Produktdaten
//
// Die sieben Düfte stehen zentral in SCENTS. Daraus werden die
// Linien Duftspray, Duftanhänger Premium und Glasanhänger erzeugt –
// ein neuer Duft muss also nur EINMAL eingetragen werden.
//
//   type:       "spray" | "haenger" (Premium) | "glas" | "tuch" | "abzieher" | "bundle"
//   category:   Anzeige-Kategorie
//   priceOld:   Streichpreis, steht durchgestrichen neben dem aktuellen Preis (null = keiner).
//               Bei Sets ist es die Summe der Einzelpreise.
//   bestseller: true = erscheint in der Start-Ansicht "Bestseller"
//   notes:      Duftnoten, werden in der Detailansicht als Chips angezeigt
// ============================================================

// Bilder: die gedruckten Etiketten, gerendert aus den Druck-PDFs
// (img/produkte/<typ>-<duft>.webp). Ohne img zeichnet main.js die Ersatzgrafik.
// Version an Bild-URLs, damit Browser nach Etikett-Updates nicht alte Bilder aus dem Cache zeigen
const ASSET_V = "54";

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
  { type: "haenger", category: "Duftanhänger Premium", suffix: "Duftanhänger",
    price: 3.90, priceOld: 5.99,
    text: (s) => s.short + " Als Premium-Anhänger in der eigenen Caroud-Form: beidseitig bedruckt, mit schwarzer Kordel – unser Aushängeschild für den Rückspiegel." },
  { type: "glas",    category: "Glasanhänger",  suffix: "Glasanhänger",
    price: 12.90, priceOld: 16.90,
    text: (s) => s.short + " Im 8-ml-Glasflakon für den Rückspiegel: das Duftöl verdunstet langsam über den Verschluss – ergiebiger und langlebiger als ein Anhänger aus Papier." },
];

// Linien, fuer die es echte Produktfotos gibt (img/fotos/<linie>-<duft>.webp)
const FOTO_LINIEN = ["spray", "haenger", "glas"];
// Linien mit Produktvideo (stumm, Dauerschleife) als letztes Bild in der Galerie
const VIDEO_LINIEN = ["haenger"];
// Produktvideos, die es nur fuer einzelne Duefte gibt (img/videos/<linie>-<duft>.mp4 + .webp)
const VIDEO_DUEFTE = { spray: ["pacific-cruise", "erba-carbon", "fast-cherry", "driveination", "naxnos-asphalt", "ombre-apex", "erba-tuned"] };
// Bilder fuer die Kacheln "<Duft> gibt es auch als" (heller Studio-Stil, img/auchals/).
// Spray, Glasanhaenger und Duftprobe sehen bei jedem Duft gleich aus -> ein Bild je Linie.
// Fuer die Duftanhaenger je Duft ein eigenes Bild (img/auchals/haenger-<duft>.webp), sobald vorhanden.
const AUCH_ALS_BILDER = { spray: "img/auchals/spray.webp", glas: "img/auchals/glas.webp", probe: "img/auchals/probe.webp" };
const AUCH_ALS_HAENGER = ["pacific-cruise", "erba-carbon", "fast-cherry", "driveination", "naxnos-asphalt", "ombre-apex", "erba-tuned"];
// Düfte mit eigenem Foto für die Karten "Sieben Düfte" (img/duefte/<duft>.webp).
// Sobald alle Fotos da sind, einfach die weiteren Düfte hier eintragen.
const DUFT_FOTOS = ["pacific-cruise", "erba-carbon", "fast-cherry", "driveination", "naxnos-asphalt", "ombre-apex", "erba-tuned"];
// Stimmungsblock "Der Moment" auf den Duftspray-Seiten: Foto img/moment/<duft>.webp + Text.
const MOMENTE = {
  "pacific-cruise": {
    titel: "Küstenstraße, Fenster runter.",
    text: "Sonntagmorgen, die Straße folgt dem Meer, die Sonne steht noch tief. Zitrone und Minze kommen wie der erste Fahrtwind herein, schwarze Johannisbeere gibt Tiefe, Feige und Dattel bleiben, wenn die Fahrt längst vorbei ist. Für alle, die im Auto lieber unterwegs sind als anzukommen.",
    tags: ["Roadtrip", "Cabrio-Wetter", "Sommerpendeln"],
  },
  "erba-carbon": {
    titel: "Glas, Stahl, frisch poliert.",
    text: "Der Wagen steht vor dem Büroturm, der Regen hat gerade aufgehört, alles glänzt. Sizilianische Orange und Bergamotte vorne, weißer Moschus und Vanille im Abgang – sauber wie ein Auto, das gerade aus der Aufbereitung kommt, ohne nach Reiniger zu riechen.",
    tags: ["Neuwagen-Gefühl", "Detailing-Fans", "Stadt bei Nacht"],
  },
  "fast-cherry": {
    titel: "Nachtfahrt durch die Stadt.",
    text: "Rotes Licht auf nasser Straße, die Musik einen Tick zu laut. Schwarze Kirsche, Kirschlikör und ein Hauch Bittermandel, darunter Tonkabohne und Vanille. Süß, aber nicht brav – der Duft für die Fahrt, die nicht nach Hause führt, sondern raus.",
    tags: ["Nachtfahrten", "Date Night", "Sportwagen"],
  },
  "driveination": {
    titel: "Passstraße bei Sonnenaufgang.",
    text: "Noch kein Verkehr, nur Kurven, kühle Luft und der erste Sonnenstrahl über den Gipfeln. Zitrus und Ingwer wecken, schwarzer Tee und Weihrauch halten die Ruhe. Klar im Kopf, bevor du überhaupt ausgestiegen bist.",
    tags: ["Frühe Termine", "Bergstraßen", "Klarer Kopf"],
  },
  "naxnos-asphalt": {
    titel: "Landstraße im Abendlicht.",
    text: "Goldene Stunde, der Asphalt noch warm vom Tag, kein Ziel außer der Straße selbst. Honig, Tabakblatt und Vanille legen sich weich über Leder, ein wenig Lavendel hält alles in der Schwebe. Der gemütlichste Duft der Reihe – Wärme zum Mitnehmen.",
    tags: ["Ledersitze", "Herbst & Winter", "Klassiker"],
  },
  "ombre-apex": {
    titel: "Die Terrasse über der Stadt.",
    text: "Unten glitzern die Lichter, oben ist es still, das Auto steht schon bereit. Oud, Rose und Weihrauch, aufgehellt von Himbeere und Safran. Dunkel, kostbar, unaufdringlich – der Duft für den Abend, an dem der letzte Eindruck zählt.",
    tags: ["Abendveranstaltungen", "Limousinen", "Dunkle Innenräume"],
  },
  "erba-tuned": {
    titel: "Mittelmeer, Serpentinen, Sonne.",
    text: "Zypressen am Straßenrand, türkisblaues Wasser unten in der Bucht, die Fenster weit offen. Amalfi-Zitrone, Ingwer und grüner Apfel, dazu Melone und Birne – frech, hell, nie zu süß. Der Sommer bleibt im Auto, auch wenn der Urlaub vorbei ist.",
    tags: ["Sommer", "Küstenstraßen", "Frische Innenräume"],
  },
};
// Stimmungsblock "Der Moment" auf den Duftanhaenger-Seiten: Foto img/moment/haenger-<duft>.webp + Text.
const MOMENTE_HAENGER = {
  "pacific-cruise": {
    titel: "Der Blick aufs Meer, am Rückspiegel.",
    text: "Ein Stück Küstenstraße, das mitfährt: Zitrone, Orange und kühle Minze kommen zuerst, schwarze Johannisbeere und ein Hauch Basilikum geben dem Duft Tiefe, Feige und Dattel machen ihn weich. Der Anhänger in unserer eigenen Caroud-Form ist beidseitig bedruckt und hängt an einer schwarzen Kordel – dezent genug für jeden Innenraum. Er duftet vier bis acht Wochen, je nachdem, wie viel Luft durchs Auto zieht, und ist danach einfach zu ersetzen. Frisch, leicht und nie aufdringlich: der Duft für alle, die Sommer im Auto haben wollen, auch wenn draußen Montag ist.",
    tags: ["Rückspiegel", "Frisch & leicht", "4–8 Wochen"],
  },
  "erba-carbon": {
    titel: "Die Stadt bei Nacht, frisch poliert.",
    text: "Glasfassaden, nasser Asphalt, das Auto glänzt im Licht der Türme. Sizilianische Orange und Bergamotte kommen zuerst, mediterrane Früchte in der Mitte, weißer Moschus und Vanille bleiben. Erba Carbon riecht nach einem Wagen, der gerade aus der Aufbereitung kommt – sauber, ohne nach Reiniger zu riechen. Der Anhänger in der Caroud-Form ist beidseitig bedruckt, hängt an einer schwarzen Kordel und duftet vier bis acht Wochen, je nach Belüftung. Für alle, die ihr Auto jeden Tag so haben wollen wie am Tag der Abholung.",
    tags: ["Rückspiegel", "Neuwagen-Gefühl", "4–8 Wochen"],
  },
  "fast-cherry": {
    titel: "Rotes Licht, nasse Straße.",
    text: "Nachtfahrt durch die Stadt, die Rücklichter ziehen Streifen auf den Asphalt. Schwarze Kirsche und Kirschlikör mit einem Hauch Bittermandel, darunter Tonkabohne, Vanille und ein wenig Zimt. Süß, aber nicht brav – der Duft für die Fahrt, bei der die Musik einen Tick zu laut ist. Als Anhänger in der Caroud-Form am Rückspiegel: beidseitig bedruckt, schwarze Kordel, vier bis acht Wochen Duft. Ein kleines Stück Abend, das morgens noch da ist.",
    tags: ["Rückspiegel", "Süß & dunkel", "4–8 Wochen"],
  },
  "driveination": {
    titel: "Passstraße bei Sonnenaufgang.",
    text: "Noch kein Verkehr, nur Kurven, kühle Bergluft und das erste Licht über den Gipfeln. Zitrone und Bergamotte wecken, Ingwer und Neroli halten wach, schwarzer Tee und Weihrauch geben Ruhe. Driveination ist der Duft für den Tag, an dem etwas ansteht – klar im Kopf, bevor du ausgestiegen bist. Der Anhänger in der Caroud-Form hängt dezent am Rückspiegel, ist beidseitig bedruckt und duftet vier bis acht Wochen. Danach einfach den nächsten einhängen.",
    tags: ["Rückspiegel", "Frühe Termine", "4–8 Wochen"],
  },
  "naxnos-asphalt": {
    titel: "Landstraße im Herbstlicht.",
    text: "Goldene Stunde, die Bäume am Straßenrand brennen orange, der Asphalt ist noch warm vom Tag. Honig, Tabakblatt und Vanille legen sich weich über den Innenraum, ein wenig Lavendel und Bergamotte halten alles in der Schwebe. Der gemütlichste Duft der Reihe – wie ein Ledersessel, den man mitnehmen kann. Als Anhänger in der Caroud-Form: beidseitig bedruckt, schwarze Kordel, vier bis acht Wochen Wärme am Rückspiegel. Passt zu kalten Morgen und langen Heimfahrten.",
    tags: ["Rückspiegel", "Warm & weich", "4–8 Wochen"],
  },
  "ombre-apex": {
    titel: "Die Terrasse über der Stadt.",
    text: "Unten glitzern die Lichter, oben ist es still, das Auto steht schon bereit. Oud, Rose und Weihrauch, aufgehellt von Himbeere und Safran, darunter Amberholz und Benzoe. Dunkel, kostbar, unaufdringlich – unser Abendduft. Der Anhänger in der Caroud-Form ist die leise Variante davon: beidseitig bedruckt, schwarze Kordel, vier bis acht Wochen am Rückspiegel, ohne den Innenraum zu überladen. Für alle, bei denen der letzte Eindruck zählt.",
    tags: ["Rückspiegel", "Abendduft", "4–8 Wochen"],
  },
  "erba-tuned": {
    titel: "Mittelmeer, Serpentinen, Sonne.",
    text: "Zypressen am Straßenrand, türkisblaues Wasser in der Bucht, die Fenster weit offen. Amalfi-Zitrone, Ingwer und grüner Apfel, dazu Melone und Birne – frech, hell, nie zu süß. Erba Tuned ist der Duft für den Sommerabend am Treffen, wenn das Auto frisch geputzt in der Sonne steht. Als Anhänger in der Caroud-Form am Rückspiegel: beidseitig bedruckt, schwarze Kordel, vier bis acht Wochen Duft. Der Urlaub bleibt im Auto, auch wenn er längst vorbei ist.",
    tags: ["Rückspiegel", "Sommer & frisch", "4–8 Wochen"],
  },
};
// Linien mit zweitem Produktfoto (Stimmungsbild) – Dateiname <linie>-<duft>-2.webp
const FOTO2_LINIEN = ["spray", "haenger"];
// Linien mit drittem Foto (Studiobild vor Duftfarben-Hintergrund) – Dateiname <linie>-<duft>-3.webp
const FOTO3_LINIEN = ["spray"];

// ---- Sicherheit & Inhaltsstoffe (Bereich "Sicherheit & Inhaltsstoffe" auf der Produktseite) ----
// VORLÄUFIG: Einstufung nach den Etikettentexten. Sobald die Sicherheitsdatenblätter (SDB) vom
// Lieferanten da sind: Allergene je Duft in ALLERGENE eintragen, SDB-PDFs nach docs/sdb/ legen
// und den Pfad in SDB eintragen, Einstufung in SICHERHEIT gegen das SDB prüfen und
// SICHERHEIT_VORLAEUFIG auf false setzen.
const SICHERHEIT_VORLAEUFIG = true;
const SICHERHEIT = {
  spray: {
    inhalt: "Alcohol denat., Parfum (Duftöl 15 %), Aqua",
    piktogramme: ["GHS02", "GHS07"], signal: "Gefahr",
    h: ["H225 Flüssigkeit und Dampf leicht entzündbar.", "H319 Verursacht schwere Augenreizung.", "H317 Kann allergische Hautreaktionen verursachen."],
    p: ["P102 Darf nicht in die Hände von Kindern gelangen.", "P210 Von Hitze, heißen Oberflächen, Funken, offenen Flammen und anderen Zündquellen fernhalten. Nicht rauchen.", "P233 Behälter dicht verschlossen halten.", "P305+P351+P338 Bei Kontakt mit den Augen: Einige Minuten lang behutsam mit Wasser spülen. Kontaktlinsen nach Möglichkeit entfernen. Weiter spülen.", "P501 Inhalt/Behälter der örtlichen Entsorgung zuführen."],
  },
  duftoel: {
    inhalt: "Parfum (Duftöl 50 %), Dipropylene Glycol",
    piktogramme: ["GHS07"], signal: "Achtung",
    h: ["H317 Kann allergische Hautreaktionen verursachen."],
    p: ["P102 Darf nicht in die Hände von Kindern gelangen.", "P262 Nicht in die Augen, auf die Haut oder auf die Kleidung gelangen lassen.", "P501 Inhalt/Behälter der örtlichen Entsorgung zuführen."],
  },
};
// Welche Linie welche Einstufung nutzt
const SICHERHEIT_LINIE = { spray: "spray", probe: "spray", glas: "duftoel", haenger: "duftoel" };
// Allergene je Duft laut SDB, z. B. "Limonene, Linalool, Citral" – leer = noch nicht bekannt
const ALLERGENE = {
  "pacific-cruise": "", "erba-carbon": "", "fast-cherry": "", "driveination": "",
  "naxnos-asphalt": "", "ombre-apex": "", "erba-tuned": "",
};
// Sicherheitsdatenblatt je Duft und Gemisch, z. B. { spray: "docs/sdb/pacific-cruise-spray.pdf", duftoel: "docs/sdb/pacific-cruise-duftoel.pdf" }
const SDB = {};

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
      // drittes Foto: Studiobild vor Duftfarben-Hintergrund (auch in den Duft-Karten)
      photo3: FOTO3_LINIEN.includes(line.type) ? "img/fotos/" + line.type + "-" + s.key + "-3.webp?v=" + ASSET_V : null,
      video: VIDEO_LINIEN.includes(line.type) || (VIDEO_DUEFTE[line.type] || []).includes(s.key)
        ? "img/videos/" + line.type + "-" + s.key + ".mp4?v=" + ASSET_V : null,
      pyramide: s.pyramide,
      // Stimmungsblock nur auf den Duftspray-Seiten
      moment: line.type === "spray" && MOMENTE[s.key] ? Object.assign({ img: "img/moment/" + s.key + ".webp?v=" + ASSET_V }, MOMENTE[s.key])
        : line.type === "haenger" && MOMENTE_HAENGER[s.key] ? Object.assign({ img: "img/moment/haenger-" + s.key + ".webp?v=" + ASSET_V }, MOMENTE_HAENGER[s.key])
        : null,
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
    price: 29.90, priceOld: 34.70, bestseller: true, // 26,90 + 2 × 3,90
    desc: "Der perfekte Einstieg: 1 Duftspray deiner Wahl + 2 Duftanhänger. Spare gegenüber dem Einzelkauf.",
    notes: ["1× Spray", "2× Anhänger"],
    photo: "img/fotos/bundle-starter.webp?v=" + ASSET_V,
    photo2: "img/fotos/bundle-starter-2.webp?v=" + ASSET_V,
  },
  {
    id: "bundle-signature",
    name: "Signature Bundle",
    type: "bundle", category: "Sets & Boxen",
    color: "#a8323e", label: "Signature",
    price: 56.90, priceOld: 65.50, bestseller: false, // 2 × 26,90 + 3 × 3,90
    desc: "Für Sammler: 2 Duftsprays + 3 Duftanhänger – frei kombinierbar aus allen Düften.",
    notes: ["2× Spray", "3× Anhänger"],
    photo: "img/fotos/bundle-signature.webp?v=" + ASSET_V,
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
    photo: "img/fotos/set-spray-2.webp?v=" + ASSET_V,
  },
  {
    id: "set-spray-3",
    name: "Duftspray 3er-Set",
    type: "spray", category: "Duftsprays", set: true,
    color: "#2a2a2a", label: "3er-Set",
    price: 66.90, priceOld: 80.70, bestseller: false,
    desc: "Drei Duftsprays à 150 ml, frei kombinierbar aus allen sieben Düften – der günstigste Weg zur großen Flasche. Deine Wunsch-Düfte gibst du im Checkout an.",
    notes: ["3 × 150 ml", "Düfte frei wählbar"],
    photo: "img/fotos/set-spray-3.webp?v=" + ASSET_V,
  },
  {
    id: "set-haenger-3",
    name: "Duftanhänger 3er-Set",
    type: "haenger", category: "Duftanhänger Premium", set: true,
    color: "#111111", label: "3er-Set",
    price: 9.90, priceOld: 11.70, bestseller: true,
    desc: "Drei Premium-Duftanhänger in der eigenen Caroud-Form, frei kombinierbar aus allen sieben Düften. Deine Wunsch-Düfte gibst du im Checkout an.",
    notes: ["3 Anhänger", "Düfte frei wählbar"],
    photo: "img/fotos/set-haenger-3.webp?v=" + ASSET_V,
  },
  {
    id: "set-haenger-5",
    name: "Duftanhänger 5er-Set",
    type: "haenger", category: "Duftanhänger Premium", set: true,
    color: "#2a2a2a", label: "5er-Set",
    price: 14.90, priceOld: 19.50, bestseller: false,
    desc: "Fünf Premium-Duftanhänger, frei kombinierbar aus allen sieben Düften – unser Sparpreis für den Duftwechsel. Deine Wunsch-Düfte gibst du im Checkout an.",
    notes: ["5 Anhänger", "Düfte frei wählbar"],
    photo: "img/fotos/set-haenger-5.webp?v=" + ASSET_V,
  },
  {
    id: "set-glas-2",
    name: "Glasanhänger 2er-Set",
    type: "glas", category: "Glasanhänger", set: true,
    color: "#1a1a1a", label: "2er-Set",
    price: 22.90, priceOld: 25.80, bestseller: false,
    desc: "Zwei Glasanhänger mit je 8 ml Duftöl, frei kombinierbar aus allen sieben Düften – einer für dich, einer zum Verschenken. Deine Wunsch-Düfte gibst du im Checkout an.",
    notes: ["2 × 8 ml", "Düfte frei wählbar"],
    photo: "img/fotos/set-glas-2.webp?v=" + ASSET_V,
  },
  // Probiersets – 30-ml-Sprühfläschchen zum Kennenlernen
  {
    id: "probierset-3",
    name: "Probierset – 3 Düfte",
    type: "probier", category: "Sets & Boxen", set: true,
    color: "#b9a06a", label: "3 Düfte",
    price: 16.90, priceOld: 17.70, bestseller: true,
    desc: "Drei Düfte deiner Wahl als 30-ml-Sprays zum Kennenlernen – bevor du dich für die große Flasche entscheidest. Wähle deine drei Düfte direkt hier aus.",
    notes: ["3 × 30 ml", "Düfte frei wählbar"],
    photo: "img/fotos/probierset-3.webp?v=" + ASSET_V,
    // Weitere Galeriebilder: alle sieben Proben einzeln
    galerie: SCENTS.map((s) => ({ src: "img/fotos/probe-" + s.key + ".webp?v=" + ASSET_V, scent: s.key, label: s.name })),
    // Duftauswahl auf der Produktseite: so viele Düfte, aus dieser Linie
    wahl: { anzahl: 3, linie: "probe" },
  },
  {
    id: "probierset-7",
    name: "Probierset – Alle 7 Düfte",
    type: "probier", category: "Sets & Boxen", set: true,
    color: "#b9a06a", label: "Alle 7",
    price: 34.90, priceOld: 41.30, bestseller: true,
    desc: "Die komplette Caroud-Kollektion als 30-ml-Sprays: alle sieben Düfte in einer Box. Finde deinen Favoriten – oder verschenke die ganze Reihe.",
    notes: ["7 × 30 ml", "Alle 7 Düfte", "Geschenk-Box"],
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
    photo: "img/fotos/mystery-box.webp?v=" + ASSET_V,
  },
];

// ---- Einzelne 30-ml-Duftproben, je Duft eine ----
// Nur als Mitnahmeartikel im Warenkorb, deshalb hidden + upsellOnly.
// Eigene Produkte statt einer Sammel-ID, damit die Duftauswahl im
// Warenkorb echte Artikel trifft (wie bei Anhaenger und Glasanhaenger).
const PROBE_PRODUCTS = SCENTS.map((s) => ({
  id: "probe-" + s.key,
  name: s.name + " Duftprobe 30 ml",
  type: "probier", category: "Sets & Boxen",
  hidden: true, upsellOnly: true, einzel: true,
  color: s.color, label: s.name,
  // Produktfoto der 30-ml-Probe (auch Kachel "gibt es auch als" und Warenkorb)
  photo: "img/fotos/probe-" + s.key + ".webp?v=" + ASSET_V,
  price: 5.90, priceOld: null, bestseller: false,
  desc: s.short + " Als 30-ml-Spray zum Ausprobieren – nur als Mitnahmeartikel im Warenkorb.",
  notes: ["30 ml", s.name],
  scent: s.key, familie: s.familie, linie: "probe", linieName: "Duftprobe",
}));

const PRODUCTS = SCENT_PRODUCTS.concat(OTHER_PRODUCTS, PROBE_PRODUCTS);

// ---- Black Friday / Black Week ----
// Läuft automatisch im Zeitraum start–ende (deutsche Zeit). Zum Ansehen vorab: caroud.de/?blackfriday=vorschau
// Während der Aktion gilt der Aktionspreis überall (Shop, Produktseite, Warenkorb); durchgestrichen steht
// der normale Preis der letzten 30 Tage (Preisangabenverordnung § 11).
// Gewinn je Angebot (ungünstigster Fall, allein bestellt) steht jeweils im Kommentar.
const BLACK_FRIDAY = {
  start: "2026-11-23T00:00:00+01:00",
  ende: "2026-12-01T00:00:00+01:00",
  deals: [
    { id: "spray-pacific-cruise", preis: 21.90 },  // statt 26,90 · Gewinn ~9,30 €
    { id: "spray-fast-cherry",    preis: 21.90 },  // statt 26,90 · Gewinn ~9,30 €
    { id: "spray-ombre-apex",     preis: 21.90 },  // statt 26,90 · Gewinn ~9,30 €
    { id: "set-spray-2",          preis: 42.90 },  // statt 47,90 · Gewinn ~16 € (versandkostenfrei)
    { id: "bundle-signature",     preis: 49.90 },  // statt 56,90 · Gewinn ~22 € (versandkostenfrei)
    { id: "mystery-box",          preis: 29.90 },  // statt 34,90 · Gewinn ~8,90 €
    { id: "glas-erba-tuned",      preis: 9.90 },   // statt 12,90 · Gewinn ~6,20 €
    { id: "set-haenger-5",        preis: 11.90 },  // statt 14,90 · Gewinn ~8 €
  ],
};
function blackFridayAktiv() {
  try { if (new URLSearchParams(location.search).get("blackfriday") === "vorschau") return true; } catch (_) {}
  const jetzt = Date.now();
  return jetzt >= Date.parse(BLACK_FRIDAY.start) && jetzt < Date.parse(BLACK_FRIDAY.ende);
}
const BF_AKTIV = blackFridayAktiv();
if (BF_AKTIV) {
  BLACK_FRIDAY.deals.forEach((d) => {
    const p = PRODUCTS.find((x) => x.id === d.id);
    if (!p || d.preis >= p.price) return;
    p.bfNormal = p.price;
    p.priceOld = p.price;
    p.price = d.preis;
    p.bfDeal = true;
  });
}
