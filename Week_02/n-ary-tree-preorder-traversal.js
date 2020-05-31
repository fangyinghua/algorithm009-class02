/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * n叉树的前序遍历
 * 递归
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if(!root) return [];
  return Array.prototype.concat.apply([root.val], root.children.map(child => preorder(child)))；
};

var preorder = function(root) {
  if (!root) return [];
  var res = [], arr = [root];
  while(arr.length){
      var current = arr.pop();
      res.push(current.val);

      for(var i = current.children.length - 1; i >= 0; i--){
          arr.push(current.children[i]);
      }
  }
  return res; 
};

