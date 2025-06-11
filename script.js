const products = [
  {
    name: "Sony Wireless Headphones",
    price: 2999,
    image: "41tp0JPPlmL.jpg"
  },
  {
    name: "ONE PLUS Smart Watch",
    price: 4999,
    image: "images.jpg"
  },
  {
    name: "JBL Bluetooth Speaker",
    price: 1599,
    image: "images (1).jpg"
  },
  {
    name: "Canon DSLR Camera",
    price: 35999,
    image: "images (2).jpg"
  },
  {
    name: "Razyen Gaming Mouse",
    price: 999,
    image: "razer-basilisk-v3-image-main-600x600-1-2.jpg"
  },
  {
    name: "Gameing Mechanical Keyboard",
    price: 2499,
    image: "71LBvbVa95L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    name: "SAMSUNG LED Monitor",
    price: 7999,
    image: "images (3).jpg"
  },
  {
    name: "San Disk External SSD",
    price: 5999,
    image: "images (4).jpg"
  }
];

const container = document.getElementById("product-container");

products.forEach((product, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="card-body">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(this, ${index})">Add to Cart</button>
    </div>
  `;
  container.appendChild(card);
});

function addToCart(button, index) {
  const card = button.closest(".card");
  card.classList.toggle("selected");
  if (card.classList.contains("selected")) {
    button.textContent = "Added";
  } else {
    button.textContent = "Add to Cart";
  }
}
