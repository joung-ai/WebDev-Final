
// HERO AUTO SLIDER//

document.addEventListener("DOMContentLoaded", function () {

  let slides = document.querySelectorAll(".slide");
  let slideIndex = 0;

  function showSlide() {

    slides.forEach(slide =>
      slide.classList.remove("active")
    );

    slides[slideIndex].classList.add("active");

    slideIndex = (slideIndex + 1) % slides.length;
  }

  if (slides.length > 0) {

    showSlide();

    setInterval(showSlide, 4000);
  }

});

// NAVBAR SCROLL EFFECT

const nav = document.querySelector("nav");

if(document.body.classList.contains("home-page")){

  window.addEventListener("scroll", function () {

    nav.classList.toggle(
      "slidedown",
      window.scrollY > 50
    );

  });

}
