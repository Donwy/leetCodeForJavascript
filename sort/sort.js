function quickSort(arr) {
    if (arr.length <= 1) {
      return arr; // 如果数组只有一个元素或为空，则直接返回
    }
  
    const pivot = arr[0]; // 选择数组的第一个元素作为基准
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]); // 小于等于基准的放在左边数组
      } else {
        right.push(arr[i]); // 大于基准的放在右边数组
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  
const arr = [4, 5, 2, 1, 3];

console.log(quickSort(arr));


const stub = false;
function send() {
    if(!stub) {
      return 1+1;
    } else {
      return 2+2
    }
}
