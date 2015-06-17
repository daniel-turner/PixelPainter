//mouse
function pickerEvent(event) {

    console.log("Picker event");

    if(event.type === 'click') {

      selectedColor = this.style.backgroundColor;
    }

    if(event.type === 'mouseover') {

      if(buttonDown) {

        selectedColor = this.style.backgroundColor;
      }
    }

    if(event.type === 'mousedown') {

      console.log("picker mousedown");

      selectedColor = this.style.backgroundColor;
    }

    if(event.type === 'mouseup') {

      console.log("picker mouseup");

      selectedColor = this.style.backgroundColor;
    }
  };

  function canvasEvent(event) {

    console.log("Canvas event");

    if(event.type === 'click') {

      console.log('drawing click');

      this.style.backgroundColor = selectedColor;
    }

    if(event.type === 'mouseover') {

      console.log("Button: " + buttonDown);

      if(buttonDown) {

        console.log("drawing mouseover");

        this.style.backgroundColor = selectedColor;
      }
    }

    if(event.type === 'mousedown') {

      console.log("drawing mousedown");

      this.style.backgroundColor = selectedColor;
    }

    if(event.type === 'mouseup') {

      console.log("drawing mouseup");

      this.style.backgroundColor = selectedColor;
    }
  };

  // button
  var buttonDown = false;

  document.addEventListener('mousedown', function() {
    buttonDown = true;
    console.log("button: " + buttonDown);
  });
  document.addEventListener('mouseup', function() {
    buttonDown = false;
    console.log("button: " + buttonDown);
  });