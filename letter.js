class Letter {
    constructor(x) {
        this.letter = x;
        this.guessed = false;
        this.placeholder = `_`;
    }
    toString(){
        if (!this.guessed) {
            if (this.letter == ' '){
                return ' ';
            }
            else {
            return this.placeholder;
        }
        }
        else {
            return this.letter; 
          }
    }
    guess(y){
        if (y == this.letter) {
            this.letter = y;
            this.guessed = true;
        }
    }
}
// const y = new Letter("y");
// y.guess("y");
// console.log(y.toString());

module.exports = Letter;