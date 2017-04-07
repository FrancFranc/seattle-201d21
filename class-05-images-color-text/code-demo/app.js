'use strict';

// var name = prompt('hey, whats your name?');

// make a game for users to guess my fav command line programs
// give the user three trys
// if they guess correct list all commandPrograms
// if the loose the game list all commandPrograms

function guessMyFavoriteCommand() {
  var tries, commandGuess, i;
  var commandPrograms = ['rm', 'vim', 'ls', 'cd'];
  var userWon = false;

  for (tries = 3; tries > 0 && !userWon; tries--) {
    commandGuess = prompt('what be a cmd i like?');

    for (i = 0; i < commandPrograms.length; i++){
      if(commandGuess === commandPrograms[i]){
        console.log('yep i love that cmd');
        userWon = true;
      }
    }

    if (!userWon) {
      console.log('guess again');
    }
  }

  if (!userWon){
    console.log('sorry you lost');
  }

  console.log('the programs are ' + commandPrograms.join(', '));
}


// guessMyFavoriteCommand();






// number guessing game

// if they guess to high let them know
// if they guess to low let them know

// var tries, numberGuess;
// var correctNumber = 42;
// var userWon = false;
// for(tries = 4; tries > 0 && !userWon; tries--){
//   numberGuess = prompt('guess ma fav num');
//   numberGuess = parseInt(numberGuess);
//   console.log('numberGuess value', numberGuess);
//   if (numberGuess === correctNumber) {
//     userWon = true;
//     console.log('booyeah!! thats ma fav num!');
//   } else if (numberGuess < correctNumber) {
//     console.log('tooo low bro');
//   } else if (numberGuess > correctNumber){
//     console.log('too high guy');
//   } else {
//     console.log('you need to type in a number');
//   }
// }






function yesorNoQuestion(question, correctValue, message){
  // i want to find out if the user wants to go to space
  var travelToSpace = prompt(question);

  if (typeof travelToSpace === 'string'){
    travelToSpace = travelToSpace.toLowerCase().trim();
  }

  // if they say  yes or y (case insensitive) alert your correct otherwise your wrong
  if (travelToSpace === correctValue || travelToSpace === correctValue[0]){
    console.log('you guessed correct ' + message);
  } else {
    console.log('you guessed wrong ' + message);
  }
}

// yesorNoQuestion("do i like to code?", "yes", "i like to code");
// yesorNoQuestion("do i like to run?", "no", "i actuatly dont like to run");








// declaration
// i want a variable but im not going to assing assign a value
var hello;

// assignment
hello = 4;

// definition
// i want a variable and im going to assgin it a value
var wat = 4;

// definition
function cool () {
  console.log('cool');
}

/*
no semi on
function definition
if statments
for loops
*/
