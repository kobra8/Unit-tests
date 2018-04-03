exports.checkString = function(string){
	if (!(typeof string === 'string')) {
		return false;
	} else {
		return string.length;
	}
}