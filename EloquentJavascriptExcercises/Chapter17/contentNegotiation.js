function request(type) {
  var req = new XMLHttpRequest();
  req.open("GET", "http://eloquentjavascript.net/author", false);
  req.setRequestHeader("accept", type);
  req.send(null);
  return req.response;
}

var type = ["text/plain",
             "text/html",
             "application/json",
             "application/rainbows+unicorns"];

type.forEach(function(type) {
    console.log(type + "\n", request(type), "\n");
});