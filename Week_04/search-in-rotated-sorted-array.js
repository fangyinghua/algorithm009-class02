/** 33. 搜索旋转排序数组 -- 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  let left = 0, right = nums.length - 1, mid = 0;
  while (left <= right) {
      mid = (left + (right - left) / 2) |0;
      if (nums[mid] == target) {
          return mid;
      }     
      if (nums[left]<=nums[mid]) {//单调递增  
          if (target >= nums[left] && target < nums[mid]) {
             right = mid - 1;
          } else {
             left = mid + 1;
          }
      } else {
          if (target > nums[mid] && target <= nums[right]) {
              left = mid + 1;
          } else {
             right = mid - 1;
          }
      }
  }
  return -1;
};