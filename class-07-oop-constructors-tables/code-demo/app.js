'use strict';

function GroceryItem(name){
  this.name = name;
  this.price = Math.floor(Math.random() * 50 + 50);
}

function GroceryList(title, author){
  this.title = title;
  this.author = author;
  this.items = [];
  this.date = new Date();
}

GroceryList.prototype.addItem = function(itemName){
  var item = new GroceryItem(itemName);
  this.items.push(item);
};

GroceryList.prototype.addItems = function(itemNames){
  // convert an array of names to an array of GroceryItems
  var groceryItems = [];
  var item;
  for (var i = 0; i < itemNames.length; i++){
    item = new GroceryItem(itemNames[i]);
    groceryItems.push(item);
  }

  this.items = this.items.concat(groceryItems);
};

// create elemnet
// set atrubutes
// set content
// append to something

GroceryList.prototype.getTable = function(){
  var table = document.createElement('table');

  var titleRow = document.createElement('tr');
  var titleHeading = document.createElement('th');
  titleHeading.textContent = this.title;
  titleRow.appendChild(titleHeading);
  table.appendChild(titleRow);

  var itemRow, itemName, itemPrice;
  // create a new row for each item and add it to the table
  for(var i = 0; i < this.items.length; i++){
    itemRow = document.createElement('tr');
    itemName = document.createElement('td');
    itemName.textContent = this.items[i].name;
    itemPrice = document.createElement('td');
    itemPrice.textContent = this.items[i].price;
    itemRow.appendChild(itemName);
    itemRow.appendChild(itemPrice);
    table.appendChild(itemRow);
  }

  return table;
};

var app = document.getElementById('app');
var xmas = new GroceryList('xmas', 'slugbyte');
xmas.addItem('eggs');
xmas.addItem('beans');
xmas.addItem('beans');
xmas.addItem('beans');
xmas.addItem('beans');
xmas.addItem('beans');
xmas.addItem('beans');
var xmasTable = xmas.getTable();
app.appendChild(xmasTable);

var lul = new GroceryList('lul', 'glorb');
lul.addItem('unicorn');
lul.addItem('unibeans');
app.appendChild(lul.getTable());

console.log('lul', lul);

var hollow = new GroceryList('hollow', 'sandy');
hollow.addItems(['cake', 'salmon', 'juice']);
hollow.addItems(['lul', 'beans', 'flour']);
hollow.addItem('snake');
app.appendChild(hollow.getTable());
