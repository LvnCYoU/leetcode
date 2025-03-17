/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
  let stack = 0;
  let sum = 0;
  for(let i = 0; i < s.length; i++){
      if(s[i] == ']'){
          if(!stack){
              stack++;
              sum++
          }else {
              stack--;
          }
      }else{
          stack++
      }
  }
  return sum
};