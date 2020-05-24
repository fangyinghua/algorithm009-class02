/*
 * js 实现双链表
 */

const head = Symbol("head");//头指针
const tail = Symbol("tail");//尾指针

/**
 * 双链表节点
 * 每个节点有两个指针
 * next  后继指针
 * previous 前驱指针
 * 
 */
class DoublyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null
  }
}


class DoublyLinkedList {

  /**
   * 链表的头指针 尾指针
   */
  constructor() {
    this[head] = null;
    this[tail] = null;
  }

  /**
   * 添加数据到尾节点后
   * @param {*} data 
   */
  add(data) {

    const newNode = new DoublyLinkedListNode(data);
    if (this[head] === null) {
      this[head] = newNode;
    } else {
      this[tail].next = newNode;
      newNode.previous = this[tail];
    }

    this[tail] = newNode;//更新尾指针
  }

  /**
   * 在指定的位置前添加节点
   * @param {*} data 
   * @param {*} index 
   */
  insertBefore(data, index) {
    const newNode = new DoublyLinkedListNode(data);
    if (this[head] === null) { throw new RangeError(`Index ${index} does not exist in the list.`); }
    if (index === 0) {
      newNode.next = this[head];
      this[head].previous = newNode;
      this[head] = newNode;
    } else {
      let i = 0;
      let current = this[head];
      while (current.next != null && i < index) {
        current = current.next;
        ++i;
      }

      if (i < index) {
        throw new RangeError(`Index ${index} does not exist in the list.`);
      }

      current.previous.next = newNode;
      newNode.previous = current.previous;

      newNode.next = current;
      current.previous = newNode;
    }
  }

  /**
   * 
   * @param {*} data 
   * @param {*} index 
   */
  insertAfter(data, index) {
    let newNode = new DoublyLinkedListNode(data);
    if (this[head] === null) { throw new RangeError(`Index ${index} does not exist in the list.`); }
    let current = this[head];
    let i = 0;
    while (current != null && i < index) {
      current = current.next;
      ++i;
    }

    if (i < j) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    if (this[tail] === current) {
      this[tail] = newNode;
    } else {
      current.next.previous = newNode;
      newNode.next = current.next;
    }
    //更新指针
    newNode.previous = current;
    current.next = newNode;
  }

  /**
   * 通过index 获取值
   * @param {*} index 
   */
  get(index) {

    if (index > -1) {
      let current = this[head];
      let i = 0;
      while (current != null && i < index) {
        current = current.next;
        ++i;
      }
      return current === null ? undefined : current.data;
    } else {
      return undefined;
    }
  }

  /**
   * 通过data 找index
   * @param {*} data 
   */
  indexOf(data) {
    let current = this[head];
    let i = 0;
    while (current != null) {
      if (current.data === data) {
        return i;
      }
      current = current.next;
      ++i;
    }
    return -1;
  }

  /**
   * 查找匹配 matcher函数规则的数据
   * @param {function} matcher 
   */
  find(matcher) {
    let current = this[head];
    while (current !== null) {
      if (matcher(current.data)) {
        return current.data;
      }
      current = current.next;
    }
    return undefined;
  }

  /**
   * 根据下标移除节点
   * @param {number} index 
   */
  remove(index) {
    if ((this[head] === null) || (index < 0)) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }
    if (index === 0) {
      const data = this[head].data;

      this[head] = this[head].next;
      if (this[head] === null) {
        this[tail] = null;
      } else {
        this[head].previous = null;//头接点的previous指向null
      }
      return data;
    }


    let current = this[head];
    let i = 0;
    while ((current !== null) && (i < index)) {
      current = current.next;
      i++;
    }

    if (current !== null) {
      current.previous.next = current.next;
      if (this[tail] === current) {
        this[tail] = current.previous;
      } else {
        current.next.previous = current.previous;
      }
      return current.data;
    }
    throw new RangeError(`Index ${index} does not exist in the list.`);
  }

  /**
   * 获取链表的长度
   * @returns {number}
   */
  get size() {
    if (this[head] === null) {//空链表
      return 0;
    }

    let current = this[head];
    let count = 0;

    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  /**
    *清空链表中所有结点
    * @returns {void}
    */
  clear() {
    this[head] = null;
    this[tail] = null;
  }

  /**
    * 
    * @returns {Iterator}
    */
  [Symbol.iterator]() {
    return this.values();
  }

  /**
   * 
   * @returns {Iterator} 
   */
  *values() {

    let current = this[head];
    while (current !== null) {
      yield current.data;
      current = current.next;
    }
  }


  /**
  * 反转结点
  * @returns {Iterator} An iterator on the list. 
  */
  *reverse() {
    let current = this[tail];
    while (current !== null) {
      yield current.data;
      current = current.previous;
    }
  }
}


