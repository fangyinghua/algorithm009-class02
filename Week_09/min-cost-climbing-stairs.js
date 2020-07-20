/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let  len=cost.length,dp=Array(len);
    if(len===2){
        dp[1] =Math.min(cost[0],cost[1]);
    }
    if(len===3){
        dp[2] =Math.min(cost[1],cost[0]+cost[2]);
    }
        
    if(len>3){
       dp[1] =Math.min(cost[0],cost[1]);
        dp[2] =Math.min(cost[1],cost[0]+cost[2]);
        for(let i=4;i<=len;i++){            
           dp[i-1]=Math.min((dp[i-2]+cost[i-1]),(dp[i-3]+cost[i-2]));
        }  
    }
    return dp[len-1];
};