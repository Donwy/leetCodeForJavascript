/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(6);
tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.left.left.left = new TreeNode(1);
tree.right.right = new TreeNode(8);
tree.right.right.left = new TreeNode(7);
tree.right.right.right = new TreeNode(9);


var increasingBST = function(root) {
    
    let cur = root;
    let stack = [];
    let arr = [];

    while(stack.length || cur) {
        if(cur) {
            stack.push(cur);
            cur = cur.left;
        } else {
            const node = stack.pop();
            arr.push(node.val);
            if(node.right) {
                cur = node.right;
            }
        }
    }

    let newTree = new TreeNode(arr[0]);
    let newCur = newTree;
    for(let i = 1; i < arr.length; i++) {
        const node = new TreeNode(arr[i]);
        newCur.right = node;
        newCur = newCur.right;
    }
    return newTree;
};

console.log(increasingBST(tree));