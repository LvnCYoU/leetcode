/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {
  let sum = 0;
  let n = word.length;
  for(let i = 0; i < n - k + 1; i++){
      let j = i + 5 + k;
      while(j <= n){
          let str = word.substring(i,j);
          if(/^(?=.*a)(?=.*e)(?=.*i)(?=.*o)(?=.*u).*$/i.test(str)){
              let com = str.match(/[^aeiou]/gi);
              if((com && com.length == k) || (!com && k == 0)){
                  sum++;
              }

          }
          j++;
      }
      
  }
  return sum
  
};

// 执行1905ms...有待改进