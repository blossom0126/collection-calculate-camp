'use strict';
function count_same_elements(collection) {
  //在这里写入代码
  /*
   method 1
   let result=[];
  let acc=collection.reduce
  ((acc,cur)=>{acc[cur]++||(acc[cur]=1);return acc},{});
  let keys=Object.keys(acc);
  keys.map(key=>{result.push({key:key,count:acc[key]})})
  return result;*/

  /*
  method 2
  return collection.reduce((acc,element)=>{
    let found=acc.find(item=>item.key===element)
    if(found){found.count++}
    else{acc.push({key:element,count:1});}
    return acc;},[])
    */
  let obj = {};
  let result = [];
/*method 3*/
 collection.map(item=>{if(item.indexOf('-')===-1){
    if(!obj[item]){
      obj[item]=1;}
    else{
      obj[item]++;}
  } else{
    let newarr=item.split('-');
    obj[newarr[0]]=parseInt(newarr[1]);
  }})

 /*
 for(let i in obj){
    result.push({key:i, count:obj[i]});
  }*/
  let keys=Object.keys(obj);
  keys.map(key=>{result.push({key:key,count:obj[key]})})

  return result;
}

module.exports = count_same_elements;
var collection = [
  "a", "a", "a",
  "e", "e", "e", "e", "e", "e", "e",
  "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
  "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
  "f", "f", "f", "f", "f", "f", "f", "f", "f",
  "c", "c", "c", "c", "c", "c", "c", "c",
  "g", "g", "g", "g", "g", "g", "g",
  "b", "b", "b", "b", "b", "b",
  "d-5"
];

count_same_elements(collection);
