var getNumberOfProperties = function(obj)
{
	var count = 0;
	for (var prop in obj)
	{
		count++;
	}
	return count;
}

var deepEqual = function(obj1, obj2)
{
	if (obj1 === null && obj2 === null)
	{
		return true;
	}
	else if (obj1 !== null && obj2 !== null)
	{
		if (typeof obj1 === "object" && typeof obj2 === "object")
		{
			if (getNumberOfProperties(obj1) != getNumberOfProperties(obj2))
			{
				return false;
			}
			var isEqual = true;
			for (var prop in obj1)
			{
				if (typeof obj2[prop] !== "undefined")
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
	else
	{
		return false;
	}
}