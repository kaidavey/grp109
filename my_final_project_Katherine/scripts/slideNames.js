// Name Slideshow
// Select names from HTML
const slides = document.querySelectorAll(".slides p");
// Index
let slideIndex = 0;
// Timer
let intervalId = null;

// Only starts when page is fully loaded 
document.addEventListener("DOMContentLoaded", initializeSlider);

// Starts Slides
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 2000);
    }
}

// Slides
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

// Moves on to next slide
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
