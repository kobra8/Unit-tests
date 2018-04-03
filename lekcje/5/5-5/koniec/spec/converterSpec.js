var converter = require('../converter/converter');
var helpers = require('../helpers/helpers');
var nock = require('nock');

describe('Currency Converter', function(){

	describe('GET exchange rates', function(){

		beforeEach(function(){
			var ratesResponse = {
			    "base": "EUR",
			    "date": "2017-08-24",
			    "rates": {
			        "AUD": 1.4951
			    }
			};
			nock('http://api.fixer.io')
			.get('/latest')
			.reply(200, ratesResponse);
		});

		it('should return object', function(done){
			converter.getLatestRates(function(result){
				expect(typeof result).toEqual('object');
				done();
			});
		});

		it('should return at least 1 rate', function(done){
			converter.getLatestRates(function(result){
				var ratesCount = helpers.countKeys(result.rates);
				expect(ratesCount).toBeGreaterThan(0);
				done();
			});
		});

	});

});