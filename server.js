'use strict';

var express = require('express'),
	path = require('path'),
	Chance = require('chance');
 
var app = express();

/**
 * Get Data
 * Generates unique random numbers between 1 and 10000 (inclusive)
 * Returns unique random numbers
**/
var getData = function() {

	var min = 1, max = 10000, chance = new Chance(), num = 10000;
	
	var uniqueRandomNumbers = chance.unique(chance.natural, num, ({min: min, max: max}));

  return uniqueRandomNumbers;
};

app.get('/', function(req, res) {  // Route on page initialization
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/ajax', function(req, res) { // Route On 'Generate' button click
	var data = getData();
  res.send(data);
});

app.listen(3000);
