var app = require('../app/app');

describe('Value Checker', function(){

   it('should return OK when value is 1', function(){
       expect(app.checkValue(1)).toEqual('OK');
   });

   it('should return OK when value is 999', function(){
       expect(app.checkValue(999)).toEqual('OK');
   });

   it('should return Invalid when value is 0', function(){
       expect(app.checkValue(0)).toEqual('Invalid');
   });

   it('should return Invalid when value is 1000', function(){
       expect(app.checkValue(1000)).toEqual('Invalid');
   });

   it('should return OK when value is 324', function(){
       expect(app.checkValue(324)).toEqual('OK');
   });

});