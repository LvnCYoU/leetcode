// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var numIdenticalPairs = function(nums) {
//     let map = new Map();
//     let res = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(map.get(nums[i])){
//             map.set(nums[i], map.get(nums[i]) + 1)
//         }else {
//             map.set(nums[i], 1)
//         }
//     }
//     for(const value of map.values()){
//         if(value <= 1) continue;
//         res += Array(value).fill(value - 1).reduce((a, b, index) => a + b - index)
//     }
//     return res
// };

/**
 * @param {number[]} nums
 * @return {number}
 * 时间复杂度 O(n) 空间复杂度 O(n)
 */
var numIdenticalPairs = function(nums) {
  const count = {}
  let result = 0
  for(const num of nums) {
      if(count[num]) {
          result += count[num]
          count[num]++
      } else {
          count[num] = 1
      }
  }
  return result
};