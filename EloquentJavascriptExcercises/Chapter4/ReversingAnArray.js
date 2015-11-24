var reverseArray = function(arr)
{
	var newArray = [];
	for (var index = arr.length - 1; index >= 0; index--)
	{
		newArray.push(arr[index]);
	}
	return newArray;
}

var reverseArrayInPlace = function(arr)
{
	for (var index = 0; index < arr.length / 2 - 1; index++)
	{
		var temp = arr[index];
		arr[index] = arr[arr.length - index - 1];
		arr[arr.length - index - 1] = temp;
	}
}