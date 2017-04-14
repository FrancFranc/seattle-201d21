'use strict';

// global variables not to be changed!!!!!!
var storeOpen = 6;
var storeClose = 20;

function generateSalesReportTable(){
  var table = document.createElement('table');
  table.setAttribute('id', 'sales-report');
  document.body.appendChild(table);

  var headingRow = document.createElement('tr');
  table.appendChild(headingRow);

  // add th to table with text of 'Store Name'
  var storeNameHeading = document.createElement('th');
  storeNameHeading.textContent = 'Store Name';
  headingRow.appendChild(storeNameHeading);

  var hourHeading;
  for(var i=storeOpen; i<storeClose; i++){
    hourHeading = document.createElement('th');

    if( i === 12 ){
      hourHeading.textContent = '12pm';
    } else if (i === 0 || i === 24){
      hourHeading.textContent = '12am';
    } else if (i < 12){
      hourHeading.textContent = i + 'am';
    } else {
      hourHeading.textContent = (i % 12) + 'pm';
    }

    headingRow.appendChild(hourHeading);
  }

  var totalHeading = document.createElement('th');
  totalHeading.textContent = 'Total';
  headingRow.appendChild(totalHeading);

  return table;
}

// Constructors start with Cap letter
function Store(name, minCustomerPerHour, maxCustomerPerHour, avgCookiePerCustomer){
  // propertys gernerated by args passed into function
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiePerCustomer = avgCookiePerCustomer;

  // used by generateHourlyData
  this.totalCookiesSold = 0;
  this.hourlyCookiesSold = [];
  this.storeOpen = storeOpen;   // hour in 24hr time (aka 6am)
  this.storeClose = storeClose; // (aka 8pm)

  // because generateHourlyData would be called every time we instantiate a user
  this.generateHourlyData();
};


// create a row with all the store data and return it (does not put the row on the DOM)
Store.prototype.gerneratedRow = function(){
  // create a row el to add all of the td info too
  var row = document.createElement('tr');

  // add a td with the store name
  var storeName = document.createElement('td');
  // set the textContent to the current instance's name
  storeName.textContent = this.name;
  row.appendChild(storeName);


  var cookiesSold;
  for(var i=0; i< this.hourlyCookiesSold.length; i++){
    cookiesSold = document.createElement('td');
    cookiesSold.textContent = this.hourlyCookiesSold[i];
    row.appendChild(cookiesSold);
  }

  var totalSold = document.createElement('td');
  totalSold.textContent = this.totalCookiesSold;
  row.appendChild(totalSold);

  return row;
}

Store.prototype.generateHourlyData = function(){
  // maxCustomerPerHour - minCustomerPerHour gives us the total amount of customers we could
  // have in an hour between the min and max
  var customerPerHourRange = this.maxCustomerPerHour - this.minCustomerPerHour;
  // vars used in the for loop
  var numberOfCustomers, numberOfCookiesSold;

  // run this loop for each hour that the store is open 6am-8pm
  for(var i=this.storeOpen; i < this.storeClose; i++){
    // Multiply random number by customerPerHourRange to figure out how many customerPerHourRange there was that hour and add minCustomerPerHour so that there will be atleast the min that hour
    numberOfCustomers = (Math.random() * customerPerHourRange) + this.minCustomerPerHour;

    // Multiply the number of customers by the avgCookiePerCustomer to determine how many cookies were soold in that given hour
    numberOfCookiesSold = Math.floor(numberOfCustomers * this.avgCookiePerCustomer);

    // acumlate the numberOfCookiesSold in totalCookiesSold
    this.totalCookiesSold += numberOfCookiesSold;

    // push the numberOfCookiesSold in to an array for displaying in the table later
    this.hourlyCookiesSold.push(numberOfCookiesSold);
  }
};

// this makes sure less of my code is on the global scope
function main(){
  var salesReportTable = generateSalesReportTable();
  salesReportTable.appendChild(new Store('pike and 1st', 10, 45, 3).gerneratedRow());
  salesReportTable.appendChild(new Store('cap hill', 10, 45, 3).gerneratedRow());
  salesReportTable.appendChild(new Store('cool beans', 10, 45, 3).gerneratedRow());
  salesReportTable.appendChild(new Store('seatac', 10, 45, 3).gerneratedRow());
  // console.log('pike row', pike.gerneratedRow());
}

function handleStoreCreateSubmit(event){
  event.preventDefault();

  var form = event.target;

  var name = form.name.value;
  var minCustomerPerHour = parseInt(form.minCustomerPerHour.value);
  var maxCustomerPerHour = parseInt(form.maxCustomerPerHour.value);
  var avgCookiePerCustomer = parseInt(form.avgCookiePerCustomer.value);

  console.log('typeof minCustomerPerHour', typeof minCustomerPerHour);
  var store =  new Store(name, minCustomerPerHour, maxCustomerPerHour, avgCookiePerCustomer);
  document.getElementById('sales-report')
  .appendChild(store.gerneratedRow());

  form.reset();

}

document.getElementById('store-create').addEventListener('submit', handleStoreCreateSubmit);

// we have to invoke main to get our program to run
main();













// lulwat
