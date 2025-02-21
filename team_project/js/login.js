function getUserInputs() {
    // Store username input
    var username = document.getElementById("username").value;
    // Store useremail input
    var useremail = document.getElementById("useremail").value;
    // Store error message
    var errorMsg = document.getElementById("error");
    // Store next page button
    var nextPageButton = document.getElementById("nextPage");
    // Store the submit button
    var loginButton = document.getElementById("submit");

    // Reset all elements on page
    loginButton.style.display = "block";
    document.getElementById("headerMsg").innerHTML = "We're Glad You're Here!";
    document.getElementById("welcomeMsg").innerHTML = "Please log in to access the Bellevue College Accepted Student Portal. Enter your full name and email below.";
    errorMsg.textContent = "";

    // Validation for text input
    var validInput = username.length > 0 && useremail.length > 0;

    // Passed validation?
    if (validInput) {
        console.log(username, useremail); //console.log for debugging
        //Change H1 message to include username
        document.getElementById("headerMsg").innerHTML = "We're Glad You're Here, " + username + "!";
        //Change welcome message and include username + useremail
        document.getElementById("welcomeMsg").innerHTML = "Congratulations and welcome to Bellevue College, " + username + "! Your email is " + useremail + ", so remember it because it's important!";
        loginButton.style.display = "none";
        nextPageButton.style.display = "block";
    } else {
        loginButton.style.display = "block";
        nextPageButton.style.display = "none";
        console.log("User's name or email was invalid.");
        errorMsg.textContent = "Please enter a valid name and email.";
    }
}
