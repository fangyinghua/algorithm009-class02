### 动态规划
特征：
1. 重复子问题;
2. 最优子结构; 通过子问题的最优解-->问题的最优解;

##### Fibonacci数列

```JS
/** 递归 2^n  时间复杂度 指数级
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    return N<=1?N:fib(N-1)+fib(N-2);
};

/** 记忆化搜索 O（n） 时间复杂度 指数级
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {  
    let res=Array(N+1).fill(0);
    const fibber=(n)=>{       
        if(n<=1){
            return n;
        }        
        if(res[n]===0){  
            res[n]=fibber(n-1)+fibber(n-2);          
        }     
        return res[n];
    }   
   return fibber(N,res);
};

/** BottomUp 自底向上 循环
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let res=Array(N).fill(0);
    res[0]=0; 
    res[1]=1;
    for(let n=2;n<=N;++n){
        res[n]=res[n-1]+res[n-2];
    }
    return res[N];
};

```



### 总结：
1. 贪心算法：子问题最优解，但是结果不一定是最优解;
2. 动态规划：通过子问题最优解，推导出问题的最优解，求解过程中可淘汰次优解;
3. 动态规划：通过递归的方式实现的;
4. 回溯算法：此方法通过枚举方式探索最优解，时间复杂度高指数级;

