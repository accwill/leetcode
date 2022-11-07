// 206. 反转链表
// 简单
// 2.8K
// 相关企业
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 

// 示例 1：


// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// 示例 2：


// 输入：head = [1,2]
// 输出：[2,1]
// 示例 3：

// 输入：head = []
// 输出：[]

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 方法一：迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  // 在遍历链表时，将当前节点的 next 指针改为指向前一个节点

  if (!head) {
    return head
  }
  let before = null
  let cur = head


  while (cur) {
    const next = cur.next
    cur.next = before
    before = cur
    cur = next
  }
  return before
  
};
/**
 * 方法一：递归
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  // 在遍历链表时，将当前节点的 next 指针改为指向前一个节点

  if (!head) {
    return head
  }

  const newHead = reverseList(head.next)
  // 将下一个节点指向前一个节点
  head.next.next = head
  /**
   * 打断当前节点与之前下一个节点的联系
   *   例如： 4 -> 3 改为 3 -> 4， 并将4 -> 3 这个链打断
   */
  head.next = null
  return newHead
  
};