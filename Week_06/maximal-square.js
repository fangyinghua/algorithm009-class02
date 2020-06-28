/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if(matrix === null || matrix.length === 0 || matrix[0].length === 0) return 0;
  let maxSide = 0;
  let m = matrix.length;
  let n = matrix[0].length;
  let dp = Array.from({length:m},() => new Array(n).fill(0));
  for(let i = 0; i < m; i++) {
      for(let j = 0; j < n; j++) {
          if(matrix[i][j] === '1') {
              if(i === 0|| j === 0) {
                  dp[i][j] = 1;
              } else {
                  dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1;
              }
              maxSide = Math.max(dp[i][j],maxSide);
          }
      }
  }
  return maxSide * maxSide;
};