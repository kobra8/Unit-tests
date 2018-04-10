function App() {
}

App.prototype.createApp = function(name){
	if (name.length >= 5) {
		this.saveApp(name);
		this.saveApp(name);
	} else {
		return false;
	}
};

App.prototype.saveApp = function(name){
	return true;
};

module.exports = App;