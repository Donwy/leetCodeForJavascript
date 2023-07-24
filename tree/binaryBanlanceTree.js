function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);

const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
tree1.left.left = new TreeNode(4);
tree1.left.left.left = new TreeNode(5);


function getHeight(root) {
    if (!root) return 0;

    const queue = [root];
    let height = 0;

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift();
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        height++;
    }

    return height;
}

function isBalanced(root) {
    if (!root) return true;

    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        const leftHeight = getHeight(current.left);
        const rightHeight = getHeight(current.right);

        if (Math.abs(leftHeight - rightHeight) > 1) {
            return false;
        }

        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }

    return true;
}

console.log(isBalanced(tree));
console.log(isBalanced(tree1));
