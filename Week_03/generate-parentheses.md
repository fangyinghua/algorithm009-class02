#### 括号生成22

```js

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  _generate(0,2 * n,"");
  return null;
};

var _generate=function(level,max,str){

//terminator
if(level>=max){
  //process result
  console.log(s);
  return;
}

//process current logic 当前层逻辑 (left,right)
let s1=s+"(";
let s2=s+")";

//drill down
_generate(level+1,max,s1);
_generate(level+1,max,s2);

//reverse states 因为函数内都是局部变量 不需要清除变量
}
```

* 验证括号的合法性  
  * left左括号可以加，只要不超标; 比如n=1 左括号个数最多为1 ---> "()"，n为4 左括号个数最大为4 ---> "(((())))"
  * right右括号 左括号个数>右括号的个数 --> 才能添加。
```js 
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res=Array();
  res.push(_generate(0,0, n,""));//初始值 left(左括号):0  ; right(右括号):0 ;  max(最大个数):n ; s(结果)
  return null;
};

var _generate=function(left,right,max,str){

//terminator
if(left===n && right===n){
  //process result
  // console.log(s);
  return s;
}

//process current logic 当前层逻辑 (left,right)


//drill down
if(left<n){//左括号 添加条件
  _generate(left+1,right,max,s+"(");
}

if(left>right){//右括号 添加条件
  _generate(left,right+1,max,s+")");
}

//reverse states 因为函数内都是局部变量 不需要清除变量
}
```

* 最终整理
```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res=Array();
    const _generate=function(left,right,max,str){
        if(left===max && right===max){ //或者写成 str.length===2*max
            return res.push(str);
        }
        if(left<max){
            _generate(left+1,right,max,str+"(");
        }

        if(left>right){
            _generate(left,right+1,max,str+")");
        }
    }
  _generate(0,0, n,"");
  return res;
};
```

