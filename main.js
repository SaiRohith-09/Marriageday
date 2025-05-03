let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500); // change every 2.5 seconds
}
showSlides();

function plusSlides(n) {
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  showSlidesManually();
}

function showSlidesManually() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

window.onload = function() {
    var video = document.getElementById("background-video");
    video.muted = false; // Unmute video after page load
    video.play(); // Ensure the video plays
};
