var app = require('../app/app');

describe('DialCodeFinder', function(){

   it('should return 48 when Poland is given', function(){
       expect(app.findPrefixCode('Poland')).toEqual(48);
   });

   it('should return Unknown country when Unknown is given', function(){
       expect(app.findPrefixCode('Unknown')).toEqual('Unknown country');
   });

});