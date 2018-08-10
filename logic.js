//Global Variables
//-----------------------------------

//Arrays/Var for data

var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

var sWord = "";
var nLetters = [];
var nBlanks = 0;
var leftAndRightGuess = [];
var wGuesses = [];


//Game Counters

var wCount = 0;
var lCount = 0;
var lGuess = 0;

//Functions
//-----------------------------------

function startGame() {
    sWord = months[Math.floor(Math.random() * months.length)];
    nLetters = sWord.split("");
    nBlanks = nLetters.length;

    //Reset

    lGuess = 9;
    wGuesses = [];
    leftAndRightGuess = [];

    //Populate blanks with right number with for loop

    for (var i = 0; i < nBlanks; i++) {
        leftAndRightGuess.push("_");
    }

    //Update HTML to show game

    document.getElementById("mToGuess").innerHTML = leftAndRightGuess.join(" ");
    document.getElementById("leftGuesses").innerHTML = lGuess;
    document.getElementById("wins").innerHTML = wCount;
    document.getElementById("loss").innerHTML = lCount;

    //testing
    console.log(sWord);
    console.log(nLetters);
    console.log(nBlanks);
    console.log(leftAndRightGuess);
}

function compLetter(letter) {
    //is letter in word
    var lInWord = false;

    for (var i = 0; i < nBlanks; i++) {
        if (sWord[i] == letter) {
            lInWord = true;
        }
    } //check index of letter in word
    if (lInWord) {
        for (var i = 0; i < nBlanks; i++) {
            if (sWord[i] == letter) {
                leftAndRightGuess[i] = letter;
            }
        }

    } else {
        wGuesses.push(letter);
        lGuess--;
    }

    //testing
    console.log(leftAndRightGuess);

}

function gameComplete() {
    console.log("Wins: " + wCount + " | Losses: " + lCount + " | Guesses left: " + lGuess);

//update HTML

document.getElementById("leftGuesses").innerHTML = lGuess;
document.getElementById("mToGuess").innerHTML = leftAndRightGuess.join(" ");
document.getElementById("wrongG").innerHTML = wGuesses.join(" ");

    //check if player won or lost
    if (nLetters.toString() == leftAndRightGuess.toString()) {
        wCount++;
        alert("The month was " + sWord + " You've Won!");

        //Update Counters in HTML
        document.getElementById("wins").innerHTML = wCount;
        startGame();

    }else if (lGuess == 0 ) {
        lCount++;
        alert("You've Lost!");
        document.getElementById("loss").innerHTML = lCount;
        startGame();
    }
}

//Main Process
//-----------------------------------


//Call function
startGame();

//Register letter being clicked

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    compLetter(letterGuessed);
    gameComplete();

    //testing
    console.log(letterGuessed);
}