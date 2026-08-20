// ============================================================
// Caroud – Rendering & Interaktion
// ============================================================

// ---------- SVG-Platzhalter ----------

// Liegt ein echtes Etikett vor (img), wird es auf die Platzhalter-Form gelegt.
// Ohne img bleibt die gezeichnete Ersatzgrafik stehen.
function sprayBottleSVG(color, label, img) {
  const etikett = img
    ? `<image href="${img}" x="42" y="88" width="36" height="46" preserveAspectRatio="xMidYMid slice"/>`
    : `<rect x="42" y="88" width="36" height="46" rx="3" fill="#fff" stroke="#ddd"/>
       <text x="60" y="103" text-anchor="middle" font-size="9" font-weight="600" font-family="Georgia, serif" letter-spacing="1" fill="#111">CAROUD</text>
       <rect x="48" y="109" width="24" height="4" rx="2" fill="${color}" stroke="rgba(0,0,0,0.2)"/>
       <text x="60" y="124" text-anchor="middle" font-size="7" font-family="Georgia, serif" fill="#555">${label}</text>
       <text x="60" y="131" text-anchor="middle" font-size="5" font-family="Georgia, serif" fill="#999">- est. 2026 -</text>`;
  return `
  <svg class="prod-art" viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="52" y="4" width="16" height="14" rx="2" fill="#222"/>
    <rect x="44" y="18" width="32" height="16" rx="3" fill="#1b1b1b"/>
    <path d="M38 40 Q38 34 46 34 H74 Q82 34 82 40 L86 60 V186 Q86 194 78 194 H42 Q34 194 34 186 V60 Z" fill="${color}" stroke="rgba(0,0,0,0.15)"/>
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
    <text x="70" y="109" text-anchor="middle" font-size="10" font-weight="600" font-family="Georgia, serif" letter-spacing="1" fill="#111">CAROUD</text>
    <rect x="56" y="116" width="28" height="4" rx="2" fill="${color}" stroke="rgba(0,0,0,0.2)"/>
    <text x="70" y="131" text-anchor="middle" font-size="8" font-family="Georgia, serif" fill="#555">${label}</text>
    <text x="70" y="139" text-anchor="middle" font-size="5.5" font-family="Georgia, serif" fill="#999">- est. 2026 -</text>
  </svg>`;
}

function bundleSVG(color, label) {
  // Spray + zwei Anhänger, zusammengesetzt aus den echten Etiketten –
  // Starter (schwarz) und Signature (rot) unterscheiden sich in der Flaschenfarbe
  const sprayKey = color === "#a8323e" ? "redline" : "midnight";
  return `
  <svg class="prod-art" viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(14 22) scale(0.76)">
      <rect x="52" y="4" width="16" height="14" rx="2" fill="#222"/>
      <rect x="44" y="18" width="32" height="16" rx="3" fill="#1b1b1b"/>
      <path d="M38 40 Q38 34 46 34 H74 Q82 34 82 40 L86 60 V186 Q86 194 78 194 H42 Q34 194 34 186 V60 Z" fill="${color}" stroke="rgba(0,0,0,0.15)"/>
      <image href="img/produkte/spray-${sprayKey}.webp?v=${ASSET_V}" x="42" y="88" width="36" height="46" preserveAspectRatio="xMidYMid slice"/>
    </g>
    <g transform="translate(88 58)">
      <path d="M31 2 Q42 12 31 22 Q20 12 31 2" fill="none" stroke="#333" stroke-width="1.6"/>
      <image href="img/produkte/haenger-carbon.webp?v=${ASSET_V}" x="4" y="20" width="54" height="99" preserveAspectRatio="xMidYMid meet"/>
    </g>
    <g transform="translate(122 84)">
      <path d="M26 2 Q35 10 26 18 Q17 10 26 2" fill="none" stroke="#333" stroke-width="1.4"/>
      <image href="img/produkte/haenger-sunroof.webp?v=${ASSET_V}" x="3" y="16" width="46" height="84" preserveAspectRatio="xMidYMid meet"/>
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
    <text x="90" y="120" text-anchor="middle" font-size="7" font-weight="600" font-family="Georgia, serif" letter-spacing="0.8" fill="#111">CAROUD</text>
    <text x="90" y="186" text-anchor="middle" font-size="10" font-weight="600" font-family="Georgia, serif" letter-spacing="2" fill="#555">${label.toUpperCase()}</text>
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
    <text x="90" y="115" text-anchor="middle" font-size="7" font-weight="600" font-family="Georgia, serif" letter-spacing="0.8" fill="#111">CAROUD</text>
    <g stroke="#9ec6d6" stroke-width="2" stroke-linecap="round" opacity="0.7">
      <line x1="50" y1="156" x2="46" y2="170"/><line x1="90" y1="158" x2="90" y2="172"/><line x1="130" y1="156" x2="134" y2="170"/>
    </g>
    <text x="90" y="192" text-anchor="middle" font-size="10" font-weight="600" font-family="Georgia, serif" letter-spacing="2" fill="#555">${label.toUpperCase()}</text>
  </svg>`;
}

function baumSVG(color, label) {
  return `
  <svg class="prod-art" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
    <path d="M70 6 Q84 20 70 34 Q56 20 70 6" fill="none" stroke="#333" stroke-width="2.5"/>
    <path d="M70 30 L104 88 H88 L112 138 H92 L114 182 H26 L48 138 H28 L52 88 H36 Z" fill="${color}" stroke="rgba(0,0,0,0.18)"/>
    <rect x="62" y="182" width="16" height="12" rx="2" fill="#5b4630"/>
    <rect x="42" y="118" width="56" height="28" rx="3" fill="#fff" stroke="#ddd"/>
    <text x="70" y="132" text-anchor="middle" font-size="9" font-weight="600" font-family="Georgia, serif" letter-spacing="1" fill="#111">CAROUD</text>
    <text x="70" y="141" text-anchor="middle" font-size="6.5" font-family="Georgia, serif" fill="#555">${label}</text>
  </svg>`;
}

function glasSVG(color, label, img) {
  // 8-ml-Glasflakon fuer den Rueckspiegel: Kordel, Holzverschluss, Flakon mit Etikett.
  const etikett = img
    ? `<image href="${img}" x="48" y="64" width="44" height="72" preserveAspectRatio="xMidYMid meet"/>`
    : `<rect x="48" y="64" width="44" height="72" rx="2" fill="${color}" stroke="rgba(0,0,0,0.2)"/>
       <text x="70" y="92" text-anchor="middle" font-size="9" font-weight="600" font-family="Georgia, serif" letter-spacing="1" fill="#fff">CAROUD</text>
       <rect x="63" y="98" width="14" height="3" rx="1.5" fill="#b9a06a"/>
       <text x="70" y="114" text-anchor="middle" font-size="7" font-family="Georgia, serif" fill="#fff">${label}</text>
       <text x="70" y="128" text-anchor="middle" font-size="5.5" font-family="Georgia, serif" fill="rgba(255,255,255,0.7)">8 ML</text>`;
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
  // Drei 15-ml-Mini-Sprays nebeneinander – die Probier-Groesse
  const mini = (x, tint) => `
    <g transform="translate(${x} 0)">
      <rect x="8" y="52" width="10" height="8" rx="2" fill="#1a1a1a"/>
      <rect x="10" y="44" width="6" height="8" rx="1" fill="#2a2a2a"/>
      <rect x="0" y="60" width="26" height="86" rx="5" fill="${tint}" stroke="rgba(0,0,0,0.25)"/>
      <rect x="3" y="78" width="20" height="46" rx="2" fill="#111"/>
      <text x="13" y="97" text-anchor="middle" font-size="5.5" font-weight="600" font-family="Georgia, serif" letter-spacing="0.6" fill="#fff">CAROUD</text>
      <rect x="9" y="101" width="8" height="2" rx="1" fill="#b9a06a"/>
      <text x="13" y="112" text-anchor="middle" font-size="4.6" font-family="Georgia, serif" fill="#b9a06a">15 ML</text>
    </g>`;
  return `
  <svg class="prod-art" viewBox="0 0 140 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(18 18)">
      ${anzahl === 1 ? `<g transform="translate(39 0)">${mini(0, "#3a3a3a")}</g>` : `${mini(0, "#3a3a3a")}${mini(39, "#555")}${mini(78, "#3a3a3a")}`}
    </g>
    <text x="70" y="188" text-anchor="middle" font-size="8" font-family="Georgia, serif" letter-spacing="1.5" fill="#8a8a8a">${label.toUpperCase()}</text>
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
    <text x="70" y="118" text-anchor="middle" font-size="10" font-weight="600" font-family="Georgia, serif" letter-spacing="2" fill="#f3ede0">CAROUD</text>
    <text x="70" y="132" text-anchor="middle" font-size="7" font-family="Georgia, serif" letter-spacing="1.5" fill="#b9a06a">MYSTERY BOX</text>
    <text x="70" y="188" text-anchor="middle" font-size="8" font-family="Georgia, serif" letter-spacing="1.5" fill="#8a8a8a">WARENWERT 50 €+</text>
  </svg>`;
}

function artFor(p) {
  if (p.type === "spray") return sprayBottleSVG(p.color, p.label, p.img);
  if (p.type === "baum") return baumSVG(p.color, p.label);
  if (p.type === "haenger") return haengerSVG(p.color, p.label, p.img);
  if (p.type === "glas") return glasSVG(p.color, p.label, p.img);
  if (p.type === "bundle") return bundleSVG(p.color, p.label);
  if (p.type === "probier") return probierSVG(p.color, p.label, p.id === "probe-15" ? 1 : 3);
  if (p.type === "mystery") return mysterySVG(p.color, p.label);
  if (p.type === "abzieher") return abzieherSVG(p.color, p.label);
  return tuchSVG(p.color, p.label);
}

function euro(v) {
  return "€" + v.toFixed(2).replace(".", ",");
}

function byId(id) {
  return PRODUCTS.find((p) => p.id === id);
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
    `<div class="bottle-wrap">${artFor(byId("spray-midnight"))}</div>` +
    `<div class="mist-layer"></div>` +
    `<button class="spray-hit" type="button" aria-label="Sprühstoß auslösen" title="Draufdrücken"></button>`;

  const mistLayer = heroArt.querySelector(".mist-layer");
  const sprayHit = heroArt.querySelector(".spray-hit");
  let fuehrtRunter = null;
  let scrollBeimKlick = 0;

  // Wenn der Nebel verflogen ist, den Besucher zu den Duftsprays mitnehmen.
  // Nur abbrechen, wenn er in der Zwischenzeit selbst gescrollt hat.
  function runterZuDenSprays() {
    if (Math.abs(window.scrollY - scrollBeimKlick) > 60) return;
    zuDenProdukten("Duftsprays");
  }

  // Sprühstoß: Nebeltropfen fliegen gestreut nach oben und verwehen
  function spruehen() {
    heroArt.classList.add("spraying");
    heroArt.classList.remove("hint");
    setTimeout(() => heroArt.classList.remove("spraying"), 480);
    // Bei mehrfachem Drücken zählt erst der letzte Stoß
    scrollBeimKlick = window.scrollY;
    clearTimeout(fuehrtRunter);
    fuehrtRunter = setTimeout(runterZuDenSprays, 1150);

    // Breite Streuung bei Verzögerung und Weite – sonst fliegt ein geschlossener
    // Klumpen davon statt einer Wolke, die am Kopf hängt und sich auflöst
    for (let i = 0; i < 26; i++) {
      const dot = document.createElement("span");
      dot.className = "mist-dot";
      const winkel = (-90 + (Math.random() * 78 - 39)) * (Math.PI / 180);
      const weite = 28 + Math.random() * 145;
      dot.style.setProperty("--dx", Math.cos(winkel) * weite + "px");
      dot.style.setProperty("--dy", Math.sin(winkel) * weite + "px");
      dot.style.setProperty("--s", (1.8 + Math.random() * 2.8).toFixed(2));
      dot.style.animationDelay = Math.random() * 260 + "ms";
      dot.style.animationDuration = 700 + Math.random() * 620 + "ms";
      mistLayer.appendChild(dot);
      setTimeout(() => dot.remove(), 1700);
    }
  }

  sprayHit.addEventListener("click", spruehen);

  // Kleiner Hinweis, dass der Kopf anklickbar ist – verschwindet nach dem ersten Mal
  heroArt.classList.add("hint");
  setTimeout(() => heroArt.classList.remove("hint"), 12000);
}

// ---------- Die sieben Düfte ----------

const scentGrid = document.getElementById("scentGrid");
if (scentGrid) {
  SCENTS.forEach((s) => {
    const card = document.createElement("button");
    card.className = "scent-card";
    card.type = "button";
    // Grundton in Weiß darunter, sonst verschwinden dunkle Düfte wie Midnight
    // und Carbon auf dem schwarzen Band
    card.style.background =
      `linear-gradient(165deg, ${rgba(s.color, 0.5)} 0%, rgba(255,255,255,0.03) 78%),` +
      `linear-gradient(rgba(255,255,255,0.075), rgba(255,255,255,0.075))`;
    // Die Sprühflasche mit Etikett – nicht das nackte Etikett, das wäre ein Rechteck
    card.innerHTML = `
      <span class="scent-swatch">${artFor(byId("spray-" + s.key))}</span>
      <span class="scent-name">${s.name}</span>
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

function setFilter(f) {
  activeFilter = f;
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
    const saving = p.priceOld ? p.priceOld - p.price : 0;
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-media" style="background:linear-gradient(170deg, ${rgba(p.color, 0.13)} 0%, #ffffff 62%)">
        ${p.priceOld ? `<span class="sale-badge">Sparen ${euro(saving)}</span>` : ""}
        ${artFor(p)}
        <button class="quick-add">+ In den Warenkorb</button>
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-prices">
        ${p.priceOld ? `<span class="price-old">${euro(p.priceOld)}</span>` : ""}
        <span class="price-now">${euro(p.price)}</span>
      </div>`;
    card.querySelector(".quick-add").addEventListener("click", (e) => {
      e.stopPropagation();
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
// Der Versand ist bei jeder Bestellung schon bezahlt – deshalb koennen
// Zusatzartikel im Warenkorb guenstiger angeboten werden als im Katalog.
// Gilt nur, solange mindestens ein regulaerer Artikel im Korb liegt.
const UPSELL = [
  { id: "haenger-midnight", price: 2.49, name: "Duftanhänger", scentChoice: "haenger" },
  { id: "probe-15",         price: 3.90, name: "Duftprobe 15 ml" },
  { id: "pflege-innenraum", price: 4.90, name: "Innenraum-Tuch" },
  { id: "glas-midnight",    price: 9.90, name: "Glasanhänger", scentChoice: "glas" },
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

function addToCart(id, qty, up) {
  up = !!up;
  const entry = cart.find((i) => i.id === id && !!i.up === up);
  if (entry) entry.qty += qty;
  else cart.push({ id, qty, up });
  normalizeCart();
  saveCart();
  renderCart();
  showToast(`<span class="gold">✦</span> ${byId(id).name} hinzugefügt`);
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
    const scents = u.scentChoice
      ? `<select class="upsell-scent" aria-label="Duft wählen">
          ${SCENTS.map((s) => `<option value="${u.scentChoice}-${s.key}">${s.name}</option>`).join("")}
         </select>`
      : "";
    card.innerHTML = `
      <div class="upsell-art">${artFor(base)}</div>
      <div class="upsell-name">${u.name}</div>
      <div class="upsell-prices">
        ${regular && regular > u.price ? `<span class="price-old">${euro(regular)}</span>` : ""}
        <span class="price-now">${euro(u.price)}</span>
      </div>
      ${scents}
      <button class="upsell-add" type="button">+ Dazu</button>`;
    card.querySelector(".upsell-add").addEventListener("click", () => {
      const sel = card.querySelector(".upsell-scent");
      addToCart(sel ? sel.value : u.id, 1, true);
    });
    row.appendChild(card);
  });
  if (!row.children.length) box.hidden = true;
}

function renderCart() {
  const qty = cartTotalQty();
  cartCountEl.textContent = qty;
  cartCountEl.hidden = qty === 0;

  const subtotal = cartSubtotal();
  cartSubtotalEl.textContent = euro(subtotal);

  shippingTextEl.innerHTML = `<strong>✦ Versandkostenfrei</strong> – auf alle Bestellungen`;
  shippingFillEl.style.width = "100%";

  cartItemsEl.innerHTML = "";
  if (!cart.length) {
    cartItemsEl.innerHTML = `<p class="cart-empty">Dein Warenkorb ist noch leer.<br>Zeit, das zu ändern. ✦</p>`;
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
      <div class="cart-item-art">${artFor(p)}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}${item.up ? ` <span class="upsell-tag">Mitnahme</span>` : ""}</div>
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
  showToast("Demo-Prototyp – der Checkout kommt mit Shopify. ✦");
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
  const saving = p.priceOld ? p.priceOld - p.price : 0;
  // Denselben Duft in den anderen beiden Linien anbieten
  const geschwister = p.scent ? PRODUCTS.filter((x) => x.scent === p.scent && x.id !== p.id) : [];
  // Fakten zur Form – dieselben Angaben wie im Vergleich, direkt am Produkt
  const fakten = p.set ? [] : FAKTEN[p.type] || [];
  const tint = p.color ? `background:linear-gradient(170deg, ${rgba(p.color, 0.22)} 0%, #f5f5f4 70%)` : "";
  modalBody.innerHTML = `
    <div class="modal-art" style="${tint}">${artFor(p)}</div>
    <div class="modal-info">
      <p class="modal-category">${p.category}</p>
      <h3>${p.name}</h3>
      <div class="modal-prices">
        ${p.priceOld ? `<span class="price-old">${euro(p.priceOld)}</span>` : ""}
        <span class="price-now">${euro(p.price)}</span>
        ${p.priceOld ? `<span class="sale-badge" style="position:static;margin-left:0.6rem;">Sparen ${euro(saving)}</span>` : ""}
      </div>
      <p class="modal-desc">${p.desc}</p>
      ${p.category === "Duftsprays" ? `<p class="gift-note">✦ Inklusive: Gratis-Duftmuster</p>` : ""}
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
              <span class="cross-art">${artFor(g)}</span>
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
      <div class="search-result-art">${artFor(p)}</div>
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
  setTimeout(() => document.getElementById("sprayHead").classList.add("pressed"), 950);
  setTimeout(() => {
    document.getElementById("sprayHead").classList.remove("pressed");
    burst(22);
  }, 1080);
  setTimeout(() => burst(16), 1250);

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
      { duration: 900, easing: "ease-in", fill: "forwards" }
    );
  }, 1200);

  // Sobald der Nebel deckt: Hintergrund freigeben, dann Nebel auflösen
  setTimeout(() => {
    preloader.style.background = "transparent";
    inner.style.opacity = "0";
    preloader.querySelector(".preloader-glow").style.display = "none";
    mist.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 850, easing: "ease-out", fill: "forwards",
    });
  }, 2150);

  setTimeout(finish, 3050);
  setTimeout(finish, 5000); // Sicherheitsnetz
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
  const pool = PRODUCTS.filter((x) => x.id !== p.id && x.scent !== p.scent && x.price > 0);
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

function recoKarten(p) {
  const recos = recoAuswahl(p);
  if (!recos.length) return "";
  return `
    <div class="pdp-reco">
      <h2 class="pdp-reco-head">Das könnte dir auch gefallen</h2>
      <div class="pdp-reco-row">
        ${recos.map((x) => {
          const proz = x.priceOld ? Math.round((1 - x.price / x.priceOld) * 100) : 0;
          return `
          <button class="pdp-reco-card" type="button" data-reco="${x.id}">
            ${proz ? `<span class="pdp-reco-badge">−${proz}%</span>` : ""}
            <span class="pdp-reco-art">${artFor(x)}</span>
            <span class="pdp-reco-name">${x.name}</span>
            <span class="pdp-reco-price">
              ${x.priceOld ? `<span class="price-old">${euro(x.priceOld)}</span>` : ""}
              ${euro(x.price)}
            </span>
          </button>`;
        }).join("")}
      </div>
    </div>`;
}

function renderProduktseite(p) {
  pdpQty = 1;
  const saving = p.priceOld ? p.priceOld - p.price : 0;
  const geschwister = p.scent ? PRODUCTS.filter((x) => x.scent === p.scent && x.id !== p.id) : [];
  const fakten = p.set ? [] : FAKTEN[p.type] || [];
  const tint = p.color ? `background:linear-gradient(170deg, ${rgba(p.color, 0.2)} 0%, #f5f5f4 70%)` : "";
  produktPage.innerHTML = `
    <div class="container pdp">
      <nav class="pdp-breadcrumb"><a href="#produkte" data-pdp-back>← Zurück zum Shop</a></nav>
      <div class="pdp-grid">
        <div class="pdp-art" style="${tint}">${artFor(p)}</div>
        <div class="pdp-info">
          <p class="modal-category">${p.category}</p>
          <h1>${p.name}</h1>
          <div class="modal-prices">
            ${p.priceOld ? `<span class="price-old">${euro(p.priceOld)}</span>` : ""}
            <span class="price-now">${euro(p.price)}</span>
            ${p.priceOld ? `<span class="sale-badge" style="position:static;margin-left:0.6rem;">Sparen ${euro(saving)}</span>` : ""}
          </div>
          <p class="pdp-tax">inkl. MwSt. – versandkostenfrei</p>
          <ul class="pdp-usps">
            <li>Versandkostenfrei ohne Mindestbestellwert</li>
            <li>Versand in 24 h</li>
            <li>14 Tage Widerrufsrecht</li>
            <li>Auf Lager</li>
          </ul>
          ${p.category === "Duftsprays" ? `<p class="gift-note">✦ Inklusive: Gratis-Duftmuster</p>` : ""}
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
            <div class="notes-row">${p.notes.map((n) => `<span class="note-chip">${n}</span>`).join("")}</div>
            ${fakten.length ? `
              <dl class="fakten">
                ${fakten.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("")}
              </dl>` : ""}
          </div>
          ${geschwister.length ? `
            <p class="notes-label">${p.label} gibt es auch als</p>
            <div class="cross-row">
              ${geschwister.map((g) => `
                <button class="cross-card" type="button" data-pdp-cross="${g.id}">
                  <span class="cross-art">${artFor(g)}</span>
                  <span class="cross-name">${g.linieName}</span>
                </button>`).join("")}
            </div>` : ""}
        </div>
      </div>
      ${recoKarten(p)}
    </div>`;
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
  produktPage.querySelector("#pdpAdd").addEventListener("click", () => {
    addToCart(p.id, pdpQty);
    openCart();
  });
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
