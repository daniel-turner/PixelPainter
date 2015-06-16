function Grid(height,width) {

  this.height = height;
  this.width = width;

  this.draw = function(parent,clickEvent, colors) {

    // var ratioW = Math.floor((window.innerWidth || document.documentElement.offsetWidth) / this.width);
    // var ratioH = Math.floor((window.innerHeight || document.documentElement.offsetHeight) / this.height);

    var style = getComputedStyle(parent);

    // var ratioW = 600 / this.width;
    // var ratioH = 600 / this.height;

    var ratioW = Math.floor((style.width.slice(0,style.width.length-2) * 0.8) / this.width);
    //var ratioW = Math.floor(style.width.slice(0,style.width.length-2) / (this.width+2));
    //var ratioH = Math.floor(style.height.slice(0,style.height.length-2) / this.height);

    var grid = document.createElement('div');
    grid.className = 'grid';
    //grid.style.width = (ratioW * this.width) + 'px';
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

            cell.addEventListener('click', clickEvent);
            row.appendChild(cell);
        }

        grid.appendChild(row);
    }

    parent.appendChild(grid);
  };
};