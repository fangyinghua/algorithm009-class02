/**
 * 78. 子集
 *  */

function subsets(nums: number[]): number[][] {
  let result=Array();
     const dfs=(level:number,path:number[])=>{
         if(level===nums.length){
             return result.push([...path]);
         }
         //不选
         dfs(level+1,path);
 
         //选
         path.push(nums[level]);
         dfs(level+1,path);
         
         //回溯
         path.pop();
     }
 
     dfs(0,Array());
     return result;
 };