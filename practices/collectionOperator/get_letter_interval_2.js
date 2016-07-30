'use strict';

function get_letter_interval_2(number_a, number_b) {
  let len = Math.abs(number_a - number_b) + 1;
  let min = Math.min(number_a, number_b);
  let direction = number_a < number_b;

  let result = Array.from({length: len}, (v, k)=> k + min);
  result = direction ? result : result.reverse();
  return result.map(num_to_letter);
};

function num_to_letter(num) {
  num--;
  let letter_list_one = (Array.from({length: 26}, (v, k)=> String.fromCharCode(97 + k)));
  let letter_list_two = [''].concat(letter_list_one);

  let oneIdx = num % 26;
  let twoIdx = parseInt(num /26);
  return letter_list_two[twoIdx] + letter_list_one[oneIdx];
}


module.exports = get_letter_interval_2;

