
const table = document.getElementById("pixelCanvas");
const tableSize = document.querySelector("#sizePicker");

//make grid upon clicking submit button
tableSize.addEventListener("submit", function(event){
   event.preventDefault();
   makeGrid();
});


//generate grid based on user's input
function makeGrid() {
  table.innerHTML=""; //clears previous grid
  // variables for size of the grid(height and width) and color
  var color = document.getElementById("colorPicker");
  var height = document.getElementById("inputHeight").value;
  var width = document.getElementById("inputWidth").value;
//for loop function to draw the grid
  for(var x = 0; x < height; x++){
    const row = table.insertRow(x);
    for(var y = 0; y < width; y++){
      const cell = row.insertCell(y);
      //set colour of the selected cell based on user's choice of color
      cell.addEventListener('click', function(event) {
        cell.style.backgroundColor = color.value;
      });
    }
  }
}
