// 509. 斐波那契数
// 简单
// 556
// 相关企业
// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。

// 示例 1：

// 输入：n = 2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
// 示例 2：

// 输入：n = 3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2
// 示例 3：

// 输入：n = 4
// 输出：3
// 解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 

// 提示：

// 0 <= n <= 30

/**
 * f3 = f2 - f1
 * f2 = 2 - 1 + (2 - 2) = 1
 * f1 = 1
 * f3 = 1 + 1 = 2
 * f4 = f3 + f2 = 2 + 1 = 3
 * f5 = f4 + f3
 */


/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {

  if (n === 0 || n === 1) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
};
var fib1 = function(n) {
  let result = 1
  let n1 = 0
  let n2 = 0
  // 注意：fn !== n
  for (let i = 2; i <= n; i++) {
    n2 = n1
    n1 = result
    result = n1 + n2
  }
  return result
};

console.log('fib', fib(8))
console.log('fib1', fib1(8))



/** 这一项是通过推理方程得出来的，详细参考通项公式： https://leetcode.cn/problems/fibonacci-number/solutions/545049/fei-bo-na-qi-shu-by-leetcode-solution-o4ze/ */
var fib1 = function(n) {
  const sqrt5 = Math.sqrt(5);
  const fibN = Math.pow((1 + sqrt5) / 2, n) - Math.pow((1 - sqrt5) / 2, n);
  return Math.round(fibN / sqrt5);
};

