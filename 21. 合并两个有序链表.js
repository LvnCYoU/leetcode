/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let res;
  function a(list1, list2, res){
      if(list1 == null && list2 == null) return null;
      res = {
          val: 0,
          next: null
      }
      if(list1 && list2){
          let cur;
          if(list1.val < list2.val){
              cur = list1;
              list1 = list1.next
          }else {
              cur = list2;
              list2 = list2.next
          }
          res.val = cur.val;
          res.next = a(list1, list2, res.next)
      }else if(list1){
          res.val = list1.val;
          res.next = a(list1.next, null, null)
      }else {
          res.val = list2.val;
          res.next = a(null, list2.next, null)
      }
      return res
  }
  return a(list1,list2, res)
  
};

// 有点复杂写的
