/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB) {
        return null;
    }
    //双指针法
    // let a = headA;
    // let b = headB;
    // while(a != b) {
    //     if(a.next) {
    //         a = a.next;
    //     } else {
    //         a = headB;
    //     };
    //     if(b.next) {
    //         b = b.next;
    //     } else {
    //         b = headA;
    //     }
    // }
    // return a;


    //快慢指针法
    let last = headB
    while(last.next) {
        last = last.next;
    };
    last.next = headB;

    let fast = headA;
    let slow = headA;

    while(fast && fast.next) {
        slow = slow.next;             // 慢指针每次前进一步
        fast = fast.next.next;        // 快指针每次前进两步
        if(slow == fast) {            // 若快慢指针相遇，则表示存在环（不一定在链a，b相交点相遇，而是环上的任意一点）
            slow = headA;             // 将慢指针重新指向链表头部
            while(slow !=fast) {      // 当慢指针和快指针再次相遇时，就是环的起始点, 假设 链头到相交点的距离是a：相交点到相遇点的距离是b，环的长度为L
                slow = slow.next;     // 慢指针走了n步 ：n = a + b; 快指针走了2n步(包括绕了x圈)： 2n = a + b + xL；
                fast = fast.next;     // 两式代入相减 a = xL - b； 即链头到相交点的距离a等于当前fast指针当前位置（相遇点）再次走到相交点的距离
            }
            last.next = null;         //断开环，还原b链
            return fast
        }
    }
    last.next = null;                 //断开环，还原b链
    return null;  
};