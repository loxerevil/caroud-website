/* ------------------------------------------------------------------
   Caroud – Launch-Sperre mit Countdown
   Bis zum Launch sehen Besucher nur den Countdown. Mit Passwort
   (Team, Partner) geht die normale Seite auf – pro Gerät gemerkt.
   Zum Launch-Zeitpunkt öffnet sich die Seite automatisch für alle.

   Das Passwort steht NICHT hier, nur ein Fingerabdruck (SHA-256) in
   js/zugang.js. Setzen/ändern: _Passwort-setzen.ps1 im Caroud-Ordner.
   Hinweis: Das ist ein Sichtschutz im Browser, kein Tresor.
   ------------------------------------------------------------------ */
(function () {
  var LAUNCH = "2026-10-15T18:00:00+02:00";   // Donnerstag, 15. Oktober 2026, 18 Uhr
  var SPEICHER = "caroud-zugang";
  var launchZeit = Date.parse(LAUNCH);
  var hash = (window.CAROUD_ZUGANG || "").trim();

  // Vorschau der Sperre auch nach dem Launch oder mit gespeichertem Zugang: caroud.de/?sperre=an
  var q = new URLSearchParams(location.search);
  var erzwingen = q.get("sperre") === "an";
  if (!erzwingen && Date.now() >= launchZeit) return;
  try {
    if (!erzwingen && hash && localStorage.getItem(SPEICHER) === hash) return;
  } catch (e) {}

  document.documentElement.classList.add("launch-gesperrt");

  var css = `
  html.launch-gesperrt, html.launch-gesperrt body { overflow: hidden !important; background: #121316; }
  html.launch-gesperrt body > *:not(#launchGate) { display: none !important; }
  #launchGate { position: fixed; inset: 0; z-index: 9999; background: #121316; color: #f4f2ee;
    font-family: "Inter", "Segoe UI", "Helvetica Neue", Arial, sans-serif; overflow-y: auto;
    display: flex; flex-direction: column; }
  #launchGate .lg-bild { position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse at 50% 45%, rgba(91,123,180,.18), transparent 62%); }
  #launchGate .lg-flasche { position: absolute; right: 50%; transform: translateX(50%); bottom: -4vh; height: 62vh; max-height: 560px;
    opacity: .16; filter: grayscale(1) contrast(1.1); pointer-events: none; }
  #launchGate .lg-inner { position: relative; flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; padding: 3.5rem 1.25rem 2rem; gap: 1.4rem; }
  #launchGate .lg-logo { height: 22px; width: auto; opacity: .95; }
  #launchGate .lg-kicker { font-size: .68rem; letter-spacing: .32em; text-transform: uppercase; color: #9aa0a8; margin: 0; }
  #launchGate h1 { font-family: "Playfair Display", Georgia, serif; font-weight: 400; font-size: clamp(2.1rem, 7vw, 3.6rem);
    line-height: 1.08; margin: 0; letter-spacing: .005em; text-wrap: balance; }
  #launchGate .lg-sub { max-width: 30rem; margin: 0; color: #c9ccd1; font-size: .95rem; line-height: 1.6; }
  #launchGate .lg-count { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: .6rem; width: min(100%, 30rem); margin-top: .4rem; }
  #launchGate .lg-count div { border: 1px solid rgba(255,255,255,.12); padding: 1rem .3rem .8rem; background: rgba(255,255,255,.02); }
  #launchGate .lg-count b { display: block; font-family: "Playfair Display", Georgia, serif; font-weight: 400;
    font-size: clamp(1.8rem, 7vw, 2.7rem); line-height: 1; font-variant-numeric: tabular-nums; }
  #launchGate .lg-count span { display: block; margin-top: .45rem; font-size: .6rem; letter-spacing: .22em; text-transform: uppercase; color: #9aa0a8; }
  #launchGate .lg-datum { font-size: .78rem; letter-spacing: .18em; text-transform: uppercase; color: #f4f2ee; margin: 0; }
  #launchGate .lg-social { display: flex; gap: 1.4rem; justify-content: center; font-size: .78rem; letter-spacing: .14em; text-transform: uppercase; }
  #launchGate a { color: #f4f2ee; text-decoration: none; border-bottom: 1px solid rgba(255,255,255,.3); padding-bottom: 2px; }
  #launchGate a:hover { border-color: #f4f2ee; }
  #launchGate .lg-fuss { position: relative; display: flex; flex-wrap: wrap; gap: .6rem 1.4rem; justify-content: center; align-items: center;
    padding: 1.2rem 1.25rem calc(1.4rem + env(safe-area-inset-bottom, 0px)); font-size: .72rem; color: #8a8f96; }
  #launchGate .lg-fuss a { color: #8a8f96; border-color: transparent; }
  #launchGate .lg-fuss a:hover { color: #f4f2ee; }
  #launchGate .lg-tuer { background: none; border: 0; border-bottom: 1px solid transparent; color: #8a8f96; font: inherit; line-height: inherit; cursor: pointer; padding: 0 0 2px; }
  #launchGate .lg-tuer:hover { color: #f4f2ee; }
  #launchGate form { display: flex; gap: .5rem; width: min(100%, 22rem); }
  #launchGate form[hidden] { display: none; }
  #launchGate input { flex: 1; min-width: 0; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.18); color: #f4f2ee;
    padding: .75rem .9rem; font: inherit; font-size: .9rem; border-radius: 0; }
  #launchGate input:focus { outline: none; border-color: #f4f2ee; }
  #launchGate form button { background: #f4f2ee; color: #121316; border: 0; padding: 0 1.1rem; font: inherit; font-size: .72rem;
    font-weight: 600; letter-spacing: .18em; text-transform: uppercase; cursor: pointer; }
  #launchGate .lg-fehler { min-height: 1.1em; margin: -.6rem 0 0; font-size: .78rem; color: #d88a86; }
  @media (max-width: 480px) { #launchGate .lg-count { gap: .4rem; } #launchGate .lg-count div { padding: .8rem .2rem .65rem; } }
  @media (prefers-reduced-motion: no-preference) {
    #launchGate .lg-inner > * { animation: lg-auf .9s cubic-bezier(.2,.7,.2,1) both; }
    #launchGate .lg-inner > *:nth-child(2) { animation-delay: .08s; } #launchGate .lg-inner > *:nth-child(3) { animation-delay: .16s; }
    #launchGate .lg-inner > *:nth-child(4) { animation-delay: .24s; } #launchGate .lg-inner > *:nth-child(5) { animation-delay: .32s; }
    @keyframes lg-auf { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
  }`;
  var st = document.createElement("style");
  st.textContent = css;
  document.head.appendChild(st);

  function bauen() {
    var gate = document.createElement("div");
    gate.id = "launchGate";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-label", "Caroud – bald verfügbar");
    gate.innerHTML = `
      <div class="lg-bild"></div>
      <div class="lg-inner">
        <img class="lg-logo" src="img/logo-text-transparent.png?v=2" alt="CAROUD">
        <p class="lg-kicker">Fine Fragrance for the Drive</p>
        <h1>Parfüm für dein Auto.<br>Bald ist es so weit.</h1>
        <p class="lg-sub">Sieben Düfte, drei Formen, eine Marke für alle, die ihr Auto lieben. Der Shop öffnet am 15.&nbsp;Oktober um 18&nbsp;Uhr.</p>
        <div class="lg-count" aria-live="polite">
          <div><b data-t>–</b><span>Tage</span></div>
          <div><b data-s>–</b><span>Stunden</span></div>
          <div><b data-m>–</b><span>Minuten</span></div>
          <div><b data-x>–</b><span>Sekunden</span></div>
        </div>
        <p class="lg-datum">Donnerstag · 15. Oktober · 18 Uhr</p>
        <div class="lg-social">
          <a href="https://www.instagram.com/caroud.de" target="_blank" rel="noopener">Instagram</a>
          <a href="https://www.tiktok.com/@caroud.de" target="_blank" rel="noopener">TikTok</a>
        </div>
        <form id="lgForm" hidden autocomplete="off">
          <input id="lgPass" type="password" placeholder="Passwort" aria-label="Passwort" autocomplete="current-password">
          <button type="submit">Öffnen</button>
        </form>
        <p class="lg-fehler" id="lgFehler" aria-live="polite"></p>
      </div>
      <div class="lg-fuss">
        <button type="button" class="lg-tuer" id="lgTuer">Zugang mit Passwort</button>
        <a href="impressum.html">Impressum</a>
        <a href="datenschutz.html">Datenschutz</a>
        <a href="kontakt.html">Kontakt</a>
      </div>`;
    document.body.appendChild(gate);

    // Countdown
    var el = { t: gate.querySelector("[data-t]"), s: gate.querySelector("[data-s]"), m: gate.querySelector("[data-m]"), x: gate.querySelector("[data-x]") };
    var zwei = function (n) { return n < 10 ? "0" + n : "" + n; };
    function tick() {
      var rest = Math.max(0, launchZeit - Date.now());
      if (rest === 0 && !erzwingen) { oeffnen(); return; }
      var sek = Math.floor(rest / 1000);
      el.t.textContent = Math.floor(sek / 86400);
      el.s.textContent = zwei(Math.floor(sek / 3600) % 24);
      el.m.textContent = zwei(Math.floor(sek / 60) % 60);
      el.x.textContent = zwei(sek % 60);
    }
    tick();
    var timer = setInterval(tick, 1000);

    // Passwort
    var form = gate.querySelector("#lgForm"), feld = gate.querySelector("#lgPass"), fehler = gate.querySelector("#lgFehler");
    gate.querySelector("#lgTuer").addEventListener("click", function () {
      form.hidden = !form.hidden;
      if (!form.hidden) feld.focus();
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!hash) { fehler.textContent = "Es ist noch kein Passwort festgelegt."; return; }
      if (!window.crypto || !crypto.subtle) { fehler.textContent = "Dein Browser unterstützt die Anmeldung hier nicht."; return; }
      var daten = new TextEncoder().encode("caroud:" + feld.value);
      crypto.subtle.digest("SHA-256", daten).then(function (buf) {
        var hex = Array.prototype.map.call(new Uint8Array(buf), function (b) { return ("0" + b.toString(16)).slice(-2); }).join("");
        if (hex === hash) {
          try { localStorage.setItem(SPEICHER, hash); } catch (err) {}
          oeffnen();
        } else {
          fehler.textContent = "Das Passwort stimmt nicht.";
          feld.select();
        }
      });
    });

    function oeffnen() {
      clearInterval(timer);
      document.documentElement.classList.remove("launch-gesperrt");
      gate.remove();
      window.dispatchEvent(new Event("resize"));
    }
  }
  if (document.body) bauen(); else document.addEventListener("DOMContentLoaded", bauen);
})();
