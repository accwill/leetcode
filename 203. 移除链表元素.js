/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
   
  const h = new ListNode()
  h.next = head
  let p = h
  while(p) {
    if (p.val === val) {
      // 删除节点
      if (prev === null) {
        head = head.next
      } else {
        prev.next = p.next
        p = prev
      }
    }
    prev = p
    p = p.next
  }

  return h.next

};
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
   

  if (head === null) {
    return null
  }

  head.next = removeElements(head.next, val)

  return head.val === val ? head.next : head

};