

/** 空间复杂度 O(n^2)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len=nums.length; 
    if(len===0){
        return;
    }
    for(let i=0;i<len-1;i++){
        for(let j=i+1;j<len;j++){                   
            if((nums[i]===nums[j])){       
                nums.splice(j,1);  //出现重复元素删除         
                len=len-1;  //删除后更新数组长度 
                j--;                     
            }
            if(nums[j]>nums[i]){//跳出循环
                break;
            }
        }
    } 
    return len;
};



/**
  空间复杂度为O(n)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let len=nums.length;
  if(len===0 || len<2){
    return;
  } 
  let i=1;
  for(let j=1;j<len;j++){
    if(nums[j]!=nums[i-1]){           
        nums[i++]=nums[j];             
    }
  }
  return i;
};

var removeDuplicates = function(nums) {
    let i=nums.length>0?1:0;
    nums.forEach((item)=>{
        if(item>nums[i-1]){
            nums[i++]=item;
        }
    });
    return i; 
};
