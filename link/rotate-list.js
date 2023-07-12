/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head == null || k === 0) {
        return head;
    }
    
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }
    
    k = k % length;
    if (k === 0) {
        return head;
    }
    
    let steps = length - k;
    let newTail = head;
    for (let i = 1; i < steps; i++) {
        newTail = newTail.next;
    }
    
    let newHead = newTail.next;
    newTail.next = null;
    tail.next = head;
    
    return newHead;
};

// 创建链表节点
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// 创建链表
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// 打印链表
function printLinkedList(head) {
    let current = head;
    let result = '';
    while (current) {
        result += current.val + ' -> ';
        current = current.next;
    }
    result += 'null';
    console.log(result);
}

// 测试用例
let arr = [1, 2, 3, 4, 5];
let k = 2;
let head = createLinkedList(arr);
console.log('原始链表:');
printLinkedList(head);

let rotatedHead = rotateRight(head, k);
console.log('旋转后的链表:');
printLinkedList(rotatedHead);

let arr1 = [1, 2];
let k1 = 1;
let head1 = createLinkedList(arr1);
console.log('原始链表1:');
printLinkedList(head1);

let rotatedHead1 = rotateRight(head1, k1);
console.log('旋转后的链表1:');
printLinkedList(rotatedHead1);

