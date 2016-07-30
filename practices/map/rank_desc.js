'use strict';
var rank_desc = function(collection){
  // return [2,3,4,5,6];
  function compare(value1, value2) {
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }
  collection.sort(compare);
  return collection;
};

module.exports = rank_desc;
