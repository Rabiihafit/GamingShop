// Produits fictifs
const PRODUCTS = [
  {
    id: 1,
    title: "Carte PSN 50€",
    desc: "Code PlayStation Network - France.",
    price: 525,
    category: "PlayStation",
    img: "https://www.logo.wine/a/logo/PlayStation/PlayStation-Icon-Logo.wine.svg",
  },
  {
    id: 2,
    title: "Carte PSN 20€",
    desc: "Code PlayStation Network - France.",
    price: 235,
    category: "PlayStation",
    img: "https://www.logo.wine/a/logo/PlayStation/PlayStation-Icon-Logo.wine.svg",
  },
  {
    id: 3,
    title: "Carte PSN 10€",
    desc: "Carte PlayStation Network - France.",
    price: 150,
    category: "PlayStation",
    img: "https://www.logo.wine/a/logo/PlayStation/PlayStation-Icon-Logo.wine.svg",
  },
  {
    id: 4,
    title: "Ps Plus Esssntiel 1 mois",
    desc: "Compte.",
    price: 130,
    category: "PlayStation",
    img: "https://www.pngfind.com/pngs/m/324-3248088_playstation-plus-logo-ps3-slim-call-of-duty.png",
  },
  {
    id: 5,
    title: "Ps Plus Esssntiel 3 mois",
    desc: "Code PlayStation Network - United States.",
    price: 450,
    category: "PlayStation",
    img: "https://www.pngfind.com/pngs/m/324-3248088_playstation-plus-logo-ps3-slim-call-of-duty.png",
  },
  {
    id: 6,
    title: "Ps Plus Esssntiel 12 mois",
    desc: "Code PlayStation Network - United States.",
    price: 900,
    category: "PlayStation",
    img: "https://www.pngfind.com/pngs/m/324-3248088_playstation-plus-logo-ps3-slim-call-of-duty.png",
  },
  {
    id: 7,
    title: "Ps Plus Extra 3 mois",
    desc: "Compte.",
    price: 420,
    category: "PlayStation",
    img: "https://www.pngfind.com/pngs/m/324-3248088_playstation-plus-logo-ps3-slim-call-of-duty.png",
  },
  /* Xbox */
  {
    id: 8,
    title: "Xbox Live Gift Card 5 USD",
    desc: "Code Xbox Live - United States.",
    price: 75,
    category: "Xbox",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Xbox_app_logo.svg",
  },
  {
    id: 9,
    title: "Xbox Live Gift Card 10 USD",
    desc: "Code Xbox Live - United States.",
    price: 150,
    category: "Xbox",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Xbox_app_logo.svg",
  },
  {
    id: 10,
    title: "Xbox Live Gift Card 15 USD",
    desc: "Code Xbox Live - United States.",
    price: 175,
    category: "Xbox",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Xbox_app_logo.svg",
  },
  {
    id: 11,
    title: "Xbox Live Gift Card 20 USD",
    desc: "Code Xbox Live - United States.",
    price: 250,
    category: "Xbox",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Xbox_app_logo.svg",
  },
  {
    id: 12,
    title: "Xbox Live Gift Card 25 USD",
    desc: "Code Xbox Live - United States.",
    price: 275,
    category: "Xbox",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Xbox_app_logo.svg",
  },
  {
    id: 13,
    title: "Xbox Live Gift Card 25 USD",
    desc: "Code Xbox Live - United States.",
    price: 525,
    category: "Xbox",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Xbox_app_logo.svg",
  },
  /* Netflix */
  {
    id: 14,
    title: "Netflix Compte Premium 1 month",
    desc: "Compte",
    price: 90,
    category: "Netflix",
    img: "https://cdn-icons-png.flaticon.com/512/732/732228.png",
  },
  /* Spotify */
  {
    id: 15,
    title: "Spotify Premium 2 month Individual",
    desc : "Exclusive Account - One Time Payment",
    price: 55,
    category: "Spotify",
    img : "https://banner2.cleanpng.com/20181001/hbz/kisspng-computer-icons-portable-network-graphics-clip-art-the-kentucky-grasshoppers-veenhoop-festival-1713928083285.webp",
  },
  {
    id: 16,
    title: "Spotify Premium Individual 6 Months",
    desc: "Exclusive Account - One Time Payment",
    price: 160,
    category: "Spotify",
    img : "https://banner2.cleanpng.com/20181001/hbz/kisspng-computer-icons-portable-network-graphics-clip-art-the-kentucky-grasshoppers-veenhoop-festival-1713928083285.webp",
  },
  {
    id: 17,
    title: "Spotify Premium Individual 12 Months",
    desc: "Exclusive Account - One Time Payment",
    price: 250,
    category: "Spotify",
    img: " https://banner2.cleanpng.com/20181001/hbz/kisspng-computer-icons-portable-network-graphics-clip-art-the-kentucky-grasshoppers-veenhoop-festival-1713928083285.webp",
  },
      /* Steam */
    {
      id: 18,
      title: "Steam Gift Card 10 USD",
      desc: "Code Steam - United States.",
      price: 150,
      category: "Steam",
      img: "https://pngate.com/wp-content/uploads/2025/06/steam-Icon-main-logo-symbol-blue-gradient-circle-design-gaming-platform-1.png",
    },
    {
      id: 19,
      title: "Steam Gift Card 20 USD",
      desc: "Code Steam - United States.",
      price: 250,
      category: "Steam",
      img: "https://pngate.com/wp-content/uploads/2025/06/steam-Icon-main-logo-symbol-blue-gradient-circle-design-gaming-platform-1.png",
    },
    {
      id: 20,
      title: "Steam Gift Card 50 USD",
      desc: "Code Steam - United States.",
      price: 550,
      category: "Steam",
      img: "https://pngate.com/wp-content/uploads/2025/06/steam-Icon-main-logo-symbol-blue-gradient-circle-design-gaming-platform-1.png",
    },
];

/* Xbox :  https://upload.wikimedia.org/wikipedia/commons/3/3a/Xbox_app_logo.svg */
/* Spotify : https://banner2.cleanpng.com/20181001/hbz/kisspng-computer-icons-portable-network-graphics-clip-art-the-kentucky-grasshoppers-veenhoop-festival-1713928083285.webp */
/* PlayStation :  https://www.logo.wine/a/logo/PlayStation/PlayStation-Icon-Logo.wine.svg */
/* Netflix : https://cdn-icons-png.flaticon.com/512/732/732228.png */
/* Microsoft : https://cdn-icons-png.flaticon.com/512/732/732221.png */
/* Ps Plus : https://www.pngfind.com/pngs/m/324-3248088_playstation-plus-logo-ps3-slim-call-of-duty.png */


let filteredCategory = "all";
let cart = [];

function shuffleProducts(products) {
  return products.sort(() => Math.random() - 0.5);
}
function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  const shuffledProducts = shuffleProducts(PRODUCTS.filter(p => filteredCategory === "all" || p.category === filteredCategory));
  shuffledProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.title}">
      <div class="product-title">${product.title}</div>
      <div class="product-price">${product.price} Dhs</div>
      <div class="product-stock">Stock : ${product.stock}</div>
      <div class="product-desc">${product.desc}</div>
      <button class="add-cart-btn" onclick="addToCart(${product.id})">Ajouter au panier</button>
    `;
    list.appendChild(div);
  });
}
window.renderProducts = renderProducts;

function filterCategory(cat) {
  filteredCategory = cat;
  renderProducts();
  document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
  let idx = ["all", "PlayStation", "Xbox", "Netflix", "Steam", "Spotify"].indexOf(cat);
  if (idx >= 0) document.querySelectorAll(".category-btn")[idx].classList.add("active");
}
window.filterCategory = filterCategory;

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = cart.find(item => item.id === id);
  if (existing) {
    if (existing.qty < product.stock) existing.qty++;
  } else {
    cart.push({ id: product.id, title: product.title, price: product.price, qty: 1 });
  }
  updateCart();
  // Animation sur le panier
  const cartCount = document.getElementById("cart-count");
  cartCount.classList.add("pop");
  setTimeout(() => cartCount.classList.remove("pop"), 400);
}
window.addToCart = addToCart;

function updateCart() {
  let count = cart.reduce((acc, cur) => acc + cur.qty, 0);
  document.getElementById("cart-count").textContent = count;
}
function toggleCart() {
  document.getElementById("panier").classList.toggle("active");
  renderCart();
}
window.toggleCart = toggleCart;

function renderCart() {
  const items = document.getElementById("cart-items");
  if (cart.length === 0) {
    items.innerHTML = "<i>Votre panier est vide.</i>";
    document.getElementById("cart-total").textContent = "0 Dhs";
    document.getElementById("checkout-btn").disabled = true;
    return;
  }
  items.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span class="cart-item-title">${item.title} x${item.qty}</span>
      <span>${item.price * item.qty} Dhs</span>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">&minus;</button>
    `;
    items.appendChild(div);
  });
  document.getElementById("cart-total").textContent = `${total} Dhs`;
  document.getElementById("checkout-btn").disabled = false;
}
function removeFromCart(id) {
  let idx = cart.findIndex(item => item.id === id);
  if (idx >= 0) {
    if (cart[idx].qty > 1) cart[idx].qty--;
    else cart.splice(idx, 1);
    updateCart();
    renderCart();
  }
}
window.removeFromCart = removeFromCart;

// WhatsApp contact : à personnaliser avec votre numéro
const PHONE = "212690335275"; // Ex: 33612345678 pour +33 6 12 34 56 78

function sendWhatsapp() {
  if (cart.length === 0) return;
  let msg = "Bonjour, je souhaite commander :%0A";
  cart.forEach(item => {
    msg += `- ${item.title} x${item.qty} (${item.price * item.qty})%0A`;
  });
  msg += `%0ATotal : ${document.getElementById("cart-total").textContent} %0A`;
  msg += "Nom : ...%0AEmail : ...";
  window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
}
window.sendWhatsapp = sendWhatsapp;

// Panier modal
document.getElementById("cart-link").onclick = function(e) {
  e.preventDefault();
  toggleCart();
};

// Fermeture du panier sur click extérieur
document.getElementById("panier").addEventListener("click", function(e) {
  if (e.target.classList.contains("cart-modal")) toggleCart();
});

// Animation du compteur panier
const style = document.createElement('style');
style.innerHTML = `
  #cart-count.pop { animation: cartPop 0.4s; }
  @keyframes cartPop {
    0% { transform: scale(1);}
    40% { transform: scale(1.3);}
    100% { transform: scale(1);}
  }
`;
document.head.appendChild(style);

renderProducts();
updateCart();
