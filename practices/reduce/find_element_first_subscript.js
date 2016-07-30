'use strict';

function calculate_elements_sum(collection, element) {
  //在这里写入代码

 return collection.find(item=>{
    if(element===item){
    return collection.indexOf(item);}})
}

module.exports = calculate_elements_sum;

