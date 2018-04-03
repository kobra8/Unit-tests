var app = require('../app/app');

describe('Platform', function(){

    it('should return os platform', function(){
        expect(app.getPlatform()).toEqual('win32');
    });

});