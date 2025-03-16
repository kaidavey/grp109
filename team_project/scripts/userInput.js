/*  Author: James Kim
    Date: 2/21/25
    Description: Basic script to store user input and change messages to include user input.
    */
function getUserInputs() {
    // Store username input
    var username = document.getElementById("username").value
    // Store useremail input
    var useremail = document.getElementById("useremail").value
    console.log(username, useremail) //console.log for debugging
    //Change H1 message to include username
    document.getElementById("headerMsg").innerHTML = "We're Glad You're Here, " + username + "!"
    //Change welcome message and include username + useremail
    document.getElementById("welcomeMsg").innerHTML = "Congratulations and welcome to Bellevue College, " + username + "! Your email is " + useremail + ", so remember it because it's important!";
}
