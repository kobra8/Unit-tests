var converter = require('../converter/converter');

describe('Currency Converter', function(){

	describe('GET exchange rates', function(){

		it('should return object', function(){
			var result = converter.getLatestRates();
			expect(typeof result).toEqual('object');
		});

	});

});