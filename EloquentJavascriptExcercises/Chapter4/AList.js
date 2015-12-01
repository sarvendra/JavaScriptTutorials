var prepend = function(element, list)
{
	var newlist = {};
	newlist["value"] = element;
	newlist["rest"] = list;
	return newlist;
}

var arrayToList = function(arr)
{
	var list = null;
	for (var index = arr.length - 1; index >=0; index--)
	{
		list = prepend(arr[index], list);
	}
	return list;
}

var arrayToListRecur = function(arr)
{
	if (arr.length == 0)
	{
		return null;
	}
	var list = arrayToListRecur(arr.slice(1));
	return prepend(arr[0], list);
}

var listToArray = function(list)
{
	var arr = [];
	var curr = list;
	while (curr != null)
	{
		arr.push(curr.value);
		curr = curr.rest;
	}
	return arr;
}

var list = arrayToList([10,20,30]);
console.log(listToArray(list));

var nth = function(list, n)
{
	var curr = list;
	var index = 0;
	while (curr != null && index < n)
	{
		curr = curr.rest;
		index++;
	}
	if (curr != null)
	{
		return curr.value;
	}
	else
	{
		return undefined; 	
	}
}



var nthRecur = function(list, n)
{
	if (list == null)
		return undefined;
	if (n == 0)
		return list.value;
	return nthRecur(list.rest, n-1);
}

console.log(nth(list, 1));