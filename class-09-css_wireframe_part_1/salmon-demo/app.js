'use strict';

console.log('its works');

function Store(name, minCustomerPerHour, maxCustomerPerHour, avgCookiePerCustomer){
  this.name = name;
  this.storeOpen = 6;
  this.storeClose = 20;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.hourlyCookieData = [];

  this.generateHourlyData();
};

Store.prototype.generateHourlyData = function(){
  var customerPerHourRange = this.maxCustomerPerHour - this.minCustomerPerHour;
  var numberOfCustomers, numberOfCookiesSold;
  for(var i=this.storeOpen; i<this.storeClose; i++){
    numberOfCustomers = Math.random() * customerPerHourRange + this.minCustomerPerHour;
    numberOfCookiesSold = Math.floor(numberOfCustomers * this.avgCookiePerCustomer);
    this.hourlyCookieData.push(numberOfCookiesSold);
  }
};













// lulwat
