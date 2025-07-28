
const products = [
  { id: 1, name: "Luxury Gift Box", category: "Corporate", price: 1499 },
  { id: 2, name: "Wellness Hamper", category: "Self", price: 799 },
  { id: 3, name: "Wedding Special Pack", category: "Family", price: 2199 }
];
const list = document.getElementById("product-list");
if (list) {
  list.innerHTML = products.map(p => `
    <div class="product">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join("");
}
