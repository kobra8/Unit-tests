var converter = require('../converter/converter');
var helpers = require('../helpers/helpers');

describe('Currency Converter', function(){

	describe('GET exchange rates', function(){

		it('should return object', function(done){
			converter.getLatestRates(function(result){
				expect(typeof result).toEqual('object');
				done();
			});
		});

		it('should return at least 1 rate', function(done){
			converter.getLatestRates(function(result){
				var ratesCount = helpers.countKeys(result.rates);
				expect(ratesCount).toBeGreaterThan(1);
				done();
			});
		});

	});

});