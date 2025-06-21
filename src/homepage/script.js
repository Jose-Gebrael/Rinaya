// aboutFAQ Toggle
document.querySelectorAll(".aboutfaqToggle").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;

    item.classList.toggle("open");
  });
});

// FAQ Toggle
document.querySelectorAll(".faqToggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const faqItem = toggle.parentElement;
    const content = faqItem.querySelector(".faqContent");

    if (faqItem.classList.contains("open")) {
      content.style.maxHeight = null;
      faqItem.classList.remove("open");
    } else {
      // Close all others (optional)
      document.querySelectorAll(".faqItem").forEach((item) => {
        item.classList.remove("open");
        item.querySelector(".faqContent").style.maxHeight = null;
      });

      content.style.maxHeight = content.scrollHeight + "px";
      faqItem.classList.add("open");
    }
  });
});

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

//Reviews
/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
