'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
 return collection.reduce((acc,cur)=>{acc+=cur;return acc})
}

module.exports = calculate_elements_sum;

