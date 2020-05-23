

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let newNode=new ListNode(-1);//哨兵变量
  let resultNode=newNode;
  while(l1!=null && l2!=null){
      if(l1.val>l2.val){
          resultNode.next=l2;
          l2=l2.next;
      }else{
          resultNode.next=l1;
          l1=l1.next;
      }
      resultNode=resultNode.next;
  }
  resultNode.next=l1===null?l2:l1;
  return newNode.next; 
};

/**
 * 递归方法
 * @param {*} l1 
 * @param {*} l2 
 */
var mergeTwoLists = function(l1, l2) {
    if(l1===null){
        return l2;
    }
    if(l2===null){
        return l1;
    }
    if(l1.val>l2.val){
        l2.next=mergeTwoLists(l1,l2.next);
        return l2;
    }else{
        l1.next=mergeTwoLists(l1.next,l2);
        return l1;
    }
};