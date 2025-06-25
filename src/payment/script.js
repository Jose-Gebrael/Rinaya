// Control Burger Menu
const burger = document.getElementById("burger");
const menu = document.getElementById("burgerMenu");
const close = document.getElementById("closeBurger");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
});