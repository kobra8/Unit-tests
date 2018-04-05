var app = require('../app/app');

describe('String checker', function(){

   it('should return 5 when string kursy is given', function(){
       expect(app.checkString('kursy')).toEqual(5);
   });

   it('should throw error when invalid string is given', function(){
       expect(function(){app.checkString({name: 'kursy'});}).toThrow();
       //Dla funkcji która ma zwracać error trzebą ją opakować w funkcję anonimową,
       //bo error na implementowanrej funkcji bez tego opakowania zatrzyma jej wykonanie w teście
   });

});