/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
  const isPrima = num => {
      if (num === 1) {
          return false;
      }
      let factor = 2;
      while (factor * factor <= num) {
          if (num % factor === 0) {
              return false;
          }
          factor++;
      }
      return true;
  }
  let sum = 0;
  let n = nums.length
  for(let i = 0; i < n; i++){
      isPrima(nums[i][i]) && (sum = Math.max(nums[i][i], sum));
      isPrima(nums[i][n - 1 - i]) && (sum = Math.max(nums[i][n - i - 1], sum));
  }
  return sum
};