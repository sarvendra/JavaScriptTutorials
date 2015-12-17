function SmartPlantEater() {
  this.energy = 20;
  this.counter = randomElement([0, 1, 2]);
  this.movement = randomElement([0, 1]);
  this.dir = "s";
}

SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  var critter = view.find("~");
  if ((space && this.energy > 100) || (this.energy > 60 && space && critter){
    this.counter = 1;
    return {type: "reproduce", direction: space};
  }
  var plant = view.find("*");
  if (plant && this.counter == 2){
    this.counter = 0;
    return {type: "eat", direction: plant};
  }
  if (this.counter < 2){
    this.counter++;
  }
  if (space){
    var start = this.dir;
    if (this.movement == 0){
      if (view.look(dirPlus(this.dir, -3)) == "*")
        start = this.dir = dirPlus(this.dir, -2);
      while (view.look(this.dir) != " ") {
        this.dir = dirPlus(this.dir, 1);
        if (this.dir == start) break;
      }
    }
    else{
     if (view.look(dirPlus(this.dir, 3)) == "*")
        start = this.dir = dirPlus(this.dir, 2);
      while (view.look(this.dir) != " ") {
        this.dir = dirPlus(this.dir, -1);
        if (this.dir == start) break;
      } 
    }
    return {type: "move", direction: this.dir};
  }
};

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}