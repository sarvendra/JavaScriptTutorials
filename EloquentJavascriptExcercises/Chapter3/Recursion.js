var isEven = function(n)
{
	if (n == 0)
		return true;
	else if (n == 1)
		return false;
	else 
		return isEven(n-2);
}

modified:

var checkIfEven = function(n)
{
	if (n == 0)
		return true;
	else if (n == 1)
		return false;
	else 
		return isEven(n-2);
}

var isEven = function(n)
{
	if (n < 0)
		n = n*-1;
	return checkIfEven(n);
}