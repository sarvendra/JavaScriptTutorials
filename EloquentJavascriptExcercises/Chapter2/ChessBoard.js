var size = 8;
var chessBoard = "";
var startCharacterForRow = " ";
for (var row = 0; row < size; row++)
{
	var currentChar = startCharacterForRow;
	for (var col = 0; col < size; col++)
	{
		chessBoard += currentChar;
		if (currentChar == " ")
		{
			currentChar = "#";
		}
		else
		{
			currentChar = " ";
		}
	}
	if (startCharacterForRow == " ")
	{
		startCharacterForRow = "#";
	}
	else
	{
		startCharacterForRow = " ";
	}
	chessBoard += "\n";
}
console.log(chessBoard);
