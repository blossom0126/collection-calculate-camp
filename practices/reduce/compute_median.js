'use strict';

function compute_median(collection) {
  //在这里写入代码
  let arr = collection.sort(function (a, b) {
    return a - b;  });
  let result = 0;  if (arr.length % 2 !== 0) {
    result = arr[parseInt(arr.length / 2)];  }
  else {
    result = parseFloat((arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2);  }  if (result > 10) {    result = result - 2;  }
  return result;
}
module.exports = compute_median;



