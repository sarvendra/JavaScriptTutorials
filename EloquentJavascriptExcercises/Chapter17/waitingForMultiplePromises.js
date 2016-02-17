function all(promises) {
  return new Promise(function(succeed, fail) {
    var results = [];
    var left = promises.length;
    promises.forEach(function(promise, i) {
      promise.then(function(result) {
        results[i] = result;
        left--;
        if (left == 0)
          succeed(results);
      }, function(error) {
        fail(error);
      });
    });
    if (promises.length == 0)
      succeed(results);
  });
}