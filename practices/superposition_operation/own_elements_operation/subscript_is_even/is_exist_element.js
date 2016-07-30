'use strict';
var is_exist_element = function(collection,element){
  let exist=false;
  let result=[];
  collection.filter((item,key)=>{if(key%2===0){
    result.push(item);}})
      result.find(item=>
{if(item===element){
 return exist=true;
}
else {
  return exist=false;
}});
 return exist
};
module.exports = is_exist_element;




