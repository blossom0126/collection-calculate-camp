'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
return collection_a.concat(collection_b.filter(item=>{
    return collection_a.find(b=>b===item)===undefined?true:false}));
    
}

module.exports = get_union;

