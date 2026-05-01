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

