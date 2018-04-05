var App = require('../app/app');

// Przykład SETUP czyli ustawiania zmiennych lub instancji przed każdym testem
describe('App', function(){
    var toDoList
    beforeEach(function() {
        toDoList = new App(1, 'ToDoList'); // To się wykona przed każdym testem
    })

    it('getName() method should return app name when called on App instance', function(){
        expect(toDoList.getName()).toEqual('ToDoList');
    });

    it('getId() method should return app Id when called on App instance', function(){
        expect(toDoList.getId()).toEqual(1);
    });

});