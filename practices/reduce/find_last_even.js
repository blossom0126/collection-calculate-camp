'use strict';

function find_last_even(collection) {
  //在这里写入代码
  let arr = collection.filter(num=> {
    if (num % 2 === 0) {
      return num;
    }
  });
  return arr[arr.length - 1];
}

module.exports = find_last_even;
