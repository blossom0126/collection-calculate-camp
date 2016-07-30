'use strict';
var even_asc_odd_desc = function(collection){
  let double=collection.filter(item=>item%2===0);
  let odd=collection.filter(item=>item%2!==0);
  double.sort((a,b)=>{return a>b});
  odd.sort((a,b)=>{return a<b});
    odd.map(item=>{double.push(item)});
  return double;
};
module.exports = even_asc_odd_desc;
