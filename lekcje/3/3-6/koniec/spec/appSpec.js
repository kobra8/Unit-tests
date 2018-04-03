var app = require('../app/app');

describe('Array Length', function(){

   it('should return 3 when array with 3 elements is given', function(){
      var arr = [23,55,44];
      expect(app.getArrLength(arr)).toEqual(3);
   });

});