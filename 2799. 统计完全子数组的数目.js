/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
  // let m = nums.length
  let n = new Set(nums).size;
  let map = new Map();
  let res = 0;
  let right = 0;
  for(let i = 0;i < nums.length; i++){
      if(i > 0){
          let target = nums[i - 1];
          map.set(target, map.get(target) - 1);
          if(map.get(target) == 0){
              map.delete(target)
          }
      }
      while(right < nums.length && map.size < n){
          map.set(nums[right], (map.get(nums[right]) || 0) + 1);
          right++;
      }
      if(map.size == n){
          res += (nums.length - right + 1)
      }
      // 超时了
      // for(let j = i + n; j <= m; j++){
      //     if(new Set(nums.slice(i, j)).size === n){
      //         res++
      //     }
      // }
  }
  return res
};