// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

 

// 示例 1：

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
// 示例 2：

// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]
// 解释：需要合并 [1] 和 [] 。
// 合并结果是 [1] 。
// 示例 3：

// 输入：nums1 = [0], m = 0, nums2 = [1], n = 1
// 输出：[1]
// 解释：需要合并的数组是 [] 和 [1] 。
// 合并结果是 [1] 。
// 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
 

// 提示：

// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109


/**
 * 双指针版本
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let len = nums1.length

  let p1 = 0, p2 = 0

  const result = []

  while(p1 < m || p2 < n) {
    let cur
    if (p1 === m) { // p1 到头了直接加 p2
      cur = nums2[p2++];
    } else if (p2 === n) { // p2 到头了直接加 p1
      cur = nums1[p1++]
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++]
    } else {
      cur = nums2[p2++]
    }

    /**
     * 每次只有一个数字加一，所以总长度就是他们的和，下标要减1
     */
    result[p1 + p2 - 1] = cur
  }
  for (let i =0; i < result.length; i++) {
    nums1[i] = result[i]
  }
};
/**
  * 逆向双指针版本
  * @param {number[]} nums1
  * @param {number} m
  * @param {number[]} nums2
  * @param {number} n
  * @return {void} Do not return anything, modify nums1 in-place instead.
*/
var merge1 = function(nums1, m, nums2, n) {
 let p1 = m - 1, p2 = n - 1

 const result = []

 while(p1 >= 0 || p2 >= 0) {
   let cur
   if (p1 === -1) { // p1 到头了直接加 p2
     cur = nums2[p2--];
   } else if (p2 === -1) { // p2 到头了直接加 p1
     cur = nums1[p1--]
   } else if (nums1[p1] > nums2[p2]) {
     cur = nums1[p1--]
   } else {
     cur = nums2[p2--]
   }

   /**
    * 每次只有一个数字加一，所以总长度就是他们的和，下标要减1
    */
   nums1[p1 + p2 + 2] = cur
 }
 return nums1
};

console.log('merge', merge1([1,2,3,0,0,0], 3, [2,5,6], 3))