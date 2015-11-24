var deepEqual = function(obj1, obj2)
{
	if (obj1 != null && obj2 != null)
	{
		if (typeof obj1 == "object")
		{
			var isEqual = true;
			for (var prop in obj1)
			{
				if (obj2[prop] != undefined)
				{
					isEqual = isEqual && deepEqual(obj1[prop], obj2[prop]);
				}
				else
				{
					isEqual = false;
					break;
				}
			}
			return isEqual;
		}
		else 
		{
			return (obj1 === obj2);
		}
	}
	if (obj1 == null && obj2 == null)
		return true;
	return false;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));