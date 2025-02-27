/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
  if(s.length == 0) return 0;
  let obj = {};
  let odd = double = 0;
  for(let i = 0; i < s.length; i++){
      if(!obj[s[i]]){
          obj[s[i]] = 1;
      }else {
          obj[s[i]] += 1;
      }
  }
  for(let key in obj){
      if(obj[key] % 2 == 1){
          odd = Math.max(odd, obj[key])
      }
      else{
          double = double == 0 ? obj[key] : Math.min(double, obj[key])
      }
  }
  
  return odd - double
};