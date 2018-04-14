var chai = require('chai');
var app = require('../app/app');

describe('Max Function', function(){

	var expect = chai.expect;

	it('should return 3 when 1 and 3 are given', function(){
		var max = app.maxValue(1,3);
		expect(max).to.equal(3);
	});
	it('should return 3 when 3 and 1 are given', function(){
		var max = app.maxValue(3,1);
		expect(max).to.equal(3);
	});

});