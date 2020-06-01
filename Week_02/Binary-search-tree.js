/**
 * 二叉搜索树(BST) 左结点小于根节点 右节点大于根节点
 */
const root = Symbol("root");//根节点

/*
BST 二叉搜索树节点的定义
*/
class BinarySearchTreeNode {

  constructor(value) {
    this.value = value;

    //指向BST中左侧节点的指针
    this.left = null;

    //指向BST中右侧节点的指针
    this.right = null;
  }

}

/**
 * 二叉搜索树
 */
class BinarySearchTree {

  constructor() {
    this[root] = null;
  }
  add(value) {
    const newNode = new BinarySearchTreeNode(value);

    if (this[root] === null) {//空树
      this[root] = newNode;
    } else {
      let current = this[root];
      while (current != null) {//根据当前节点值与 value比较 如果小添加到左子树 ；如果大添加到右子树
        if (value < current.value) {//左子树

        } else if (value > current.value) {//右子树

        } else {
          break;
        }
      }

    }
  }
}