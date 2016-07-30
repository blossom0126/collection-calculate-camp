'use strict';

function average_uneven(collection) {

  //在这里写入代码
let re=[];
  re=collection.filter(a=>a%2!==0);
  return re.reduce((a,b)=>(a+=b,a))/re.length
}

module.exports = average_uneven;
