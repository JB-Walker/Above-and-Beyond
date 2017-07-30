'use strict';

let board = [];
let solution = '';
let solutionLength = 4;
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard () {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

// Initiates "NEW GAME"
function generateSolution () {
  board = [];
  solution = '';
  for (let i = 0; i < solutionLength; i++) {
    solution += letters[Math.floor(Math.random() * letters.length)];
  }
}

// Ensure that every character in Guess appears in Letters and of the
// appropriate character length. Returns T/F
function validityOf (guess) {
  // guess = guess.split(''); Known to work. test next line
  guess = Array.from(guess);
  if (guess.every(charIsValid) && guess.length === solutionLength) {
    return true;
  }
  return false;
  // required callback function
  function charIsValid (element) {
    element.isArray(letters);
  }
}

// Compare guess:solution
//         abcd  :  aabb
//         Xbcd  :  Xabb
//         XO--  :  XaXb
//
//

function generateHint (guess) {
  let guessCopy = guess.split('');
  let solutionCopy = solution;
  let inPosition = 0;
  let outOfPosition = 0;
  for (let i = 0; i < solutionLength; i++) {
    if (guessCopy[i] === solutionCopy[i]) {
      inPosition++;
      solutionCopy[i] = null; // Set to a value that could not be in letters
      guessCopy[i] = false; // Set to a value that could not be in letters and not be NULL
    }
  }
  for (let i = 0; i < solutionLength; i++) {
    if (guessCopy[i].findIndex  > -1) {

  }









}

function mastermind (guess) {
  guess = guess.trim().toLowerCase();
  if (validityOf(guess)) {
    if (guess === solution) {
      console.log('You guessed it!');
    } else {
      generateHint(guess);
      printBoard();
    }
  }
}

// Tests

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getPrompt () {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

if (typeof describe === 'function') {
  solution = 'abcd';

  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });
  });

} else {
  generateSolution();
  getPrompt();
}
