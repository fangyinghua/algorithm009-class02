/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res=Array();
    if(n===0) return res;
    const dfs=(left,right,str)=>{
        if(left===n && right===n){
            res.push(str);
            return;
        }
        if(left>n)return;
        
        if(left<n){//剪枝
            dfs(left+1,right,str+'(');
        }
        if(right<left){{//剪枝
            dfs(left,right+1,str+')');
        }
    }
    dfs(0,0,'');
    return res;
};