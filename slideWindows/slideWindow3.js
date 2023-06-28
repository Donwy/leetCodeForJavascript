const nums = [1,3,-1,2,4,3,1,5,6];
const target = 3;

const maxNum = function(nums, target) {
    let start = 0;
    let win = -Infinity;
    let res = [];
    for(let end = 0; end < nums.length; end++) {
        win = Math.max(win, nums[end]);
        while(end - start + 1 == target) {
            res.push(win);
            start++;
        }
    }
    return res;
}

console.log(maxNum(nums, target));
