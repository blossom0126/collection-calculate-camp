'use strict';
function get_intersection(collection_a, collection_b) {
  //在这里写入代码
let result=[];
collection_b.find(colb=>collection_a.find(cola=>
{if(cola===colb) {result.push(cola)}}))
  return result;
}
module.exports = get_intersection;
