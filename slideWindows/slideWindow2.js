const str1 = 'abcabcbb';
const str2 = 'bbbbbbbbb';
const str3 = 'pwwkew';

var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let win = new Set();
    let map = new Map();
    let maxLength = 0;
    //滑动窗口1
    // for(let end = 0; end < s.length; end++) {
    //     if(!win.has(s[end])) {
    //         win.add(s[end])
    //     } else  {
    //         while(win.has(s[end])) {
    //             win.delete(s[start]);
    //             start++;
    //         }
    //         win.add(s[end]);
    //     }
    //     maxLength = Math.max(maxLength, win.size)
    // }

    //优化
    for (let end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
        start = Math.max(start, map.get(s[end]) + 1);
    }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
};

console.log(lengthOfLongestSubstring(str1));
console.log(lengthOfLongestSubstring(str2));
console.log(lengthOfLongestSubstring(str3));
