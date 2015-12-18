function Tiger() {
  this.energy = 50;
  this.movement = randomElement([0, 1, 2]);
  this.dir = "s";
}

Tiger.prototype.act = function(view) {
  var space = view.find(" ");
  if (space && this.energy > 90){
    return {type: "reproduce", direction: space};
  }
  var smartPlantEater = view.find("O");
  if (smartPlantEater){
    return {type: "eat", direction: smartPlantEater};
  }
  if (space){
    var start = this.dir;
    if (this.movement == 0){
      if (view.look(dirPlus(this.dir, -3)) == "O")
        start = this.dir = dirPlus(this.dir, -2);
      while (view.look(this.dir) != " ") {
        this.dir = dirPlus(this.dir, 1);
        if (this.dir == start) break;
      }
    }
    else if (this.movement == 1){
     if (view.look(dirPlus(this.dir, 3)) == "O")
        start = this.dir = dirPlus(this.dir, 2);
      while (view.look(this.dir) != " ") {
        this.dir = dirPlus(this.dir, -1);
        if (this.dir == start) break;
      } 
    }
    else{
      this.dir = space;
    }
    return {type: "move", direction: this.dir};
  }
};