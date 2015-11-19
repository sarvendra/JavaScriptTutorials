var size = 8;
var chessBoard = "";
var startCharacter = " ";
for (var row = 0; row < size; row++)
{
	var current = startCharacter;
	for (var col = 0; col < size; col++)
	{
		chessBoard += current;
		if (current == " ")
		{
			current = "#";
		}
		else
		{
			current = " ";
		}
	}
	if (startCharacter == " ")
	{
		startCharacter = "#";
	}
	else
	{
		startCharacter = " ";
	}
	chessBoard += "\n";
}
console.log(chessBoard);
