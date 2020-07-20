/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hashMap=new Map(),len=s.length;
    for(let i=0;i<len;++i){
        if(!hashMap.has(s[i])){
            hashMap.set(s[i],1);
            continue;
        }
        hashMap.set(s[i],hashMap.get(s[i])+1);
    }

     for(let j=0;j<len;++j){
       if(hashMap.get(s[j])===1){
           return j;
       }
    }
    return -1;
};