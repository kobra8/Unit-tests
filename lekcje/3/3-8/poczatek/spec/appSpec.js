var app = require('../app/app');

describe('Random Number Generator', function(){

    it('should return random integer', function(){
        expect(app.generateRandInt()).toEqual(5);
    });

});