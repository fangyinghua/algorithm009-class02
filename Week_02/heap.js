/**
 * https://shimo.im/docs/Lw86vJzOGOMpWZz2/read
 * 二叉堆 根据java改js
 */
const d=2;

class BinaryHeap{


  constructor(capacity){
    this.heapSize=0;
    this.heap=Array(capacity+1);
    this.heap.fill(-1);//使用-1 填充
  }

  isEmpty(){
    return this.heapSize===0;
  }

  isFull(){
    this.heapSize=this.heap.length;
  }

  parent(i){
    return (i-1)/d;
  }

  kthChild(i,k){
    return d*i+k;
  }

  insert(x){
  if(this.isFull()){
    throw new RangeError("Heap is full, No space to insert new element");
  }
  this.heap[this.heapSize]=x;
  this.heapSize++;
  this.heapifyUp(this.heapSize-1);
  }

  heapifyUp
  

}