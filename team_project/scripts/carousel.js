 /* 
 * Author: Katherine L
 * Date: 03/14/25
 * Description: This script controls an interactive image carousel with auto-scrolling, manual navigation with buttons and image clicks, and an elapsed time display.
 */

document.addEventListener("DOMContentLoaded", function() {
    const slides = [
    "../images/CampusImage1.png",
    "../images/CampusImage2.png",
    "../images/CampusImage3.png",
    "../images/CampusImage4.png",
    "../images/CampusImage5.png",
    "../images/CampusImage6.png",
    "../images/CampusImage7.png"
];

    let currentIndex = 0;
    const cycleTime = 3; // Auto-scroll interval
    let elapsed = cycleTime;
    let timerInterval;
    let isManualClick = false; // Flag to check manual interaction

    const rewindSound = new Audio("sounds/rewind.mp3");
    const advanceSound = new Audio("sounds/advance.mp3");

    const carouselImage = document.getElementById("carousel-image");
    const counterEl = document.getElementById("carousel-counter");
    const elapsedTimeEl = document.getElementById("elapsed-time");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const progressFill = document.querySelector(".progress-fill");

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
                isManualClick = false; // Reset flag so sounds don’t play
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
        if (isManualClick) {
            advanceSound.play();
        }
        updateSlide();
        startTimer();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        if (isManualClick) {
            rewindSound.play();
        }
        updateSlide();
        startTimer();
    }

    nextBtn.addEventListener("click", () => {
        isManualClick = true;
        nextSlide();
    });

    prevBtn.addEventListener("click", () => {
        isManualClick = true;
        prevSlide();
    });

    updateSlide();
    startTimer();
});
