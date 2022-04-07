// Accordion Faq
let elementAccordion = document.getElementsByClassName("faq-accordion__option");

for (let i = 0; i < elementAccordion.length; i++) {
  elementAccordion[i].addEventListener("click", function () {
    removeActive();
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function removeActive() {
  for (let i = 0; i < elementAccordion.length; i++) {
    let content = elementAccordion[i].nextElementSibling;
    if (elementAccordion[i].classList.contains("active")) {
      content.style.display = "none";
      elementAccordion[i].classList.toggle("active");
    }
  }
}

// Modal
const modal = document.querySelector(".modal");
const orderButton = document.getElementsByClassName("main-content__order");
const closeModal = document.getElementsByClassName("modal-content__close");
orderButton[0].addEventListener("click", function () {
  modal.classList.remove("hidden");
  modal.classList.add("visible");
});
closeModal[0].addEventListener("click", function () {
  modal.classList.remove("visible");
  modal.classList.add("hidden");
});

// Langs Option Menu
const langsButton = document.getElementsByClassName("navbar-flags");
langsButton[0].addEventListener("click", function () {
  document.getElementById("lang-flags").classList.toggle("show");
});

// Scroll option
const scroll = document.querySelectorAll(".menu-option");
scroll.forEach((link) => {
  link.addEventListener("click", function () {
    const element = document.getElementById(link.getAttribute("data-link"));
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
