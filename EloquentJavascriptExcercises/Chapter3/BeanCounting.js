var countBs = function(sourceString)
{
	var count = 0;
	for (var i = 0; i < sourceString.length; i++)
	{
		if (sourceString.charAt(i) === "B")
			count++;
	}
	return count;
}

after modification:

var countChar = function(sourceString, targetChar)
{
	var count = 0;
	for (var i = 0; i < sourceString.length; i++)
	{
		if (sourceString.charAt(i) === targetChar)
			count++;
	}
	return count;
}