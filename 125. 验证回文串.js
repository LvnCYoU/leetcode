/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
  // let n = str.length - 1;
  // for(let i = 0; i <= n; i++){
  //     if(str[n - i] != str[i])return false
  // }
  // return true
  let reverseStr = str.split('').reverse().join('');
  return str == reverseStr
};