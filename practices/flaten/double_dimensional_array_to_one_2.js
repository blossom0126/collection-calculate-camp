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
  let str=[];
  result.map(item=>{
    !RegExp(item,'g').test(str.join(','))&&(str.push(item))
  })
return str;
}

module.exports = double_to_one;
