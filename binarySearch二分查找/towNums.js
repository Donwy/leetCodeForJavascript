const nums = [2,7,11,15]
const target = 9;
var twoSum = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let res = [];
    while(left < right) {
        let sum = nums[left] + nums[right];
        if(sum > target) {
            right--;
        } else if(sum < target) {
            left++
        } else {
            res.push(nums[left], nums[right])
            break;
        }
    }
    console.log(res)
    return res;
};
twoSum(nums, target)