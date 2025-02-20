/**
 * @param {number[]} nums
 * @return {number}
 */
// var findNumbers = function(nums) {
//   let res = 0;
//   nums.forEach(item => {
//       item.toString().length % 2 == 0 && (res++)
//   })
//   return res
// };

var findNumbers = function(nums) {
  return nums.reduce((a,b) => a += (b.toString().length % 2 == 0 ? 1 : 0), 0)
};