// 383. 赎金信
// 简单
// 554
// 相关企业
// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

 

// 示例 1：

// 输入：ransomNote = "a", magazine = "b"
// 输出：false
// 示例 2：

// 输入：ransomNote = "aa", magazine = "ab"
// 输出：false
// 示例 3：

// 输入：ransomNote = "aa", magazine = "aab"
// 输出：true
 

// 提示：

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote 和 magazine 由小写英文字母组成

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  /**
   * 统计ransomNote中的每个字符的个数，判断magazin中相应地字符个数
   * 如果ransomNote中有的字符，magazine中没有则返回false，或者ransomNote中的字符个数大于magazine中的字符个数返回false
   * 否则返回true
   */
  
  const ransomNoteObj = {}
  const magazineObj = {}

  for (let i = 0; i < ransomNote.length; i++) {
    if (!ransomNoteObj[ransomNote[i]]) {
      ransomNoteObj[ransomNote[i]] = 1
      continue;
    }
    ransomNoteObj[ransomNote[i]]++
  }
  for (let i = 0; i < magazine.length; i++) {
    if (!magazineObj[magazine[i]]) {
      magazineObj[magazine[i]] = 1
      continue;
    }
    magazineObj[magazine[i]]++
  }
  for (const key in ransomNoteObj) {
    if (!magazineObj[key]) {
      return false
    }
    if (ransomNoteObj[key] > magazineObj[key]) {
      return false
    }
  }
  return true
};
var canConstruct1 = function(ransomNote, magazine) {
  /**
  * 统计magazine中的每个字符的出现的次数存在字典中，键为字符，键值为字符出现的次数
  * 循环ransomNote，对字典中的键值做减法，如果键值小于0或者不存在则返回false，否则返回true
  */

  const dic = {}

  for (let i = 0; i < magazine.length; i++) {
    if (!dic[magazine[i]]) {
      dic[magazine[i]] = 1
      continue;
    }
    dic[magazine[i]]++
  }
  for (let i = 0; i < ransomNote.length; i++) {
    // 书写顺序一定不能乱
    if (dic[ransomNote[i]] === undefined) {
      return false
    }
    dic[ransomNote[i]]--
    if (dic[ransomNote[i]] < 0) {
      return false
    }
  }
  return true
};
console.log('canConstruct1', canConstruct1('aa', 'aab'))