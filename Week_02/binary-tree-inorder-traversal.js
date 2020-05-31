/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/** 中序遍历 左子树 根 右子树
 * 模拟栈
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

  let stack=Array();//使用数组模拟栈
  let res=Array();
  let current=root;


  while(current!=null || stack.length!=0){
    while(current!=null){
      stack.push(current);
      current=current.left;
    }
    current=stack.pop();
    res.push(current.val);
    current=current.right;
  }
  return res;
}

/**
 * 递归
 * @param {*} root 
 */
var inorderTraversal = function(root) {
  // if (root) {
  //   return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
  // } else {
  //   return []
  // }

  var result = [];
  function pushRoot(root){
      if(root != null){
          if(root.left != null){
              pushRoot(root.left);
          }
          result.push(root.val);
          if(root.right !=null){
              pushRoot(root.right);
          }
      }
  }
  pushRoot(root);
  return result;
  
};