// Selecting Original Div
let myOriginalDiv = document.querySelector(".original");

// Selecting the 4 squares
let myRedSquare = document.querySelector(".red");
let myGreenSquare = document.querySelector(".green");
let myBlueSquare = document.querySelector(".blue");
let myBlackSquare = document.querySelector(".black");

myRedSquare.addEventListener("click", function () {
  myOriginalDiv.style.cssText = "background-color: red";
});

myGreenSquare.addEventListener("click", function () {
  myOriginalDiv.style.cssText = "background-color: green";
});

myBlueSquare.addEventListener("click", function () {
  myOriginalDiv.style.cssText = "background-color: blue";
});

myBlackSquare.addEventListener("click", function () {
  myOriginalDiv.style.cssText = "background-color: black";
});
