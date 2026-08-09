// ============================================================
// Caroud – Rendering & Interaktion
// ============================================================

// ---------- SVG-Platzhalter ----------

function sprayBottleSVG(color, label) {
  return `
  <svg class="prod-art" viewBox="0 0 120 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="52" y="4" width="16" height="14" rx="2" fill="#222"/>
    <rect x="44" y="18" width="32" height="16" rx="3" fill="#1b1b1b"/>
    <path d="M38 40 Q38 34 46 34 H74 Q82 34 82 40 L86 60 V186 Q86 194 78 194 H42 Q34 194 34 186 V60 Z" fill="${color}" stroke="rgba(0,0,0,0.15)"/>
    <rect x="42" y="88" width="36" height="46" rx="3" fill="#fff" stroke="#ddd"/>
    <text x="60" y="103" text-anchor="middle" font-size="9" font-weight="600" font-family="Georgia, serif" letter-spacing="1" fill="#111">CAROUD</text>
    <rect x="48" y="109" width="24" height="4" rx="2" fill="${color}" stroke="rgba(0,0,0,0.2)"/>
    <text x="60" y="124" text-anchor="middle" font-size="7" font-family="Georgia, serif" fill="#555">${label}</text>
    <text x="60" y="131" text-anchor="middle" font-size="5" font-family="Georgia, serif" fill="#999">- est. 2026 -</text>
  </svg>`;
}

function haengerSVG(color, label) {
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
  return `
  <svg class="prod-art" viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(20 30) scale(0.72)">
      <rect x="52" y="4" width="16" height="14" rx="2" fill="#222"/>
      <rect x="44" y="18" width="32" height="16" rx="3" fill="#1b1b1b"/>
      <path d="M38 40 Q38 34 46 34 H74 Q82 34 82 40 L86 60 V186 Q86 194 78 194 H42 Q34 194 34 186 V60 Z" fill="${color}" stroke="rgba(0,0,0,0.15)"/>
      <rect x="42" y="88" width="36" height="46" rx="3" fill="#fff" stroke="#ddd"/>
      <text x="60" y="106" text-anchor="middle" font-size="9" font-weight="600" font-family="Georgia, serif" letter-spacing="1" fill="#111">CAROUD</text>
    </g>
    <g transform="translate(85 65) scale(0.62)">
      <path d="M70 4 Q90 24 70 44 Q50 24 70 4" fill="none" stroke="#333" stroke-width="2.5"/>
      <path d="M52 44 H88 Q92 44 92 50 L90 62 H98 Q104 62 104 70 V184 Q104 192 96 192 H44 Q36 192 36 184 V70 Q36 62 42 62 H50 L48 50 Q48 44 52 44 Z" fill="#2b2b2b" stroke="rgba(0,0,0,0.18)"/>
      <rect x="48" y="92" width="44" height="52" rx="3" fill="#fff" stroke="#ddd"/>
    </g>
    <g transform="translate(120 85) scale(0.52)">
      <path d="M70 4 Q90 24 70 44 Q50 24 70 4" fill="none" stroke="#333" stroke-width="2.5"/>
      <path d="M52 44 H88 Q92 44 92 50 L90 62 H98 Q104 62 104 70 V184 Q104 192 96 192 H44 Q36 192 36 184 V70 Q36 62 42 62 H50 L48 50 Q48 44 52 44 Z" fill="#b9a06a" stroke="rgba(0,0,0,0.18)"/>
      <rect x="48" y="92" width="44" height="52" rx="3" fill="#fff" stroke="#ddd"/>
    </g>
    <text x="90" y="196" text-anchor="middle" font-size="11" font-weight="600" font-family="Georgia, serif" letter-spacing="1" letter-spacing="2" fill="#555">${label.toUpperCase()}</text>
  </svg>`;
}

function tuchSVG(color, label) {
  return `
  <svg class="prod-art" viewBox="0 0 180 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="30" y="120" width="120" height="30" rx="6" fill="${color}"/>
    <rect x="30" y="88" width="120" height="30" rx="6" fill="#5a5a5a"/>
    <rect x="30" y="56" width="120" height="30" rx="6" fill="#777777"/>
    <rect x="30" y="56" width="120" height="94" rx="6" fill="none" stroke="rgba(0,0,0,0.15)"/>
    <text x="90" y="176" text-anchor="middle" font-size="11" font-weight="600" font-family="Georgia, serif" letter-spacing="1" letter-spacing="2" fill="#555">${label.toUpperCase()}</text>
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

function artFor(p) {
  if (p.type === "spray") return sprayBottleSVG(p.color, p.label);
  if (p.type === "baum") return baumSVG(p.color, p.label);
  if (p.type === "haenger") return haengerSVG(p.color, p.label);
  if (p.type === "bundle") return bundleSVG(p.color, p.label);
  return tuchSVG(p.color, p.label);
}

function euro(v) {
  return "€" + v.toFixed(2).replace(".", ",");
}

function byId(id) {
  return PRODUCTS.find((p) => p.id === id);
}

// ---------- Kategorien ----------

const categoryGrid = document.getElementById("categoryGrid");
CATEGORIES.forEach((cat) => {
  const card = document.createElement("button");
  card.className = "category-card";
  card.innerHTML = `
    <div class="cat-art">${artFor({ type: cat.type, color: cat.color, label: cat.name })}</div>
    <span class="cat-label">${cat.name}</span>`;
  card.addEventListener("click", () => {
    setFilter(cat.name);
    document.getElementById("produkte").scrollIntoView({ behavior: "smooth" });
  });
  categoryGrid.appendChild(card);
});

// ---------- Filter & Produkt-Grid ----------

const FILTERS = ["bestseller", "alle", "Duftsprays", "Duftbäume", "Duftanhänger", "Bundles"];
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

function setFilter(f) {
  activeFilter = f;
  filterChips.querySelectorAll(".chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.filter === f);
  });
  productTitle.textContent = FILTER_LABELS[f] || f;
  renderProducts();
}

function filteredProducts() {
  if (activeFilter === "alle") return PRODUCTS;
  if (activeFilter === "bestseller") return PRODUCTS.filter((p) => p.bestseller);
  return PRODUCTS.filter((p) => p.category === activeFilter);
}

function renderProducts() {
  productGrid.innerHTML = "";
  const list = filteredProducts();
  if (!list.length) {
    productGrid.innerHTML = `<p class="grid-empty">Hier ist noch nichts – bald mehr!</p>`;
    return;
  }
  list.forEach((p) => {
    const saving = p.priceOld ? p.priceOld - p.price : 0;
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-media">
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
    card.addEventListener("click", () => openProductModal(p.id));
    productGrid.appendChild(card);
  });
}

setFilter("bestseller");

// ---------- Warenkorb ----------

let cart = [];
try {
  cart = JSON.parse(localStorage.getItem("caroud-cart") || "[]");
} catch (_) { cart = []; }

const cartCountEl = document.querySelector(".cart-count");
const cartItemsEl = document.getElementById("cartItems");
const cartSubtotalEl = document.getElementById("cartSubtotal");
const shippingTextEl = document.getElementById("shippingText");
const shippingFillEl = document.getElementById("shippingFill");

function saveCart() {
  localStorage.setItem("caroud-cart", JSON.stringify(cart));
}

function cartTotalQty() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function cartSubtotal() {
  return cart.reduce((s, i) => s + (byId(i.id)?.price || 0) * i.qty, 0);
}

function addToCart(id, qty) {
  const entry = cart.find((i) => i.id === id);
  if (entry) entry.qty += qty;
  else cart.push({ id, qty });
  saveCart();
  renderCart();
  showToast(`<span class="gold">✦</span> ${byId(id).name} hinzugefügt`);
}

function changeQty(id, delta) {
  const entry = cart.find((i) => i.id === id);
  if (!entry) return;
  entry.qty += delta;
  if (entry.qty <= 0) cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  saveCart();
  renderCart();
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
    return;
  }
  cart.forEach((item) => {
    const p = byId(item.id);
    if (!p) return;
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-art">${artFor(p)}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${p.name}</div>
        <div class="cart-item-price">${euro(p.price)}</div>
        <div class="qty-row">
          <button class="qty-btn" data-minus>−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" data-plus>+</button>
          <button class="cart-item-remove">Entfernen</button>
        </div>
      </div>`;
    row.querySelector("[data-minus]").addEventListener("click", () => changeQty(item.id, -1));
    row.querySelector("[data-plus]").addEventListener("click", () => changeQty(item.id, 1));
    row.querySelector(".cart-item-remove").addEventListener("click", () => removeFromCart(item.id));
    cartItemsEl.appendChild(row);
  });
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  showToast("Demo-Prototyp – der Checkout kommt mit Shopify. ✦");
});

renderCart();

// ---------- Produkt-Modal ----------

const productModal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
let modalQty = 1;

function openProductModal(id) {
  const p = byId(id);
  if (!p) return;
  modalQty = 1;
  const saving = p.priceOld ? p.priceOld - p.price : 0;
  modalBody.innerHTML = `
    <div class="modal-art">${artFor(p)}</div>
    <div class="modal-info">
      <p class="modal-category">${p.category}</p>
      <h3>${p.name}</h3>
      <div class="modal-prices">
        ${p.priceOld ? `<span class="price-old">${euro(p.priceOld)}</span>` : ""}
        <span class="price-now">${euro(p.price)}</span>
        ${p.priceOld ? `<span class="sale-badge" style="position:static;margin-left:0.6rem;">Sparen ${euro(saving)}</span>` : ""}
      </div>
      <p class="modal-desc">${p.desc}</p>
      ${p.category === "Duftsprays" ? `<p class="gift-note">✦ Inklusive: Gratis-Duftbaum + Duftmuster</p>` : ""}
      <p class="notes-label">${p.category === "Zubehör" || p.category === "Bundles" ? "Inhalt" : "Duftnoten"}</p>
      <div class="notes-row">${p.notes.map((n) => `<span class="note-chip">${n}</span>`).join("")}</div>
      <div class="modal-actions">
        <div class="qty-row">
          <button class="qty-btn" data-mminus>−</button>
          <span class="qty-val" id="modalQtyVal">1</span>
          <button class="qty-btn" data-mplus>+</button>
        </div>
        <button class="btn btn-dark" id="modalAdd">In den Warenkorb</button>
      </div>
    </div>`;
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
    if (a.dataset.filter) setFilter(a.dataset.filter);
    closeMenu();
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
    (p) => p.name.toLowerCase().includes(q) || p.notes.some((n) => n.toLowerCase().includes(q))
  );
  if (!hits.length) {
    searchResults.innerHTML = `<p class="search-empty">Nichts gefunden für „${searchInput.value}“.</p>`;
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
      openProductModal(p.id);
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

// ---------- Newsletter (Demo) ----------

document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.hidden = true;
  document.getElementById("newsletterDone").hidden = false;
});

// ---------- Ladebildschirm: Sprühstoß-Übergang ----------

const preloader = document.getElementById("preloader");
if (preloader) {
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
