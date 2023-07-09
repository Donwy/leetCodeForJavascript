var threeSum = function(nums) {
    let res = [];
    nums.sort((a,b) => a - b);

    for(let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let x = i + 1;
        let y = nums.length - 1;
        while(x < y) {
            if(nums[i] + nums[x] + nums[y] < 0){
                x++;
            }else if(nums[i] + nums[x] + nums[y] > 0) {
                y--;
            }else {
                res.push([nums[i], nums[x], nums[y]]);
                while(x < y && nums[x] === nums[x + 1]) {
                    x++;
                }
                while(x < y && nums[y] === nums[y - 1]) {
                    y--;
                }
                x++;
                y--;
            }
        }
    }
    return res;
};