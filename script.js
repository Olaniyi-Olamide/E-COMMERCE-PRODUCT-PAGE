"use strict";

// ELEMENTS

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
const slides = document.querySelectorAll(".slide");
const slidesDesktop = document.querySelectorAll(".slide-desktop");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtnDesktop = document.querySelector(".next-btn-desktop");
const prevBtnDesktop = document.querySelector(".prev-btn-desktop");
const closeBtnDesktop = document.querySelector(".close-btn-desktop");
const overlay = document.querySelector(".overlay");
const desktopSlider = document.querySelector(".desktop-slider");
const thumbnails = document.querySelectorAll(".thumbnail");
const currSlide = document.querySelectorAll(".curr-slide");
const mainSlide = document.querySelectorAll(".main-slide");
const mainThumbnails = document.querySelectorAll(".main-thumbnails");

let orders = 0;
let current = 0;
let currentDesktop = 0;

const showSlide = function (index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slides[index].classList.add("active");
  });
};

const showSlideDesktop = function (index) {
  slidesDesktop.forEach((slide) => {
    slide.classList.remove("active");
    slidesDesktop[index].classList.add("active");
  });
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("overlay-thumbnail");
    thumbnails[index].classList.add("overlay-thumbnail");
  });
};

const showSlideMain = function (index) {
  mainSlide.forEach((slide) => {
    slide.classList.remove("active");
    mainSlide[index].classList.add("active");
  });
  mainThumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("overlay-thumbnail");
    mainThumbnails[index].classList.add("overlay-thumbnail");
  });
};

const slider = function (slides, showSlide) {
  slides.forEach((slide, index) => {
    slide.addEventListener("click", function () {
      showSlide(index);
    });
  });
};

slider(thumbnails, showSlideDesktop);
slider(mainThumbnails, showSlideMain);

nextBtn.addEventListener("click", function () {
  current = (current + 1) % slides.length;
  showSlide(current);
});

prevBtn.addEventListener("click", function () {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

nextBtnDesktop.addEventListener("click", function () {
  currentDesktop = (currentDesktop + 1) % slidesDesktop.length;
  showSlideDesktop(currentDesktop);
});

prevBtnDesktop.addEventListener("click", function () {
  currentDesktop =
    (currentDesktop - 1 + slidesDesktop.length) % slidesDesktop.length;
  showSlideDesktop(currentDesktop);
});

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
  if (!orders) return;

  orders = orders - 1;
  ordersCount.innerHTML = orders;
});

plusBtn.addEventListener("click", function () {
  orders = orders + 1;
  ordersCount.innerHTML = orders;
});

addToCart.addEventListener("click", function () {
  if (orders === 0) {
    emptyCartMsg.classList.remove("hidden");
    cartOrder.classList.add("hidden");
    ordersNum.classList.add("hidden");
  }
  if (orders >= 1) {
    emptyCartMsg.classList.add("hidden");
    cartOrder.classList.remove("hidden");
    ordersNum.innerHTML = orders;
    ordersNum.classList.remove("hidden");
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

const toggleDesktopSlider = function () {
  desktopSlider.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

closeBtnDesktop.addEventListener("click", toggleDesktopSlider);
overlay.addEventListener("click", toggleDesktopSlider);
currSlide.forEach((slide) => {
  slide.addEventListener("click", toggleDesktopSlider);
});
