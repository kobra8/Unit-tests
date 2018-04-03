var codes = {
	'Poland': 48,
	'Spain': 34,
	'Germany': 49
};

exports.findPrefixCode = function(country) {
	if (country in codes) {
	    return codes[country];
	} else {
		return 'Unknown country';
	}
}