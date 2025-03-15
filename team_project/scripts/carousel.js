 /* 
 * Author: Katherine L
 * Date: 03/14/25
 * Description: This script controls an interactive image carousel with auto-scrolling, manual navigation with buttons and image clicks, and an elapsed time display.
 */

document.addEventListener("DOMContentLoaded", function() {
    const slides = [
    "https://kaidavey.github.io/grp109/team_project/images/CampusImage1.png",
    "https://kaidavey.github.io/grp109/team_project/images/CampusImage2.png",
    "https://kaidavey.github.io/grp109/team_project/images/CampusImage3.png",
    "https://kaidavey.github.io/grp109/team_project/images/CampusImage4.png",
    "https://kaidavey.github.io/grp109/team_project/images/CampusImage5.png",
    "https://kaidavey.github.io/grp109/team_project/images/CampusImage6.png",
    "https://kaidavey.github.io/grp109/team_project/images/CampusImage7.png"
];

    let currentIndex = 0;
    const cycleTime = 3; // Seconds per slide
    let elapsed = cycleTime;
    let timerInterval;

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

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    updateSlide();
    startTimer();
});
