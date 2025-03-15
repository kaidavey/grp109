 /* 
 * Author: Katherine L
 * Date: 03/14/25
 * Description: This script controls an interactive image carousel with auto-scrolling, manual navigation with buttons and image clicks, and an elapsed time display.
 */

document.addEventListener("DOMContentLoaded", function() {
    // Define images and sounds
    const slides = [
        "images/CampusImage1.png",
        "images/CampusImage2.png",
        "images/CampusImage3.png",
        "images/CampusImage4.png",
        "images/CampusImage5.png",
        "images/CampusImage6.png",
        "images/CampusImage7.png"
    ];

    let currentIndex = 0;
    const cycleTime = 3; // Seconds per slide
    let elapsed = cycleTime;
    let timerInterval;

    // Load sound effects
    const rewindSound = new Audio("sounds/rewind.mp3");
    const advanceSound = new Audio("sounds/advance.mp3");

    // Get DOM elements
    const carouselImage = document.getElementById("carousel-image");
    const counterEl = document.querySelector(".carousel-counter");
    const elapsedTimeEl = document.querySelector(".elapsed-time");
    const progressFill = document.querySelector(".progress-fill");
    const carouselContainer = document.querySelector(".carousel-container");

    // Update displayed slide
    function updateSlide() {
        carouselImage.src = slides[currentIndex];
        counterEl.textContent = `Image ${currentIndex + 1} of ${slides.length}`;
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
        advanceSound.play();
        updateSlide();
        startTimer();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        rewindSound.play();
        updateSlide();
        startTimer();
    }

    // Click event to detect left or right side clicks
    carouselContainer.addEventListener("click", (event) => {
        const { left, width } = carouselContainer.getBoundingClientRect();
        const clickX = event.clientX - left;
        
        if (clickX < width / 2) {
            prevSlide(); // Click on left side
        } else {
            nextSlide(); // Click on right side
        }
    });

    // Initialize
    updateSlide();
    startTimer();
});
