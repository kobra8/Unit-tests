var App = require('../app/app');

describe('Create App', function(){
    
    it('should call saveApp() when app name is at least 5 chars long', function(){
        var app = new App();
        spyOn(app, 'saveApp'); //Szpiegujemy app i funkcję saveApp
        app.createApp('To Do List');
        expect(app.saveApp).toHaveBeenCalled(); //Podajemy samą nazwę metody "saveApp" bez nawiasów i testujemy czy została wywołana - nie uruchamiamy bo to jest atrapa metody saveApp
    });
    it('should not call saveApp() when app name is 3 chars long', function(){
        var app = new App();
        spyOn(app, 'saveApp'); //Szpiegujemy app i funkcję saveApp
        app.createApp('Tdl');
        expect(app.saveApp).not.toHaveBeenCalled(); //Podajemy samą nazwę metody "saveApp" bez nawiasów i testujemy czy została wywołana - nie uruchamiamy bo to jest atrapa metody saveApp
    });

});