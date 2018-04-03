function App(id,name) {
	this.name = name;
	this.id = id;
}

App.prototype.getName = function(){
	return this.name;
};

App.prototype.getID = function(){
	return this.id;
};

module.exports = App;

