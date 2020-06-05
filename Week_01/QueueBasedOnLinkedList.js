/** 链式队列 
 * 基于链表实现的队列
 */

/**
 * 节点
 */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class QueueBasedOnLinkedList {

  constructor() {
    this.head = null;//指向队首
    this.tail = null;//指向队尾
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {//对尾添加
      this.tail.next = newNode;
      this.tail = this.tail.next;//移动队尾指针
    }
  }

  /**
   * 删除元素
   * 删除队首
   * @return {*} val 删除该节点的val值
   */
  dequeue() {
    if (this.head !== null) {
      const value = this.head.val;
      this.head = this.head.next;
      return value;
    } else {
      return -1;
    }
  }
}

