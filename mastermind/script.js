'use strict';

let board = [];
let solution = '';
let solutionLength = 4;
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let nonSolutionChar = 'X'; // Must be different from all letters & nonGuessChar
let nonGuessChar = 'Y'; // Must be different from all letters & nonSolutionChar

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

/*
// Ensure that every character in Guess appears in Letters and has the
// appropriate character length. Returns T/F
function isValid (guess) {
  // guess = guess.split(''); Known to work. test next line
  const guessArr = Array.from(guess);
  if (guessArr.every(letterIsValid) && guess.length === solutionLength) {
    return true;
  }
  return false;
  // callback function
  function letterIsValid (element) {
    element.isArray(letters);
  }
}
*/

function generateHint (guess) {
  let guessArr = Array.from(guess);
  let solutionArr = Array.from(solution);
  let countInPosition = findInPosition();
  let countOutOfPosition = findOutOfPosition();
  return countInPosition + '-' + countOutOfPosition;

  function findInPosition () {
    let numberFound = 0;
    for (let i = 0; i < solutionLength; i++) {
      if (guessArr[i] === solutionArr[i]) {
        numberFound++;
        solutionArr[i] = nonSolutionChar;
        guessArr[i] = nonGuessChar;
      }
    }
    return numberFound;
  }

  function findOutOfPosition () {
    let numberFound = 0;
    for (let gssIndex = 0; gssIndex < solutionLength; gssIndex++) {
      for (let solIndex = 0; solIndex < solutionLength; solIndex++) {
        if (guessArr[gssIndex] === solutionArr[solIndex]) {
          numberFound++;
          solutionArr[solIndex] = nonSolutionChar;
          guessArr[gssIndex] = nonGuessChar;
        }
      }
    }
    return numberFound;
  }
}

function mastermind (guess) {
  guess = guess.trim().toLowerCase();
  // if (isValid(guess)) {
  if (guess === solution) {
    console.log('You guessed it!');
    document.getElementById('id2c').innerHTML = 'You guessed it!'; // !!!!!!!!!!!! DELETE !!!!!!!!!!!!!
  } else {
    board.push(guess + '  ::  ' + generateHint(guess));
    printBoard();
  }
  // }
}

solution = 'abcd';
mastermind('aabb');
document.getElementById('id1c').innerHTML = board.length;

mastermind(solution);

mastermind('abdc');
document.getElementById('id3b').innerHTML = board[0] + ' || ' + board[1];

mastermind('aabb');
document.getElementById('id4b').innerHTML = board[0] + ' || ' + board[1] + ' || ' + board[2];

// Tests
/*
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
*/
