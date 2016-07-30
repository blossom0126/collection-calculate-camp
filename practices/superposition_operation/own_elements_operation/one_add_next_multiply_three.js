'use strict';
function one_add_next_multiply_three(collection) {
  let list = Array.from({length: collection.length - 1}, (v, k)=>k);
  return list.map((item, k)=>collection[k] + collection[k + 1]).map(item=> {
    return item *= 3
  })


}
module.exports = one_add_next_multiply_three;
