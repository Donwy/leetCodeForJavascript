// 给你二叉树的根结点 root ，请你将它展开为一个单链表：

// 展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，而左子指针始终为 null 。
// 展开后的单链表应该与二叉树 先序遍历 顺序相同。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/flatten-binary-tree-to-linked-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



var flatten = function(root) {
    if (!root) return;
    let stack = [root];
    let cur= null;
    while(stack.length) {
        const node = stack.pop();
        if(cur) {
            cur.right = node;
            cur.left = null;
        }
        if(node.right) {
            stack.push(node.right)
        }
        if(node.left) {
            stack.push(node.left);
        }
        cur = node;
    }
};



// 测试用例
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

flatten(root);

// 打印展开后的链表
let current = root;
while (current) {
  console.log(current.val);
  current = current.right;
}







