var App = require('../app/app');

describe('Has Valid Name', function(){
    
    it('should return true when app name is at least 5 chars long', function(){
        var app = new App();
        spyOn(app, "getName").andCallFake(function(){
        	return 'To Do List';
        });
        var result = app.hasValidName(app.getName());
        expect(result).toBeTruthy();
    });

    it('should return false when app name is 3 chars long', function(){
        var app = new App();
        spyOn(app, "getName").andCallFake(function(){
        	return 'Int';
        });
        var result = app.hasValidName(app.getName());
        expect(result).toBeFalsy();
    });

});