// 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

// 在「杨辉三角」中，每个数是它左上方和右上方的数的和。

// 示例 1:

// 输入: numRows = 5
// 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// 示例 2:

// 输入: numRows = 1
// 输出: [[1]]
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  /**
   * 公式推导
   * 第一行，第一个和最后一个都是1
   *  空白部分等于 m - 1 行的 第 n - 1个 + m - 1行的第n个
   */

  const arr = new Array(numRows).fill(0).map((_, index) => new Array(index + 1).fill(1))

  let i = 2;
  /**
   * 2 - 1
   * 3 - 2
   * 4 - 3
   */
  while (i < numRows) {
    for (let j = 1; j <= i - 1; j++) {
      console.log(i, j)
      arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
    }
    i++
  }
  return arr
};

console.log('gernat', generate(5))