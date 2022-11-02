// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// 示例 2:

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]

// 提示：

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

// 进阶：

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  return nums1.filter((item) => {
    const index = nums2.indexOf(item);
    if (index === -1) {
      return false;
    }
    nums2.splice(index, 1);
    return true;
  });
};
// console.log(intersect([4,7,9,7,6,7], [5,0,0,6,1,6,2,2,4]))
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect1 = function (nums1, nums2) {
  const objA = {};
  const objB = {};
  let length = nums1.length > nums2.length ? nums1.length : nums2.length;
  const result = [];

  for (let i = 0; i < length; i++) {
    if (nums1[i] === nums2[i]) {
      result.push(nums1[i]);
      continue;
    }

    if (objA[nums2[i]]) {
      result.push(nums2[i]);
      objA[nums2[i]]--;
    } else {
      if (!objB[nums2[i]]) {
        objB[nums2[i]] = 1;
      } else {
        objB[nums2[i]]++;
      }
    }

    if (objB[nums1[i]]) {
      result.push(nums1[i]);
      objB[nums1[i]]--;
    } else {
      if (!objA[nums1[i]]) {
        objA[nums1[i]] = 1;
      } else {
        objA[nums1[i]]++;
      }
    }
  }

  return result;
};
console.log(
  intersect1(
    [
      54, 93, 21, 73, 84, 60, 18, 62, 59, 89, 83, 89, 25, 39, 41, 55, 78, 27,
      65, 82, 94, 61, 12, 38, 76, 5, 35, 6, 51, 48, 61, 0, 47, 60, 84, 9, 13,
      28, 38, 21, 55, 37, 4, 67, 64, 86, 45, 33, 41,
    ],
    [
      17, 17, 87, 98, 18, 53, 2, 69, 74, 73, 20, 85, 59, 89, 84, 91, 84, 34, 44,
      48, 20, 42, 68, 84, 8, 54, 66, 62, 69, 52, 67, 27, 87, 49, 92, 14, 92, 53,
      22, 90, 60, 14, 8, 71, 0, 61, 94, 1, 22, 84, 10, 55, 55, 60, 98, 76, 27,
      35, 84, 28, 4, 2, 9, 44, 86, 12, 17, 89, 35, 68, 17, 41, 21, 65, 59, 86,
      42, 53, 0, 33, 80, 20,
    ]
  )
);
// console.log(intersect([4,9,5], [9,4,9,8,4]))
// console.log(intersect([1], [1]))
// console.log(intersect([2,1], [1,1]))
// console.log(intersect([1,2,2,1], [2,2]))

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect2 = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b); //排序两个数组
  const res = [];
  let p1 = 0; //指向nums1中的元素
  let p2 = 0; //指向nums2中的元素
  while (p1 < nums1.length && p2 < nums2.length) {
    //不越界条件
    if (nums1[p1] > nums2[p2]) {
      //p1指向的元素大，移动p2
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      //p2指向的元素大，移动p1
      p1++;
    } else {
      //遇到相同则加入入res，移动两指针
      res.push(nums1[p1]);
      p1++;
      p2++;
    }
  }
  return res;
};

console.log(intersect2([4, 9, 5], [9, 4, 9, 8, 4]));
