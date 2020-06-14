/** 33. 搜索旋转排序数组 -- 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let left = 0, numLen = nums.length - 1, mid = 0;
  while (left <= numLen) {
      mid = (left + (numLen - left) / 2) |0;
      if (nums[mid] == target) {
          return mid;
      }     
      if (nums[mid] >= nums[left]) {         
          if (target >= nums[left] && target < nums[mid]) {
              numLen = mid - 1;
          } else {
              left = mid + 1;
          }
      } else {
          if (target > nums[mid] && target <= nums[hi]) {
              left = mid + 1;
          } else {
              numLen = mid - 1;
          }
      }
  }
  return -1;
};