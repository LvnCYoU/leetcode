/**
 * @param {number[]} stock
 * @param {number} cnt
 * @return {number[]}
 */
var inventoryManagement = function(stock, cnt) {
  return quickStack(stock).slice(0, cnt)
};

function quickStack(arr){
  if(arr.length <= 1) return arr;
  let mid = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];
  let equal = [];
  for(let a of arr){
      if(a < mid){
          left.push(a)
      }else if(a > mid){
          right.push(a)
      }else if(a == mid){
          equal.push(a)
      }
  }
  return [...quickStack(left), ...equal, ...quickStack(right)]
}