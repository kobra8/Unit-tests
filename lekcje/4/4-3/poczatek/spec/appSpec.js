var App = require('../app/app');

describe('Has Valid Name', function(){
    
    it('should return true when app name is at least 5 chars long', function(){
        var app = new App();
        var result = app.hasValidName(app.getName());
        expect(result).toBeTruthy();
    });

});