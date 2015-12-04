var flatten = function(arrays)
{
	return arrays.reduce(function(prev, curr)
	{
		return prev.concat(curr);
	});
}