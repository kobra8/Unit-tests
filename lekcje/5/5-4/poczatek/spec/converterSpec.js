var converter = require('../converter/converter');

describe('Currency Converter', function(){

	describe('GET exchange rates', function(){

		it('should return object', function(done){
			converter.getLatestRates(function(result){
				expect(typeof result).toEqual('object');
				done();
			});
		});

	});

});