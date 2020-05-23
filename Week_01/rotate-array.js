

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let tem,len=nums.length;
  for(let j=0;j<k;j++){
    let pre=nums[len-1];
    for(let i=0;i<len;i++){
        tem=nums[i];
        nums[i]=pre;
        pre=tem;
    }
  }
  return nums;
};


