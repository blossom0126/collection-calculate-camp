'use strict';
function count_same_elements(collection) {
  //在这里写入代码
  let result=[];
  let acc=collection.reduce
  ((acc,cur)=>{acc[cur]++||(acc[cur]=1);return acc},{});
 /* for(let key in acc){
    result.push({key:key, count:acc[key]});
  }*/
  let keys=Object.keys(acc);
  keys.map(key=>{result.push({key:key,count:acc[key]})})
return result;
 /*
  method 2:
  return collection.reduce((acc,element)=>{
    let found=acc.find(item=>item.key===element)
    if(found){found.count++}
    else{acc.push({key:element,count:1});}
    return acc;},[])*/
}

module.exports = count_same_elements;
