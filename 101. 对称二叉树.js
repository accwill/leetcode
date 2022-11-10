// 101. 对称二叉树
// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  // 它们的两个根结点具有相同的值
  // 每个树的右子树都与另一个树的左子树镜像对称


  const check = (left, right) => {

    if (!left && !right) {
      return true
    }
    if (!left || !right) {
      return false
    }
    if (left.val !== right.val) {
      return false
    }


    return check(left.left, right.right) && check(left.right, right.left)
  }
  return check(root.left, root.right)
};