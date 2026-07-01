const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

let accordinToggler = document.getElementsByClassName("accordion-toggler");
let accordionPanels = document.getElementsByClassName("accordion-panel");

for (let i = 0; i <= accordinToggler.length; i++) {
  accordinToggler[i].addEventListener("click", () => {
    accordinToggler[i].classList.toggle("open");
    accordionPanels[i].classList.toggle("hidden");
  });
}
