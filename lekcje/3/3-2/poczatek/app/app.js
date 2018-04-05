exports.checkValue = function(v) {
  if(v > 0 && v < 1000) {
    return 'OK';
  }
  else {
    return 'Invalid'
  }
}