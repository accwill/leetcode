// 387. 字符串中的第一个唯一字符
// 简单
// 621
// 相关企业
// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

 

// 示例 1：

// 输入: s = "leetcode"
// 输出: 0
// 示例 2:

// 输入: s = "loveleetcode"
// 输出: 2
// 示例 3:

// 输入: s = "aabb"
// 输出: -1
 

// 提示:

// 1 <= s.length <= 105
// s 只包含小写字母


/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {

  /**
   * 使用字典，遍历每个字母，字典需要知道  
   *  1. 字符
   *  2. 索引号
   * 使用字符作为key，索引号作为value
   * 如果当前key已经存在则从字典中删除，并标记当前字符已经重复；
   * 如果不存在则添加进字典
   *  
   * 
   *  
   */
  const obj = {}
  const delObj = {}
  for (let i = 0; i < s.length; i++) {
    if (delObj[`del-${s[i]}`]) {
      continue
    }
    if (obj[s[i]] === undefined) {
      obj[s[i]] = i
    } else {
      Reflect.deleteProperty(obj, `${s[i]}`)
      delObj[`del-${s[i]}`] = 1
    }
  }
  
  let min = Infinity
  for (const key in obj) {
    const element = obj[key];
    min = Math.min(min, element)
  }

  return min === Infinity ? -1 : min
};

console.log('firstUniqChar', firstUniqChar("loveleetcode"))