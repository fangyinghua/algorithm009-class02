/**
 * 跳跃游戏
 */

 /**
  * 贪心算法
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums===null){
      return false;
  }
  let endResult=nums.length-1;
  for(var i=nums.length-1;i>=0;i--){
      if(nums[i]+i>=endResult){
          endResult=i;
      }
  }
  return endResult===0;
};