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

});