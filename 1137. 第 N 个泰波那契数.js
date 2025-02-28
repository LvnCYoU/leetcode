/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  if(n == 0)return 0;
  if(n <= 2)return 1;
  let p = q = 0, s = r = 1;
  for(let i = 3; i <= n; i++){
      p = q;
      q = r;
      r = s;
      s = p + q + r
  }
  return s;
};