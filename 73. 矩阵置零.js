// 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
// 示例 1：
// 输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
// 输出：[[1,0,1],[0,0,0],[1,0,1]]
// 示例 2：
// 输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// 输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
// 提示：

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1
// 进阶：
// 一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
// 一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
// 你能想出一个仅使用常量空间的解决方案吗？



/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const rows = new Set()
  const cols = new Set()
  
  /**
   * 需要循环两次，第一次找到所有为0的行和列，第二次直接填充0
   */
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.add(i)
        cols.add(j)
      }
    }
  }

  const r = [...rows]
  const c = [...cols]
  console.log('r', r, c)
  /**
   * 需要循环两次，第一次找到所有为0的行和列，第二次直接填充0
   */
  for (let i = 0; i < r.length; i++) {
    const row = r[i]
    matrix[row] = new Array(matrix[row].length).fill(0)
  }

  for (let j = 0; j < matrix.length; j++) {
    for (let i = 0; i < c.length; i++) {
      matrix[j][c[i]] = 0
    }
  }
  return matrix
};


console.log('setZeroes', setZeroes([[1,1,1],[1,0,1],[1,1,1]]))