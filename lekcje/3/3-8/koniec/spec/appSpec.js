var app = require('../app/app');

describe('Random Number Generator', function(){

    it('should return 5 when called', function(){
        expect(app.generateRandInt()).toEqual(5);
    });

});