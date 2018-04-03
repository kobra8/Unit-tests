function App(id,name) {

	this.name = name;
	this.id = id;
}

var userList = [];

App.prototype.getName = function(){
	return this.name;
};

App.prototype.getID = function(){
	return this.id;
};

App.prototype.addUser = function(user){
	userList.push(user);
};

App.prototype.countUsers = function(){
	return userList.length;
};

module.exports = App;