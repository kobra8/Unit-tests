function App(id,name) {

	this.id = id;
	this.name = name;
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