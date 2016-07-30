'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  function range(a, b) {
    var step = Math.abs(b - a) / (b - a);
    var count = (b - a) / step;
    let arr = [];

    if (a === b) {
      arr.push(a);
    }
    else {
      for (var i = 0; i <= count; i++) {
        var item = a + i * step;
        arr.push(item);
      }
    }
    return arr;
  }
  let result=range(number_a,number_b);
  return result.filter(item=>{return item%2===0});
}

module.exports = get_integer_interval_2;
