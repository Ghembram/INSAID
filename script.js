// Toggle mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
});

// Smooth scroll to section
const navLinks = document.querySelectorAll(".nav-link");

for (const link of navLinks) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute("href"));
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    mobileNav.classList.remove("open");
  });
}

// Form submission
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  /
});
