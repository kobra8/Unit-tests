function App() {
}

App.prototype.getName = function(){
	//Metoda getName nie została jeszcze zaimplementowana
};

App.prototype.hasValidName = function(appName){
	 if(appName.length >= 5) {
	 	return true;
	 } else {
	 	return false;
	 }
};

module.exports = App;