'use strict';

function double_to_one(collection) {
  //在这里写入代码
  let result=[];
  collection.map(item=>{
    if(item.length===undefined){result.push(item)}
    else{
      item.map(num=>{result.push(num)})
    }
  })
  return result;
 
}

module.exports = double_to_one;
