var range = function(start, end)
{
	var arr = [];
	for (var index = start; index <= end; index++)
	{
		arr.push(index);
	}
	return arr;
}

var sum = function(input)
{
	var result = 0;
	for (var index = 0; index < input.length; index++)
	{
		result += input[index];
	}
	return result;
}

after modification:

var compareIncreasingNumbers = function(num1, num2)
{
	return num1 <= num2;
}

var compareDecreasingNumbers = function(num1, num2)
{
	return num1 >= num2;
}

var range = function(start, end)
{
	var step = 1;
	if (arguments.length == 3)
	{
		step = arguments[2];
	}
	var arr = [];
	var compare;
	if (start < end)
	{
		compare = compareIncreasingNumbers;
	}
	else
	{
		compare = compareDecreasingNumbers;
	}
	
	for (var index = start; compare(index, end); index += step)
	{
		arr.push(index);
	}		

	return arr;
}