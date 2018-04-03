var App = require('../app/app');

describe('App', function(){
    
    it('getName() method should return app name when called on App instance', function(){
        var toDoList = new App(1, 'ToDoList');
        expect(toDoList.getName()).toEqual('ToDoList');
    });

});