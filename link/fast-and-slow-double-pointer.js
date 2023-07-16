/**
 * 快慢双指针
 */

let slow = head;
let fast = head;
while (fast !== null && fast.next !== null) {
    // 慢指针移动条件
    slow = slow.next;

    // 快指针移动条件
    fast = fast.next.next;
    
    // 判断是否满足某种条件
    if (满足条件) {
        // 处理逻辑
        // ...
    }
}
