'use strict';

function median_to_letter(collection) {
  let result= collection.map(num=> {
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
  })
   return result[parseInt(result.length/2)];
}

module.exports = median_to_letter;
