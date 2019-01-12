var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var pickedColor = colors[3];

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

//Grab Squares
var squares = document.querySelectorAll(".squares");
//Assign Squares colors
for (var i = 0; i < squares.length; i++) {
  // add colors
  squares[i].style.backgroundColor = colors[i];
  //add events
  squares[i].addEventListener("click", function(){
    //(This current Square)
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      alert("Correct! :D");
    }else{
      alert("Incorrect :(")
    }
  });
}
