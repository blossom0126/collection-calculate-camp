'use strict';

function amount_even(collection) {

  //在这里写入代码
return collection.filter(n=>n%2===0).reduce((a,b)=>(a+=b,a));
}

module.exports = amount_even;
