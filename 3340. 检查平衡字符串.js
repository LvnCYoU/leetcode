/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
  let n = num.length;
  let odd = 0;
  let even = 0;
  for(let i = 0; i < n; i++){
      if(i % 2 == 0){
          even += Number(num[i])
      }else {
          odd += Number(num[i])
      }
  }
  return odd == even
};