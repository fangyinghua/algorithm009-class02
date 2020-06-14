/** 74. 搜索二维矩阵
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let m = matrix.length;//m行
  if (m == 0) return false;
  let n = matrix[0].length;//n列

  // 二分查找
  let left = 0, right = m * n - 1;
  let pivotIdx, pivotElement;
  while (left <= right) {
     pivotIdx = (left + right) / 2 |0;
     pivotElement = matrix[(pivotIdx / n)|0][pivotIdx % n];
    if (target == pivotElement) return true;
    else {
      if (target < pivotElement) right = pivotIdx - 1;
      else left = pivotIdx + 1;
    }
  }
  return false;
};