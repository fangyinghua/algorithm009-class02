/*
 * 使用js实现的单链表
 */


/**
 * node 节点
 * 每个节点包含一些数据和一个指向列表中的下一个节点的指针
 */
class SinglyLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * 单链表
 */
const head = Symbol("head");

class SinglyLinkedList {

  /**
   * 创建一个新的SinglyLinkedList实例
   */
  constructor() {
    this[head] = null;//初始化头节点  默认为空节点
  }

  /**
   * Adding new data to the list
   * 向链表中添加新数据
   * @param {*} data  数据
   * @returns {void}
   */
  add(data) {
    const newNode = new SinglyLinkedListNode(data);//将数据转化为节点
    if (this[head] === null) {
      this[head] = newNode;
    } else {
      let current = this[head];
      while (current.next != null) {//需要遍历尾结点
        current = current.next;
      }
      current.next = newNode;
    }
  }

  /**
   * 
   * @param {*} data 
   * @param {number} index 
   * @returns {void}
   * @throws {RangeError}
   */
  insertBefore(data, index) {
    const newNode = new SinglyLinkedListNode(data);
    if (this[head] === null) {
      return new RangeError(`Index ${index} does not exit in the list`);
    }

    if (index === 0) {//头节点
      newNode.next = this[head];
      this[head] = newNode;
    } else {//非头节点
      let current = this[head], previous = null;
      let i = 0;
      while (current.next != null && (i < index)) {//所以此处current.next
        previous = current;//记录当前节点的前驱节点
        current = current.next;
        ++i;
      }

      if (i < index) {
        throw new RangeError(`Index ${index} does not exist in the list.`);
      }

      previous.next = newNode;
      newNode.next = current;
    }
  }

  /**
   * 
   * @param {*} data 
   * @param {*} index 
   */
  insertAfter(data, index) {
    let newNode = new SinglyLinkedListNode(data);
    if (this[head] === null) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    let current = this[head];
    let i = 0;
    let previous = null;
    while (current != null && i < index) {
      previous = current;
      current = current.next;
      ++i;
    }

    if (i < index) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

console.log('newNode',newNode);
    if (current === null) {//正好在链表的末尾
      previous.next = newNode;
    } else {
      newNode.next = current.next;
      current.next = newNode;

    }
  }

  /**
   * 如果链表长度小于index 或者index小于0 返回值undefined
   * Retrieving data from the list
   * 从链表中检索数据 通过index 查找对应节点的data
   * @param {number} index 
   * @returns undefined | node.data
   */
  get(index) {
    if (index > -1) {

      let current = this[head];
      let i = 0;
      while (current != null && i < index) {
        current = current.next;
        ++i;
      }

      return current !== null ? current.data : undefined;
    } else {
      return undefined
    }
  }

  /**
   * 通过data查找在list对应的下标
   * @param {*} data 
   * @returns {number} -1 代表未找到
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
   * 根据index下标删除index对应的节点
   * 注意是否越界
   * @param {number} index 
   * @returns {} 列表中给定位置的数据 
   */
  remove(index) {
    if (this[head] === null || index < 0) {
      throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    //如果index为0 代表删除头节点
    if (index === 0) {
      const data = this[head].data;
      this[head] = this[head].next;
      return data;
    }

    let current = this[head];
    let previous = null;
    let i = 0;
    while (current.next != null && i < index) {
      previous = current;
      current = current.next;
      ++i;
    }

    if (current != null) {
      previous.next = current.next;
      return current.data;
    }

    throw new RangeError(`Index ${index} does not exist in the list.`);
  }

  /**
   * 清空单链 
   * @returns {void}
   */
  clear() {
    this[head] = null
  }

  /**
   * 获取链表的大小
   * @returns {number}
   */
  size() {
    if (this[head] === null) { return 0; }
    let current = this[head];
    let size = 0;
    while (current != null) {
      ++size;
      current = current.next;
    }
    return size;
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
    let current = this[head];
    while (current != null) {
      yield current.data;
      current = current.next;
    }
  }

  toString() {
    return [...this].toString();
  }
}

// let singlyLinkedListObj = new SinglyLinkedList();
// singlyLinkedListObj.add(2);
// singlyLinkedListObj.add(6);

// singlyLinkedListObj.insertBefore(4, 1);
// singlyLinkedListObj.insertAfter(5, 0);
// let sizes=singlyLinkedListObj.size();
// const data=singlyLinkedListObj.get(1);

// console.log(singlyLinkedListObj[head]);
// let array1 = [...singlyLinkedListObj.values()];//[2,5,4,6]
// console.log(sizes);
// console.log(array1);
// console.log(data);