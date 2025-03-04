/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let ans = sum = 0;
  for(let num of gain){
      sum += num;
      ans = Math.max(ans, sum)
  }
  return ans
};