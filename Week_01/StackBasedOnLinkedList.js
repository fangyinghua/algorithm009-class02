
/**
 * 链表的节点
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}


/**
 * 
 * 基于链表实现的栈
 * 
 */
class StackBasedLinkedList {

  constructor() {
    this.top = null; //代表的栈顶 空栈
  }

  push(value) {
    const node = new Node(value);
    if (this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  /**
   * 取出栈顶元素
   */
  pop() {
    if (this.top === null) {
      return -1;
    }
    const value = this.top.data;
    this.top = this.top.next;
    return value;
  }

  clear() {
    this.top = null;//清空栈内元素
  }

  /**
   * 迭代器
   */
  [Symbol.iterator]() {
    return this.values();
  }

  /**
   * 生成器
   */
  *values() {
    let current = this.top;
    while (current != null) {
      yield current.data;
      current = current.next;
    }
  }
}

const newStack = new StackBasedLinkedList()
newStack.push(1)
newStack.push(2)
newStack.push(3)
console.log(newStack);
const res=[...newStack.values()];
console.log(res);