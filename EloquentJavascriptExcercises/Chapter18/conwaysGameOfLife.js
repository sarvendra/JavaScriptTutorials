function Game(size) {
  this.oldGrid = new Array(size);
  this.newGrid = new Array(size);
  var i, j;
  for (i = 0; i < size; i++) {
      this.oldGrid[i] = new Array(size);
      this.newGrid[i] = new Array(size);
      for (j = 0; j < size; j++) {
        var value = Math.floor(Math.random() + 0.5);
        this.newGrid[i][j] = value;
      }
  }
}

Game.prototype.turn = function() {
  // copy to oldgrid
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      this.oldGrid[i][j] = this.newGrid[i][j];
    }
  }
  for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
      var live = 0;
      // find neighbours
      for (y = -1; y < 2; y++) {
        for (x = -1; x < 2; x++) {
          if (i+y < 0 || i + y >= size || j + x < 0 || j+x > size) {
            continue;
          }
          if (!(x === 0 && y === 0) && this.oldGrid[i + y][j + x]) {
            live++;
          }
        }
      }
      if (!this.newGrid[i][j]) {
        if (live === 3) {
          this.newGrid[i][j] = 1;
        }
      } else {
        if (live < 2 || live > 3) {
          this.newGrid[i][j] = 0;
        }
      }
    }
  }
}

Game.prototype.setCell = function(x, y, value) {
  this.newGrid[y][x] = value;
}

Game.prototype.getCell = function(x, y) {
  return this.newGrid[y][x];
}