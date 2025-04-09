/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let arr = [...new Set(nums.sort((a,b) => a - b))];
  if(arr[0] < k) return  -1;
  return arr[0] == k ? arr.length - 1 : arr.length;
};