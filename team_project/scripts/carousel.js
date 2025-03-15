 /* 
 * Author: Katherine L
 * Date: 03/14/25
 * Description: This script controls an interactive image carousel with auto-scrolling, manual navigation with buttons and image clicks, and an elapsed time display.
 */

document.addEventListener("DOMContentLoaded", function () {
    /** Elements from HTML  **/
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const counter = document.querySelector(".carousel-counter");
    const elapsedTimeDisplay = document.querySelector(".elapsed-time");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const progressFill = document.querySelector(".progress-fill");

    /** Carousel Variables **/
    let index = 0;
    let interval;
    let elapsedTime = 0;
    const totalImages = images.length;
    
    /** Load Sound Files **/
    const soundRewind = new Audio("https://raw.githubusercontent.com/kaidavey/grp109/main/team_project/sounds/rewind.mp3");
    const soundAdvance = new Audio("https://raw.githubusercontent.com/kaidavey/grp109/main/team_project/sounds/advance.mp3");

    /** Update Carousel Position **/
    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
        counter.innerText = `Image ${index + 1} of ${totalImages}`;
        elapsedTime = 0; // Reset timer
        updateElapsedTime();
        resetProgressBar();
    }

    /** Update Elapsed Time Display **/
    function updateElapsedTime() {
        elapsedTimeDisplay.innerText = `Elapsed: ${elapsedTime}s`;
    }

    /** Start Auto-Scroll **/
    function startAutoScroll() {
        interval = setInterval(() => {
            elapsedTime++; // Increment timer
            updateElapsedTime();
            if (elapsedTime >= 3) {
                index = (index + 1) % totalImages;
                updateCarousel();
            }
        }, 1000); // Update every second
        resetProgressBar();
    }

    /** Reset Auto-Scroll When User Interacts With It **/
    function resetScroll() {
        clearInterval(interval);
        elapsedTime = 0;
        updateElapsedTime();
        startAutoScroll();
    }

    /** Reset Progress Bar Animation **/
    function resetProgressBar() {
        progressFill.style.transition = "none";
        progressFill.style.width = "0%";
        setTimeout(() => {
            progressFill.style.transition = "width 3s linear";
            progressFill.style.width = "100%";
        }, 10);
    }

    /** Left Button Click Event (Rewind) **/
    leftBtn.addEventListener("click", () => {
        index = index > 0 ? index - 1 : totalImages - 1;
        soundRewind.currentTime = 0;
        soundRewind.play();
        updateCarousel();
        resetScroll();
    });

    /** Right Button Click Event (Advance) **/
    rightBtn.addEventListener("click", () => {
        index = (index + 1) % totalImages;
        soundAdvance.currentTime = 0;
        soundAdvance.play();
        updateCarousel();
        resetScroll();
    });

    /** Click Event on Images (Left or Right Side) **/
    carousel.addEventListener("click", (e) => {
        const clickX = e.clientX - carousel.getBoundingClientRect().left;
        const halfWidth = carousel.offsetWidth / 2;

        if (clickX < halfWidth) {
            index = index > 0 ? index - 1 : totalImages - 1;
            soundRewind.currentTime = 0;
            soundRewind.play();
        } else {
            index = (index + 1) % totalImages;
            soundAdvance.currentTime = 0;
            soundAdvance.play();
        }

        updateCarousel();
        resetScroll();
    });

    /** Ensure Carousel Width Matches Image Count **/
    carousel.style.width = `${totalImages * 100}%`;

    /** Start Auto-Scrolling on Page Load **/
    startAutoScroll();
});
