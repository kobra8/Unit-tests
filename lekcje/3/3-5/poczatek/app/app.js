exports.checkString = function (string) {
  if (!(typeof string === 'string')) {
    throw new Error('valid string is required');
  } else {
    return string.length;
  }
}