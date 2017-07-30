'use strict';

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard () {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

// "NEW GAME"
function generateSolution () {
  board = [];
  solution = '';
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function validityOf (guess) {
  // callback function
  function validChar (element) {
    element.isArray(letters);
  }
  // --------
  if (guess.split('').every(validChar)) {
    return true;
  }
  return false;
}

function generateHint () {
  // your code here
  
}



function mastermind (guess) {
  guess = guess.trim().toLowerCase();
  if (validityOf(guess)) {
    board.pop(guess);
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
