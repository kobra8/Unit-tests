var app = require('../app/app');

describe('Platform', function(){

    it('should return os platform', function(){
        expect(app.getPlatform()).toEqual('win32'); //win32 powinien też zwracać dla 64bitowego Windows
    });

});