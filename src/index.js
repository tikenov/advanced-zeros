function primeFactors(number) {
  var map = [];
  for (let i = 2; i <= number; i++)
    while (number % i === 0) {
      if (map[i]) map[i]++;
      else map[i] = 1;
      number /= i;
    }
  return map;
}

module.exports = function getZerosCount(number, base) {
  var ans = Number.MAX_SAFE_INTEGER;
  var p = primeFactors(base);
  var k = Object.keys(p);
  for (let i = 0; i < k.length; i++) {
    var prime = k[i];
    var count = p[k[i]];
    var temp = 0;
    while (prime < number) {
      temp += Math.floor(number / prime);
      prime *= k[i];
    }
    temp = Math.floor(temp / count);
    ans = temp <= ans ? temp : ans;
  }
  return ans;
};
