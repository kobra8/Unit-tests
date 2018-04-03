var os = require('os');

exports.getPlatform = function(){
	return os.platform();
}