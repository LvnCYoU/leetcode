/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
  const str = num.toString();
  let sum = 0;
  for(let i = 0; i < str.length - k + 1; i++){
      let code = str.substring(i, i+k);
      sum += code != 0 && num % code == 0 ? 1 : 0
  }
  return sum
};