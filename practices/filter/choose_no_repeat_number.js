'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
return collection.filter((item,index,self)=>{
  return self.indexOf(item,index+1) === -1});
}

module.exports = choose_no_repeat_number;
