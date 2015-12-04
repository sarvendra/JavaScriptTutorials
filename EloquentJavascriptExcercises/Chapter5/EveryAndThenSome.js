var every = function(array, predicate){
	var isTrue = true;
	for (var i = 0; i < array.length; i++){
		isTrue = isTrue && predicate(array[i]);
		if (!isTrue){
			break;
		}
	}
	return isTrue;
}

var some = function(array, predicate){
	var isTrue = false;
	for (var i = 0; i < array.length; i++){
		isTrue = isTrue || predicate(array[i]);
		if (isTrue){
			break;
		}
	}
	return isTrue;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false