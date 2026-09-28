/* ------------------------------------------------------------------
   Caroud – Kundenbewertungen auf der Startseite (über den FAQ)

   Neue Bewertung eintragen: einfach unten in BEWERTUNGEN ergänzen.
   Nur echte Bewertungen von echten Bestellungen (UWG § 5b Abs. 3) –
   Name gekürzt (z. B. „Lena K.“), Datum im Format JJJJ-MM-TT.
   Solange die Liste leer ist, bleibt der Bereich unsichtbar.

   Vorschau des Designs mit Beispieldaten: caroud.de/?bewertungen=vorschau
   ------------------------------------------------------------------ */
const BEWERTUNGEN = [
  // { name: "Lena K.", sterne: 5, datum: "2026-10-20", produkt: "Duftspray Pacific Cruise",
  //   text: "…", quelle: "Shop" },
];

(function () {
  const sektion = document.getElementById("bewertungen");
  if (!sektion) return;

  const vorschau = new URLSearchParams(location.search).get("bewertungen") === "vorschau";
  const BEISPIEL = [
    { name: "Beispiel A.", sterne: 5, datum: "2026-10-18", produkt: "Duftspray Ombre Apex", text: "Beispieltext: So sieht eine Bewertung aus. Hier steht später, was echte Kunden über ihren Duft schreiben." },
    { name: "Beispiel B.", sterne: 5, datum: "2026-10-21", produkt: "Glasanhänger Fast Cherry", text: "Beispieltext: Kurze und längere Bewertungen passen beide in die Karte. Die Reihe lässt sich wischen oder mit den Pfeilen blättern." },
    { name: "Beispiel C.", sterne: 4, datum: "2026-10-24", produkt: "Probierset – 3 Düfte", text: "Beispieltext: Auch vier Sterne werden sauber angezeigt." },
    { name: "Beispiel D.", sterne: 5, datum: "2026-10-27", produkt: "Duftanhänger Erba Carbon", text: "Beispieltext: Nur eine Vorschau des Designs – diese Bewertungen sind nicht echt und erscheinen nicht auf der Seite." },
  ];
  const liste = (BEWERTUNGEN.length ? BEWERTUNGEN : (vorschau ? BEISPIEL : []))
    .slice().sort((a, b) => (b.datum || "").localeCompare(a.datum || ""));
  if (!liste.length) return;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const stern = (voll) => `<svg viewBox="0 0 20 20" aria-hidden="true" class="${voll ? "voll" : "leer"}"><path d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.7L10 14.8l-5.1 2.7 1-5.7-4.1-4 5.7-.8z"/></svg>`;
  const sterne = (n) => Array.from({ length: 5 }, (_, i) => stern(i < Math.round(n))).join("");
  const datum = (d) => { try { return new Date(d + "T12:00:00").toLocaleDateString("de-DE", { day: "numeric", month: "short", year: "numeric" }); } catch (_) { return d; } };
  const initialen = (n) => n.split(/\s+/).map((t) => t[0]).join("").slice(0, 2).toUpperCase();

  const schnitt = liste.reduce((s, b) => s + b.sterne, 0) / liste.length;
  document.getElementById("bwKopf").innerHTML =
    `<div class="bw-schnitt"><span class="bw-note">${schnitt.toFixed(1).replace(".", ",")}</span>` +
    `<span class="bw-sterne" aria-label="${schnitt.toFixed(1)} von 5 Sternen">${sterne(schnitt)}</span>` +
    `<span class="bw-anzahl">aus ${liste.length} ${liste.length === 1 ? "Bewertung" : "Bewertungen"}</span></div>` +
    (vorschau && !BEWERTUNGEN.length ? `<p class="bw-vorschau">Vorschau mit Beispieldaten – auf der echten Seite unsichtbar, bis echte Bewertungen eingetragen sind.</p>` : "");

  document.getElementById("bwReihe").innerHTML = liste.map((b) => `
    <article class="bw-karte">
      <div class="bw-oben"><span class="bw-sterne" aria-label="${b.sterne} von 5 Sternen">${sterne(b.sterne)}</span><span class="bw-check">Verifizierter Kauf</span></div>
      <p class="bw-text">${esc(b.text)}</p>
      ${b.produkt ? `<p class="bw-produkt">${esc(b.produkt)}</p>` : ""}
      <div class="bw-fuss"><span class="bw-ini">${esc(initialen(b.name))}</span><span class="bw-name">${esc(b.name)}</span><span class="bw-datum">${datum(b.datum)}</span></div>
    </article>`).join("");

  sektion.hidden = false;

  const reihe = document.getElementById("bwReihe");
  const zurueck = sektion.querySelector(".bw-zurueck"), weiter = sektion.querySelector(".bw-weiter");
  const schritt = () => { const k = reihe.querySelector(".bw-karte"); return k ? k.getBoundingClientRect().width + 20 : 300; };
  const pruefen = () => {
    const max = reihe.scrollWidth - reihe.clientWidth - 2;
    zurueck.disabled = reihe.scrollLeft <= 2;
    weiter.disabled = reihe.scrollLeft >= max;
    sektion.classList.toggle("bw-passt", max <= 0);
  };
  zurueck.addEventListener("click", () => reihe.scrollBy({ left: -schritt(), behavior: "smooth" }));
  weiter.addEventListener("click", () => reihe.scrollBy({ left: schritt(), behavior: "smooth" }));
  reihe.addEventListener("scroll", pruefen, { passive: true });
  window.addEventListener("resize", pruefen);
  requestAnimationFrame(pruefen);
})();
