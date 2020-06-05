/**
 * 使用数组实现的
 * 优先队列
 * 通过数据实现
 * 队首 front
 * 队尾 rear
 */


/**
 * 存储元素和优先级
 */
class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {

  constructor() {
    this.items = [];//数组 是QElement 容器
  }

  /**
   * 根据优先级插入元素
   * 队尾
   * @param {*} element  需要添加的元素
   * @param {*} priority  优先级
   * 
   */
  enqueue(element, priority) {
    var qElement = new QElement(element, priority);
    var contain = false;

    // 在Queue的正确位置添加元素
    for (var i = 0, len = this.items.length; i < len; ++i) {
      if (this.items[i].priority > qElement.priority) {//比较优先级
        this.items.splice(i, 0, qElement);//向items数组下标为i中添加qElement元素
        contain = true;
        break;
      }
    }

    //如果元素具有最高优先级，则将其添加到队列的末尾
    if (!contain) {
      this.items.push(qElement);
    }
  }

  // 从优先级队列中删除一个元素
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  /**
   * 返回队首元素
   */
  front() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[0];
  }
  /**
   * 返回队尾元素
   */
  rear() {
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  [Symbol.iterator]() {
    return this.values();
  }

  *values() {
    for (var i = 0, len = this.items.length; i < len; ++i) {
      yield this.items[i].element;
    }
  }

}

var priorityQueue = new PriorityQueue(); 
// console.log(priorityQueue.isEmpty()); 
// console.log(priorityQueue.front());   
priorityQueue.enqueue("Sumit", 2); 
priorityQueue.enqueue("Gourav", 1); 
priorityQueue.enqueue("Piyush", 1); 
priorityQueue.enqueue("Sunny", 2); 
priorityQueue.enqueue("Sheru", 3); 
// console.log(priorityQueue.front());  
console.log(...priorityQueue.values());


