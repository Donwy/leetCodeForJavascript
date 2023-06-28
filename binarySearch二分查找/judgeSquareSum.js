//633. 平方数之和：给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 
//输入：c = 5
// 输出：true
// 解释：1 * 1 + 2 * 2 = 5

function judgeSquareSum(c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c));
  
    while (left <= right) {
      const sum = left * left + right * right;
  
      if (sum === c) {
        return true;
      } else if (sum < c) {
        left++;
      } else {
        right--;
      }
    }
  
    return false;
  }
  
  // 使用示例
  console.log(judgeSquareSum(5)); // 输出: true (1^2 + 2^2 = 5)
  console.log(judgeSquareSum(3)); // 输出: false
  console.log(judgeSquareSum(25)); // 输出: true (3^2 + 4^2 = 25)
  console.log(judgeSquareSum(13)); // 输出: true (2^2 + 3^2 = 13)
  