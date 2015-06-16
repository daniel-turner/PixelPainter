function Grid(height,width) {

  this.height = height;
  this.width = width;

  this.draw = function(parent, eventType, eventCallback, colors) {

    var style = getComputedStyle(parent);

    var ratioW = Math.floor((style.width.slice(0,style.width.length-2) * 0.8) / this.width);

    var grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.width = style.width;
    grid.style.height = (ratioW * this.height) + 'px';

    var colorCount = 0;

    for (var i = 0; i < this.height; i++) {

      var row = document.createElement('div');
      row.className = 'row';
      row.style.clear = "left";

        for (var p = 0; p < this.width; p++) {
            var cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.height = ratioW + 'px';
            cell.style.width = ratioW + 'px';
            if(colors !== undefined) {

              cell.style.backgroundColor = colors[colorCount];
              colorCount++;
            }
            cell.style.border = '1px solid black';

            if(eventType = "mousedown") {
              cell.addEventListener('mousedown', eventCallback);
            }
            if(eventType = "mousein") {
              cell.addEventListener('mousein', eventCallback);
            }
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }

    parent.appendChild(grid);
  };
};