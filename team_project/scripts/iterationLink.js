/*  Author: James Kim
    Date: 2/21/25    
    Description: Basic script which shows the iteration page link only after user input
*/
function newlink(){
    //Create a element
    let a = document.createElement('a');
    //Create a text node
    let link = document.createTextNode("Click here to be directed to the iteration page.");
    //Append the text node to link element
    a.appendChild(link);
    //Title of link
    a.title = "Iteration link";
    //Link to iteration page
    a.href = "iteration.html";
    //Append the a element to the body (the div after form element)
    document.getElementById("linktoI").appendChild(a);
  }
