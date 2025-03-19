/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  let result = [];
  let obj = {};
  for(let i = 0; i < nums.length; i++){
      obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1
  }
  while(1){
      let arr = [];
      let isOver = true;
      for(let key in obj){
          if(obj[key] > 0){
              arr.push(Number(key))
              obj[key] -= 1
              isOver = false;
          }
      }
      if(arr.length > 0){
          result.push(arr)
      }
      if(isOver){
          return result
      }
  }
};

// 官解  用时几乎差不多，但是代码量少
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
  let result = [];
  let map = new Map();
  for(let key of nums){
      map.set(key, (map.get(key) || 0) + 1)
  }
  while(map.size > 0){
      let arr = [];
      for(let [key, value] of map){
          if(value > 0){
              arr.push(key);
              map.set(key, map.get(key) - 1);
          }
          if(map.get(key) == 0){
              map.delete(key)
          }
      }
      result.push(arr)
  }
  return result
};