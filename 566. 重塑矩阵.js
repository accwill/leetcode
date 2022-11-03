// 566. 重塑矩阵
// 简单
// 350
// 相关企业
// 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。

// 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。

// 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。

// 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
 

// 示例 1：


// 输入：mat = [[1,2],[3,4]], r = 1, c = 4
// 输出：[[1,2,3,4]]
// 示例 2：


// 输入：mat = [[1,2],[3,4]], r = 2, c = 4
// 输出：[[1,2],[3,4]]

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  let result = mat
  
  /**
   * 什么情况下不合理
   * r * c !== m * n 不合理
   */
  const flatList = mat.flat()
  if (r * c !== flatList.length) {
    return result
  }
  result = []
  let count = -1
  for (let i = 0; i < flatList.length; i++) {
    let index = i % c
    if (index === 0) {
      count++
      result[count] = []
    }
    result[count].push(flatList[i])
  }



  return result
};


/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape1 = function(mat, r, c) {
  /**
   * 什么情况下不合理
   * r * c !== m * n 不合理
   */
  if (r * c !== mat.length * mat[0].length) {
    return mat
  }

  const ans = new Array(r).fill(0).map(() => new Array(c).fill(0))
  const m = mat.length
  const n = mat[0].length

  for (let x = 0; x < m * n; ++x) {
    ans[Math.floor(x / c)][x % c] = mat[Math.floor(x / n)][x % n]
  }
  return ans
};

console.log('mant', matrixReshape1([[1,2],[3,4]], r = 1, c = 4))