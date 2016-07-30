'use strict';
let even_group_calculate_average = function(collection) {
    let result=[];
    let temp={};
    let evenarr=collection.filter((item,key)=>key%2!==0).filter(item=>item%2===0);
   evenarr.map(item=>{
       temp[item.toString().length]=temp[item.toString().length]||[];
       temp[item.toString().length].push(item);
   });
   let keys=Object.keys(temp);
    result=(keys.map(key=>(temp[key].reduce((a,b)=>(a+=b,a))/temp[key].length)));
     return evenarr.length===0?[0]:result;
};
module.exports = even_group_calculate_average;
