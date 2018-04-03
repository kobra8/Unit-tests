var app = require('../app/app');

describe('Check String', function(){

    it('should return string length when valid string is given', function(){
        var string = 'kursy';
        if (!(typeof string === 'string')) {
          expect(app.checkString(string)).toBeFalsy();
        } else {
          expect(app.checkString(string)).toEqual(5);
        }
    });

});