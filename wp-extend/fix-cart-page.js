const cartEmptyMessage = document.querySelector(".cart-empty.woocommerce-info");
const goToCheckout = document.getElementById("go-to-checkout");
const buyNow = document.getElementById("buy-now");

if (cartEmptyMessage) {
  // When cart is empty!
  goToCheckout.style.display = "none";
  buyNow.style.display = "block";
} else {
  goToCheckout.style.display = "block";
  buyNow.style.display = "none";
}
// shortcode [woocommerce_cart]