//variable that stores the random number from 1 to 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Get references to specific selector on the page in an array format.
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  alert("I am a placeholder");
}

checkGuess();
