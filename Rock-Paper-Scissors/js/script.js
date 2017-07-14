'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function randomHand1() {
  var newHand1 = 'rock';
  var rand = Math.random();
  if (rand < 0.33) {
    newHand1 = 'paper';
  } else if (rand > 0.66) {
    newHand1 = 'scissors'
  }
  return newHand1;
}

function rockPaperScissors(hand1, hand2) {
  // hand1 = randomHand1();
  var winner = null;
  var value1 = 0;
  var value2 = 0;
  switch (hand1.toLowerCase().trim()) {
    case 'rock':
      value1 = 1;
      break;
    case 'scissors':
      value1 = 10;
      break;
    case 'paper':
      value1 = 100;
      break;
  }
  switch (hand2.toLowerCase().trim()) {
    case 'rock':
      value2 = -1;
      break;
    case 'scissors':
      value2 = -10;
      break;
    case 'paper':
      value2 = -100;
      break;
  }
  var sum = value1 + value2;
  switch (sum) {
    case 0:
      winner = "It's a tie!";
      break;     // HAND1    vs.   HAND2
    case -90:    // scissors       paper
    case -9:     // rock           scissora
    case 99:     // paper          rock
      winner = "Hand one wins!";
      break;
    case -99:    // rock           paper
    case 9:      // scissors       rock
    case 90:     // paper          scissors
      winner = "Hand two wins!";
      break;
  }
  return winner;
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}
