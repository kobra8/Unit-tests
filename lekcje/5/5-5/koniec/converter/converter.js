var request = require('request');

module.exports.getLatestRates = function(callback){
	request('http://api.fixer.io/latest', function(error, response, body){
		var ratesList = JSON.parse(body);
		return callback(ratesList);
	});
};