const nums = [2,3,1,2,4,3,3]
const target = 7;

const minResLengthStr = (nums, target) => {
    let start = 0;
    let win = 0;
    let minRes = 0;

    for(let end = 0; end < nums.length; end++) {
        win += nums[end];
        while(win >= target) {
            if(end - start + 1 < minRes || minRes ==0){
                minRes = end - start + 1;
            }
            win = win - nums[start];
            start++
        }
    }
    return minRes;
}

console.log(minResLengthStr(nums, target));
