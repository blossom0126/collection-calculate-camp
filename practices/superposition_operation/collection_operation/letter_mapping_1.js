'use strict';

function even_to_letter(collection) {

  //在这里写入代码
return collection.filter(item=>
{return item%2===0}).map(num=>{return String.fromCharCode(num+96)})}

module.exports = even_to_letter;
