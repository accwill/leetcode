// 104. 二叉树的最大深度
// 简单
// 1.4K
// 相关企业
// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

// 返回它的最大深度 3 。


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 深度优先
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let result = 0
  if (!root) {
    return result
  }

  const leftHeight = maxDepth(root.left)
  const rightHeight = maxDepth(root.right)


  return Math.max(leftHeight, rightHeight) + 1


};
/**
 * 广度优先
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let result = 0
  if (!root) {
    return result
  }


  const q = []
  q.push(root)
  while(q.length) {
    const curSize = q.length
    result++

    for (let i = 0; i < curSize; i++) {
      const node = q.shift()
      if (node.left) {
        q.push(node.left)
      }
      if (node.right) {
        q.push(node.right)
      }
    }
  }
  
  return result
  
};