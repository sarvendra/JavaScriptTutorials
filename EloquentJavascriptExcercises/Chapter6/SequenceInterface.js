function logFive(sequence){
  var counter = 5;
  while(counter && !sequence.IsEmpty()){
    console.log(sequence.next());
    counter--;
  }
}

function ArraySeq(arr){
  this.arr = arr;
  this.current = -1;
}

ArraySeq.prototype.next = function(){
  return this.arr[++this.current];

}

ArraySeq.prototype.IsEmpty = function(){
  return this.arr.length - (this.current + 1) === 0;
}

function RangeSeq(start, end){
  this.start = start;
  this.end = end;
}

RangeSeq.prototype.next = function(){
 return this.start++; 
}

RangeSeq.prototype.IsEmpty = function(){
  return this.end < this.start;
}

logFive(new ArraySeq([1, 2]));
logFive(new RangeSeq(100, 1000));