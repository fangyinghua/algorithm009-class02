### 242. 有效的字母异位词

* 方法：哈希表
* 思路: 计算字符s和字符t字母出现的次数是否相等;

```js
/** 哈希表
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 var isAnagram = function(s, t) {
   if(s.length!=t.length ){
       return false;
   }

   let mapObj=new Map();
   for(var i=0,len=s.length;i<len;i++){
       let key=s[i];
       if(mapObj.has(key)){
        var preVal=mapObj.get(key);
        mapObj.set(key,++preVal);  
       }else{
         mapObj.set(key,1);  
       }
   }

   for(var j=0,jlen=t.length;j<jlen;j++){
         let key=t[j];
          if(!mapObj.has(key)){
            return  false;
         }
 
        var preVal=mapObj.get(key);
        if(preVal===1){
            //删除
            delete mapObj.delete(key);
        }else{
            mapObj.set(key,--preVal);  
        } 
   }
    if(mapObj.size===0){
        return true;
    }
 
};

```