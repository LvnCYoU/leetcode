/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfBeauties = function(nums) {
  let n = nums.length;
    let state = Array(n).fill(0);
    let preMax = nums[0];
    for(let i = 1; i < n - 1; i++){
        if(preMax < nums[i]){
            state[i] = 1;
            preMax = nums[i]
        }
    }
    let lastMin = nums[n - 1];
    let sum = 0;
    for(let i = n - 2; i > 0; i--){
        if(state[i] && nums[i] < lastMin){
            sum += 2;
            
        }else if(nums[i - 1] < nums[i]  && nums[i] < nums[i + 1]){
            sum += 1;
        }
        lastMin = Math.min(lastMin, nums[i])
    }
    return sum
};