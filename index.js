// Write your code here!
document.querySelector("#main").remove();

let x = document.createElement("h1");
x.id = "victory";
x.innerHTML = "YOUR-NAME is the champion"; // :)

let newHeader = document.body.appendChild(x);
