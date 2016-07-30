'use strict';

function hybrid_operation(collection) {

  //在这里写入代码
  return collection.map(cur=>cur * 3 + 2).reduce((acc, cur)=> {
    acc += cur
    return acc;
  })
}

module.exports = hybrid_operation;

