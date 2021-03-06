var App = require('../app/app');

describe('App', function(){
    
    var toDoList;
    
    beforeEach(function(){
        toDoList = new App(1, 'ToDoList');
        console.log('beforeEach()');
    });
// Przykład TearDown czyli ustawiania lub resetowania zmiennych po każdym teście
    afterEach(function() {
        toDoList.reset(); // To się wykona po każdym teście
        console.log('afterEach()');
    })

    it('getName() method should return app name when called on App instance', function(){
        expect(toDoList.getName()).toEqual('ToDoList');
    });

    it('getID() method should return app ID when called on App instance', function(){
        expect(toDoList.getID()).toEqual(1);
    });

});