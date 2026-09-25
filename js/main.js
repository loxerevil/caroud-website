// ============================================================
// Caroud – Rendering & Interaktion
// ============================================================

// ---------- SVG-Platzhalter ----------

// Liegt ein echtes Etikett vor (img), wird es auf die Platzhalter-Form gelegt.
// Ohne img bleibt die gezeichnete Ersatzgrafik stehen.
// Die echte Flasche ist schwarz (siehe Produktfotos) – die Duftfarbe steckt im Etikett
// bzw. im Hintergrund. Leichter Glanzstreifen und heller Rand, damit sie auch auf
// dunklem Grund (Hero) sichtbar bleibt.
const SPRAY_KORPUS = `
    <rect x="53" y="3" width="14" height="6" rx="1.5" fill="#0d0d0e" stroke="rgba(255,255,255,0.22)" stroke-width="0.8"/>
    <rect x="66" y="5" width="6" height="3" rx="1" fill="#0d0d0e" stroke="rgba(255,255,255,0.22)" stroke-width="0.6"/>
    <rect x="50" y="9" width="20" height="10" rx="2" fill="#141415" stroke="rgba(255,255,255,0.22)" stroke-width="0.8"/>
    <rect x="44" y="19" width="32" height="15" rx="3" fill="#121213" stroke="rgba(255,255,255,0.22)" stroke-width="0.8"/>
    <path d="M38 40 Q38 34 46 34 H74 Q82 34 82 40 L86 60 V186 Q86 194 78 194 H42 Q34 194 34 186 V60 Z" fill="#161618" stroke="rgba(255,255,255,0.22)" stroke-width="0.9"/>
    <path d="M40 62 Q40 44 47 38 L50 38 Q44 46 44 62 V184 Q44 189 41 189 Q40 188 40 184 Z" fill="#ffffff" opacity="0.10"/>
    <rect x="79" y="62" width="3" height="120" rx="1.5" fill="#ffffff" opacity="0.05"/>`;

function sprayBottleSVG(color, label, img) {
  const etikett = img
    ? `<image href="${img}" x="42" y="88" width="36" height="46" preserveAspectRatio="xMidYMid slice"/>`
    : `<rect x="42" y="88" width="36" height="46" rx="3" fill="#fff" stroke="#ddd"/>
       <text x="60" y="103" text-anchor="middle" font-size="9" font-weight="600" font-family="Inter, sans-serif" letter-spacing="1" fill="#111">CAROUD</text>
       <rect x="48" y="109" width="24" height="4" rx="2" fill="${color}" stroke="rgba(0,0,0,0.2)"/>
       <text x="60" y="124" text-anchor="middle" font-size="7" font-family="Inter, sans-serif" fill="#555">${label}</text>
       <text x="60" y="131" text-anchor="middle" font-size="5" font-family="Inter, sans-serif" fill="#999">- est. 2026 -</text>`;
  return `
  <svg class="prod-art" viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
    ${SPRAY_KORPUS}
    ${etikett}
  </svg>`;
}

function haengerSVG(color, label, img) {
  // Das Anhänger-PDF ist bereits die komplette Stanzform – nur die Schnur kommt dazu.
  if (img) {
    return `
    <svg class="prod-art" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
      <path d="M70 2 Q90 22 70 42 Q50 22 70 2" fill="none" stroke="#333" stroke-width="2.5"/>
      <image href="${img}" x="27" y="38" width="86" height="158" preserveAspectRatio="xMidYMid meet"/>
    </svg>`;
  }
  return `
  <svg class="prod-art" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 4 Q90 24 70 44 Q50 24 70 4" fill="none" stroke="#333" stroke-width="2.5"/>
    <path d="M52 44 H88 Q92 44 92 50 L90 62 H98 Q104 62 104 70 V184 Q104 192 96 192 H44 Q36 192 36 184 V70 Q36 62 42 62 H50 L48 50 Q48 44 52 44 Z" fill="${color}" stroke="rgba(0,0,0,0.18)"/>
    <rect x="48" y="92" width="44" height="52" rx="3" fill="#fff" stroke="#ddd"/>
    <text x="70" y="109" text-anchor="middle" font-size="10" font-weight="600" font-family="Inter, sans-serif" letter-spacing="1" fill="#111">CAROUD</text>
    <rect x="56" y="116" width="28" height="4" rx="2" fill="${color}" stroke="rgba(0,0,0,0.2)"/>
    <text x="70" y="131" text-anchor="middle" font-size="8" font-family="Inter, sans-serif" fill="#555">${label}</text>
    <text x="70" y="139" text-anchor="middle" font-size="5.5" font-family="Inter, sans-serif" fill="#999">- est. 2026 -</text>
  </svg>`;
}

function bundleSVG(color, label) {
  // Spray + zwei Anhänger, zusammengesetzt aus den echten Etiketten –
  // Starter und Signature unterscheiden sich am Etikett (Pacific Cruise / Fast Cherry)
  const sprayKey = color === "#a8323e" ? "fast-cherry" : "pacific-cruise";
  return `
  <svg class="prod-art" viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(14 22) scale(0.76)">
      ${SPRAY_KORPUS}
      <image href="img/produkte/spray-${sprayKey}.webp?v=${ASSET_V}" x="42" y="88" width="36" height="46" preserveAspectRatio="xMidYMid slice"/>
    </g>
    <g transform="translate(88 58)">
      <path d="M31 2 Q42 12 31 22 Q20 12 31 2" fill="none" stroke="#333" stroke-width="1.6"/>
      <image href="img/produkte/haenger-naxnos-asphalt.webp?v=${ASSET_V}" x="4" y="20" width="54" height="99" preserveAspectRatio="xMidYMid meet"/>
    </g>
    <g transform="translate(122 84)">
      <path d="M26 2 Q35 10 26 18 Q17 10 26 2" fill="none" stroke="#333" stroke-width="1.4"/>
      <image href="img/produkte/haenger-ombre-apex.webp?v=${ASSET_V}" x="3" y="16" width="46" height="84" preserveAspectRatio="xMidYMid meet"/>
    </g>
  </svg>`;
}

function tuchSVG(color, label) {
  // gefaltetes Mikrofasertuch mit Waffelstruktur und goldener Kettelnaht
  return `
  <svg class="prod-art" viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="waffle-${label.replace(/\W/g, "")}" width="8" height="8" patternUnits="userSpaceOnUse">
        <rect width="8" height="8" fill="${color}"/>
        <rect x="1" y="1" width="6" height="6" rx="1.5" fill="rgba(255,255,255,0.07)"/>
      </pattern>
    </defs>
    <path d="M28 70 Q90 56 152 70 V150 Q90 164 28 150 Z" fill="url(#waffle-${label.replace(/\W/g, "")})" stroke="#b9a06a" stroke-width="2.2"/>
    <path d="M28 70 Q90 56 152 70 L146 92 Q90 78 34 92 Z" fill="rgba(0,0,0,0.22)"/>
    <path d="M34 92 Q90 78 146 92" fill="none" stroke="#b9a06a" stroke-width="1.6"/>
    <path d="M28 150 Q90 164 152 150" fill="none" stroke="#b9a06a" stroke-width="2.2"/>
    <rect x="76" y="108" width="28" height="18" rx="2" fill="#fff" stroke="#ddd"/>
    <text x="90" y="120" text-anchor="middle" font-size="7" font-weight="600" font-family="Inter, sans-serif" letter-spacing="0.8" fill="#111">CAROUD</text>
    <text x="90" y="186" text-anchor="middle" font-size="10" font-weight="600" font-family="Inter, sans-serif" letter-spacing="2" fill="#555">${label.toUpperCase()}</text>
  </svg>`;
}

function abzieherSVG(color, label) {
  // Wasserabzieher: Griff + flexible Silikonlippe
  return `
  <svg class="prod-art" viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="82" y="30" width="16" height="70" rx="6" fill="${color}" stroke="rgba(0,0,0,0.2)"/>
    <rect x="86" y="36" width="8" height="26" rx="4" fill="rgba(255,255,255,0.12)"/>
    <path d="M40 100 H140 Q148 100 148 108 V116 Q148 124 140 124 H40 Q32 124 32 116 V108 Q32 100 40 100 Z" fill="${color}" stroke="rgba(0,0,0,0.2)"/>
    <rect x="34" y="122" width="112" height="9" rx="3" fill="#b9a06a"/>
    <path d="M34 131 Q90 138 146 131 L144 140 Q90 147 36 140 Z" fill="#8f8f8f"/>
    <rect x="72" y="105" width="36" height="14" rx="2" fill="#fff" stroke="#ddd"/>
    <text x="90" y="115" text-anchor="middle" font-size="7" font-weight="600" font-family="Inter, sans-serif" letter-spacing="0.8" fill="#111">CAROUD</text>
    <g stroke="#9ec6d6" stroke-width="2" stroke-linecap="round" opacity="0.7">
      <line x1="50" y1="156" x2="46" y2="170"/><line x1="90" y1="158" x2="90" y2="172"/><line x1="130" y1="156" x2="134" y2="170"/>
    </g>
    <text x="90" y="192" text-anchor="middle" font-size="10" font-weight="600" font-family="Inter, sans-serif" letter-spacing="2" fill="#555">${label.toUpperCase()}</text>
  </svg>`;
}

function baumSVG(color, label) {
  return `
  <svg class="prod-art" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 6 Q84 20 70 34 Q56 20 70 6" fill="none" stroke="#333" stroke-width="2.5"/>
    <path d="M70 30 L104 88 H88 L112 138 H92 L114 182 H26 L48 138 H28 L52 88 H36 Z" fill="${color}" stroke="rgba(0,0,0,0.18)"/>
    <rect x="62" y="182" width="16" height="12" rx="2" fill="#5b4630"/>
    <rect x="42" y="118" width="56" height="28" rx="3" fill="#fff" stroke="#ddd"/>
    <text x="70" y="132" text-anchor="middle" font-size="9" font-weight="600" font-family="Inter, sans-serif" letter-spacing="1" fill="#111">CAROUD</text>
    <text x="70" y="141" text-anchor="middle" font-size="6.5" font-family="Inter, sans-serif" fill="#555">${label}</text>
  </svg>`;
}

function glasSVG(color, label, img) {
  // 8-ml-Glasflakon fuer den Rueckspiegel: Kordel, Holzverschluss, Flakon mit Etikett.
  const etikett = img
    ? `<image href="${img}" x="48" y="64" width="44" height="72" preserveAspectRatio="xMidYMid meet"/>`
    : `<rect x="48" y="64" width="44" height="72" rx="2" fill="${color}" stroke="rgba(0,0,0,0.2)"/>
       <text x="70" y="92" text-anchor="middle" font-size="9" font-weight="600" font-family="Inter, sans-serif" letter-spacing="1" fill="#fff">CAROUD</text>
       <rect x="63" y="98" width="14" height="3" rx="1.5" fill="#b9a06a"/>
       <text x="70" y="114" text-anchor="middle" font-size="7" font-family="Inter, sans-serif" fill="#fff">${label}</text>
       <text x="70" y="128" text-anchor="middle" font-size="5.5" font-family="Inter, sans-serif" fill="rgba(255,255,255,0.7)">8 ML</text>`;
  return `
  <svg class="prod-art" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 32 V24 C56 20 57 8 70 8 C83 8 84 20 70 24 Z" fill="none" stroke="#6b5a3e" stroke-width="2.5" stroke-linejoin="round"/>
    <rect x="58" y="30" width="24" height="16" rx="3" fill="#5b4630" stroke="rgba(0,0,0,0.25)"/>
    <rect x="61" y="33" width="18" height="4" rx="2" fill="rgba(255,255,255,0.16)"/>
    <rect x="64" y="44" width="12" height="10" fill="#c3cdcd" stroke="rgba(0,0,0,0.22)"/>
    <rect x="42" y="52" width="56" height="100" rx="7" fill="#c9d3d3" fill-opacity="0.85" stroke="rgba(0,0,0,0.32)" stroke-width="1.4"/>
    <rect x="46" y="57" width="9" height="90" rx="4.5" fill="rgba(255,255,255,0.7)"/>
    ${etikett}
  </svg>`;
}


function probierSVG(color, label, anzahl) {
  // Drei 30-ml-Mini-Sprays nebeneinander – die Probier-Groesse
  const mini = (x, tint) => `
    <g transform="translate(${x} 0)">
      <rect x="8" y="52" width="10" height="8" rx="2" fill="#1a1a1a"/>
      <rect x="10" y="44" width="6" height="8" rx="1" fill="#2a2a2a"/>
      <rect x="0" y="60" width="26" height="86" rx="5" fill="${tint}" stroke="rgba(0,0,0,0.25)"/>
      <rect x="3" y="78" width="20" height="46" rx="2" fill="#111"/>
      <text x="13" y="97" text-anchor="middle" font-size="5.5" font-weight="600" font-family="Inter, sans-serif" letter-spacing="0.6" fill="#fff">CAROUD</text>
      <rect x="9" y="101" width="8" height="2" rx="1" fill="#b9a06a"/>
      <text x="13" y="112" text-anchor="middle" font-size="4.6" font-family="Inter, sans-serif" fill="#b9a06a">15 ML</text>
    </g>`;
  return `
  <svg class="prod-art" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(18 18)">
      ${anzahl === 1 ? `<g transform="translate(39 0)">${mini(0, "#3a3a3a")}</g>` : `${mini(0, "#3a3a3a")}${mini(39, "#555")}${mini(78, "#3a3a3a")}`}
    </g>
    <text x="70" y="188" text-anchor="middle" font-size="8" font-family="Inter, sans-serif" letter-spacing="1.5" fill="#8a8a8a">${label.toUpperCase()}</text>
  </svg>`;
}

function mysterySVG(color, label) {
  // Schwarze Box mit Goldband und Fragezeichen
  return `
  <svg class="prod-art" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="22" y="70" width="96" height="76" rx="5" fill="#141414" stroke="rgba(0,0,0,0.4)"/>
    <rect x="14" y="52" width="112" height="24" rx="4" fill="#1e1e1e" stroke="rgba(0,0,0,0.4)"/>
    <rect x="64" y="52" width="12" height="94" fill="#b9a06a"/>
    <rect x="14" y="60" width="112" height="6" fill="rgba(185,160,106,0.55)"/>
    <path d="M70 34 C60 34 56 40 56 46 H64 C64 42 66 40 70 40 C74 40 76 42 76 46 C76 52 66 52 66 60 H74 C74 56 84 55 84 46 C84 39 79 34 70 34 Z" fill="#b9a06a"/>
    <circle cx="70" cy="66" r="2.6" fill="#b9a06a"/>
    <text x="70" y="118" text-anchor="middle" font-size="10" font-weight="600" font-family="Inter, sans-serif" letter-spacing="2" fill="#f3ede0">CAROUD</text>
    <text x="70" y="132" text-anchor="middle" font-size="7" font-family="Inter, sans-serif" letter-spacing="1.5" fill="#b9a06a">MYSTERY BOX</text>
    <text x="70" y="188" text-anchor="middle" font-size="8" font-family="Inter, sans-serif" letter-spacing="1.5" fill="#8a8a8a">WARENWERT 50 €+</text>
  </svg>`;
}

function artFor(p) {
  if (p.type === "spray") return sprayBottleSVG(p.color, p.label, p.img);
  if (p.type === "baum") return baumSVG(p.color, p.label);
  if (p.type === "haenger") return haengerSVG(p.color, p.label, p.img);
  if (p.type === "glas") return glasSVG(p.color, p.label, p.img);
  if (p.type === "bundle") return bundleSVG(p.color, p.label);
  if (p.type === "probier") return probierSVG(p.color, p.label, p.einzel ? 1 : 3);
  if (p.type === "mystery") return mysterySVG(p.color, p.label);
  if (p.type === "abzieher") return abzieherSVG(p.color, p.label);
  return tuchSVG(p.color, p.label);
}

// Produktfoto, wenn vorhanden – sonst die gezeichnete Etikett-Grafik
// Standbild (erstes Videobild) für Vorschau und Ladezeit
function videoPoster(p) {
  return p.video.replace(/\.mp4(\?|$)/, ".webp$1");
}

// Bild fuer die Kachel "gibt es auch als": heller Studio-Stil je Linie; fuer Duftanhaenger
// das Produktfoto des jeweiligen Dufts, bis es die Anhaenger auch im hellen Stil gibt.
function crossMedia(g) {
  let src = null;
  if (g.linie === "haenger") {
    if (AUCH_ALS_HAENGER.includes(g.scent)) src = "img/auchals/haenger-" + g.scent + ".webp?v=" + ASSET_V;
    else if (g.photo) src = g.photo;
  } else if (g.linie === "probe" && g.photo) {
    src = g.photo;
  } else if (AUCH_ALS_BILDER[g.linie]) {
    src = AUCH_ALS_BILDER[g.linie] + "?v=" + ASSET_V;
  }
  return src ? `<img src="${src}" alt="${g.name}" loading="lazy">` : artFor(g);
}

// Kleines Vorschaubild (Warenkorb, Suche, Mitnahme): Foto, sonst Grafik
function thumbFor(p) {
  return p.photo ? `<img class="thumb-photo" src="${p.photo}" alt="" loading="lazy">` : artFor(p);
}

function mediaFor(p) {
  if (!p.photo) return artFor(p);
  // Zweites Foto liegt darüber und blendet beim Drüberfahren mit der Maus ein
  const zweites = p.photo2
    ? `<img class="prod-photo prod-photo-2" src="${p.photo2}" alt="" aria-hidden="true" loading="lazy">`
    : "";
  return `<img class="prod-photo" src="${p.photo}" alt="${p.name}" loading="lazy">${zweites}`;
}

function euro(v) {
  return "€" + v.toFixed(2).replace(".", ",");
}

function byId(id) {
  return PRODUCTS.find((p) => p.id === id);
}

// Preis: durchgestrichener Streichpreis direkt vor dem aktuellen Preis
function preisHtml(p) {
  const alt = p.priceOld && p.priceOld > p.price
    ? `<span class="price-old">${euro(p.priceOld)}</span>` : "";
  return `${alt}<span class="price-now">${euro(p.price)}</span>`;
}

// Hex-Farbe mit Transparenz, für Verläufe in der jeweiligen Duftfarbe
function rgba(hex, a) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// ---------- Hero: Produkt zeigen ----------

const heroArt = document.getElementById("heroArt");
if (heroArt) {
  heroArt.innerHTML =
    `<div class="bottle-wrap"><img class="hero-bottle" src="img/hero-flasche.webp?v=4" alt="Caroud Duftspray Pacific Cruise" width="503" height="1680" fetchpriority="high"></div>`;
}

// ---------- Die sieben Düfte ----------

const scentGrid = document.getElementById("scentGrid");
if (scentGrid) {
  SCENTS.forEach((s) => {
    const card = document.createElement("button");
    card.className = "scent-card";
    card.type = "button";
    // Alle Karten gleich (Slate) – die Duftfarbe steckt nur in der feinen Linie unter dem Namen
    card.style.setProperty("--c", s.color);
    // Echtes Foto, wenn vorhanden – sonst die gezeichnete Sprühflasche mit Etikett
    const foto = DUFT_FOTOS.includes(s.key);
    if (foto) card.classList.add("has-foto");
    card.innerHTML = `
      ${foto
        ? `<span class="scent-foto"><img src="img/duefte/${s.key}.webp?v=${ASSET_V}" alt="${s.name} Duftspray" loading="lazy"></span>`
        : `<span class="scent-swatch">${artFor(byId("spray-" + s.key))}</span>`}
      <span class="scent-name">${s.name}</span>
      <span class="scent-line" aria-hidden="true"></span>
      <span class="scent-notes">${s.notes.slice(0, 3).join(" · ")}</span>`;
    card.addEventListener("click", () => { location.hash = "p/spray-" + s.key; });
    scentGrid.appendChild(card);
  });
}

// ---------- Zu den Produkten führen ----------
// Eigene Scroll-Animation: läuft in jedem Browser gleich und setzt sauber
// unter dem klebenden Header ab.

function gleiteZu(zielY, dauer) {
  const startY = window.scrollY;
  const weg = zielY - startY;
  if (Math.abs(weg) < 4) return;
  const t0 = performance.now();
  (function schritt(t) {
    const p = Math.min(1, (t - t0) / dauer);
    const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    window.scrollTo(0, startY + weg * e);
    if (p < 1) requestAnimationFrame(schritt);
  })(t0);
  // Sicherheitsnetz: kommen keine Frames, wenigstens hart hinspringen.
  // Nur wenn sich gar nichts bewegt hat – sonst würde es jemanden zurückreißen,
  // der während der Fahrt selbst gescrollt hat.
  setTimeout(() => {
    if (Math.abs(window.scrollY - startY) < 8) window.scrollTo(0, zielY);
  }, dauer + 250);
}

function zuDenProdukten(filter) {
  if (filter) {
    setFamily("alle");
    setFilter(filter);
  }
  const kopf = document.querySelector(".top-sticky") || document.getElementById("siteHeader");
  const versatz = kopf ? kopf.getBoundingClientRect().height + 8 : 8;
  const ziel = document.getElementById("produkte").getBoundingClientRect().top
    + window.scrollY - versatz;
  gleiteZu(ziel, 900);
}

// ---------- Black Friday / Black Week ----------
// Black-Friday-Rabatt in Prozent (abgerundet, damit nie mehr versprochen wird als drin ist)
function bfProzent(p) { return Math.floor(((p.bfNormal - p.price) / p.bfNormal) * 100); }
function bfMaxProzent() {
  return Math.max(0, ...BLACK_FRIDAY.deals.map((d) => { const p = byId(d.id); return p && p.bfDeal ? bfProzent(p) : 0; }));
}

(function blackFriday() {
  const sek = document.getElementById("blackfriday");
  if (!sek || !BF_AKTIV) return;
  sek.hidden = false;
  document.body.classList.add("bf-aktiv");
  // Ankündigungsleiste
  const leiste = document.querySelector(".announce-msg");
  if (leiste) leiste.innerHTML = `Black Week: bis zu ${bfMaxProzent()}&nbsp;% Rabatt auf Düfte &amp; Sets`;
  const grid = sek.querySelector("[data-bf-grid]");
  const deals = BLACK_FRIDAY.deals.map((d) => byId(d.id)).filter((p) => p && p.bfDeal);
  grid.innerHTML = deals.map((p) => {
    const spar = p.bfNormal - p.price;
    return `
      <article class="bf-karte">
        <a class="bf-bild" href="#p/${p.id}">
          ${p.photo ? `<img src="${p.photo}" alt="${p.name}" loading="lazy">` : artFor(p)}
          <span class="bf-tag">−${bfProzent(p)}&nbsp;%</span>
        </a>
        <div class="bf-info">
          <a class="bf-name" href="#p/${p.id}">${p.name}</a>
          <div class="bf-preise">${preisHtml(p)}</div>
          <button type="button" class="bf-add" data-bf-add="${p.id}">${p.wahl ? "Düfte wählen" : "In den Warenkorb"}</button>
        </div>
      </article>`;
  }).join("");
  grid.querySelectorAll("[data-bf-add]").forEach((b) => {
    b.addEventListener("click", () => {
      const p = byId(b.dataset.bfAdd);
      if (p.wahl) { location.hash = "p/" + p.id; return; }
      addToCart(p.id, 1);
      openCart();
    });
  });
  // Countdown bis Aktionsende
  const cd = sek.querySelector("[data-bf-countdown]");
  const ende = Date.parse(BLACK_FRIDAY.ende);
  const tick = () => {
    let rest = Math.max(0, ende - Date.now());
    const t = Math.floor(rest / 864e5); rest -= t * 864e5;
    const s = Math.floor(rest / 36e5); rest -= s * 36e5;
    const min = Math.floor(rest / 6e4);
    const teil = (z, l) => `<span class="bf-cd-teil"><strong>${String(z).padStart(2, "0")}</strong><span>${l}</span></span>`;
    cd.innerHTML = `<span class="bf-cd-label">Endet in</span>${teil(t, "Tage")}${teil(s, "Std")}${teil(min, "Min")}`;
  };
  tick();
  setInterval(tick, 30000);
})();

// ---------- Hero-Slider ----------
// Der Hero wechselt automatisch alle 9 Sekunden zwischen mehreren Info-Folien.
// Während der Black Week kommt vorne eine Angebots-Folie dazu.
const HERO_DAUER = 9000;
function heroSlider() {
  const hero = document.querySelector(".hero");
  const erste = hero && hero.querySelector(".hero-inner");
  if (!erste) return;
  const preis = (id) => { const p = byId(id); return p ? euro(p.price) : ""; };
  const foto = (id) => { const p = byId(id); return p && p.photo ? p.photo : ""; };

  // Info-Folien (Reihenfolge = Reihenfolge im Slider)
  const infos = [
    {
      name: "Mystery Box",
      kicker: "Mystery Box · Warenwert über 50&nbsp;€",
      titel: "Lass dich<br>überraschen.",
      text: "Mindestens ein Duftspray, drei Duftanhänger und ein Glasanhänger – welche Düfte drin sind, erfährst du erst beim Auspacken.",
      ctas: [["#p/mystery-box", "Box entdecken", "btn-gold"], ["#boxen", "Alle Boxen", "btn-outline"]],
      notiz: `Für ${preis("mystery-box")}&nbsp;· Versand in&nbsp;24&nbsp;h`,
      bild: foto("mystery-box"), link: "#p/mystery-box",
    },
    {
      name: "Probierset",
      kicker: "Probierset · 3&nbsp;×&nbsp;30&nbsp;ml",
      titel: "Erst testen.<br>Dann entscheiden.",
      text: "Such dir drei Düfte aus und probier sie in Ruhe im Auto – bevor du dich für die große Flasche entscheidest.",
      ctas: [["#p/probierset-3", "Düfte wählen", "btn-gold"], ["#p/probierset-7", "Alle 7 Düfte", "btn-outline"]],
      notiz: `3 Düfte ${preis("probierset-3")}&nbsp;· alle 7 Düfte ${preis("probierset-7")}`,
      bild: foto("probierset-3"), link: "#p/probierset-3",
    },
    {
      name: "Duftanhänger",
      kicker: "Duftanhänger · 7 Düfte",
      titel: "Kleiner Anhänger.<br>Großer Duft.",
      text: "Einfach an den Spiegel hängen und losfahren. Einzeln oder im Set – frei kombinierbar aus allen sieben Düften.",
      ctas: [["#produkte", "Anhänger ansehen", "btn-gold", "Duftanhänger Premium"], ["#p/set-haenger-5", "5er-Set", "btn-outline"]],
      notiz: `Ab ${preis("haenger-pacific-cruise") || "3,90&nbsp;€"}&nbsp;· 5er-Set ${preis("set-haenger-5")}`,
      bild: foto("set-haenger-5"), link: "#p/set-haenger-5",
    },
  ];

  const wrap = document.createElement("div");
  wrap.className = "hero-slides";
  erste.parentNode.insertBefore(wrap, erste);
  wrap.appendChild(erste);
  erste.classList.add("hero-slide");
  const folien = [{ el: erste, name: "Duftsprays" }];

  const baue = (f) => {
    const el = document.createElement("div");
    el.className = "hero-inner hero-slide hero-slide-info";
    el.innerHTML = `
      <div class="hero-text">
        <p class="hero-kicker">${f.kicker}</p>
        <h2 class="hero-title">${f.titel}</h2>
        <p class="hero-sub">${f.text}</p>
        <div class="hero-cta">
          ${f.ctas.map(([h, t, k, filter]) => `<a href="${h}" class="btn ${k}"${filter ? ` data-filter="${filter}"` : ""}>${t}</a>`).join("")}
        </div>
        <p class="hero-note">${f.notiz}</p>
      </div>
      <a class="hero-bild" href="${f.link}" tabindex="-1" aria-hidden="true"><img src="${f.bild}" alt="" loading="lazy"></a>`;
    el.querySelectorAll("a[data-filter]").forEach((a) => a.addEventListener("click", () => {
      if (typeof setFamily === "function") setFamily("alle");
      if (typeof setFilter === "function") setFilter(a.dataset.filter);
    }));
    wrap.appendChild(el);
    return el;
  };
  infos.forEach((f) => { if (f.bild) folien.push({ el: baue(f), name: f.name }); });

  // Black-Week-Folie (nur im Aktionszeitraum), direkt nach der Startfolie
  if (typeof BF_AKTIV !== "undefined" && BF_AKTIV) {
    const bfSprays = ["spray-pacific-cruise", "spray-fast-cherry", "spray-ombre-apex"].map(byId).filter((p) => p && p.bfDeal);
    const bf = document.createElement("div");
    bf.className = "hero-inner hero-slide hero-slide-bf";
    bf.innerHTML = `
      <div class="hero-text">
        <p class="hero-kicker">Black Week · nur bis 30. November</p>
        <h2 class="hero-title">Black Friday.<br>Bis zu ${bfMaxProzent()}&nbsp;% sparen.</h2>
        <p class="hero-sub">Drei Düfte, zwei Sets, die Mystery Box und mehr – acht Angebote, eine Woche.
          Ab 40&nbsp;€ versandkostenfrei.</p>
        <div class="hero-cta">
          <a href="#blackfriday" class="btn btn-gold" data-zu-bf>Zu den Angeboten</a>
          <a href="#p/mystery-box" class="btn btn-outline">Mystery Box</a>
        </div>
        <p class="hero-note" data-hero-cd></p>
      </div>
      <div class="hero-bf-karten" aria-hidden="true">
        ${bfSprays.map((p, i) => `
          <a class="hero-bf-karte k${i}" href="#p/${p.id}" tabindex="-1">
            <img src="${p.photo}" alt="" loading="lazy">
            <span class="hero-bf-tag">−${bfProzent(p)}&nbsp;%</span>
            <span class="hero-bf-name">${p.label}</span>
          </a>`).join("")}
      </div>`;
    wrap.appendChild(bf);
    bf.querySelector("[data-zu-bf]").addEventListener("click", (e) => {
      e.preventDefault();
      const kopf = document.querySelector(".top-sticky") || document.getElementById("siteHeader");
      const versatz = kopf ? kopf.getBoundingClientRect().height : 0;
      gleiteZu(document.getElementById("blackfriday").getBoundingClientRect().top + window.scrollY - versatz, 900);
    });
    const cd = bf.querySelector("[data-hero-cd]");
    const ende = Date.parse(BLACK_FRIDAY.ende);
    const cdTick = () => {
      const r = Math.max(0, ende - Date.now());
      const t = Math.floor(r / 864e5), s = Math.floor((r % 864e5) / 36e5), mi = Math.floor((r % 36e5) / 6e4);
      cd.textContent = `Endet in ${t} Tagen, ${s} Std, ${mi} Min`;
    };
    cdTick(); setInterval(cdTick, 30000);
    folien.splice(1, 0, { el: bf, name: "Black Week", bf: true });
  }
  if (folien.length < 2) return;

  // Anzeige: Zähler + je Folie ein Balken, der sich über die Laufzeit füllt
  const nav = document.createElement("div");
  nav.className = "hero-nav";
  nav.style.setProperty("--hero-dauer", HERO_DAUER + "ms");
  const zwei = (n) => String(n).padStart(2, "0");
  nav.innerHTML = `
    <span class="hero-zaehler"><strong data-hz>01</strong><span>/ ${zwei(folien.length)}</span></span>
    <div class="hero-segmente">
      ${folien.map((f, i) => `<button type="button" class="hero-seg" aria-label="Folie ${i + 1}: ${f.name}"><span class="hero-seg-linie"><i></i></span><span class="hero-seg-name">${f.name}</span></button>`).join("")}
    </div>
    <div class="hero-pfeile">
      <button type="button" class="hero-pfeil" data-hp="-1" aria-label="Vorherige Folie"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
      <button type="button" class="hero-pfeil" data-hp="1" aria-label="Nächste Folie"><svg viewBox="0 0 24 24" width="16" height="16"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
    </div>`;
  hero.appendChild(nav);
  hero.classList.add("hat-slider");
  const segs = [...nav.querySelectorAll(".hero-seg")];
  const zaehler = nav.querySelector("[data-hz]");

  // Zeitsteuerung per JS (nicht per CSS-Animation), damit Pausieren sauber klappt
  let aktiv = -1, start = 0, rest = HERO_DAUER, pausiert = false, raf = null;
  const zeige = (i) => {
    aktiv = (i + folien.length) % folien.length;
    folien.forEach((f, k) => {
      f.el.classList.toggle("ist-aktiv", k === aktiv);
      f.el.setAttribute("aria-hidden", k === aktiv ? "false" : "true");
      f.el.inert = k !== aktiv;
    });
    segs.forEach((b, k) => {
      b.classList.toggle("ist-aktiv", k === aktiv);
      b.classList.toggle("ist-fertig", k < aktiv);
      b.querySelector("i").style.transform = k < aktiv ? "scaleX(1)" : "scaleX(0)";
    });
    zaehler.textContent = zwei(aktiv + 1);
    hero.classList.toggle("bf-zeigt", !!folien[aktiv].bf);
    hero.classList.toggle("info-zeigt", aktiv > 0 && !folien[aktiv].bf);
    rest = HERO_DAUER; start = performance.now();
  };
  const schritt = (jetzt) => {
    if (!pausiert) {
      const anteil = Math.min(1, 1 - (rest - (jetzt - start)) / HERO_DAUER);
      segs[aktiv].querySelector("i").style.transform = `scaleX(${anteil})`;
      if (anteil >= 1) zeige(aktiv + 1);
    }
    raf = requestAnimationFrame(schritt);
  };
  const pause = () => { if (pausiert) return; pausiert = true; rest -= performance.now() - start; };
  const weiter = () => { if (!pausiert) return; pausiert = false; start = performance.now(); };

  segs.forEach((b, k) => b.addEventListener("click", () => { zeige(k); }));
  nav.querySelectorAll("[data-hp]").forEach((b) => b.addEventListener("click", () => zeige(aktiv + Number(b.dataset.hp))));
  // Handy: schlichte Pfeile links und rechts am Rand des Heros
  const seitenPfeil = (hp, d, label) => `<button type="button" class="hero-seite-pfeil ${hp < 0 ? "l" : "r"}" data-hp="${hp}" aria-label="${label}">
    <svg viewBox="0 0 24 24" width="16" height="16"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;
  hero.insertAdjacentHTML("beforeend", seitenPfeil(-1, "M15 5l-7 7 7 7", "Vorherige Folie") + seitenPfeil(1, "M9 5l7 7-7 7", "Nächste Folie"));
  hero.querySelectorAll(".hero-seite-pfeil").forEach((b) => b.addEventListener("click", () => zeige(aktiv + Number(b.dataset.hp))));
  // Pause, solange die Maus auf dem Text/Bild liegt oder der Tab im Hintergrund ist
  wrap.addEventListener("mouseenter", pause);
  wrap.addEventListener("mouseleave", weiter);
  document.addEventListener("visibilitychange", () => (document.hidden ? pause() : weiter()));
  // Wischen am Handy
  let sx = null, sy = null;
  hero.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  hero.addEventListener("touchend", (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy; sx = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) zeige(aktiv + (dx < 0 ? 1 : -1));
  }, { passive: true });

  // Während der Black Week mit der Angebotsfolie starten, sonst mit der Startfolie
  zeige(BF_AKTIV ? 1 : 0);
  raf = requestAnimationFrame(schritt);
}
heroSlider();

// ---------- Einblick in die Boxen (Startseite) ----------
(function boxenTeaser() {
  const sek = document.getElementById("boxen");
  if (!sek) return;
  sek.querySelectorAll("[data-box-preis]").forEach((el) => {
    const p = byId(el.dataset.boxPreis);
    if (p) el.innerHTML = preisHtml(p);
  });
  sek.querySelector("[data-boxen-alle]")?.addEventListener("click", () => zuDenProdukten("Sets & Boxen"));
  const mehr = sek.querySelector("[data-boxen-mehr]");
  const ids = ["probierset-3", "bundle-starter", "bundle-signature"];
  mehr.innerHTML = ids.map(byId).filter(Boolean).map((p) => `
    <a class="boxen-karte" href="#p/${p.id}">
      <span class="boxen-karte-bild">${p.photo ? `<img src="${p.photo}" alt="" loading="lazy">` : artFor(p)}</span>
      <span class="boxen-karte-text">
        <span class="boxen-karte-name">${p.name}</span>
        <span class="boxen-karte-preis">${preisHtml(p)}</span>
      </span>
    </a>`).join("");
})();

// ---------- Formen-Vergleich: Tabs am Handy ----------

const vtabs = document.querySelectorAll(".vtab");
const vkarten = document.querySelectorAll(".vergleich-karte");
vtabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const i = Number(tab.dataset.vtab);
    vtabs.forEach((t, k) => t.classList.toggle("is-on", k === i));
    vkarten.forEach((k, n) => k.classList.toggle("is-on", n === i));
  });
});

// ---------- Kollektions-Kacheln ----------

document.querySelectorAll("[data-koll]").forEach((kachel) => {
  kachel.addEventListener("click", () => zuDenProdukten(kachel.dataset.koll));
});

// ---------- Filter & Produkt-Grid ----------

const FILTERS = ["bestseller", "alle", "Duftsprays", "Duftanhänger Premium", "Glasanhänger", "Pflege", "Sets & Boxen"];
const FILTER_LABELS = { bestseller: "Bestseller", alle: "Alle Produkte" };
let activeFilter = "bestseller";

const filterChips = document.getElementById("filterChips");
const productGrid = document.getElementById("productGrid");
const productTitle = document.getElementById("productTitle");

FILTERS.forEach((f) => {
  const chip = document.createElement("button");
  chip.className = "chip";
  chip.dataset.filter = f;
  chip.textContent = FILTER_LABELS[f] || f;
  chip.addEventListener("click", () => setFilter(f));
  filterChips.appendChild(chip);
});

// ---------- Duft-Finder ----------
// Zweite Filterebene: nach Duftrichtung statt nach Produktart.
// Pflege und Bundles haben keine Duftrichtung und fallen dabei bewusst raus.
let activeFamily = "alle";
const familyChips = document.getElementById("familyChips");

[{ key: "alle", name: "Alle Düfte" }].concat(FAMILIEN).forEach((f) => {
  const chip = document.createElement("button");
  chip.className = "chip chip-sm";
  chip.dataset.family = f.key;
  chip.textContent = f.name;
  chip.addEventListener("click", () => setFamily(f.key));
  familyChips.appendChild(chip);
});

function setFamily(k) {
  activeFamily = k;
  familyChips.querySelectorAll(".chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.family === k);
  });
  updateProductTitle();
  renderProducts();
}

function updateProductTitle() {
  const basis = FILTER_LABELS[activeFilter] || activeFilter;
  const fam = FAMILIEN.find((f) => f.key === activeFamily);
  productTitle.textContent = fam ? basis + " · " + fam.name : basis;
}

// Die Duftrichtung hat nur bei den drei Duft-Linien eine Funktion
const DUFT_KATEGORIEN = ["Duftsprays", "Duftanhänger Premium", "Glasanhänger"];

function setFilter(f) {
  activeFilter = f;
  const finderRow = document.querySelector(".finder-row");
  if (finderRow) {
    const zeigen = DUFT_KATEGORIEN.includes(f);
    finderRow.hidden = !zeigen;
    if (!zeigen && activeFamily !== "alle") {
      activeFamily = "alle";
      familyChips.querySelectorAll(".chip").forEach((c) => c.classList.toggle("active", c.dataset.family === "alle"));
    }
  }
  // aktiven Chip sichtbar scrollen und den Rand-Verlauf nachziehen
  setTimeout(() => {
    const aktiv = document.querySelector(".filter-chips .chip.is-on, .filter-chips .chip.active");
    // Nur die Chip-Reihe waagerecht verschieben (aktiver Chip mittig). Kein
    // scrollIntoView: das hat beim ersten Laden die ganze Seite nach unten
    // zum Bestseller-Bereich springen lassen.
    const reihe = aktiv && aktiv.parentElement;
    if (reihe && reihe.scrollWidth > reihe.clientWidth) {
      reihe.scrollLeft = aktiv.offsetLeft - reihe.offsetLeft - (reihe.clientWidth - aktiv.offsetWidth) / 2;
    }
    if (typeof scrollReihenPruefen === "function") scrollReihenPruefen();
  }, 0);
  filterChips.querySelectorAll(".chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.filter === f);
  });
  updateProductTitle();
  renderProducts();
}

function filteredProducts() {
  let list = PRODUCTS.filter((p) => !p.hidden);
  if (activeFilter === "bestseller") list = list.filter((p) => p.bestseller);
  else if (activeFilter !== "alle") list = list.filter((p) => p.category === activeFilter);
  if (activeFamily !== "alle") list = list.filter((p) => p.familie === activeFamily);
  return list;
}

function renderProducts() {
  productGrid.innerHTML = "";
  const list = filteredProducts();
  if (!list.length) {
    productGrid.innerHTML = activeFamily !== "alle"
      ? `<p class="grid-empty">In dieser Duftrichtung gibt es hier nichts – wähle eine andere Kategorie.</p>`
      : `<p class="grid-empty">Hier ist noch nichts – bald mehr!</p>`;
    return;
  }
  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-media">
        ${mediaFor(p)}
        ${p.bfDeal ? `<span class="bf-badge">Black Friday</span>` : ""}
        <button class="quick-add">+ In den Warenkorb</button>
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-prices">${preisHtml(p)}</div>`;
    card.querySelector(".quick-add").addEventListener("click", (e) => {
      e.stopPropagation();
      if (p.wahl) { location.hash = "p/" + p.id; return; }
      addToCart(p.id, 1);
    });
    card.addEventListener("click", () => { location.hash = "p/" + p.id; });
    productGrid.appendChild(card);
  });
}

setFamily("alle");
setFilter("bestseller");

// ---------- Warenkorb ----------

let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("caroud-cart") || "[]");
  if (!Array.isArray(cart)) cart = [];
  cart = cart.filter((i) => i && byId(i.id) && i.qty > 0);
} catch (_) { cart = []; }

const cartCountEl = document.querySelector(".cart-count");
const cartItemsEl = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const shippingTextEl = document.getElementById("shippingText");
const shippingFillEl = document.getElementById("shippingFill");

// ---------- Mitnahme-Angebote im Warenkorb ----------
// Zusatzartikel im Warenkorb gibt es guenstiger als im Katalog.
// Gilt nur, solange mindestens ein regulaerer Artikel im Korb liegt.
const UPSELL = [
  { id: "haenger-pacific-cruise", price: 2.90, name: "Duftanhänger", scentChoice: "haenger" },
  { id: "probe-pacific-cruise",   price: 4.90, name: "Duftprobe 30 ml", scentChoice: "probe" },
  { id: "pflege-innenraum", price: 4.90, name: "Innenraum-Tuch" },
  { id: "glas-pacific-cruise",    price: 9.90, name: "Glasanhänger", scentChoice: "glas" },
  { id: "pflege-mikrofaser", price: 8.90, name: "Mikrofaser 3er-Set" },
  { id: "pflege-abzieher",  price: 8.90, name: "Wasserabzieher" },
  { id: "pflege-trockentuch", price: 11.90, name: "Trockentuch" },
];

function upsellPriceFor(id) {
  const linie = byId(id)?.linie;
  const u = UPSELL.find((x) => x.id === id || (x.scentChoice && x.scentChoice === linie));
  return u ? u.price : null;
}

// Mitnahme-Preise gelten nur, wenn ein regulaer bezahlter Artikel im Korb liegt
function upsellValid() {
  return cart.some((i) => !i.up && !byId(i.id)?.upsellOnly);
}

// Preis einer Warenkorb-Position (Mitnahmeartikel guenstiger)
function linePrice(item) {
  if (item.up && upsellValid()) {
    const u = upsellPriceFor(item.id);
    if (u !== null) return u;
  }
  return byId(item.id)?.price || 0;
}

// Raeumt ungueltige Mitnahmeartikel auf: ohne regulaeren Artikel gibt es
// keine Mitnahme-Preise – reine Mitnahmeartikel fliegen raus, der Rest
// wird zum Katalogpreis weitergefuehrt.
function normalizeCart(still) {
  if (upsellValid()) return;
  let changed = false;
  cart = cart.filter((i) => {
    if (i.up && byId(i.id)?.upsellOnly) { changed = true; return false; }
    return true;
  });
  cart.forEach((i) => { if (i.up) { i.up = false; changed = true; } });
  if (changed && !still) {
    showToast("Mitnahme-Preise gelten nur zusammen mit einem regulären Artikel.");
  }
}

function saveCart() {
  localStorage.setItem("caroud-cart", JSON.stringify(cart));
}

function cartTotalQty() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function cartSubtotal() {
  return cart.reduce((s, i) => s + linePrice(i) * i.qty, 0);
}

function addToCart(id, qty, up, wahl) {
  up = !!up;
  const wKey = (wahl || []).join(",");
  const entry = cart.find((i) => i.id === id && !!i.up === up && (i.wahl || []).join(",") === wKey);
  if (entry) entry.qty += qty;
  else cart.push(wahl && wahl.length ? { id, qty, up, wahl } : { id, qty, up });
  normalizeCart();
  saveCart();
  renderCart();
  showToast(`${byId(id).name} hinzugefügt`);
}

function changeQty(idx, delta) {
  const entry = cart[idx];
  if (!entry) return;
  entry.qty += delta;
  if (entry.qty <= 0) cart.splice(idx, 1);
  normalizeCart();
  saveCart();
  renderCart();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  normalizeCart();
  saveCart();
  renderCart();
}

function renderUpsell() {
  const box = document.getElementById("upsellBox");
  if (!box) return;
  if (!cart.length || !upsellValid()) { box.hidden = true; return; }
  box.hidden = false;
  const row = document.getElementById("upsellRow");
  row.innerHTML = "";
  UPSELL.forEach((u) => {
    const base = byId(u.id);
    if (!base) return;
    // Nur die anderen Produkte vorschlagen: was schon im Korb liegt, faellt raus
    const schonImKorb = cart.some((i) => i.id === u.id
      || (u.scentChoice && byId(i.id)?.linie === u.scentChoice));
    if (schonImKorb) return;
    const regular = base.upsellOnly ? null : base.price;
    const card = document.createElement("div");
    card.className = "upsell-card";
    // Der Slot steht immer - mit Auswahl oder leer. Sonst rutscht der
    // Button bei Karten ohne Duftwahl nach oben und die Reihe wirkt schief.
    const scents = u.scentChoice
      ? `<div class="upsell-slot"><select class="upsell-scent" aria-label="Duft wählen">
          ${SCENTS.map((s) => `<option value="${u.scentChoice}-${s.key}">${s.name}</option>`).join("")}
         </select></div>`
      : `<div class="upsell-slot" aria-hidden="true"></div>`;
    card.innerHTML = `
      <div class="upsell-art">${thumbFor(base)}</div>
      <div class="upsell-name">${u.name}</div>
      <div class="upsell-prices">
        ${regular && regular > u.price ? `<span class="price-old">${euro(regular)}</span>` : ""}
        <span class="price-now">${euro(u.price)}</span>
      </div>
      ${scents}
      <button class="upsell-add" type="button">Hinzufügen</button>`;
    card.querySelector(".upsell-add").addEventListener("click", () => {
      const sel = card.querySelector(".upsell-scent");
      addToCart(sel ? sel.value : u.id, 1, true);
    });
    row.appendChild(card);
  });
  if (!row.children.length) box.hidden = true;
}

// Versand: 3,90 € pauschal, ab 40 € Warenwert versandkostenfrei.
const VERSAND_PREIS = 3.90;
const VERSANDFREI_AB = 40;

function versandStatus() {
  const sub = cartSubtotal();
  const frei = sub >= VERSANDFREI_AB;
  return { frei, kosten: frei || !cart.length ? 0 : VERSAND_PREIS, fehlend: Math.max(0, VERSANDFREI_AB - sub), sub };
}

function renderCart() {
  const qty = cartTotalQty();
  cartCountEl.textContent = qty;
  cartCountEl.hidden = qty === 0;

  const subtotal = cartSubtotal();
  cartSubtotalEl.textContent = euro(subtotal);

  const status = versandStatus();
  if (!cart.length) {
    shippingTextEl.innerHTML = `<strong>Versandkostenfrei ab ${euro(VERSANDFREI_AB)}</strong>`;
    shippingFillEl.style.width = "0%";
  } else if (status.frei) {
    shippingTextEl.innerHTML = `<strong>Versandkostenfrei</strong> – dein Paket geht gratis raus`;
    shippingFillEl.style.width = "100%";
  } else {
    shippingTextEl.innerHTML = `Noch <strong>${euro(status.fehlend)}</strong> bis zum kostenlosen Versand`;
    shippingFillEl.style.width = Math.round(subtotal / VERSANDFREI_AB * 100) + "%";
  }
  const shipEl = document.getElementById("cartShipping");
  const totalEl = document.getElementById("cartTotal");
  if (shipEl) shipEl.textContent = !cart.length ? "–" : status.frei ? "kostenlos" : euro(VERSAND_PREIS);
  if (totalEl) totalEl.textContent = euro(subtotal + status.kosten);
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) checkoutBtn.disabled = !cart.length;

  cartItemsEl.innerHTML = "";
  if (!cart.length) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Dein Warenkorb ist noch leer.</p>`;
    renderUpsell();
    return;
  }
  cart.forEach((item, idx) => {
    const p = byId(item.id);
    if (!p) return;
    const preis = linePrice(item);
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-art">${thumbFor(p)}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}${item.up ? ` <span class="upsell-tag">Mitnahme</span>` : ""}</div>
        ${item.wahl && item.wahl.length ? `<div class="cart-item-wahl">${wahlText(item.wahl)}</div>` : ""}
        <div class="cart-item-price">${preis < p.price ? `<span class="price-old">${euro(p.price)}</span> ` : ""}${euro(preis)}</div>
        <div class="qty-row">
          <button class="qty-btn" data-minus>−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" data-plus>+</button>
          <button class="cart-item-remove">Entfernen</button>
        </div>
      </div>`;
    row.querySelector("[data-minus]").addEventListener("click", () => changeQty(idx, -1));
    row.querySelector("[data-plus]").addEventListener("click", () => changeQty(idx, 1));
    row.querySelector(".cart-item-remove").addEventListener("click", () => removeFromCart(idx));
    cartItemsEl.appendChild(row);
  });
  renderUpsell();
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  showToast("Der Checkout wird gerade angeschlossen – bald verfügbar.");
});

normalizeCart(true);
saveCart();
renderCart();

// ---------- Produkt-Modal ----------

// Fakten je Form – Quelle sind die Etikettentexte und das FAQ (siehe Formen-Vergleich)
const FAKTEN = {
  spray: [
    ["Wohin", "Auf Fußmatten oder Textilsitze"],
    ["Nicht auf", "Leder, Kunststoff, Displays, Haut"],
    ["Wie", "1–2 Sprühstöße, wann immer du magst"],
    ["Inhalt", "150 ml"],
  ],
  haenger: [
    ["Wohin", "An den Rückspiegel"],
    ["Form", "Eigene Caroud-Form, beidseitig bedruckt"],
    ["Wie", "Aufhängen und liegen lassen"],
    ["Hält", "4 bis 8 Wochen, je nach Belüftung"],
  ],
  glas: [
    ["Wohin", "An den Rückspiegel"],
    ["Wie", "Aufhängen, Verschluss leicht öffnen"],
    ["Inhalt", "8 ml Duftöl im Glasflakon"],
    ["Hält", "Mehrere Monate"],
  ],
};

const productModal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
let modalQty = 1;

function openProductModal(id) {
  const p = byId(id);
  if (!p) return;
  modalQty = 1;
  // Denselben Duft in den anderen beiden Linien anbieten
  const geschwister = p.scent ? PRODUCTS.filter((x) => x.scent === p.scent && x.id !== p.id) : [];
  // Fakten zur Form – dieselben Angaben wie im Vergleich, direkt am Produkt
  const fakten = p.set ? [] : FAKTEN[p.type] || [];
  modalBody.innerHTML = `
    <div class="modal-art">${p.photo ? `<img class="modal-photo" src="${p.photo}" alt="${p.name}">` : artFor(p)}</div>
    <div class="modal-info">
      <p class="modal-category">${p.category}</p>
      <h3>${p.name}</h3>
      <div class="modal-prices">${preisHtml(p)}</div>
      <p class="modal-desc">${p.desc}</p>
      ${p.category === "Duftsprays" ? `<p class="gift-note">Inklusive Gratis-Duftanhänger</p>` : ""}
      <p class="notes-label">${p.category === "Sets & Boxen" || p.set ? "Inhalt" : p.category === "Pflege" ? "Details" : "Duftnoten"}</p>
      <div class="notes-row">${p.notes.map((n) => `<span class="note-chip">${n}</span>`).join("")}</div>
      ${fakten.length ? `
        <dl class="fakten">
          ${fakten.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
        </dl>` : ""}
      ${geschwister.length ? `
        <p class="notes-label">${p.label} gibt es auch als</p>
        <div class="cross-row">
          ${geschwister.map((g) => `
            <button class="cross-card" type="button" data-cross="${g.id}">
              <span class="cross-art">${crossMedia(g)}</span>
              <span class="cross-name">${g.linieName}</span>
            </button>`).join("")}
        </div>` : ""}
      <div class="modal-actions">
        <div class="qty-row">
          <button class="qty-btn" data-mminus>−</button>
          <span class="qty-val" id="modalQtyVal">1</span>
          <button class="qty-btn" data-mplus>+</button>
        </div>
        <button class="btn btn-dark" id="modalAdd">In den Warenkorb</button>
      </div>
    </div>`;
  modalBody.querySelectorAll("[data-cross]").forEach((b) => {
    b.addEventListener("click", () => openProductModal(b.dataset.cross));
  });
  modalBody.querySelector("[data-mminus]").addEventListener("click", () => {
    modalQty = Math.max(1, modalQty - 1);
    document.getElementById("modalQtyVal").textContent = modalQty;
  });
  modalBody.querySelector("[data-mplus]").addEventListener("click", () => {
    modalQty++;
    document.getElementById("modalQtyVal").textContent = modalQty;
  });
  modalBody.querySelector("#modalAdd").addEventListener("click", () => {
    if (p.wahl) { closeModal(); location.hash = "p/" + p.id; return; }
    addToCart(p.id, modalQty);
    closeModal();
    openCart();
  });
  productModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  productModal.hidden = true;
  document.body.style.overflow = "";
}

productModal.addEventListener("click", (e) => {
  if (e.target === productModal) closeModal();
});
document.querySelector("[data-close='modal']").addEventListener("click", closeModal);

// ---------- Drawer (Menü & Warenkorb) ----------

const menuDrawer = document.getElementById("menuDrawer");
const cartDrawer = document.getElementById("cartDrawer");
const menuOverlay = document.querySelector("[data-overlay='menu']");
const cartOverlay = document.querySelector("[data-overlay='cart']");

function openMenu() { menuDrawer.classList.add("open"); menuOverlay.hidden = false; }
function closeMenu() { menuDrawer.classList.remove("open"); menuOverlay.hidden = true; }
function openCart() { renderCart(); cartDrawer.classList.add("open"); cartOverlay.hidden = false; }
function closeCart() { cartDrawer.classList.remove("open"); cartOverlay.hidden = true; }

document.querySelector(".menu-toggle").addEventListener("click", openMenu);
document.querySelector(".cart-toggle").addEventListener("click", openCart);
document.querySelector("[data-close='menu']").addEventListener("click", closeMenu);
document.querySelector("[data-close='cart']").addEventListener("click", closeCart);
menuOverlay.addEventListener("click", closeMenu);
cartOverlay.addEventListener("click", closeCart);

menuDrawer.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    if (a.dataset.filter) { setFamily("alle"); setFilter(a.dataset.filter); }
    closeMenu();
  });
});

// Kopfleiste am Desktop: gleiche Logik wie im Seitenmenü
document.querySelectorAll(".head-nav a").forEach((a) => {
  a.addEventListener("click", () => {
    if (a.dataset.filter) { setFamily("alle"); setFilter(a.dataset.filter); }
  });
});

// ---------- Suche ----------

const searchOverlay = document.getElementById("searchOverlay");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function openSearch() {
  searchOverlay.hidden = false;
  searchInput.value = "";
  searchResults.innerHTML = "";
  setTimeout(() => searchInput.focus(), 50);
}

function closeSearch() { searchOverlay.hidden = true; }

document.querySelector(".search-toggle").addEventListener("click", openSearch);
document.querySelector("[data-close='search']").addEventListener("click", closeSearch);
searchOverlay.addEventListener("click", (e) => {
  if (e.target === searchOverlay) closeSearch();
});

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = "";
  if (q.length < 2) return;
  const hits = PRODUCTS.filter(
    (p) => !p.hidden && (p.name.toLowerCase().includes(q) || p.notes.some((n) => n.toLowerCase().includes(q)))
  );
  if (!hits.length) {
    const sicher = searchInput.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    searchResults.innerHTML = `<p class="search-empty">Nichts gefunden für „${sicher}“.</p>`;
    return;
  }
  hits.forEach((p) => {
    const row = document.createElement("div");
    row.className = "search-result";
    row.innerHTML = `
      <div class="search-result-art">${thumbFor(p)}</div>
      <span class="search-result-name">${p.name}</span>
      <span class="search-result-price">${euro(p.price)}</span>`;
    row.addEventListener("click", () => {
      closeSearch();
      location.hash = "p/" + p.id;
    });
    searchResults.appendChild(row);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSearch();
    closeModal();
    closeMenu();
    closeCart();
  }
});

// ---------- Toast ----------

const toast = document.getElementById("toast");
let toastTimer = null;

function showToast(html) {
  toast.innerHTML = html;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.hidden = true; }, 2400);
}

// ---------- Header-Schatten & Scroll-Reveal ----------

const header = document.getElementById("siteHeader");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("visible");
        observer.unobserve(en.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// ---------- Ankündigungsleiste ----------
// Wechselt alle 4 Sekunden, damit alle drei Botschaften gelesen werden.

const announceMsgs = document.querySelectorAll(".announce-msg");
if (announceMsgs.length > 1) {
  let announceIdx = 0;
  setInterval(() => {
    announceMsgs[announceIdx].classList.remove("is-on");
    announceIdx = (announceIdx + 1) % announceMsgs.length;
    announceMsgs[announceIdx].classList.add("is-on");
    if (typeof kopfhoeheSetzen === "function") kopfhoeheSetzen();
  }, 4000);
}

// ---------- Newsletter (Demo) ----------

document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.hidden = true;
  document.getElementById("newsletterDone").hidden = false;
});

// ---------- Ladebildschirm: Sprühstoß-Übergang ----------

// Der Vorhang läuft nur beim ersten Aufruf pro Sitzung. Wer zurückkommt oder
// die Seite neu lädt, soll nicht jedes Mal warten müssen.
const preloader = document.getElementById("preloader");
let introGesehen = false;
try {
  introGesehen = sessionStorage.getItem("caroud-intro") === "1";
  sessionStorage.setItem("caroud-intro", "1");
} catch (_) { /* privater Modus: dann eben jedes Mal */ }

if (preloader && introGesehen) preloader.remove();

if (preloader && !introGesehen) {
  document.body.style.overflow = "hidden";
  const mist = document.getElementById("mist");
  const origin = document.getElementById("sprayOrigin");
  const inner = document.getElementById("preloaderInner");
  let finished = false;

  const finish = () => {
    if (finished) return;
    finished = true;
    document.body.style.overflow = "";
    preloader.remove();
  };

  const burst = (count) => {
    const rect = origin.getBoundingClientRect();
    const ox = rect.left, oy = rect.top;
    for (let i = 0; i < count; i++) {
      const d = document.createElement("div");
      d.className = "spray-particle";
      const size = 2 + Math.random() * 4;
      d.style.width = d.style.height = size + "px";
      d.style.left = ox + "px";
      d.style.top = oy + "px";
      preloader.appendChild(d);
      const angle = (-30 + Math.random() * 60) * (Math.PI / 180); // Kegel nach rechts
      const dist = 70 + Math.random() * 190;
      const dx = Math.cos(angle) * dist;
      const dy = Math.sin(angle) * dist - 12;
      d.animate(
        [
          { transform: "translate(0,0) scale(1)", opacity: 0.95 },
          { transform: `translate(${dx}px, ${dy}px) scale(${0.4 + Math.random() * 0.6})`, opacity: 0 },
        ],
        { duration: 550 + Math.random() * 350, easing: "cubic-bezier(0.15, 0.6, 0.4, 1)", fill: "forwards" }
      );
    }
  };

  // Ablauf: Flakon erscheint -> Kopf drückt -> Sprühstoß -> Nebel füllt Bildschirm -> lichtet sich
  setTimeout(() => document.getElementById("sprayHead").classList.add("pressed"), 420);
  setTimeout(() => {
    document.getElementById("sprayHead").classList.remove("pressed");
    burst(22);
  }, 520);
  setTimeout(() => burst(16), 640);

  setTimeout(() => {
    const rect = origin.getBoundingClientRect();
    mist.style.left = rect.left - 35 + "px";
    mist.style.top = rect.top - 35 + "px";
    const cover = Math.ceil((Math.hypot(window.innerWidth, window.innerHeight) * 2) / 70);
    mist.animate(
      [
        { transform: "scale(0)", opacity: 0.6 },
        { transform: `scale(${cover})`, opacity: 1 },
      ],
      { duration: 620, easing: "ease-in", fill: "forwards" }
    );
  }, 600);

  // Sobald der Nebel deckt: Hintergrund freigeben, dann Nebel auflösen
  setTimeout(() => {
    preloader.style.background = "transparent";
    inner.style.opacity = "0";
    preloader.querySelector(".preloader-glow").style.display = "none";
    mist.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 600, easing: "ease-out", fill: "forwards",
    });
  }, 1250);

  setTimeout(finish, 1900);
  setTimeout(finish, 3000); // Sicherheitsnetz
}

// ---------- Hero-Video (stumm, Dauerschleife) ----------

const heroVideo = document.querySelector(".hero-video");
if (heroVideo) {
  heroVideo.play().catch(() => {});
  // Falls der Browser das Autoplay unterbricht: bei Interaktion fortsetzen
  ["click", "touchstart", "scroll"].forEach((ev) =>
    window.addEventListener(ev, () => {
      if (heroVideo.paused) heroVideo.play().catch(() => {});
    }, { passive: true })
  );
}


// ---------- Eigene Produktseite (#p/<id>) ----------
// Jedes Produkt bekommt eine eigene Seite mit teilbarer URL. Die Shop-
// Sektionen werden ausgeblendet, die Seite aus PRODUCTS gerendert.

const produktPage = document.getElementById("produktPage");
let pdpQty = 1;

// Empfehlungen: bunte Mischung quer durch die Kategorien, Bestseller zuerst.
// Der aktuelle Duft und Produkte ohne Preis bleiben draussen.
function recoAuswahl(p) {
  // Nur Produkte mit echtem Foto empfehlen – Zeichnungen fallen neben den Fotos ab
  const pool = PRODUCTS.filter((x) => x.id !== p.id && x.scent !== p.scent && x.price > 0 && x.photo);
  const sortiert = pool.slice().sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
  const gewaehlt = [];
  const kategorien = new Set([p.category]);
  const duefte = new Set(p.scent ? [p.scent] : []);
  for (const x of sortiert) {
    if (gewaehlt.length >= 4) break;
    if (kategorien.has(x.category)) continue;
    if (x.scent && duefte.has(x.scent)) continue;
    kategorien.add(x.category);
    if (x.scent) duefte.add(x.scent);
    gewaehlt.push(x);
  }
  for (const x of sortiert) {
    if (gewaehlt.length >= 4) break;
    if (!gewaehlt.includes(x)) gewaehlt.push(x);
  }
  return gewaehlt;
}

function pyrFarben(key) {
  const f = typeof PYRAMIDEN_FARBEN !== "undefined" && PYRAMIDEN_FARBEN[key];
  return f ? `--p1:${f.hell};--p2:${f.mitte};--p3:${f.dunkel};` : "";
}
// Probierset mit allen Düften: kurze Liste, was drin ist
function probenListeHtml(p) {
  if (!p.probenListe) return "";
  return `
    <p class="notes-label">Die ${SCENTS.length} Proben im Set</p>
    <ul class="proben-liste">
      ${SCENTS.map((s) => `
        <li>
          <button type="button" class="proben-zeile" data-proben-duft="${s.key}">
            <img src="img/fotos/probe-${s.key}.webp?v=${ASSET_V}" alt="" loading="lazy">
            <span class="proben-text">
              <span class="proben-name">${s.name}</span>
              <span class="proben-noten">${s.notes.slice(0, 3).join(" · ")}</span>
            </span>
            <span class="proben-ml">30 ml</span>
          </button>
        </li>`).join("")}
    </ul>`;
}

// Duftreise: Pyramide als Grafik, Geschichte in drei Phasen, Duftprofil
// „Warum Caroud?“ – Vergleich mit herkömmlichen Produkten (Pflege)
function vergleichBlock(p) {
  const v = p.vergleich;
  if (!v) return "";
  const haken = `<svg class="vg-icon vg-ja" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10"/><path d="M5.6 10.3l2.9 2.9 5.9-6.1" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const kreuz = `<svg class="vg-icon vg-nein" viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="10"/><path d="M6.8 6.8l6.4 6.4M13.2 6.8l-6.4 6.4" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>`;
  return `
    <section class="pvg" aria-label="Warum Caroud?">
      <div class="pvg-kopf">
        <p class="pdp-moment-kicker">Der Unterschied</p>
        <h2 class="pvg-titel">Warum Caroud?</h2>
      </div>
      <div class="pvg-tabelle" style="--zeilen:${v.zeilen.length + 1}">
        <div class="vg-spalte vg-unser">
          <div class="vg-kopf">
            <span class="vg-marke">CAROUD</span>
            <img src="${v.bild}" alt="${v.unser}" loading="lazy">
            <strong>${v.unser}</strong>
            <span class="vg-art">${v.unserArt}</span>
          </div>
          ${v.zeilen.map(([ja]) => `<div class="vg-zelle">${haken}<span>${ja}</span></div>`).join("")}
        </div>
        <div class="vg-spalte vg-andere">
          <div class="vg-kopf">
            <span class="vg-leer" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 12h14" stroke="#8d9097" stroke-width="1.6" stroke-linecap="round"/></svg></span>
            <span class="vg-marke">ANDERE</span>
            <strong>${v.andere}</strong>
            <span class="vg-art">${v.andereArt}</span>
          </div>
          ${v.zeilen.map(([, nein]) => `<div class="vg-zelle">${kreuz}<span>${nein}</span></div>`).join("")}
        </div>
      </div>
    </section>`;
}

function duftreiseBlock(p) {
  const d = typeof DUFTREISE !== "undefined" && p.linie === "spray" && !p.set ? DUFTREISE[p.scent] : null;
  const s = d && SCENTS.find((x) => x.key === p.scent);
  if (!d || !s) return "";
  const stufen = [["Kopfnote", s.pyramide.kopf], ["Herznote", s.pyramide.herz], ["Basisnote", s.pyramide.basis]];
  // In der Grafik ohne Herkunftsangaben, damit die Namen in die Stufen passen
  const ohneHerkunft = (x) => x.trim().replace(/^(Sizilianische|Kalabrische|Brasilianische|Türkische|Weißer)\s+/, "").replace(/^(Amalfi|Madagaskar|Ceylon)-/, "");
  const kurz = (t, n) => t.split(",").slice(0, n).map(ohneHerkunft).join(" · ");
  return `
    <section class="duftreise" style="--duft:${s.color};${pyrFarben(s.key)}" aria-label="Die Duftreise">
      <div class="duftreise-kopf">
        <p class="pdp-moment-kicker">Die Duftreise</p>
        <h2 class="duftreise-titel">${d.titel}</h2>
        <p class="duftreise-intro">${d.intro}</p>
      </div>
      <div class="duftreise-grid">
        <div class="duftreise-pyramide" aria-hidden="true">
          ${stufen.map(([n, t], i) => `
            <div class="dr-stufe dr-s${i}">
              <span class="dr-stufe-name">${n}</span>
              <span class="dr-stufe-noten">${kurz(t, i === 0 ? 2 : 3)}</span>
            </div>`).join("")}
        </div>
        <ol class="duftreise-phasen">
          ${d.phasen.map((ph, i) => `
            <li>
              <span class="dr-nr">${i + 1}</span>
              <div>
                <p class="dr-phase-kopf"><strong>${stufen[i][0]}</strong><span>${ph.zeit}</span></p>
                <p class="dr-phase-text">${ph.text}</p>
              </div>
            </li>`).join("")}
        </ol>
      </div>
      <div class="duftreise-profil">
        <div class="dr-balken">
          <p class="dr-label">Duftprofil</p>
          ${d.profil.map(([n, w]) => `
            <div class="dr-zeile"><span>${n}</span><span class="dr-bahn"><i style="width:${w}%"></i></span></div>`).join("")}
        </div>
        <div class="dr-fakten">
          <div><p class="dr-label">Intensität</p>
            <p class="dr-punkte">${[1, 2, 3, 4, 5].map((k) => `<i class="${k <= d.intensitaet ? "an" : ""}"></i>`).join("")}<span>${["", "Sehr dezent", "Dezent", "Ausgewogen", "Kräftig", "Sehr kräftig"][d.intensitaet]}</span></p></div>
          <div><p class="dr-label">Passt zu</p>
            <div class="pdp-moment-tags">${d.passt.map((t) => `<span class="note-chip">${t}</span>`).join("")}</div></div>
        </div>
      </div>
    </section>`;
}

function momentBlock(p) {
  const mo = p.moment;
  if (!mo) return "";
  // Bei Duftsprays steht "Passt zu" schon in der Duftreise darunter
  const hatDuftreise = typeof DUFTREISE !== "undefined" && p.linie === "spray" && !p.set && !!DUFTREISE[p.scent];
  return `
    <section class="pdp-moment" aria-label="Der Moment">
      <div class="pdp-moment-img"><img src="${mo.img}" alt="${p.label} – ${mo.titel}" loading="lazy"></div>
      <div class="pdp-moment-text">
        <p class="pdp-moment-kicker">Der Moment</p>
        <h2 class="pdp-moment-title">${mo.titel}</h2>
        <p class="pdp-moment-copy">${mo.text}</p>
        ${hatDuftreise ? "" : `<div class="pdp-moment-tags">
          <span class="pdp-moment-tags-label">Passt zu</span>
          ${mo.tags.map((t) => `<span class="note-chip">${t}</span>`).join("")}
        </div>`}
      </div>
    </section>`;
}

function recoKarten(p) {
  const recos = recoAuswahl(p);
  if (!recos.length) return "";
  return `
    <div class="pdp-reco">
      <h2 class="pdp-reco-head">Das könnte dir auch gefallen</h2>
      <div class="pdp-reco-row">
        ${recos.map((x) => {
          return `
          <button class="pdp-reco-card" type="button" data-reco="${x.id}">
            <span class="pdp-reco-art">${mediaFor(x)}</span>
            <span class="pdp-reco-name">${x.name}</span>
            <span class="pdp-reco-price">${preisHtml(x)}</span>
          </button>`;
        }).join("")}
      </div>
    </div>`;
}

function renderProduktseite(p) {
  pdpQty = 1;
  const geschwister = p.scent ? PRODUCTS.filter((x) => x.scent === p.scent && x.id !== p.id) : [];
  const fakten = p.set ? [] : FAKTEN[p.type] || [];
  const tint = p.color ? `background:linear-gradient(170deg, ${rgba(p.color, 0.18)} 0%, #f1f1ef 70%)` : "";
  // Die gezeichnete Etikett-Ansicht nur, wenn es kein echtes Foto gibt
  produktPage.innerHTML = `
    <div class="container pdp">
      <nav class="pdp-breadcrumb"><a href="#produkte" data-pdp-back>← Zurück zum Shop</a></nav>
      <div class="pdp-grid">
        ${p.photo ? `
        <div class="pdp-art has-photo">
          <div class="pdp-stage" data-stage>
            <img class="pdp-photo" src="${p.photo}" alt="${p.name}">
          </div>
          <div class="pdp-thumbs">
            <button type="button" class="pdp-thumb active" data-thumb="foto" aria-label="Produktfoto"><img src="${p.photo}" alt=""></button>
            ${p.photo2 ? `<button type="button" class="pdp-thumb" data-thumb="foto2" aria-label="Produktfoto 2"><img src="${p.photo2}" alt=""></button>` : ""}
            ${p.photo3 ? `<button type="button" class="pdp-thumb" data-thumb="foto3" aria-label="Produktfoto 3"><img src="${p.photo3}" alt=""></button>` : ""}
            ${(p.galerie || []).map((g, i) => `<button type="button" class="pdp-thumb" data-thumb="g${i}" data-src="${g.src}"${g.scent ? ` data-scent="${g.scent}"` : ""} aria-label="${g.label || "Foto"}"><img src="${g.src}" alt="" loading="lazy"></button>`).join("")}
            ${p.video ? `<button type="button" class="pdp-thumb pdp-thumb-video" data-thumb="video" aria-label="Produktvideo"><img src="${videoPoster(p)}" alt=""><span class="play-badge" aria-hidden="true"></span></button>` : ""}
          </div>
        </div>` : `<div class="pdp-art" style="${tint}">${artFor(p)}</div>`}
        <div class="pdp-info">
          <p class="modal-category">${p.category}</p>
          <h1>${p.name}</h1>
          <div class="modal-prices">${preisHtml(p)}</div>
          ${p.bfDeal ? `<p class="bf-hinweis">Black-Week-Angebot – nur bis 30. November</p>` : ""}
          <p class="pdp-tax">inkl. MwSt., zzgl. <a href="widerruf.html">Versand</a> – versandkostenfrei ab 40 €</p>
          <ul class="pdp-usps">
            <li>Versandkostenfrei ab 40 €</li>
            <li>Versand in 24 h</li>
            <li>14 Tage Widerrufsrecht</li>
            <li>Auf Lager</li>
          </ul>
          ${p.category === "Duftsprays" ? `<p class="gift-note">Inklusive Gratis-Duftanhänger</p>` : ""}
          ${p.wahl ? duftwahlHtml(p) : ""}
          ${p.type === "haenger" && !p.set ? `<p class="pdp-hinweis">Günstiger im Set: das <a href="#p/set-haenger-3">3er-Set</a> oder das <a href="#p/set-haenger-5">5er-Set</a>.</p>` : ""}
          <div class="modal-actions">
            <div class="qty-row">
              <button class="qty-btn" data-pminus>−</button>
              <span class="qty-val" id="pdpQtyVal">1</span>
              <button class="qty-btn" data-pplus>+</button>
            </div>
            <button class="btn btn-gold" id="pdpAdd">In den Warenkorb legen</button>
          </div>
          <div class="pdp-desc-block">
            <p class="pdp-desc-head">Beschreibung</p>
            <p class="modal-desc">${p.desc}</p>
            <p class="notes-label">${p.category === "Sets & Boxen" || p.set ? "Inhalt" : p.category === "Pflege" ? "Details" : "Duftnoten"}</p>
            ${p.pyramide ? "" : `<div class="notes-row">${p.notes.map((n) => `<span class="note-chip">${n}</span>`).join("")}</div>`}
            ${p.pyramide ? `
              <dl class="pyramide">
                <div><dt>Kopfnote</dt><dd>${p.pyramide.kopf}</dd></div>
                <div><dt>Herznote</dt><dd>${p.pyramide.herz}</dd></div>
                <div><dt>Basisnote</dt><dd>${p.pyramide.basis}</dd></div>
              </dl>` : ""}
            ${fakten.length ? `
              <dl class="fakten">
                ${fakten.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
              </dl>` : ""}
            ${probenListeHtml(p)}
            ${sicherheitHtml(p)}
          </div>
          ${geschwister.length ? `
            <p class="notes-label">${p.label} gibt es auch als</p>
            <div class="cross-row">
              ${geschwister.map((g) => `
                <button class="cross-card" type="button" data-pdp-cross="${g.id}">
                  <span class="cross-art">${crossMedia(g)}</span>
                  <span class="cross-name">${g.linieName}</span>
                </button>`).join("")}
            </div>` : ""}
        </div>
      </div>
      ${momentBlock(p)}
      ${duftreiseBlock(p)}
      ${vergleichBlock(p)}
      ${recoKarten(p)}
    </div>`;
  // Galerie: Foto, Foto 2, Etikett, Video umschalten
  const stage = produktPage.querySelector("[data-stage]");
  produktPage.querySelectorAll("[data-thumb]").forEach((b) => {
    b.addEventListener("click", () => {
      const alleThumbs = [...produktPage.querySelectorAll("[data-thumb]")];
      const vorher = alleThumbs.findIndex((x) => x.classList.contains("active"));
      const nachher = alleThumbs.indexOf(b);
      if (vorher === nachher) return;
      const richtung = nachher > vorher ? 1 : -1;
      alleThumbs.forEach((x) => x.classList.toggle("active", x === b));
      stage.classList.toggle("zeigt-art", b.dataset.thumb === "art");
      stage.style.cssText = b.dataset.thumb === "art" ? b.getAttribute("style") || "" : "";
      const art = b.dataset.thumb;
      const alt = [...stage.children].filter((x) => !x.classList.contains("pdp-arrow"));
      const neu = document.createElement("div");
      neu.className = "pdp-slide";
      neu.innerHTML = art === "art"
        ? artFor(p)
        : art === "video"
          // Stumm, Dauerschleife, ohne Bedienleiste – wie ein GIF, nur viel kleiner
          ? `<video class="pdp-photo" src="${p.video}" poster="${videoPoster(p)}" autoplay muted loop playsinline preload="auto" aria-label="${p.name} – Produktvideo"></video>`
          : `<img class="pdp-photo" src="${b.dataset.src || (art === "foto2" ? p.photo2 : art === "foto3" ? p.photo3 : p.photo)}" alt="${p.name}">`;
      stage.appendChild(neu);
      // Sanfter Wechsel: altes Bild gleitet leicht weg und blendet aus, neues gleitet aus der Richtung herein
      const ruhig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      alt.forEach((el) => {
        el.classList.add("pdp-alt");
        if (ruhig) { el.remove(); return; }
        el.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: `translateX(${-richtung * 6}%)` }],
          { duration: 420, easing: "ease-in-out", fill: "forwards" }).onfinish = () => el.remove();
      });
      if (!ruhig) {
        neu.animate([{ opacity: 0, transform: `translateX(${richtung * 10}%)` }, { opacity: 1, transform: "none" }],
          { duration: 480, easing: "cubic-bezier(0.22, 0.7, 0.3, 1)" });
      }
      const v = neu.querySelector("video");
      if (v) { v.muted = true; v.play().catch(() => {}); }
      stage.querySelectorAll(".pdp-arrow").forEach((x) => x.remove());
      pfeile.forEach((x) => stage.appendChild(x));
    });
  });
  const pfeile = [];
  // Wischen (Handy): nach links = nächstes Bild, nach rechts = vorheriges.
  // Pointer-Events auf der Bildbühne, dazu Pfeile als sichtbare Alternative.
  if (stage) {
    const thumbs = () => [...produktPage.querySelectorAll("[data-thumb]")];
    const blaettern = (richtung) => {
      const list = thumbs(); if (list.length < 2) return;
      const i = list.findIndex((t) => t.classList.contains("active"));
      list[(i + richtung + list.length) % list.length].click();
    };
    let sx = null, sy = null, lx = null, ly = null;
    stage.addEventListener("pointerdown", (e) => { if (e.pointerType === "mouse") return; sx = lx = e.clientX; sy = ly = e.clientY; }, { passive: true });
    stage.addEventListener("pointermove", (e) => { if (sx !== null) { lx = e.clientX; ly = e.clientY; } }, { passive: true });
    const ende = () => {
      if (sx === null) return;
      const dx = lx - sx, dy = ly - sy; sx = sy = lx = ly = null;
      if (Math.abs(dx) >= 30 && Math.abs(dx) > Math.abs(dy)) blaettern(dx < 0 ? 1 : -1);
    };
    stage.addEventListener("pointerup", ende, { passive: true });
    stage.addEventListener("pointercancel", ende, { passive: true });
    if (thumbs().length > 1) {
      const mk = (cls, r, label) => {
        const b = document.createElement("button"); b.type = "button"; b.className = "pdp-arrow " + cls;
        b.setAttribute("aria-label", label); b.innerHTML = r < 0 ? "&#8249;" : "&#8250;";
        b.addEventListener("click", (e) => { e.stopPropagation(); blaettern(r); }); return b;
      };
      pfeile.push(mk("pdp-arrow-l", -1, "Vorheriges Bild"), mk("pdp-arrow-r", 1, "Nächstes Bild"));
      pfeile.forEach((x) => stage.appendChild(x));
    }
  }
  produktPage.querySelectorAll("[data-reco]").forEach((b) => {
    b.addEventListener("click", () => { location.hash = "p/" + b.dataset.reco; });
  });
  produktPage.querySelectorAll("[data-pdp-cross]").forEach((b) => {
    b.addEventListener("click", () => { location.hash = "p/" + b.dataset.pdpCross; });
  });
  produktPage.querySelector("[data-pminus]").addEventListener("click", () => {
    pdpQty = Math.max(1, pdpQty - 1);
    document.getElementById("pdpQtyVal").textContent = pdpQty;
  });
  produktPage.querySelector("[data-pplus]").addEventListener("click", () => {
    pdpQty++;
    document.getElementById("pdpQtyVal").textContent = pdpQty;
  });
  // "Sicherheit & Inhaltsstoffe" weich auf- und zuklappen statt springen
  produktPage.querySelectorAll(".pdp-sicherheit").forEach((d) => {
    const sum = d.querySelector("summary");
    const body = d.querySelector(".sich-body");
    sum.addEventListener("click", (e) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      e.preventDefault();
      if (d.dataset.laeuft) return;
      d.dataset.laeuft = "1";
      if (!d.open) {
        d.open = true;
        const h = body.scrollHeight;
        body.animate([{ height: "0px", opacity: 0 }, { height: h + "px", opacity: 1 }],
          { duration: 380, easing: "cubic-bezier(0.22, 0.7, 0.3, 1)" }).onfinish = () => { delete d.dataset.laeuft; };
      } else {
        const h = body.scrollHeight;
        body.animate([{ height: h + "px", opacity: 1 }, { height: "0px", opacity: 0 }],
          { duration: 300, easing: "ease-in" }).onfinish = () => { d.open = false; delete d.dataset.laeuft; };
      }
    });
  });
  produktPage.querySelectorAll("[data-proben-duft]").forEach((b) => b.addEventListener("click", () => {
    const thumb = produktPage.querySelector(`[data-thumb][data-scent="${b.dataset.probenDuft}"]`);
    if (thumb) { thumb.click(); produktPage.querySelector("[data-stage]")?.scrollIntoView({ behavior: "smooth", block: "center" }); }
  }));
  // Duftwahl: je Gruppe Düfte antippen (bis zur Anzahl), bei "doppelt" auch mehrmals denselben
  const gruppen = wahlGruppen(p);
  const auswahl = gruppen.map(() => []);
  const addBtn = produktPage.querySelector("#pdpAdd");
  const boxen = [...produktPage.querySelectorAll("[data-wahl]")];
  const fehlt = () => gruppen.reduce((n, g, gi) => n + (g.anzahl - auswahl[gi].length), 0);
  const nameVon = (k) => SCENTS.find((s) => s.key === k).name;
  const wahlUpdate = () => {
    boxen.forEach((box, gi) => {
      const g = gruppen[gi], wahl = auswahl[gi];
      box.querySelectorAll("[data-wahl-duft]").forEach((b) => {
        const k = b.dataset.wahlDuft;
        const anzahl = wahl.filter((x) => x === k).length;
        b.classList.toggle("aktiv", anzahl > 0);
        b.setAttribute("aria-pressed", anzahl > 0 ? "true" : "false");
        // Nummer der Reihenfolge; bei mehrfach gewähltem Duft "2×"
        b.querySelector(".duftwahl-nr").textContent = anzahl > 1 ? anzahl + "×" : anzahl === 1 ? (g.doppelt ? "✓" : wahl.indexOf(k) + 1) : "";
      });
      box.querySelector("[data-wahl-count]").textContent = `${wahl.length} von ${g.anzahl} gewählt`;
      box.classList.toggle("komplett", wahl.length === g.anzahl);
      const zaehl = {};
      wahl.forEach((k) => { zaehl[k] = (zaehl[k] || 0) + 1; });
      box.querySelector("[data-wahl-liste]").textContent = wahl.length
        ? Object.entries(zaehl).map(([k, n]) => (n > 1 ? n + "× " : "") + nameVon(k)).join(" · ")
        : g.doppelt && g.anzahl > 1 ? "Tippe auf deine Wunsch-Düfte – auch mehrmals denselben." : "Tippe auf deinen Wunsch-Duft.";
      const leeren = box.querySelector("[data-wahl-leeren]");
      if (leeren) leeren.hidden = !wahl.length;
    });
    if (!gruppen.length) return;
    const n = fehlt();
    addBtn.classList.toggle("wartet", n > 0);
    addBtn.textContent = n > 0 ? `Noch ${n} ${n === 1 ? "Duft" : "Düfte"} wählen` : "In den Warenkorb legen";
  };
  boxen.forEach((box, gi) => {
    const g = gruppen[gi], wahl = auswahl[gi];
    box.querySelectorAll("[data-wahl-duft]").forEach((b) => {
      b.addEventListener("click", () => {
        const k = b.dataset.wahlDuft;
        const drin = wahl.includes(k);
        if (g.anzahl === 1) { wahl.splice(0, 1); if (!drin) wahl.push(k); }
        else if (g.doppelt) {
          if (wahl.length < g.anzahl) wahl.push(k);
          else if (drin) wahl.splice(wahl.lastIndexOf(k), 1);
          else { showToast(`Schon ${g.anzahl} gewählt – tippe einen gewählten Duft an, um ihn zu entfernen.`); return; }
        } else {
          if (drin) wahl.splice(wahl.indexOf(k), 1);
          else if (wahl.length < g.anzahl) wahl.push(k);
          else { showToast(`Du hast schon ${g.anzahl} Düfte gewählt – tippe einen an, um ihn zu tauschen.`); return; }
        }
        // Die gewählte Probe gross zeigen (Probiersets)
        const thumb = produktPage.querySelector(`[data-thumb][data-scent="${k}"]`);
        if (thumb && !drin) thumb.click();
        wahlUpdate();
      });
    });
    const leeren = box.querySelector("[data-wahl-leeren]");
    if (leeren) leeren.addEventListener("click", () => { wahl.length = 0; wahlUpdate(); });
  });
  wahlUpdate();
  addBtn.addEventListener("click", () => {
    const n = fehlt();
    if (gruppen.length && n > 0) {
      showToast(`Bitte wähle noch ${n} ${n === 1 ? "Duft" : "Düfte"}.`);
      const offen = boxen.find((b, gi) => auswahl[gi].length < gruppen[gi].anzahl);
      offen?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    // Eine Gruppe (Probierset): nur die Düfte; mehrere Linien: "linie:duft"
    const wahl = !gruppen.length ? null
      : Array.isArray(p.wahl) ? gruppen.flatMap((g, gi) => auswahl[gi].map((k) => g.linie + ":" + k))
      : auswahl[0].slice();
    addToCart(p.id, pdpQty, false, wahl);
    openCart();
  });
}

// Bereich "Sicherheit & Inhaltsstoffe" – Kennzeichnung nach CLP, Allergene und Sicherheitsdatenblatt
const GHS_SYMBOL = {
  GHS02: `<path fill="#000" d="M0 -30 C 8 -18, 20 -12, 20 4 C 20 18, 11 28, 0 30 C -11 28, -20 18, -20 4 C -20 -6, -14 -12, -10 -18 C -10 -8, -4 -6, -2 -12 C 0 -18, -4 -24, 0 -30 Z"/>`,
  GHS07: `<path fill="#000" d="M-7 -30 H7 L4 12 H-4 Z"/><circle fill="#000" cx="0" cy="24" r="7"/>`,
};
const GHS_NAME = { GHS02: "Flamme (entzündbar)", GHS07: "Ausrufezeichen (reizend, sensibilisierend)" };
function ghsIcon(code) {
  return `<svg class="ghs" viewBox="-60 -60 120 120" role="img" aria-label="${GHS_NAME[code] || code}">
    <rect x="-40" y="-40" width="80" height="80" transform="rotate(45)" fill="#fff" stroke="#e30613" stroke-width="8"/>
    <g transform="scale(0.95)">${GHS_SYMBOL[code] || ""}</g></svg>`;
}
function sicherheitHtml(p) {
  const art = SICHERHEIT_LINIE[p.linie];
  if (!art || !p.scent) return "";
  const s = SICHERHEIT[art];
  const allergene = ALLERGENE[p.scent];
  const sdb = SDB[p.scent] && SDB[p.scent][art];
  return `
    <details class="pdp-sicherheit">
      <summary>Sicherheit &amp; Inhaltsstoffe</summary>
      <div class="sich-body">
        <p class="sich-label">Inhaltsstoffe</p>
        <p>${s.inhalt}</p>
        <p class="sich-label">Enthält (Duftstoff-Allergene)</p>
        <p>${allergene || "Wird nach Erhalt des Sicherheitsdatenblatts ergänzt."}</p>
        <p class="sich-label">Kennzeichnung</p>
        <div class="sich-ghs">${s.piktogramme.map(ghsIcon).join("")}<strong>${s.signal}</strong></div>
        <ul class="sich-liste">${s.h.map((x) => `<li>${x}</li>`).join("")}</ul>
        <ul class="sich-liste sich-p">${s.p.map((x) => `<li>${x}</li>`).join("")}</ul>
        <p class="sich-label">Sicherheitsdatenblatt</p>
        <p>${sdb ? `<a href="${sdb}" target="_blank" rel="noopener">Sicherheitsdatenblatt (PDF) herunterladen</a>` : "Folgt in Kürze. Auf Anfrage senden wir es dir gern per E-Mail – <a href=\"kontakt.html\">Kontakt</a>."}</p>
      </div>
    </details>`;
}

// Duftauswahl: ein Set kann mehrere Gruppen haben (z. B. 1 Spray + 2 Anhänger).
// p.wahl ist entweder eine Gruppe { anzahl, linie } oder eine Liste davon.
function wahlGruppen(p) {
  if (!p.wahl) return [];
  return Array.isArray(p.wahl) ? p.wahl : [p.wahl];
}
const LINIE_KURZ = { spray: "Spray", haenger: "Anhänger", glas: "Glasanhänger", probe: "Probe" };
// Text der Auswahl fuer den Warenkorb: "Spray: Fast Cherry · Anhänger: Fast Cherry, Erba Tuned"
function wahlText(wahl) {
  const name = (k) => SCENTS.find((s) => s.key === k)?.name || k;
  if (!wahl.some((x) => x.includes(":"))) return wahl.map(name).join(" · ");
  const gruppen = {};
  wahl.forEach((x) => { const [l, k] = x.split(":"); gruppen[l] = gruppen[l] || {}; gruppen[l][k] = (gruppen[l][k] || 0) + 1; });
  return Object.entries(gruppen).map(([l, d]) =>
    `${LINIE_KURZ[l] || l}: ${Object.entries(d).map(([k, n]) => (n > 1 ? n + "× " : "") + name(k)).join(", ")}`).join(" · ");
}

// Leiste zur Duftauswahl bei Sets mit frei wählbaren Düften
function duftwahlHtml(p) {
  const bild = (g, s) => g.linie === "probe" ? "img/fotos/probe-" + s.key + ".webp?v=" + ASSET_V
    : byId(g.linie + "-" + s.key)?.photo || "";
  return wahlGruppen(p).map((g, gi) => `
    <div class="duftwahl" data-wahl data-gruppe="${gi}">
      <div class="duftwahl-kopf">
        <p class="duftwahl-titel">${g.titel || (g.anzahl === 1 ? "Dein Duft" : `Deine ${g.anzahl} Düfte`)}</p>
        <span class="duftwahl-count" data-wahl-count></span>
      </div>
      <div class="duftwahl-row">
        ${SCENTS.map((s) => `
          <button type="button" class="duftwahl-item" data-wahl-duft="${s.key}" aria-pressed="false">
            <span class="duftwahl-bild"><img src="${bild(g, s)}" alt="" loading="lazy"><span class="duftwahl-nr"></span></span>
            <span class="duftwahl-name">${s.name}</span>
          </button>`).join("")}
      </div>
      <div class="duftwahl-fuss">
        <p class="duftwahl-liste" data-wahl-liste></p>
        ${g.doppelt && g.anzahl > 1 ? `<button type="button" class="duftwahl-leeren" data-wahl-leeren hidden>Auswahl leeren</button>` : ""}
      </div>
    </div>`).join("");
}

const shopSektionen = Array.from(document.querySelectorAll("body > section")).filter((el) => el.id !== "produktPage");

function routeProduktseite() {
  const m = location.hash.match(/^#p\/(.+)$/);
  const p = m ? byId(decodeURIComponent(m[1])) : null;
  if (p) {
    renderProduktseite(p);
    shopSektionen.forEach((el) => { el.classList.toggle("shop-versteckt", el.id !== "ueber"); });
    produktPage.hidden = false;
    document.body.classList.add("pdp-aktiv");
    document.title = p.name + " – Caroud";
    window.scrollTo(0, 0);
  } else {
    if (produktPage.hidden) return;
    produktPage.hidden = true;
    document.body.classList.remove("pdp-aktiv");
    produktPage.innerHTML = "";
    shopSektionen.forEach((el) => { el.classList.remove("shop-versteckt"); });
    document.title = "Caroud – Premium Autodüfte, Duftsprays, Glasanhänger & Duftanhänger";
    if (m) location.hash = "";
  }
}

window.addEventListener("hashchange", routeProduktseite);
routeProduktseite();

// ---------- Handy: Scroll-Reihen und Kopfhoehe ----------
// Die klebende Kopfzeile (Ankuendigung + Header) ist je nach Geraet
// unterschiedlich hoch - Ankersprunge muessen sich danach richten.
function kopfhoeheSetzen() {
  const sticky = document.querySelector(".top-sticky");
  if (!sticky) return;
  const h = Math.round(sticky.getBoundingClientRect().height);
  document.documentElement.style.scrollPaddingTop = h + 12 + "px";
}

// Verlauf an den Raendern, solange in die Richtung noch etwas zu scrollen ist
function randVerlauf(el) {
  if (!el) return;
  const rest = el.scrollWidth - el.clientWidth;
  if (rest <= 2) { el.classList.remove("fade-l", "fade-r", "fade-lr"); return; }
  const links = el.scrollLeft > 2;
  const rechts = el.scrollLeft < rest - 2;
  el.classList.remove("fade-l", "fade-r", "fade-lr");
  if (links && rechts) el.classList.add("fade-lr");
  else if (rechts) el.classList.add("fade-r");
  else if (links) el.classList.add("fade-l");
}

function scrollReihenPruefen() {
  document.querySelectorAll(".filter-chips, .finder-chips, .review-grid, .upsell-row").forEach(randVerlauf);
  document.querySelectorAll("[data-wisch]").forEach(wischPfeileSetzen);
}

// Dezente Pfeile links/rechts an wischbaren Reihen: zeigen nur, wenn es in die
// Richtung noch etwas zu sehen gibt, und schieben beim Antippen eine Karte weiter.
function wischPfeileSetzen(el) {
  const wrap = el.parentElement;
  if (!wrap || !wrap.classList.contains("wisch-wrap")) return;
  const rest = el.scrollWidth - el.clientWidth;
  const aktiv = rest > 4;
  wrap.querySelector(".wisch-pfeil.l").classList.toggle("sichtbar", aktiv && el.scrollLeft > 4);
  wrap.querySelector(".wisch-pfeil.r").classList.toggle("sichtbar", aktiv && el.scrollLeft < rest - 4);
}
function wischPfeile(el, ton) {
  if (!el || el.dataset.wisch) return;
  el.dataset.wisch = "1";
  const wrap = document.createElement("div");
  wrap.className = "wisch-wrap wisch-" + ton;
  el.parentNode.insertBefore(wrap, el);
  wrap.appendChild(el);
  const pfeil = (seite, d) => `<button type="button" class="wisch-pfeil ${seite}" aria-label="${seite === "l" ? "Zurück" : "Weiter"}" tabindex="-1">
    <svg viewBox="0 0 24 24" width="16" height="16"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>`;
  wrap.insertAdjacentHTML("beforeend", pfeil("l", "M15 5l-7 7 7 7") + pfeil("r", "M9 5l7 7-7 7"));
  const schritt = () => {
    const karte = el.firstElementChild;
    return karte ? karte.getBoundingClientRect().width + 10 : el.clientWidth * 0.8;
  };
  wrap.querySelector(".wisch-pfeil.l").addEventListener("click", () => el.scrollBy({ left: -schritt(), behavior: "smooth" }));
  wrap.querySelector(".wisch-pfeil.r").addEventListener("click", () => el.scrollBy({ left: schritt(), behavior: "smooth" }));
  el.addEventListener("scroll", () => wischPfeileSetzen(el), { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(() => wischPfeileSetzen(el)).observe(el);
  wischPfeileSetzen(el);
}
wischPfeile(document.getElementById("scentGrid"), "dunkel");

// Duft-Reihe am Handy: immer ein Duft in der Mitte im Fokus.
// Pfeile und Antippen einer Nachbarkarte holen den naechsten Duft genau in die Mitte.
(function duftFokus() {
  const el = document.getElementById("scentGrid");
  if (!el) return;
  const aktiv = () => window.matchMedia("(max-width: 640px)").matches;
  const karten = () => [...el.querySelectorAll(".scent-card")];
  const mitteVon = (k) => k.offsetLeft + k.offsetWidth / 2;
  const fokusIndex = () => {
    const m = el.scrollLeft + el.clientWidth / 2;
    let best = 0, dist = Infinity;
    karten().forEach((k, i) => { const d = Math.abs(mitteVon(k) - m); if (d < dist) { dist = d; best = i; } });
    return best;
  };
  const zentriere = (i) => {
    const k = karten()[i];
    if (k) el.scrollTo({ left: mitteVon(k) - el.clientWidth / 2, behavior: "smooth" });
  };
  let raf = 0;
  const markiere = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const f = aktiv() ? fokusIndex() : -1;
      karten().forEach((k, i) => k.classList.toggle("im-fokus", i === f));
    });
  };
  el.addEventListener("scroll", markiere, { passive: true });
  window.addEventListener("resize", markiere);
  // Pfeile: statt fester Schrittweite genau zum Nachbar-Duft springen
  const wrap = el.parentElement;
  if (wrap && wrap.classList.contains("wisch-wrap")) {
    ["l", "r"].forEach((seite) => {
      const alt = wrap.querySelector(".wisch-pfeil." + seite);
      const neu = alt.cloneNode(true);
      alt.replaceWith(neu);
      neu.addEventListener("click", () => {
        if (!aktiv()) { el.scrollBy({ left: (seite === "l" ? -1 : 1) * el.clientWidth * 0.8, behavior: "smooth" }); return; }
        zentriere(Math.max(0, Math.min(karten().length - 1, fokusIndex() + (seite === "l" ? -1 : 1))));
      });
    });
  }
  // Antippen einer Nachbarkarte: erst in die Mitte holen, erst die Fokus-Karte oeffnet das Produkt
  el.addEventListener("click", (e) => {
    const k = e.target.closest(".scent-card");
    if (!k || !aktiv() || k.classList.contains("im-fokus")) return;
    e.stopPropagation(); e.preventDefault();
    zentriere(karten().indexOf(k));
  }, true);
  markiere();
  window.addEventListener("load", markiere);
})();
document.querySelectorAll(".review-grid").forEach((el) => wischPfeile(el, "hell"));
wischPfeile(document.getElementById("filterChips"), "hell");

document.querySelectorAll(".filter-chips, .finder-chips, .review-grid, .upsell-row").forEach((el) => {
  el.addEventListener("scroll", () => randVerlauf(el), { passive: true });
});
window.addEventListener("resize", () => { kopfhoeheSetzen(); scrollReihenPruefen(); });
window.addEventListener("load", () => { kopfhoeheSetzen(); scrollReihenPruefen(); });
kopfhoeheSetzen();
scrollReihenPruefen();

// ---------- Ankündigungsleiste als Laufband ----------
// Die Meldungen laufen langsam von rechts nach links durch. Der Inhalt steht
// zweimal hintereinander, damit die Schleife ohne Sprung weiterläuft.
(function laufband() {
  const bar = document.querySelector(".announcement-bar");
  const msg = bar && bar.querySelector(".announce-msg");
  if (!bar || !msg) return;
  const standard = ["Versandkostenfrei ab 40&nbsp;€", "Versand in 24&nbsp;h", "Abgefüllt in Deutschland", "Gratis-Duftanhänger zu jedem Spray", "14 Tage Rückgabe"];
  const eintraege = document.body.classList.contains("bf-aktiv") ? [msg.innerHTML, ...standard] : standard;
  const reihe = eintraege.map((t) => `<span class="lb-item">${t}</span><span class="lb-trenner" aria-hidden="true">·</span>`).join("");
  bar.innerHTML = `<span class="sr-only">${eintraege.join(" · ")}</span>
    <div class="lb-spur" aria-hidden="true"><div class="lb-inhalt">${reihe}</div><div class="lb-inhalt">${reihe}</div></div>`;
  bar.classList.add("ist-laufband");
})();
