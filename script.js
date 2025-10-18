"use strict";
const body = document.querySelector("body");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const noOfOrders = document.querySelector(".no-of-orders");

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
  if (orders === 0) return;

  if (orders >= 0) {
    orders = orders - 1;
    noOfOrders.innerHTML = orders;
  }
});
plusBtn.addEventListener("click", function () {
  orders = orders + 1;
  noOfOrders.innerHTML = orders;
});
