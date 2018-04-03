exports.checkString = function(string) {
	if (!(typeof string === 'string')) {
		throw new Error('Valid string is required');
	} else {
		return string.length;
	}
}