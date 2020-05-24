/** 
MyCircularDeque(k)：构造函数,双端队列的大小为k。
insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true。
insertLast()：将一个元素添加到双端队列尾部。如果操作成功返回 true。
deleteFront()：从双端队列头部删除一个元素。 如果操作成功返回 true。
deleteLast()：从双端队列尾部删除一个元素。如果操作成功返回 true。
getFront()：从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
getRear()：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
isEmpty()：检查双端队列是否为空。
isFull()：检查双端队列是否满了。
*/

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.capacity=k+1;
  this.arr=new Array(k);
  this.front =0;
  this.rear=0;
};

/**
* Adds an item at the front of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {//从队列头部添加元素 font指针从右往左挪动 <---

  if(this.isFull()){//检测队列是否已满
      return false;
  }
 
  this.front=(this.front-1+this.capacity ) % (this.capacity);  
  this.arr[this.front] = value;
  return true;
};

/**
* Adds an item at the rear of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {//从队列尾部添加元素 rear指针 从左往右挪动 --->
      if (this.isFull()) {
          return false;
      }
      this.arr[this.rear] = value;
      this.rear = (this.rear + 1) % (this.capacity);//指向下个元素 
      return true;
};

/**
* Deletes an item from the front of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
   if (this.isEmpty()) {
          return false;
      }
      // front 被设计在数组的开头，所以是 +1
      this.front = (this.front + 1) % this.capacity;
      return true;
};

/**
* Deletes an item from the rear of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
      if (this.isEmpty()) {
          return false;
      }
      // rear 被设计在数组的末尾，所以是 -1
      this.rear = (this.rear - 1 + this.capacity) % this.capacity;
      return true;
};

/**
* Get the front item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
    if (this.isEmpty()) {
          return -1;
      }
    return this.arr[this.front];
};

/**
* Get the last item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
  if (this.isEmpty()) {
      return -1;
  }
  // 当 rear 为 0 时防止数组越界
  return this.arr[(this.rear - 1 + this.capacity) % this.capacity];
};

/**
* Checks whether the circular deque is empty or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return this.front === this.rear;
};

/**
* Checks whether the circular deque is full or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {    
  return (this.rear+1) % (this.capacity)===this.front;
};

/**
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/

var objMyCircularDeque = new MyCircularDeque(5);
console.log(objMyCircularDeque);//{ capacity: 6, arr: [ <5 empty items> ], front: 0, rear: 0 }
objMyCircularDeque.insertFront(5);
objMyCircularDeque.insertLast(3);
objMyCircularDeque.insertLast(2);
// const frontVaule=objMyCircularDeque.getFront();
// console.log(frontVaule);
// console.log(objMyCircularDeque);