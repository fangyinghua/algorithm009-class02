### 50. Pow(x, n)
* 分治方法
模板
1. terminator ;
2. process( split you big problem)
3. drill down (subproblems),merge(subresult)
4. reverse states

```js
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  //n为负数的时候
  if(n<0){
    x=1/x;
    n=-n;
  }

  const  doMyPow=(xs,ns){

    if(ns===0){
      return 1.0;
    }
    if(ns===1){
      return xs;
    }
    
    const res=doMyPow(xs,(ns/2) << 0);
    return ((ns % 2) ===0) ? (res*res) :(res*res*xs);
  }

  doMyPow(x,n);
}
```
```js
var myPow = function(x, n) {
    if(n < 0){
        x = 1/x;
        n = -n;
    }
    let pow = 1;
    while(n){
        if(n&1) pow*=x; // &1模2运算 与1进行与运算
        x*=x;
        n>>>=1;  //>>>1 除以2向下取整
    }
    return pow;
};
```