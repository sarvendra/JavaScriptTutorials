topEnv["array"] = function(){
  return Array.prototype.slice.call(arguments, 0);;
};

topEnv["length"] = function(array){
  return array.length;
};

topEnv["element"] = function(array, n){
  return array[n];
};
