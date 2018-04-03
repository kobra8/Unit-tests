var app = require('../app/app');

describe('Check String', function(){

    it('should return string length when valid string is given', function(){
        var string = 'kursy';
        expect(app.checkString(string)).toEqual(5);
    });

    it('should return false when invalid string is given', function(){
        var string = {name: 'kursy'};
        expect(app.checkString(string)).toBeFalsy();
    });

});