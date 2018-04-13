var converter = require('../converter/converter');
var helpers = require('../helpers/helpers');
var nock = require('nock');

describe('Currency conventer', function () {
    // Zagnieżdżamy describe aby podzielić testy na bloki funkcjonalne
    describe('GET exchange rates', function () {

        beforeEach(function(){
            var ratesResponse = {
                "base": "EUR",
                "date": "2018-04-12",
                "rates": {
                  "PLN": 4.1844,
                }
            };
            nock('http://api.fixer.io') //Nock przechwytuje wszystkie żądania na te domene
            .get('/latest') //Przechwycenie url
            .reply(200, ratesResponse) // Symulowana odpowiedź serwera(kod, response)
        });
        //Testowanie funkcji asynchronicznej
        it('should return object', function (done) { //done przekazujemy aby uzyskac asynchroniczność
            converter.getLatestRates(function (result) {
                expect(typeof result).toEqual('object'); // Czy result jest obiektem?
                done(); //Wywołuje się done po wykonaniu operacji asynchronicznej
            });
        });

        it('should return at least 1 rate', function (done) {
            converter.getLatestRates(function (result) {
                var ratesCount = helpers.countKeys(result.rates);
                expect(ratesCount).toBeGreaterThan(0); //Czy result.rates length >0?
                done();
            });
        });
    });
});