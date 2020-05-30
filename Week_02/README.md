学习笔记
### 哈希表、映射、集合的实现与特性

* Hash table（哈希表 散列表）
  * 哈希表是键值对配对的数据结构，将key通过hash function转换为数组的索引。从而达到快速搜索的效果。
  * 不同的key通过hash function获得的数字相同的时候，我们就称发生了hash 碰撞，所以设置的hash function很关键要尽量减少hash冲突的概率，一般不能通过数字（index）推算出原始数据key（所以也称单向哈希算法）。

  * 解决hash碰撞的方法一般有：开放寻址法和链表法。
  * [v8中HashTable代码](https://github.com/v8/v8/commit/0e8e0030775518b69eb8522823ea3754e6bddc69#diff-2b73f7df77a2d3cc8eb1a03e93b2d5d8)


### 二叉树
* 二叉树（Binary Tree）特点: 每个结点只有左结点、右结点；

```js
  //二叉树 结点的定义
  classTreeNode{
    constructor(value){
      this.value=value;
      this.left=null;
      this.right=null;
    }  
  }
  //一个结点 类似左右指针
```

* 二叉树遍历 (Pre-order/In-order/Post-roder)方式：

1. 前序 （pre-order）：根-左-右
2. 中序 （In-order）：左-根-右
3. 后序 （Post-orer）:左-右-根
4. 常见操作及时间复杂度
    1. 查询 logn
    2. 插入新节点(创建) logn
    3. 删除

* 二叉搜索树
  定义：二叉排序树、有序二叉树、排序二叉树(Sorted Binary Tree),是指一颗*空树*或者具有下列性质的二叉树：
  1. 左子树上*所有结点*的值均小于它的根结点的值;
  2. 右子树上*Z所有结点*的值均大于它的根结点的值;
  3. 以此类推：左、右子树也分别为二叉搜索树。（重复性） 。中序遍历是升序遍历
  4. 常见操作及时间复杂度
    1. 查询 log2n
    2. 插入新节点(创建) log2n
    3. 删除 （叶子上删除 非叶子上删除） 非叶子上 需要查找第一个大于或者小于的叶子节点 替换要删除节点的位置。
  

### 堆

找到一堆数中的最大或者最小值的数据结构。

大顶堆 
fin-max: