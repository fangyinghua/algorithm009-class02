/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1=m-1;
  let p2=n-1;
  let p=n+m-1; 

  while(p1>=0 && p2>=0){
      nums1[p--] = (nums1[p1] < nums2[p2]) ? nums2[p2--] : nums1[p1--];
  }  
  if(p2>=0){
      while(p2>=0){
          nums1[p--]=nums2[p2--];
      }    
  }   
};


var merge = function(nums1, m, nums2, n) { 
  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
        nums1[m+n-1] = nums1[m-1]
        m--
    } else {
        nums1[m+n-1] = nums2[n-1]
        n--
    }
}
if( m == 0) {
    for (let i = 0; i < n; i++) {
        nums1[i] = nums2[i]
    }
} 
};