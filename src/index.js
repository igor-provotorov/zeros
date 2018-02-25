module.exports = function getZerosCount(number) {

  let result = 0;

  for (let i = 5; i <= number; i *= 5) {
    result += parseInt(number / i);
  }

  return result;
}
