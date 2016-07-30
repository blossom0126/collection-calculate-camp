'use strict';

function get_letter_interval(number_a, number_b) {
  function traverse(arr,fun){
    for(var i = 0;i < arr.length;i++) {
      fun(arr[i],i);
    }
  }
  function range(a, b) {
    var step = Math.abs(b - a) / (b - a);
    var count = (b - a) / step;
    let arr = [];
    if (a === b) {
      arr.push(a);
    }
    else {
      for (var i = 0; i <= count; i++) {
        var item = a + i * step;
        arr.push(item);
      }
    }
    return arr;
  }
  let arr=range(number_a, number_b);
  let result=[];
 traverse(arr,function(item){
   result.push(String.fromCharCode(item+96));
 });
  return result;
}


module.exports = get_letter_interval;
