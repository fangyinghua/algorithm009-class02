/** 64. 最小路径和
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let row=grid.length;
    let col=grid[0].length;
        for (let i=row - 1; i >= 0; i--) {
            for (let j = col - 1; j >= 0; j--) {
                if(i ==row - 1 && j != col - 1)
                    grid[i][j] = grid[i][j] +  grid[i][j + 1];
                else if(j == col - 1 && i != row - 1)
                    grid[i][j] = grid[i][j] + grid[i + 1][j];
                else if(j != col - 1 && i != row- 1)
                    grid[i][j] = grid[i][j] + Math.min(grid[i + 1][j],grid[i][j + 1]);
            }
        }
    return grid[0][0];
};