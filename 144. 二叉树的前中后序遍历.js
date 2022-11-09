// 144. 二叉树的前序遍历
// 简单
// 940
// 相关企业
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。

// 示例 1：

// 输入：root = [1,null,2,3]
// 输出：[1,2,3]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]
// 示例 4：


// 输入：root = [1,2]
// 输出：[1,2]
// 示例 5：


// 输入：root = [1,null,2]
// 输出：[1,2]
 

// 提示：

// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100
 

// 进阶：递归算法很简单，你可以通过迭代算法完成吗？

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 中序遍历，左跟右
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {

  const result = []

  /**
   * @param {TreeNode} node
   */
  const qianxu = (node) => {
    if (!node) {
      return
    }
    result.push(node.val)
    node.left && qianxu(node.left)
    node.right && qianxu(node.right)
  }
  qianxu(root)
  return result
};
/**
 * 后续遍历，左子树——右子树——根节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

  const result = []

  /**
   * @param {TreeNode} node
   */
  const qianxu = (node) => {
    if (!node) {
      return
    }
    node.left && qianxu(node.left)
    node.right && qianxu(node.right)
    result.push(node.val)
  }
  qianxu(root)
  return result
};