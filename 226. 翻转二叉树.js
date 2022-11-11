// 226. 翻转二叉树

const invertTree = function(root) {
  if (root === null) {
      return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};