# TwitterUsingSpringMVC

Curl commands to test APIs. Remove escape character from json \ if using platforms other than windows.
User registration: 
curl -X POST -H "Content-Type: application/json" -d "{\"name\":\"sar\", \"email\":\"sarvednra@gmail.com\",
\"password\":\"test\"}" http://localhost:8080/register