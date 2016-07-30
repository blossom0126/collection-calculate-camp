'use strict';
var rank_asc = function(collection){
  // return [6,5,4,3,2];
  function compare(value1, value2) {
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
  collection.sort(compare).reverse();
return collection;
};

module.exports = rank_asc;
