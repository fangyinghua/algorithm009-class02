学习笔记

### 常见的时间/空间复杂度

* O(n^3)
* O(n^2)
* O(1)
* O(nlogn)
* O(logn)

| Algorithm（算法） | Run time |
| ------ | ------ |
| Binary search（二分查找）| O(log n) | 
| Binary tree traversal（二叉树遍历） | O(n) | 
| Optimal sorted matrix search（最优排序矩阵查找）| O(n) | 
| Merge sort （合并排序）（Cascade merge sort， Oscillating merge sort ，Polyphase merge sort） | O(nlogn) | 

### 数组

* 数组的基础知识：
   * 数组在内存中是连续存储的,通过寻址公式可以快速访问数组中的任何一个元素,所以查找元素的复杂度为O(1)，数据删除或者增加元素的时候，为了维持数组在内存中是连续的，有的时候需要搬移操作，平均时间的复杂度为O(n)。
   * 在JavaScript中的数组天生就支持动态扩容，扩容一般会对之前的数组进行复制。并且还可以存放不同数据类型的数据。那么js中内存中是如何存储的呢？当存放相同类型的数据并且大小不超过一定大小的时候，数组在内存中也是连续存储的；但是如果数组的大小超过一定大小或者存储不同类型的数据的时候，数组会转换为hash table数据结构。 
      

* 比较常见的解法：

  * 暴力求解：一般就是多层循环 当如果嵌套的层级较多的时候，可以通过创建*哈希表*数据结构进行降级。 遍历的时候，为了不出现重复。学到了如何编写嵌套循环，如下代码，是不是发现了什么规律。
  
  ```js
  let len=arr.length;

  //两层
   for(let i=0;i<len-1;++i){
     for(let j=i+1;j<len;j++){
       
     }
  }

   //比如三层：  
  for(let i=0;i<len-2;++i){
     for(let j=i+1;j<len-1;j++){
        for(let k=j+1;k<len;k++){

        }
     }
  }
  ```
  * 指针法：左右夹逼 /快慢指针 

   * 比如[盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/solution/sheng-zui-duo-shui-de-rong-qi-by-leetcode-solution/) 的题目

   ```java
   public class Solution {
      public int maxArea(int[] height) {
         int l = 0, r = height.length - 1;//双指针
         int ans = 0;
         while (l < r) {
               int area = Math.min(height[l], height[r]) * (r - l);
               ans = Math.max(ans, area);
               if (height[l] <= height[r]) {
                  ++l;//左指针 ->往右移动
               }
               else {
                  --r;//右指针 ->往左移动
               }
         }
         return ans;
      }
   }
   ```

   * 跳过重复值，使用循环，移动指针。
   ```js
      while (nums[first] === nums[++first]) 
   ```

| Array | Run time |
| ------ | ------ |
| prepend| O(1) | 
| append | O(1) | 
| lookup| O(1) | 
| insert| O(n) | 
| delete| O(n) | 

### 链表

* 链表的基础知识：
   * 链表中的节点存放着*指针*和*数据*。
   * 常见的链表的类型：单链表、双向链表、环型链表等。
   * 单链表结点中存放一个next指针，如果节点没有下一个指针那么该指针就指向null，并且有个head结点。
   * 双向链表中节点存放两个指针next和previous，并且链表有两个结点head头节点和tail尾结点。head节点的previous指向null，tail节点next指针指向null。

* js实现的单链表和双链表
   * [单链表](./singly-linked-list.js)
   ![Image](./img/singly-linked-list.png)
   * [双链表](./doubly-linked-list.js)
   ![Image](./img/doubly-linked-list.png)


* 常用解法
   * 哨兵变量      
   * 递归

| Linked List | Run time |
| ------ | ------ |
| prepend| O(1) | 
| append | O(1) | 
| lookup| O(n) | 
| insert| O(1) | 
| delete| O(1) | 

### 跳表 Skip List

* 基本特点：
   * 只能用于*元素有序*的情况下。
   * 插入、删除、搜索的时间复杂度都为O(logn)。
   * 跳表对标的是平衡树/二分查找。
   * 给有序的链表查询加速（通过增加维度）。
   * 通过添加索引维度（空间换时间），降低查询的时间复杂度。（ O(n)降 O(logn) ）。
   * 因为需要维护索引，所以增加、删除的时间复杂度降到。（O(1) 升到 O（logn））。


### 栈、队列

* stack：先入后出  --> 添加、删除皆为O(1) / 查询 O(n)
[基于链表实现的栈](./StackBasedOnLinkedList.js)
* queue：先入先出  --> 添加、删除皆为O(1) / 查询 O(n)
* Double-End Queue 双端队列
[!Image](./img/double-end-queue.png)
* Priority Queue --> 优先队列
   1. 插入操作:O(1);
   2. 取出操作:O(logN) -- 按照元素的优先级取出
   3. 底层具体数据的数据结构比较多样和复杂：heap(堆)、BST(二叉搜索树)、treap

[通用的数据结构复杂度](./img/common_data_structure_operations.png)