/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {  
    let res='';
    if(!strs || strs.length===0){
        return res;
    }
    res=strs[0];
    for(var i=0,len=strs.length;i<len;++i){
        for(var j=0,jlen=res.length;j<jlen;++j){
            if(res[j]!=strs[i][j]){
                break;
            }
        }
        res=res.substr(0,j);
        if(res===''){
            return res;
        }
    }
    return res;
};