/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  let n = mat.length;
  let res = [0,0];
  for(let i = 0; i < n; i++){
      let sum = 0;
      for(let j = 0; j < mat[i].length; j++){
          if(mat[i][j] == 1){
              sum++;
          }
      }
      if(res[1] < sum){
          res = [i, sum]
      }
  }
  return res
};