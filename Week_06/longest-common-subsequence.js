/** 1143. 最长公共子序列
 * 二维数组递推
 * 从后往前
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let row=text1.length;
    let col=text2.length;
    let dp=Array.from(new Array(row+1),()=>new Array(col+1).fill(0)); 
    for(let i=1;i<=row;++i){
        for(let j=1;j<=col;++j){
            if(text1[i-1]===text2[j-1]){//text1 text2最后一个字符相同 就是他们对应的前面最长子序+1
                dp[i][j]=dp[i-1][j-1]+1;
            }else{//text1 text2最后一个字符不相同 就是取他们对应的前面最长子序的较大者
                dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j]);
            }
        }
    }
    return dp[row][col];
};