/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  let n = cost.length;
  let c = p = 0;
  for(let i = 2; i <= n; i++){
      let next = Math.min(p + cost[i - 2], c + cost[i - 1]);
      p = c;
      c = next;
  }
  return c;
};