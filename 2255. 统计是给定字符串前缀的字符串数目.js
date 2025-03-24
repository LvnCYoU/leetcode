/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
  // let sum = 0;
  // for(let i = 0; i < words.length; i++){
  //     let reg = new RegExp(`^${words[i]}`);
  //     sum += reg.test(s) ? 1 : 0
  // }
  // return sum;
  return words.filter(item => item === s.slice(0, item.length)).length
};