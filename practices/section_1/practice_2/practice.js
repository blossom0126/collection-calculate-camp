'use strict'
function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  let result = [];
  collection_a.find(item=> {
    collection_b.map(b=>b.map(num=> {
      if (num === item) {
        result.push(item);
      }
    }))
  })
  return result;
}

module.exports = collect_same_elements;
