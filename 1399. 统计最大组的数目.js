/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  const ans = Array.from({ length: n + 1}, () => Array(0));
  let max = 0, maxLength = 0;
  for(let i = 1; i <= n; i++){
      let target = i.toString().split('').reduce((a, b) => Number(a) + Number(b));
      ans[target].push(target);
      if(ans[target].length > maxLength){
          maxLength = ans[target].length;
          max = 1;
      }else if(ans[target].length == maxLength){
          max++
      }
  }
  return max
};

// 空间消耗太大

// 改进
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  let map = new Map();
  let max = 0;
  let count = 0;
  for(let i = 1; i <= n; i++){
      let sum = Number([...String(i)].reduce((a, b) => Number(a) + Number(b)));
      map.set(sum,1 + (map.get(sum) ?? 0));
      if(map.get(sum) > max){
          max = map.get(sum);
          count = 1;
      }else if(map.get(sum) == max){
          count += 1
      }
  }
  return count
};