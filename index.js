const Word = require("./word");
const inquirer = require("inquirer");

// overall game function, allows game to be run recursively
function reset(){
const movies = ["annihilation", "blade runner", "the fifth element", "moon", "event horizon", "solaris", "mars attacks"];
const computerChoice = movies[Math.floor(Math.random() * movies.length)];
let guessesRemaining = computerChoice.length + 4;
let count = 0;
const wordChoice = new Word(computerChoice);

// initializes game on start up with welcome message
console.log("Welcome to Sci-Fi word guess! Guess the name of the sci-fi movie.");
wordChoice.printWord();

//primary game function, takes user input and uses word constructor to check
// user input against the underlying characters of the word
function getGuess(){
if (guessesRemaining > 0) {
inquirer.prompt([
    {
        type: "input",
        name: "letter",
        message: "Guess a letter: ",
        validate: (value) => {
            // if (value.length < 2 ){
            //     return true;
            // }
            // else {
            //     console.log("You can only enter one letter!");
            // }
            
            if ((value.charCodeAt(0) >= 48 && value.charCodeAt(0) <=57) || (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90 ) || (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122)){
                if(value.length < 2 && value.length > 0) {
                return true;
                }
                else {
                    console.log("\n You may only enter one character at a time.");
                }
            }
            else {
                console.log("\n Sorry, your input must be a letter or number!");
            }
        }
    }
]).then(function(a){
    if (computerChoice.includes(a.letter)){
  wordChoice.letterCheck(a.letter);
    }
    else {
        guessesRemaining--;
    }
  wordChoice.printWord(); 
  checkLetters(); 
})
}
};

// function for win and lose conditions, and to restart game.
function checkLetters(){
    let undersRemaining = computerChoice.length;
    for (let i= 0; i < computerChoice.length; i++){
        if (wordChoice.letters[i].guessed) {
            undersRemaining--;
        }
    }
    if (undersRemaining === 0) {
        console.log("You won!");
        keepPlaying();
    }
    else if (guessesRemaining === 0) {
        console.log("You lose! Try again!");
        keepPlaying();
    }
    else {
        getGuess();
    }
}

//function to allow users to decide whether to continue playing or quit
function keepPlaying(){
    inquirer.prompt([
        {
            type: 'rawlist',
            name: "keepPlaying",
            message: "Keep playing?",
            choices: ["YES", "NO"]
        }
    ]).then(function(answer){
        if (answer.keepPlaying.toUpperCase() === "YES"){
            reset();
        }
    })
}

getGuess();

}
reset();