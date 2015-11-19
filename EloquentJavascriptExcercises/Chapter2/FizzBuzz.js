var counter = 1;
while (counter <= 100)
{
	if (counter % 3 == 0)
	{
		console.log("Fizz");
	}
	else if (counter % 5 == 0)
	{
		console.log("Buzz");
	}
	else
	{
		console.log(counter);
	}
	counter++;
}

after modification: 

var counter = 1;
while (counter <= 100)
{
	if (counter % 3 == 0 && counter % 5 == 0)
	{
		console.log("FizzBuzz");
	}
	else if (counter % 3 == 0)
	{
		console.log("Fizz");
	}
	else if (counter % 5 == 0)
	{
		console.log("Buzz");
	}
	else
	{
		console.log(counter);
	}
	counter++;
}