'use strict';

function choose_common_elements(collection_a, collection_b) {
let result=[];
  //在这里写入代码
   collection_a.find(numa=>collection_b.find(item=>{if(item===numa){
    result.push(numa);
  }}));
  return result;
}

module.exports = choose_common_elements;
