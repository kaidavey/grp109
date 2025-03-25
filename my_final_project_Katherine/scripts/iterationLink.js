/*
    Author: James Kim
    Date: 2/21/25
    Description: Basic script which shows the iteration page link only after user input
*/

function newlink(){
    // Create Link
    let a = document.createElement('a');
    //Create a text node
    let link = document.createTextNode("Next Page");
    //Append the text node to link element
    a.appendChild(link);
    //Title of link
    a.title = "Home link";
    //Link to iteration page
    a.href = "home.html";
    //Link Styling
    a.style.display = "block";
    a.style.padding = "10px 5px";
    a.style.margin = "0 auto";
    a.style.marginBottom = "20px";
    a.style.width = "22%";
    a.style.color = "white";
    a.style.fontSize = "10.5pt";
    a.style.textDecoration = "none";
    a.style.backgroundColor = "#0055A4";
    a.style.borderRadius = "5px";
    a.style.transition = "0.3s";
    a.style.cursor = "pointer";
    //Append the a element to an empty div before the form element
    let location = document.getElementById("next");
    location.appendChild(a);
    //Remove the Login Button
    document.getElementById("submit").remove();
  }
