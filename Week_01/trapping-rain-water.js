/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let len=height.length;
  let sum=0;
  for(let i=1,size=len-1;i<size;i++){//去除左右两端
      let maxLeft=0,maxRight=0;
      //当前元素的左边最大高度
      for(let j=0;j<i;j++){
          maxLeft=Math.max(maxLeft,height[j]);
      }
      //当前元素右边最大高度
      for(let k=i+1;k<len;k++){
          maxRight=Math.max(maxRight,height[k]);
      }

      //获取最小高度 与当前高度之差
      let res=Math.min(maxLeft,maxRight)-height[i];
      if(res>0){//当前元素比最小高度 才能蓄水
          sum+=res;
      };
  }
  return sum;
};

//动态编程  对每个子问题只计算一次，然后使用数据结构（数组，字典等）在内存中存储计算结果

var trap = function(height) {
  let len=height.length;
  let sum=0;

  let maxLeftArr=Array(len);
  let maxRightArr=Array(len);
   maxLeftArr[0]=height[0];
   maxRightArr[len-1]=height[len-1];
  for(let i=1;i<len;i++){
      maxLeftArr[i]=(Math.max(maxLeftArr[i-1],height[i]));
  }
  for(let j=len-2;j>=0;j--){  
      maxRightArr[j]=(Math.max(maxRightArr[j+1],height[j]));
  }

  for(let i=1,size=len-1;i<size;i++){
     let maxLeft= maxLeftArr[i];
     let maxRight=maxRightArr[i];       
      let res=Math.min(maxLeft,maxRight)-height[i];        
      if(res>0){
          sum+=res;
      };
  }
  return sum;
};


