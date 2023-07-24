function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

//二叉搜索树：左节点比父节点小，右节点比父节点大
const tree = new TreeNode(5);
tree.left = new TreeNode(3);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(2);
tree.left.right = new TreeNode(4);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(8);


/**
 * 判断是否为二叉搜索树
 * 通过中序遍历看下所有的数据是否递增
 */



function isValidBST(root) {
    if (!root) return true;

    const stack = [];
    let prev = null;

    let current = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();

        if (prev !== null && current.val <= prev.val) {
            return false;
        }

        prev = current;
        current = current.right;
    }

    return true;
}


console.log(isValidBST(tree));
