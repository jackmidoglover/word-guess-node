const Word = require("./word");
const inquirer = require("inquirer");
const movies = ["annihilation", "blade runner", "the fifth element", "moon", "event horizon"];
const guessesRemaining = 10;
const computerChoice = movies[Math.floor(Math.random() * movies.length)];
let count = 0;
const wordChoice = new Word(computerChoice);


console.log("Welcome to Sci-Fi word guess! Guess the name of the sci-fi movie.");
wordChoice.printWord();

function getGuess(){
if ((count <= computerChoice.length) && (guessesRemaining > 0)) {
inquirer.prompt([
    {
        type: "input",
        name: "letter",
        message: "Guess a letter: "
    }
]).then(function(a){
  wordChoice.letterCheck(a.letter);
  wordChoice.printWord();
  getGuess(); 
  count++; 
  guessesRemaining--;
})
}
else {
    console.log("Great guess!");
}
}
getGuess();

