let randomNumber = Math.floor(Math.random() * 100) + 1;
const submitBtn = document.getElementById('submitBtn');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');
const newGameButton = document.createElement('button');
newGameButton.textContent = 'Start New Game';
newGameButton.setAttribute('class', 'newGameButton');

let prevGuesses = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert('Please enter a valid number between 1 and 100');
    } else {
        prevGuesses.push(guess);
        displayGuess(guess);
        checkGuess(guess);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.textContent += guess + ' ';
    numGuesses++;
    remaining.textContent = 11 - numGuesses;
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        endGame('Congratulations! You guessed the correct number.');
    } else if (numGuesses === 10) {
        endGame('Game Over. You ran out of attempts. The correct number was ' + randomNumber);
    } else {
        displayMessage(guess);
    }
}

function displayMessage(guess) {
    if (guess < randomNumber) {
        lowOrHi.textContent = 'Too low!';
    } else if (guess > randomNumber) {
        lowOrHi.textContent = 'Too high!';
    }
}

function endGame(message) {
    userInput.disabled = true;
    newGameButton.style.display = 'block';
    newGameButton.textContent = 'Start New Game';
    resultParas.appendChild(newGameButton);
    newGameButton.addEventListener('click', newGame);
    displayMessage(message);
}

function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuesses = [];
    numGuesses = 1;
    playGame = true;
    userInput.disabled = false;
    guessSlot.textContent = '';
    remaining.textContent = '10';
    lowOrHi.textContent = '';
    resultParas.removeChild(newGameButton);
}
