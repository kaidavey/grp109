/*  Author: James Kim
    Date: 2/21/25    
    Description: Basic script which shows the iteration page link only after user input
*/
function newlink(){
    //Create a element
    let a = document.createElement('a');
    //Create a text node
    let link = document.createTextNode("Click here to be directed to the Home Page.");
    //Append the text node to link element
    a.appendChild(link);
    //Title of link
    a.title = "Home link";
    //Link to iteration page
    a.href = "home.html";
    //Append the a element to the body (the div after form element)
    document.getElementById("linktoH").appendChild(a);
  }
