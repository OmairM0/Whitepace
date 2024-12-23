// Menu
const menu = document.querySelector(".menu ul");
const menuIcon = document.querySelector(".menu-icon");
const menuCloseIcon = document.querySelector(".close-icon");

menuIcon.addEventListener("click", function () {
  menu.classList.add("active");
  setTimeout(() => {
    menu.classList.add("active-on");
  }, 0);
});

menuCloseIcon.addEventListener("click", () => {
  menu.classList.remove("active-on");
  setTimeout(() => {
    menu.classList.remove("active");
  }, 300);
});

// Slider
const pricingWrapper = document.querySelector(".pricing .wrapper");
const pricingSlides = document.querySelectorAll(".pricing .wrapper .slide");
const testimonialSlides = document.querySelectorAll(
  ".testimonial .wrapper .slide"
);
const pricingPrev = document.querySelector(".pricing .prev");
const pricingNext = document.querySelector(".pricing .next");
const testimonialPrev = document.querySelector(".testimonial .prev");
const testimonialNext = document.querySelector(".testimonial .next");

let slideIndex = 0;

pricingSlides[slideIndex].style.display = "block";
testimonialSlides[slideIndex].style.display = "block";

pricingPrev.onclick = function () {
  changeSlide(slideIndex - 1, pricingSlides);
};

pricingNext.onclick = function () {
  changeSlide(slideIndex + 1, pricingSlides);
};

testimonialPrev.onclick = function () {
  changeSlide(slideIndex - 1, testimonialSlides);
};

testimonialNext.onclick = function () {
  changeSlide(slideIndex + 1, testimonialSlides);
};

function checkIfSlideIsEnd(n, slides) {
  if (n < 0) {
    slideIndex = slides.length - 1;
    return slideIndex;
  } else if (n >= slides.length) {
    slideIndex = 0;
    return slideIndex;
  } else {
    slideIndex = n;
    return slideIndex;
  }
}

function changeSlide(n, slides) {
  slides.forEach((slide) => (slide.style.display = "none"));

  slides[checkIfSlideIsEnd(n, slides)].style.display = "block";
}
