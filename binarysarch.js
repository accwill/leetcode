/**
 * 704. 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * 示例 1:
 *    输入: nums = [-1,0,3,5,9,12], target = 9
 *    输出: 4
 *    解释: 9 出现在 nums 中并且下标为 4
 * 示例 2:
 *    输入: nums = [-1,0,3,5,9,12], target = 2
 *    输出: -1
 *    解释: 2 不存在 nums 中因此返回 -1
 */



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 二分复杂的判断
 */
var search = function (nums, target) {
  let l = 0, r = nums.length - 1
  while (l <= r) {
    const m = (r - l >> 1) + l
    if (nums[l] === target) {
      return l
    } else if (nums[r] === target) {
      return r
    } else if (nums[m] === target) {
      return m
    } else if (nums[m] < target) {
      l = m + 1
      r = r - 1
    } else if (nums[m] > target) {
      r = m - 1
      l = l + 1
    }
  }
  return -1
};

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns 
 */
var search1 = function (nums, target) {
  let l = 0, r = nums.length - 1
  let count = 0

  while (l <= r) {
    count++
    const m = (r - l >> 1) + l

    if (nums[m] === target) {
      return l
    } else if (nums[m] < target) {
      l = m + 1
    } else if (nums[m] > target) {
      r = m - 1
    }
  }
  return -1
};

const result = search([-1, 0, 3, 5, 9, 12], 12)
const result1 = search1([-1, 0, 3, 5, 9, 12], 12)

console.log('search', result, result1)
