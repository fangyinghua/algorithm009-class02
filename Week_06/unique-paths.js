/** 62. 不同路径 右下角开始计数
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {   
    let res=[m][n];
   let row= new Array(m).fill(0);
   let dp=row.map((item,i)=>{return Array(n).fill(0)});

    for(let i=0;i<n;++i){  
        dp[0][i]=1;
     }
 
     for(let j=0;j<m;++j){
        dp[j][0]=1;
    }
    
    for(let i=1;i<m;++i){
        for(let j=1;j<n;++j){
            dp[i][j]=dp[i][j-1]+dp[i-1][j];//DP方程
        }
    }  
    return dp[m-1][n-1];
};

//方法二：右下角开始计数
var uniquePaths = function(m, n) {
    let cur=new Array(n).fill(1);
    for(let i=1;i<m;++i){
        for(let j=1;j<n;++j){
            cur[j]+=cur[j-1];  //更新当前行的数据 当前数据 当前列+同行前一列
        }
    }
    return cur[n-1];
}