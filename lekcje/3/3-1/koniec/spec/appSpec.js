var app = require('../app/app');

describe('DialCodeFinder', function(){

   it('should return prefix when country is given', function(){
       expect(app.findPrefixCode('Poland')).toEqual(48);
       expect(app.findPrefixCode('Unknown')).toEqual('Unknown country');
   });

   // it('should return Unknown country when Unknown is given', function(){
   // });

});