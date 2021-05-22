'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🍉Correct Number';

// document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 5;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const gue = Number(document.querySelector('.guess').value);
  console.log(gue, typeof gue);
  if (!gue) {
    // document.querySelector('.message').textContent = '😂No number';
    displayMessage('😂No number');
  }
  //Win
  else if (gue === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'YES🚔😆';
    displayMessage('YES🚔😆');
    document.querySelector('body').style.backgroundColor = 'crimson';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Loose
  else if (gue !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     gue > secretNumber ? 'Too high' : 'Too Low';
      displayMessage(gue > secretNumber ? 'Too high' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost';
      displayMessage('You lost');
      document.querySelector('.score').textContent = 0;
    }
  }
  /* } else if (gue > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (gue < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
  } */
});
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  document.querySelector('.score').textContent = score;

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
