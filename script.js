let images = [
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/401",
  "https://via.placeholder.com/402"
];

let index = 0;

function next() {
  index = (index + 1) % images.length;
  document.getElementById("slider").src = images[index];
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("slider").src = images[index];
}

// Auto-slide every 5 seconds//

document.addEventListener("DOMContentLoaded", function () {

  let slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
  }

  setInterval(showSlide, 4000);

});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.classList.add("slidedown");
    } else {
        nav.classList.remove("slidedown");
    }
});