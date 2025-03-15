 /* 
 * Author: Katherine L
 * Date: 03/14/25
 * Description: This script controls an interactive image carousel with auto-scrolling, manual navigation with buttons and image clicks, and an elapsed time display.
 */

document.addEventListener("DOMContentLoaded", function() {
  // Define slides (update the src and text as needed)
  const slides = [
    {
      src: "images/CampusImage1.png",
      alt: "Campus Image 1",
      counterText: "Image 1 of 7",
      description: "A beautiful view of the campus at sunrise."
    },
    {
      src: "images/CampusImage2.png",
      alt: "Campus Image 2",
      counterText: "Image 2 of 7",
      description: "Students walking across campus in the morning light."
    },
    {
      src: "images/CampusImage3.png",
      alt: "Campus Image 3",
      counterText: "Image 3 of 7",
      description: "Modern campus architecture with sleek lines."
    },
    {
      src: "images/CampusImage4.png",
      alt: "Campus Image 4",
      counterText: "Image 4 of 7",
      description: "A panoramic view of the central campus area."
    },
    {
      src: "images/CampusImage5.png",
      alt: "Campus Image 5",
      counterText: "Image 5 of 7",
      description: "Campus in the evening with vibrant lighting."
    },
    {
      src: "images/CampusImage6.png",
      alt: "Campus Image 6",
      counterText: "Image 6 of 7",
      description: "Lush greenery and tranquil spots on campus."
    },
    {
      src: "images/CampusImage7.png",
      alt: "Campus Image 7",
      counterText: "Image 7 of 7",
      description: "A dynamic shot of campus life during a busy day."
    }
  ];

  let currentIndex = 0;
  const cycleTime = 4; // seconds per slide
  let elapsed = cycleTime;
  let timerInterval;

  // Get DOM elements
  const carouselImage = document.getElementById("carousel-image");
  const counterEl = document.getElementById("carousel-counter");
  const elapsedTimeEl = document.getElementById("elapsed-time");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const progressFill = document.querySelector(".progress-fill");

  // Update slide content
  function updateSlide() {
    const slide = slides[currentIndex];
    carouselImage.src = slide.src;
    carouselImage.alt = slide.alt;
    counterEl.innerHTML = `${slide.counterText}<br>${slide.description}`;
    elapsed = cycleTime;
    updateElapsedTime();
    resetProgressBar();
  }

  function updateElapsedTime() {
    elapsedTimeEl.textContent = `Elapsed: ${elapsed}s`;
  }

  function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      elapsed--;
      updateElapsedTime();
      if (elapsed <= 0) {
        nextSlide();
      }
    }, 1000);
    resetProgressBar();
  }

  function resetProgressBar() {
    progressFill.style.transition = "none";
    progressFill.style.width = "0%";
    setTimeout(() => {
      progressFill.style.transition = `width ${cycleTime}s linear`;
      progressFill.style.width = "100%";
    }, 10);
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
    startTimer();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
    startTimer();
  }

  // Button event listeners
  nextBtn.addEventListener("click", () => {
    nextSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
  });

  // Initialize the slideshow
  updateSlide();
  startTimer();
});
