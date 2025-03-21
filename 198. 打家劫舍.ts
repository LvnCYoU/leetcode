function rob(nums: number[]): number {
  if(nums.length == 0) return 0;
  if(nums.length == 1) return nums[0];
  let dp: number[] = [];
  dp[0] = nums[0];
  dp[1] = Math.max(dp[0], nums[1]);
  for(let i = 2; i < nums.length; i++){
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[nums.length - 1];
};