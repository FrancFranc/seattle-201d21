'use strict';

function sayHello() {
  console.log('hello yo');
  return 100;
}

var lulwat = sayHello();
console.log('lulwat value is', lulwat);
var lulwat = sayHello('laksdfjlksadjf');
console.log('lulwat value is', lulwat);

function getUsername(){
  var username = prompt('whats your username?');
  return username;
}

var user = getUsername();
console.log('user value is', user);

// variables are function scoped
function coolBeans(){
  var a = 3;
}

coolBeans();

// console.log('a is now', a);

function greet(name){
  return 'hello ' + name + '!!!!';
}

var result;
result = greet('slug');
console.log('results value is', result);

result = greet('lulwat');
console.log('results value is now', result);


result = greet();
console.log('results value is now', result);




//
