var generateParenthesis = function(n) {
    let dp=Array(Array(n));//二维
    dp[0]=[''];
    dp[1]=['()'];
    for(let i=2;i<=n;++i){
        let res=Array();
        for(let j=0;j<i;++j){
            let pre=dp[i];
            let rest=dp[i-j-1];
            for(let preStr of pre){
                for(let restStr of rest){
                    res.push(`(${preStr})${restStr}`);
                }
            }
        }
        dp.push(res);
    }
    return dp[n];
}