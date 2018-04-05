var os = require('os') // Import modułu Node.js

exports.getPlatform = function(){
	return os.platform(); //funkcja modułu Node.js wyświetlająca platfomę systemową
}