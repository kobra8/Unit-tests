var app = require('../app/app');

describe('Math', function(){

   it('should return 10 when 5 and 5 are given', function(){
       expect(app.sum(5,5)).toEqual(10);
   });

});