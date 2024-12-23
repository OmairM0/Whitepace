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
const wrapper = document.querySelector(".wrapper");
const slides = document.querySelectorAll(".wrapper .slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let slideIndex = 0;

slides[slideIndex].style.display = "block";

prev.onclick = function () {
  changeSlide(slideIndex - 1);
};

next.onclick = function () {
  changeSlide(slideIndex + 1);
};

function checkIfSlideIsEnd(n) {
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

function changeSlide(n) {
  slides.forEach((slide) => (slide.style.display = "none"));

  slides[checkIfSlideIsEnd(n)].style.display = "block";
}

// Animated Slide
const slideWrapper = document.querySelector(".slide-wrapper");
const animSlides = document.querySelectorAll(".slide");

animSlides.forEach((slide) => {
  slide.addEventListener("mouseover", function () {
    animSlides.forEach((slide) => {
      slide.style.animationPlayState = "paused";
    });
  });
  slide.addEventListener("mouseout", function () {
    animSlides.forEach((slide) => {
      slide.style.animationPlayState = "running";
    });
  });
});
