function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//              4
//     2                7
// 1       3        6       9
let tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(1);
tree.left.right = new TreeNode(3);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(9);
// console.dir(tree);


var invertTree = function (root) {
    let stack = [root];
    console.dir(`stack: ${stack}`);
    console.dir(stack);
    
    if (root == null) {
        return root;
    }

    while (stack.length) {
        let node = stack.pop();
        console.log('------------1-------------');
        console.dir(node);
        [node.left, node.right] = [node.right, node.left];
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right);
        }
        console.log('------------2-------------');
        console.dir(stack)
    }
    return root;
};

invertTree(tree);



