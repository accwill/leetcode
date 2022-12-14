// 121. 买卖股票的最佳时机
// 简单
// 2.6K
// 相关企业
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

// 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

// 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。

// 示例 1：

// 输入：[7,1,5,3,6,4]
// 输出：5
// 解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 示例 2：

// 输入：prices = [7,6,4,3,1]
// 输出：0
// 解释：在这种情况下, 没有交易完成, 所以最大利润为 0。

// 提示：

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104
// 通过次数
// 954.3K
// 提交次数
// 1.6M
// 通过率
// 58.1%
// 请问您在哪类招聘中遇到此题？
// 1/5

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 求差最大，这道题跟53. 最大子数组和很像

  /**
   * 如何求出一个数组的最大差值，且是后面的前去前面的
   * 思考确定因数 [7,1,5,3,6,4]
   *   1. 7 不可以减去任何数字
   *   2. 1 可以减去7    1 - 7 = -6
   *   3. 5 可以减去1 和7  5 -  1 = 4  5 - 7 = -2
   *   4. 3 可以减去5,1,7
   *   5. 6 可以减去前面的所有数字
   *   6. ...
   * 有点麻烦，执行了了一下有的测试用例超时了，换一种思路
   *
   */

  let i = 1;
  let max = 0;
  let count = 0
  while (i < prices.length) {
    let j = i;
    while (j >= 0) {
      count++
      const result = prices[i] - prices[j];
      max = Math.max(result, max);
      j--
    }
    i++;
  }
  console.log('cout', count)
  return max
};

/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit1 = function (prices) {
  // 求差最大，这道题跟53. 最大子数组和很像

  /**
   * 如何求出一个数组的最大差值，且是后面的前去前面的
   * 思考确定因数 [7,1,5,3,6,4]admin
   * 
   *   1. 7 不可以减去任何数字
   *   2. 1 可以减去7    1 - 7 = -6
   *   3. 5 可以减去1 和7  5 -  1 = 4  5 - 7 = -2
   *   4. 3 可以减去5,1,7
   *   5. 6 可以减去前面的所有数字
   *   6. ...
   *  得出另一个结论，使用当前数字，当前索引之前的最小的数字即可。
   *  依然超出时间限制
   */

   let result = 0, pre = prices[0];
   for(let i = 1; i < prices.length; i++){
       // 找到前一天的最小价格
       pre = Math.min(pre, prices[i]);
       // 计算如果今天卖出的话，收益是多少，然后和之前的收益做比较，返回最大的收益
       result = Math.max(result, prices[i] - pre);
   }
   return result;

};
console.log("maxProfit", maxProfit1([7, 1, 5, 3, 6, 4]));
console.log("maxProfit", maxProfit1([7,6,4,3,1]));
