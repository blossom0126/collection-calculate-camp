'use strict';
var number_map_to_word_over_26 = function (collection) {
  // return ['a','m','aa','ad','y','aa'];

    return collection.map(function (num) {
      let temp;
      if (num <= 26) {
        return String.fromCharCode(64 + 32 + num);
      } else {
        let ge = num % 26;
        let shi = num / 26;
        if (ge === 0) {
          temp = String.fromCharCode(64 + 32 + shi - 1).concat(String.fromCharCode(64 + 32 + 26));
        } else {
          temp = String.fromCharCode(64 + 32 + shi).concat(String.fromCharCode(64 + 32 + ge));
        }
        return temp;
      }
    });
  };

module.exports = number_map_to_word_over_26;
