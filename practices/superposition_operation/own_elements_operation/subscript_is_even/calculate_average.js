'use strict';
var calculate_average = function(collection){
let result=[];
  collection.filter(item=>{if(collection.indexOf(item)%2!==0){
   result.push(item);
  }})
return  result.reduce((a,b)=>(a+=b,a))/result.length
};
module.exports = calculate_average;
