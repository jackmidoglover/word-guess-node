var Letter = require("./Letter");

class Word {
    constructor(word) {
        this.word = word;
        this.letters = [];
        for (let i = 0; i < this.word.length; i++) {
            let character = new Letter (this.word[i]);
            this.letters.push(character);
            this.letters[i].toString();
        }
    }
    letterCheck(x) {
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].guess(x);
        }
    }
    printWord() {
        console.log(this.letters.join(" "));
    }
}

module.exports = Word;
// const yeah = new Word("yeah");
// yeah.letterCheck("y");
// yeah.letterCheck("e");
// yeah.printWord();
// console.log(yeah.letters);