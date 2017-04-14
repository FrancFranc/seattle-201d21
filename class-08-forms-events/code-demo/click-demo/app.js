'use strict';

var count = 0;

var countHeading = document.getElementById('count');
countHeading.textContent = count;

var incButton = document.getElementById('inc-button');

function handleIncButtonClick(){
  console.log('booya!');
  count++;
  countHeading.textContent = count;
}

incButton.addEventListener('mouseover', handleIncButtonClick);
