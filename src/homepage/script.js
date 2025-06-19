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
