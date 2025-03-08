/* 
    Author: Katherine L
    Date: 03/07/24
    Description: This script dynamically loads the navigation bar (nav.html) into all pages.
*/

document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html') 
    .then(response => response.text())
    .then(data => document.getElementById('nav-placeholder').innerHTML = data);
});
