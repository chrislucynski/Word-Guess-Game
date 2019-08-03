// VARIABLES
// user guesses correct/incorrect
var userGuess
var correctGuessArr = []
var incorrectGuessArr = []
var guessesRemaining = 10
var underscoreArray = []
var blankSpaces = ''
var wins = 0;
var losses = 0;
var validatedLetter
// possible computer guesses (array)
var wordChoices = ["surfing", "hiking", "gaming", "camping", "sports", "movies", "cooper"]
var computerWord;

// DOM variables
var winsDOM = document.querySelector(".wins")
var lossesDOM = document.querySelector(".losses")
var incorrectGuessesDOM = document.querySelector(".incorrect-guesses")
var correctGuessesDOM = document.querySelector(".correct-guesses")
var button = document.querySelector(".btn")

// FUNCTIONS
// Computer-gen word
function generateWord() {
    computerWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    computerWord = [...computerWord]
    console.log(computerWord);
}
generateWord();

// Creating blanks
function createBlanks(){
    for(var i = 0; i < computerWord.length; i++){
    underscoreArray[i] = '_';
    correctGuessesDOM.textContent = underscoreArray.join(' ')
    }
}
createBlanks();

// create event listener
document.onkeyup = function(event) {

    // set parameters for event listener
    if(event.keyCode > 64 && event.keyCode < 91){
        userGuess = event.key.toLowerCase();
        // alerts user that they did not press a key 'a-z'
    } else {
        alert("Please press a key from 'a-z'.")
    }

    for(var i = 0; i < computerWord.length; i++){
        if(computerWord[i] === userGuess){
        underscoreArray[i] = userGuess 
        checkWin();                   
        }
    }   

    // prevents correct and duplicate letters from being pushed into the Incorrect guess array
    if(!computerWord.includes(userGuess) && !incorrectGuessArr.includes(userGuess)){
        incorrectGuessArr.push(userGuess)
        console.log('incorrectGuessArr', incorrectGuessArr)
    }
    if(incorrectGuessArr.length > 10){
    alert("You lost. Press 'New Word' for another word.")
    losses++
    incorrectGuessArr = [];
    }
    // Updates scoreboard
    incorrectGuessesDOM.textContent = incorrectGuessArr.join(' ')
    lossesDOM.textContent = losses;
    correctGuessesDOM.textContent = underscoreArray.join(' ')
    winsDOM.textContent = wins;
}

function checkWin(){
    var winWord = underscoreArray.join('')
    if(wordChoices.includes(winWord)){
        alert("Winner! Press 'New Word' for another word.")
        wins++
    }     
}

// Press button, new word gets generated
function displayWord() {
    incorrectGuessArr = []
    incorrectGuessesDOM.textContent = ' '
    correctGuessesDOM.textContent = ' '
    correctGuessArr = []
    underscoreArray = []
    generateWord();
    createBlanks();
    alert('You generated a new word!');
}

