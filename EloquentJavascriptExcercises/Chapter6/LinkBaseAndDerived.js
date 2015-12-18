function Base(name){
	this.name = name;
}

Base.prototype.foo = function(){
	console.log("Base : foo");
}

Base.prototype.bar = function(){
	console.log("Base : bar");
}

Base.prototype.getName = function(){
	console.log("Base : " + this.name);
}

function Sub(name, y){
	Base.call(this, name);
	this.y = y;
}

inherit(Base, Sub);

Sub.prototype.foo = function(){
	console.log("Sub : foo");
}

Sub.prototype.baz = function(){
	console.log("Sub : baz");
}

Sub.prototype.show = function(){
	console.log(this.y);
}

Sub.prototype.getName = function(){
	console.log("Sub : " + this.name);
}

Sub.prototype.getBase = function(baseMethod){
	return this.constructor.prototype;
}

var inherit = function(base, sub){
	sub.prototype = Object.create(base.prototype);
}

var sub = new Sub("tommy", 20);
console.log(sub.show());
console.log(sub.baz());
console.log(sub.foo());
console.log(sub.bar());
console.log(sub.getName());