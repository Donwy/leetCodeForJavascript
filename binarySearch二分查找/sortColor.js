let sortColor = (nums) => {
  	let cur = 0;
	let left = 0;
	let right = nums.length - 1;
	while(cur <= right) {
		if(nums[cur] == 2) {
		  [nums[cur], nums[right]] = [nums[right], nums[cur]];
		  right--;
		} else if(nums[cur] == 0) {
		  [nums[cur], nums[left]] = [nums[left], nums[cur]];
		  left++;
		  cur++;
		} else if(nums[cur] == 1) {
		  cur++;
		}  
	}      
    return nums;
};
const nums1 = [2, 0, 1, 2, 0, 1];
console.log(sortColor(nums1));
