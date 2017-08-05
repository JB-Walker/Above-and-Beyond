'use strict';

/*

function upperCaser (input) {
  return input.toUpperCase();
}

module.exports = upperCaser;

function repeat (operation, num) {
  for (let i = 0; i < num; i++) {
    operation();
  }
}

module.exports = repeat;

*/
function doubleAll (numbers) {
  return numbers.map(x => x * 2);
}

module.exports = doubleAll;
