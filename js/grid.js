function Grid(height,width) {

  this.height = height;
  this.width = width;

  this.draw = function(parent) {

    var ratioW = Math.floor((window.innerWidth || document.documentElement.offsetWidth) / this.width);
    var ratioH = Math.floor((window.innerHeight || document.documentElement.offsetHeight) / this.height);

    var grid = document.createElement('div');
    grid.className = 'grid';
    grid.style.width = (ratioW * width) + 'px';
    grid.style.height = (ratioH * height) + 'px';

    for (var i = 0; i < ratioH; i++) {
        for (var p = 0; p < ratioW; p++) {
            var cell = document.createElement('div');
            cell.style.height = (this.height - 1) + 'px';
            cell.style.width = (this.width - 1) + 'px';
            grid.appendChild(cell);
        }
    }
    //console.log(grid);
    //document.body.appendChild(parent);
    parent.appendChild(grid);
  };
};