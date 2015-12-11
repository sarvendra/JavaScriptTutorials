function Vector(x, y)
{
	this.x = x;
	this.y = y;
}

Vector.prototype.plus = function(targetVector){
	return new Vector(this.x + targetVector.x, this.y + targetVector.y);
}

Vector.prototype.minus = function(targetVector){
	return new Vector(this.x - targetVector.x, this.y - targetVector.y);
}

Object.defineProperty(Vector.prototype, "length", {
	get: function(){
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
});