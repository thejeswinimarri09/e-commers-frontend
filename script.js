
// script.js

// Array of product objects
const products = [
  {
    name: "Stylish T-shirt",
    price: 599,
    image: "images/sample-product.jpg"
  },
  {
    name: "Running Shoes",
    price: 1299,
    image: "images/sample-product.jpg"
  },
  {
    name: "Smart Watch",
    price: 2499,
    image: "images/sample-product.jpg"
  },
  {
    name: "Headphones",
    price: 999,
    image: "images/sample-product.jpg"
  }
];

// Add products dynamically
const productList = document.getElementById("product-list");
productList.innerHTML = products.map(product => `
  <section class="product-card">
    <img src="${product.image}" alt="${product.name}" class="product-img" />
    <h2 class="product-title">${product.name}</h2>
    <p class="product-price">₹${product.price}</p>
    <button class="add-to-cart">Add to cart</button>
  </section>
`).join("");

// Cart count logic
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");

// Attach button events
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
    alert(`🛒 You added ${cartCount} item(s) to your cart!`);
  });
});
// 🔍 Search Functionality
const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", (e) => {
  const searchText = e.target.value.toLowerCase();
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(card => {
    const productName = card.querySelector(".product-title").textContent.toLowerCase();
    if (productName.includes(searchText)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
