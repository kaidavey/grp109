/*
    Author: Kai Davey
    Date: 3/15/25
    Description: Added functionality to 'Go to Change Log' Button.
 */

// Store the Button in var
var logButton = document.getElementById("log");
// Add event listener to button
logButton.addEventListener("click", function() {
    // Go to iteration page
    window.location.href = "iteration.html";
});