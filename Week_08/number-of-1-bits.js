/** 方法一 loop
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count=0;
    n=n.toString(2);//n转二进制
    for(let i=0,len=n.length;i<len;++i){
        if(n[i]==='1'){
            count++;
        }
    }
    return count;    
};

/** 方法二
 * n&1 -->查看最后一位是否为1
 * n>>1 -->右移一位
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count=0;
    for(let i=0;i<32;++i){
        if(n&1===1){
            count++;
        }
        n>>=1;//n=n>>1
    }
    return count;
};

/** 方法三
 * x=x&(x-1)清零最低位的1
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;  
    while(n!=0){
       ++count;
       n= n&(n-1);//清除最低位的1
    }
    return count;
};

