 /* 
 * Author: Katherine L
 * Date: 03/14/25
 * Description: This script controls an interactive image carousel with auto-scrolling, manual navigation with buttons and image clicks, and an elapsed time display.
 */

document.addEventListener("DOMContentLoaded", function () {
    /*** Get elements from the HTML ***/
    const carousel = document.querySelector(".carousel"); 
    const images = document.querySelectorAll(".carousel img"); 
    const counter = document.querySelector(".carousel-counter"); 
    const elapsedTimeDisplay = document.querySelector(".elapsed-time"); 
    const leftBtn = document.querySelector(".left-btn"); 
    const rightBtn = document.querySelector(".right-btn"); 
    const progressFill = document.querySelector(".progress-fill"); 

    /*** Set up important numbers ***/
    let index = 0; 
    let interval; 
    let elapsedTime = 0; 
    const totalImages = images.length; 
    
    /*** Load the sound files ***/
    const soundRewind = new Audio("https://raw.githubusercontent.com/kaidavey/grp109/main/team_project/sounds/rewind.mp3"); 
    const soundAdvance = new Audio("https://raw.githubusercontent.com/kaidavey/grp109/main/team_project/sounds/advance.mp3");
 
    /*** Move the carousel to the correct image ***/
    function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`; 
        counter.innerText = `Image ${index + 1} of ${totalImages}`;
        elapsedTime = 0; // Reset the timer
        updateElapsedTime();
        resetProgressBar();
    }

    /*** Update the elapsed time display ***/
    function updateElapsedTime() {
        elapsedTimeDisplay.innerText = `Elapsed: ${elapsedTime}s`; 
    }

    /*** Start auto-scrolling every 3 seconds ***/
    function startAutoScroll() {
        interval = setInterval(() => {
            elapsedTime++; 
            updateElapsedTime();
            if (elapsedTime >= 3) { 
                index = (index + 1) % totalImages; 
                updateCarousel();
            }
        }, 1000); // Update every second
        resetProgressBar();
    }

    /*** Stop auto-scrolling and restart when user interacts ***/
    function resetScroll() {
        clearInterval(interval); 
        elapsedTime = 0; 
        updateElapsedTime();
        startAutoScroll(); 
    }

    /*** Reset and restart the progress bar ***/
    function resetProgressBar() {
        progressFill.style.transition = "none"; 
        progressFill.style.width = "0%"; 
        setTimeout(() => {
            progressFill.style.transition = "width 3s linear"; 
            progressFill.style.width = "100%"; 
        }, 10);
    }

    /*** Move backward when clicking the left button ***/
    leftBtn.addEventListener("click", () => {
        index = index > 0 ? index - 1 : totalImages - 1; 
        soundRewind.currentTime = 0;
        soundRewind.play(); 
        updateCarousel(); 
        resetScroll(); 
    });

    /*** Move forward when clicking the right button ***/
    rightBtn.addEventListener("click", () => {
        index = (index + 1) % totalImages; 
        soundAdvance.currentTime = 0; 
        soundAdvance.play(); 
        updateCarousel(); 
        resetScroll(); 
    });

    /*** Move images when clicking on the left or right side of an image ***/
    carousel.addEventListener("click", (e) => {
        const clickX = e.clientX - carousel.getBoundingClientRect().left; 
        const halfWidth = carousel.offsetWidth / 2; 

        if (clickX < halfWidth) { 
            // If clicked on the left side, move backward
            index = index > 0 ? index - 1 : totalImages - 1;
            soundRewind.currentTime = 0;
            soundRewind.play();
        } else {
            // If clicked on the right side, move forward
            index = (index + 1) % totalImages;
            soundAdvance.currentTime = 0;
            soundAdvance.play();
        }

        updateCarousel(); // Move the images
        resetScroll(); // Reset the auto-scroll timer
    });

    /*** Make sure the carousel width matches the number of images ***/
    carousel.style.width = `${totalImages * 100}%`; 

    /*** Start auto-scrolling when the page loads ***/
    startAutoScroll();
});
