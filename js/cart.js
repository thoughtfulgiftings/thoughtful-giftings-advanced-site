
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}
const cartItems = document.getElementById("cart-items");
if (cartItems) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.innerHTML = cart.map(id => `<li>Item ID: ${id}</li>`).join("");
}
