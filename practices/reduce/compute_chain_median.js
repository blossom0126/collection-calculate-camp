'use strict';

function compute_chain_median(collection) {
  //在这里写入代码
  let arr = collection.split('->').sort(function (a, b) {
    return a - b;
  }).map(function (num) {
    return parseInt(num);
  });
  if (arr.length % 2 === 0) {
    return parseFloat((arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2);
  }
  else {
    return arr[arr.length / 2];
  }
}


module.exports = compute_chain_median;
