var App = require('../app/app');

describe('Create App', function(){
    
    it('should call saveApp() when app name is at least 5 chars long', function(){
        var app = new App();
        spyOn(app, 'saveApp');
        app.createApp('To Do List');
        expect(app.saveApp).toHaveBeenCalled();
    });

    it('should NOT call saveApp() when app name is 3 chars long', function(){
        var app = new App();
        spyOn(app, 'saveApp');
        app.createApp('ABC');
        expect(app.saveApp).not.toHaveBeenCalled();
    });

    it('should call saveApp() with app Name ', function(){
        var app = new App();
        spyOn(app, 'saveApp');
        app.createApp('To Do List');
        expect(app.saveApp).toHaveBeenCalledWith('To Do List'); // Sprawdzanie czy metoda została wywołana z określonym argumentem
    });

    it('should call saveApp()twice', function(){
        var app = new App();
        spyOn(app, 'saveApp');
        app.createApp('To Do List');
        expect(app.saveApp.calls.length).toBe(2); // Sprawdzanie ile razy metoda została wywołana
    });

});