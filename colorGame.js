let colors = [];
let squares = document.querySelectorAll(".squares");

let gameWon = false;
let colorDisplay = document.getElementById("colorDisplay");
let rColorOne;
let rColorTwo;
let rColorThree;

for(let sCount = 0; sCount < squares.length; sCount++)
{
  rColorOne = Math.floor((Math.random() * 255) +1);
  rColorTwo = Math.floor((Math.random() * 255) +1);
  rColorThree = Math.floor((Math.random() * 255) +1);
  colors[sCount] = `rgb(${rColorOne}, ${rColorTwo}, ${rColorThree})`;
}

let pickedColor = colors[Math.floor((Math.random() * colors.length)+0)];

colorDisplay.textContent = pickedColor;


  //Assign Squares colors
  for (let i = 0; i < squares.length; i++) {
    // add colors
    squares[i].style.backgroundColor = colors[i];
    //add events
    squares[i].addEventListener("click", function(){
      //(This current Square)
      let clickedColor = this.style.backgroundColor;
      console.log("Clicked Color:"+clickedColor);
      console.log(pickedColor);
      if(clickedColor === pickedColor){
        alert("Correct! :D");
        
      }else{
        alert("Incorrect :(")
    }
  });
}

