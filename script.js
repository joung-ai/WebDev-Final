
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

window.addEventListener("scroll", function () {

  nav.classList.toggle("slidedown", window.scrollY > 50);

});


// HOUSE A SLIDER//


const propertyImages = [

  "images/House_A_1.jpg",
  "images/House_A_2.jpg",
  "images/House_A_3.jpg",
  "images/House_A_4.jpg",
  "images/House_A_5.jpg",
  "images/House_A_6.jpg",
  "images/House_A_7.jpg",
  "images/House_A_8.jpg",
  "images/House_A_9.jpg",
  "images/House_A_10.jpg"

];

let current = 0;

const slider = document.getElementById("slider");


function next() {

  current++;

  if (current >= propertyImages.length) {
    current = 0;
  }

  slider.src = propertyImages[current];

}


function prev() {

  current--;

  if (current < 0) {
    current = propertyImages.length - 1;
  }

  slider.src = propertyImages[current];

}


// HOUSE B SLIDER//


const propertyImages = [

  "images/House_B_1.jpg",
  "images/House_B_2.jpg",
  "images/House_B_3.jpg",
  "images/House_B_4.jpg",
  "images/House_B_5.jpg",
  "images/House_B_6.jpg",
  "images/House_B_7.jpg",
  "images/House_B_8.jpg",
  "images/House_B_9.jpg",
  "images/House_B_10.jpg"

];

let current = 0;

const slider = document.getElementById("slider");

function next() {

  current++;

  if (current >= propertyImages.length) {
    current = 0;
  }
  slider.src = propertyImages[current];
}

function prev() {

  current--;

  if (current < 0) {
    current = propertyImages.length - 1;
  }
  slider.src = propertyImages[current];
}