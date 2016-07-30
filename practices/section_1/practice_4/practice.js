'use strict';
function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  let result=[];
  collection_a.find(item=>{
    let exist=object_b.hasOwnProperty('value');
    if(exist)
    {
      object_b.value.map(b=>{if(b===item.key)
        result.push(item.key);})
    }
  })
  return result;
}

module.exports = collect_same_elements;
