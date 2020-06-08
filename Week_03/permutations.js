/**
 * 46. 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res=Array();
  let len=nums.length;
  if(nums===null || len===0){
      return res;
  }

  const dfs=(result,level,len,nums,path)=>{
      if(level===len){
          result.push(path);
          return;
      }

  }
  defs(res,0,len,nums);
  return res;
};