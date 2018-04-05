var app = require('../app/app');

describe('Math', function () {

    it('should return 10 when 5 and 5 are given', function () {
        expect(app.sum(5, 5)).toEqual(10);
    });

    it('should return true', function () {
        expect(app.returnTrue()).toBeTruthy();
    });

    it('should return undefined', function () {
        expect(app.returnUndefined()).not.toBeUndefined();
    });

    it('should compare two objects', function () {
        var a = {};
        var b = {};
        expect(a).toEqual(b); // toEqual porównuje tylko zmienne niezależnie od referencji
    });

    it('should compare two objects', function () {
        var a = {};
        var b = a;
        expect(a).toBe(b); // w przypadku obiektów toBe oznacza, że zmienne musza miec tą samą referencję
    });

    it('should compare two primitive variables', function () {
        var a = 2;
        var b = 2;
        expect(a).toBe(b); // toBe w przypadku zmiennych prymitywnych nie zwraca uwagi na referencje
    });

});