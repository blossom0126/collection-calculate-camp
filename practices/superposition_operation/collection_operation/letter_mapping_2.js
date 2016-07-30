'use strict';

function average_to_letter(collection) {
  //在这里写入代码
return String.fromCharCode((Math.round(collection.reduce((acc,cur)=>
  {acc+=cur;return acc})/collection.length))+96);
}

module.exports = average_to_letter;

