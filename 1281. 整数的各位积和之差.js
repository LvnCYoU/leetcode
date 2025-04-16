/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  let nums = String(n).split('');
  return Number(nums.reduce((a,b) => a * Number(b)) - nums.reduce((a,b) => Number(a) + Number(b)))
};