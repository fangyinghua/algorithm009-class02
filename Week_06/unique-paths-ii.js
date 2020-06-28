/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    //值为1代表为障碍物
    let col=obstacleGrid[0].length;
    let row=obstacleGrid.length;
    let dp=new Array(col).fill(0);
    dp[0]=1;
    for(let i=0;i<row;++i){
        for(let j=0;j<col;++j){
           if(obstacleGrid[i][j]===1){//为障碍物
             dp[j]=0;
           }else if(j>0){
            dp[j]+=dp[j-1];
           }
        }
    }  
    return dp[col-1];
};