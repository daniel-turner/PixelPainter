window.onload = function() {

  var selectedColor = "#FFFFFF";

  function pickerClick(event) {

    selectedColor = this.style.backgroundColor;
  };

  function canvasClick(event) {

    console.log("Canvas mousein");

    if(buttonDown) {

        this.style.backgroundColor = selectedColor;
    }
  };

  var colors = [
    "#AA3C39", "#FFACAA", "#D46D6A", "#801815", "#550200", "#AA9639", "#FFF0AA",
    "#D4C26A", "#806D15", "#554600", "#403075", "#877CB0", "#605292", "#261758",
    "#12073B", "#2D8632", "#86C98A", "#54A759", "#116416", "#004304"
  ];

  var buttonDown = false;

  document.addEventListener('mousedown', function() { buttonDown = true; });
  document.addEventListener('mouseup', function() { buttonDown = false; });

  var grid = new Grid(5,4);
  var container = document.getElementById("toolMenu");

  grid.draw(container, "mousedown", pickerClick, colors);

  grid = new Grid(30,40);
  container = document.getElementById("canvas");

  grid.draw(container, "mousein", canvasClick);
}

