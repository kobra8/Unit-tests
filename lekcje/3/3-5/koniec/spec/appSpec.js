var app = require('../app/app');

describe('String Checker', function(){

   it('should return 5 when string kursy is given', function(){
       expect(app.checkString('kursy')).toEqual(5);
   });

   it('should throw Error 5 when invalid string is given', function(){
       expect(function(){app.checkString({name: 'kursy'});}).toThrow();
   });

});