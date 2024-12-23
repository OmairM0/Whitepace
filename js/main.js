const slideWrapper = document.querySelector(".slide-wrapper");
const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("mouseover", function () {
    slides.forEach((slide) => {
      slide.style.animationPlayState = "paused";
    });
  });
  slide.addEventListener("mouseout", function () {
    slides.forEach((slide) => {
      slide.style.animationPlayState = "running";
    });
  });
});
