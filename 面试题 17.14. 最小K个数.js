/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
  return arr.sort((a,b) => a-b).slice(0,k)
};

// 太慢改写快排

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function(arr, k) {
    
  function sort(a){
      if(a.length == 0) return []
      let mid = Math.floor(a.length / 2);
      let left = [];
      let right = [];
      let m = [];
      for(let i = 0; i < a.length; i++){
          if(a[i] == a[mid]){
              m.push(a[mid]);
          }else if(a[i] > a[mid]){
              right.push(a[i])
          }else left.push(a[i])
      }
      return [...sort(left), ...m, ...sort(right)]
  }
  return sort(arr).slice(0, k)
};

// 好像也挺慢