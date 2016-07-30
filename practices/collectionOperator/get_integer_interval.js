'use strict';

function get_integer_interval(number_a, number_b) {
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
  return  range(number_a,number_b);
}

module.exports = get_integer_interval;

