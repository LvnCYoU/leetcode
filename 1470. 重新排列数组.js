/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let res = [];
  for(let i = 0, j = n; i < n; i++, j++){
      res.push(...[nums[i], nums[j]])
  }
  return res
};