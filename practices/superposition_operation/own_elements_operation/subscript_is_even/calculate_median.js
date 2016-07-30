'use strict';
var calculate_median = function (collection) {
  let result = [];
  result = collection.filter(i=> {
    return i % 2 === 0;
  });
  function median(collection) {
    /*collection.sort((a, b)=>{
     return a > b;
     });*/
    if (collection.length % 2 === 0) {
      return (collection[parseInt(collection.length / 2 - 1)]
        + collection[parseInt(collection.length / 2)]) / 2
    }
    else {
      return collection[parseInt(collection.length / 2)];
    }
  }

  return median(result)
};
module.exports = calculate_median;
