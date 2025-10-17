"use strict";

const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");

openBtn.addEventListener("click", function () {
  mobileNav.classList.add("open-nav");
});
closeBtn.addEventListener("click", function () {
  mobileNav.classList.remove("open-nav");
});
