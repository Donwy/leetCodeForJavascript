/**
 * 在有序数组中找出缺失的数
 * 268. 丢失的数字
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数。
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === mid) {
            left = mid + 1; // 缺失的数在右半部分，更新左边界
        } else {
            right = mid - 1; // 缺失的数在左半部分，更新右边界
        }
    }

    return left; // 找到缺失的数，返回 left
};
