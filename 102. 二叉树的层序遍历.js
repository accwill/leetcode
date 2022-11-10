// 102. 二叉树的层序遍历
// 中等
// 1.5K
// 相关企业
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

// 示例 1：

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 前序
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {

  const result = []
  if (!root) {
    return result
  }

  const q = []
  q.push(root)

  while(q.length) {
    const curSize = q.length
    result.push([])
    for (let i = 0; i < curSize; i++) {
      const node = q.shift()
      result[result.length - 1].push(node.val)
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

const test = [1].map(item => new TreeNode(item))

console.log('ss',  levelOrder(test[0]))
// 左右根
// 根左右