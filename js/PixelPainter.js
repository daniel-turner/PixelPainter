var PixelPainter = function(canvasHeight,canvasWidth) {

  if(typeof canvasHeight == 'number' && !isNaN(canvasHeight) ) {

    //valid
  } else {

    throw new Error("Height parameter for PixelPainter was invalid.");
  }

  if(typeof canvasWidth == 'number' && !isNaN(canvasWidth) ) {

    //valid
  } else {

    throw new Error("Width parameter for PixelPainter was invalid.");
  }

  var selectedColor = "#FFFFFF";
  var buttonDown = false;

  var colors = [
    "#AA3C39", "#FFACAA", "#D46D6A", "#801815", "#550200", "#AA9639", "#FFF0AA",
    "#D4C26A", "#806D15", "#554600", "#403075", "#877CB0", "#605292", "#261758",
    "#12073B", "#2D8632", "#86C98A", "#54A759", "#116416", "#004304", "#277552",
    "#67B08F", "#43936F", "#125838", "#053B22", "#AA8739", "#FFDF95", "#D4B161",
    "#80611B", "#553D07", "#7D2A69", "#BC6EA8", "#9D4888", "#5E144B", "#3F0530",
    "000000"
  ];

  //mouse events
  var pickerEvent = function(event) {

    if(event.type === 'click') {

      selectedColor = this.style.backgroundColor;
    }

    if(event.type === 'mouseover') {

      if(buttonDown) {

        selectedColor = this.style.backgroundColor;
      }
    }

    if(event.type === 'mousedown') {

      selectedColor = this.style.backgroundColor;
    }

    if(event.type === 'mouseup') {

      selectedColor = this.style.backgroundColor;
    }
  };

  var canvasEvent = function(event) {

    if(event.type === 'click') {

      this.style.backgroundColor = selectedColor;
    }

    if(event.type === 'mouseover') {

      if(buttonDown) {

        this.style.backgroundColor = selectedColor;
      }
    }

    if(event.type === 'mousedown') {

      this.style.backgroundColor = selectedColor;
    }

    if(event.type === 'mouseup') {

      this.style.backgroundColor = selectedColor;
    }
  };

  // button events

  document.addEventListener('mousedown', function() {
    buttonDown = true;
  });
  document.addEventListener('mouseup', function() {
    buttonDown = false;
  });

  //runner

  var container = document.querySelector('#pixelPainter');

  //title
  var title = document.createElement('div');
  title.id = 'titleSpan';
  title.innerHTML = "PIXEL PAINTER";

  //start fresh
  var startFreshButton = document.createElement('div');
  startFreshButton.id = 'startOverButton';
  startFreshButton.innerHTML = "START FRESH";
  startFreshButton.addEventListener('click', function() {

    var cells = document.getElementById('canvas').querySelector('.grid')
    .querySelectorAll('.cell');

    for(var i = 0; i < cells.length; i++) {

      cells[i].style.backgroundColor = "#FFFFFF";
    }
  })

  //lower tool container
  var lowerToolContainer = document.createElement('div');
  lowerToolContainer.id = 'lowerToolContainer';

  var deleteButton = document.createElement('div');
  deleteButton.id = 'deleteButton';
  deleteButton.addEventListener('click',function() {

    selectedColor = "#FFFFFF";
    this.style.backgroundColor = selectedColor;
  })

  var undoButton = document.createElement('div');
  undoButton.id = 'undoButton';
  undoButton.innerHTML = "UNDO";

  lowerToolContainer.appendChild(deleteButton);
  lowerToolContainer.appendChild(undoButton);

  //tool menu
  var toolMenu = document.createElement('div');
  toolMenu.id = 'toolMenu';

  toolMenu.appendChild(title);
  toolMenu.appendChild(startFreshButton);

  //canvas
  var canvas = document.createElement('div');
  canvas.id = 'canvas';

  container.appendChild(toolMenu);
  container.appendChild(canvas);

  //grids
  var pickerGrid = new Grid(6,6);
  var pickerGridVar = pickerGrid.draw(toolMenu, pickerEvent, colors);

  var canvasGrid = new Grid(canvasHeight,canvasWidth);
  var canvasGridDiv = canvasGrid.draw(canvas, canvasEvent);
  canvasGridDiv.addEventListener('mouseout', function() { mousedown = false;});

  toolMenu.appendChild(lowerToolContainer);

};


