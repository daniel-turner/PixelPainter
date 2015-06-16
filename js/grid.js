function Grid(height,width) {

  this.height = height;
  this.width = width;

  this.draw = function(parent) {

    // var ratioW = Math.floor((window.innerWidth || document.documentElement.offsetWidth) / this.width);
    // var ratioH = Math.floor((window.innerHeight || document.documentElement.offsetHeight) / this.height);

    var ratioW = 600 / this.width;
    var ratioH = 600 / this.height;

    var grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.width = (ratioW * width) + 'px';
    grid.style.height = (ratioH * height) + 'px';

    for (var i = 0; i < this.height; i++) {

      var row = document.createElement('div');
      row.className = 'row';

      row.style.clear = "left";

        for (var p = 0; p < this.width; p++) {
            var cell = document.createElement('div');
            cell.className = 'cell';
            cell.style.height = (20) + 'px';
            cell.style.width = (20) + 'px';
            cell.style.float = 'left';
            cell.style.border = '1px solid black';
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }

    parent.appendChild(grid);
  };
};