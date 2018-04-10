var App = require('../app/app');
var User = require('../app/user');

describe('App', function(){
    
    var toDoList;
    
    beforeEach(function(){
        toDoList = new App(1, 'ToDoList');
    });

    it('getName() method should return app name when called on App instance', function(){
        expect(toDoList.getName()).toEqual('ToDoList');
    });

    it('getID() method should return app ID when called on App instance', function(){
        expect(toDoList.getID()).toEqual(1);
    });

    it('countUsers() method should return 0 when App has no users', function(){
        expect(toDoList.countUsers()).toEqual(0);
    });
    it('countUsers() method should return 2 when App has 2 users', function(){
        var user = new User(); // Obiekt typu Dummy czyli argument, który musi byc przekazany do funkcji ale nie jest testowany
        toDoList.addUser(user); // Zawartość obiektu user nie ma znaczenia
        toDoList.addUser(user); // Został zdublowany 2 razy, bo sa potrzebne 2 sztuki obiektu do testów
        expect(toDoList.countUsers()).toEqual(2);
    });

});