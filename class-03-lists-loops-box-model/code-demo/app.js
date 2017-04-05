'use strict';

// TODO: I want propt the user to guess the numer 12
// and get four chances

var correctNumber = 12;
var notDone = true;

var guess;
for (var guesses = 3; guesses > 0 && notDone; guesses--) {
  guess = prompt('whats my fav num?'); // get user input
  guess = parseInt(guess); // convert user input to number

  if (guess === correctNumber) {
    alert('you got the right number');
    notDone = false;
  } else if (guesses === 1) {
    alert ('you are out of guesses');
  } else {
    alert('guess again');
  }
}



// if succ


// console.log('lulwat this rocks!');
//
// var sushi = prompt('do you think i like sushi?');
// if ( sushi.trim().toLowerCase()  == 'yes') {
//   alert('you were correct');
// } else {
//   alert('you are clueless about me');
// }

// Class three code demo


// DATA TYPES in JS
// Object
// Function
// Array

// primitves
// Number
// String
// Boolean
// null
// undefined
//
// var slug = 120;
//
// slug * 4;
// slug / 3;
// slug - 120;
// slug % 4;

// slug = slug + 100;
// slug += 100;
// slug -= 100;
// slug *= 2;
// slug /= 44;
// slug %= 12;
//
// slug = Math.pow(slug, 4);
// slug = Math.floor(234.34); // 234
// slug = Math.ceil(234.34); // 235
// slug = Math.round(234.49); // 234
// slug = Math.round(234.5); // 235
//
// var happy = true; // true
// happy = !happy; // false
//
// null // a programer chose for the value to be to be nothing
// undefined // litterly means nothing has been defined

/*
\n // retern (new line char)
\t // tab
\\ // actual /
\" //  actual donble quote
\' // acutal single quote
*/

// var message = 'got to "the store"\n\tand get some \'food\' \\cool';
// // message = "open the magic 'lantern";
// console.log(message)
//
//
// message = message + '\ngo to the market';
// console.log(message);
// message += '\n\t get some milk';
// console.log(message);
