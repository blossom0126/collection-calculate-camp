'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  return collection.filter(item=>item % 2 !== 0).map(item=>item * 3 + 5).reduce((acc, cur)=>(acc += cur, acc));
}

module.exports = hybrid_operation_to_uneven;

