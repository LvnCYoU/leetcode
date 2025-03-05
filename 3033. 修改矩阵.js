/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  for(let i = 0; i < m; i++){
      let max = -1;
      for(let j = 0; j < n; j++){
          max = Math.max(max, matrix[j][i]);
      }
      for(let j = 0; j < n; j++){
          if(matrix[j][i] == -1){
              matrix[j][i] = max
          }
      }
  }
  return matrix
};