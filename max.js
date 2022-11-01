/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 * 示例 1：
 *    输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 *    输出：6
 *    解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 * 示例 2：
 *    输入：nums = [1]
 *    输出：1
 *    示例 3：
 *    输入：nums = [5,4,-1,7,8]
 *    输出：23
 * 提示：
 *    1 <= nums.length <= 105
 *    -104 <= nums[i] <= 104
 * 进阶：如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的 分治法 求解。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const obj = {};
  const garr = [];
  const result = nums
    .map((item, index) => {
      let arrResult = [];
      for (let i = nums.length; i >= index; i--) {
        const arr = nums.slice(index, i);
        const _r = arr.reduce((acc, item) => item + acc, 0);
        arrResult.push(_r);
        garr.push(arr);
        obj[_r] = arr;
      }
      return arrResult;
    })
    .flat();

  const max = Math.max(...result);
  return max;
};

/**
 * 核心思路是将当前元素定义为连续子数组的最后一个元素。
 * dp[i]：表示以 nums[i] 结尾 的 连续 子数组的最大和。
 * dp[i] = dp[i - 1] > 0 ?  dp[i - 1] + nums[i] : nums[i]
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function (nums) {
  let len = nums.length;
  let dep = [];
  dep[0] = nums[0];

  for (let i = 1; i < len; i++) {
    let cur = nums[i];
    if (dep[i - 1] <= 0) {
      dep[i] = cur;
    } else {
      dep[i] = dep[i - 1] + cur;
    }
  }
  let res = 0
  for (const value of dep) {
    res = Math.max(res, value)
  }
  return res
};

const result = maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log("result", result);
