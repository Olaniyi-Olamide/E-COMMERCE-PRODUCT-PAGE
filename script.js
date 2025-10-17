"use strict";
const body = document.querySelector("body");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart");

openBtn.addEventListener("click", function () {
  mobileNav.classList.add("open-nav");
});
closeBtn.addEventListener("click", function () {
  mobileNav.classList.remove("open-nav");
});
cartBtn.addEventListener("click", function () {
  cart.classList.toggle("opencart");
});
