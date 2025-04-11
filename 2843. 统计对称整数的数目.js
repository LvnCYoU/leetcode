/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
  let res = 0;
  for(let i = low; i <= high; i++){
      let target = i.toString()
      if(target.length == 2 && i % 11 == 0){
          res++;
      }else if(target.length == 4){
          let cur = target.split('');
          if(Number(cur[0]) + Number(cur[1]) == Number(cur[2]) + Number(cur[3])){
              res++
          }
      }
      
  }
  return res
};