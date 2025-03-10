/*
    Author: Kai D
    Date: 3/6/25
    Description: This is the javascript function for the Frequently
    Asked Questions section's accordion. Users will be able to click
    to see the answer to the question and click again to hide it.
*/

// Add event listener to the document
document.addEventListener("DOMContentLoaded", function () {
    // Get all of the FAQ question headers (buttons)
    var headers = document.querySelectorAll(".accordion-control");

    // For each of the headers, add an event listener
    headers.forEach(header => {
        // When the user clicks...
        header.addEventListener("click", function () {
            // The next element sibling of the question is the answer div
            var content = this.nextElementSibling;
            // The child element of the header is the button image
            var arrow = this.firstElementChild;
            // If the user clicked and the content is showing...
            if (content.style.display === "block") {
                // Hide the content and change the button to face left
                arrow.style.objectPosition = "top";
                content.style.display = "none";
            } else {
                // Show the contnet and change the button to face down
                arrow.style.objectPosition = "bottom";
                content.style.display = "block";
            }
        });
    });
});
