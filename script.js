"use strict";
const body = document.querySelector("body");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");
const cartBtn = document.querySelector(".cart-btn");
const ordersNum = document.querySelector(".orders-num");
const cart = document.querySelector(".cart");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const ordersCount = document.querySelector(".orders-count");
const emptyCartMsg = document.querySelector(".empty-cart-msg");
const addToCart = document.querySelector(".add-to-cart-btn");
const cartOrder = document.querySelector(".cart-order");
const amountOrdered = document.querySelector(".amount-ordered");
const totalPrice = document.querySelector(".total-price");
const checkoutBtn = document.querySelector(".checkoutBtn");
const deleteCartBtn = document.querySelector(".delete-cart-btn");

let orders = 0;
openBtn.addEventListener("click", function () {
  mobileNav.classList.add("open-nav");
});
closeBtn.addEventListener("click", function () {
  mobileNav.classList.remove("open-nav");
});
cartBtn.addEventListener("click", function () {
  cart.classList.toggle("opencart");
});

minusBtn.addEventListener("click", function () {
  if (!orders) {
    ordersNum.classList.add("hidden");
  }

  if (orders > 0) {
    orders = orders - 1;
    ordersCount.innerHTML = orders;
    ordersNum.innerHTML = orders;
  }
});
plusBtn.addEventListener("click", function () {
  ordersNum.classList.remove("hidden");
  orders = orders + 1;
  ordersCount.innerHTML = orders;
  ordersNum.innerHTML = orders;
});

addToCart.addEventListener("click", function () {
  if (orders === 0) {
    emptyCartMsg.classList.remove("hidden");
    cartOrder.classList.add("hidden");
  }
  if (orders >= 1) {
    emptyCartMsg.classList.add("hidden");
    cartOrder.classList.remove("hidden");
  }
  amountOrdered.innerHTML = `$125.00 x ${orders}`;
  totalPrice.innerHTML = `$${125 * orders}.00`;
});

deleteCartBtn.addEventListener("click", function () {
  orders = 0;
  ordersCount.innerHTML = orders;
  emptyCartMsg.classList.remove("hidden");
  cartOrder.classList.add("hidden");
  ordersNum.classList.add("hidden");
});

checkoutBtn.addEventListener("click", function () {
  cartOrder.classList.add("hidden");
  emptyCartMsg.classList.remove("hidden");
  ordersNum.classList.add("hidden");
  emptyCartMsg.innerHTML = "Your order is complete 🎉";

  orders = 0;
  ordersCount.innerHTML = orders;

  setTimeout(() => {
    cart.classList.remove("opencart");
    emptyCartMsg.innerHTML = "Your cart is empty";
  }, 2000);
});
