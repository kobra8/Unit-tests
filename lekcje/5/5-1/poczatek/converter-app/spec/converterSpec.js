var converter = require('../converter/converter');

describe('Currency conventer', function() {
    // Zagnieżdżamy describe aby podzielić testy na bloki funkcjonalne
    describe('GET exchange rates', function() {

        it('should return object', function() {
            var result = converter.getLatestRates();
            expect(typeof result).toEqual('object')
        })
    })

})