var App = require('../app/app');

describe('Has Valid Name', function(){
    
    it('should return true when app name is at least 5 chars long', function(){
        var app = new App();
        spyOn(app, "getName").andCallFake(function(){
            return 'To Do List' // Stub dla funkcji getName wywoływane w Jasmine za pomocą spyOn i andCallFake
        })
        var result = app.hasValidName(app.getName()); //Trzeba zrobic stub dla nie istniejącej jeszcze implementacji metody getName()
        expect(result).toBeTruthy();
    });

    it('should return false when app name is 3 chars long', function(){
        var app = new App();
        spyOn(app, "getName").andCallFake(function(){
            return 'ToD' // Stub dla funkcji getName wywoływane w Jasmine za pomocą spyOn i andCallFake
        })
        var result = app.hasValidName(app.getName()); //Trzeba zrobic stub dla nie istniejącej jeszcze implementacji metody getName()
        expect(result).toBeFalsy();
    });

});