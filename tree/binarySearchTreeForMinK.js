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


function binarySearchTreeForMinK(root, k) {
    if(!root) return root;

    const stack = [];         //不能把第一个节点直接压入栈了
    const res = [];
    let cur = root;
    let count = 0;
    while(stack.length || cur) {
        
        //先用指针遍历二叉树左节点
        while(cur) {
            stack.push(cur);
            cur = cur.left;
        }
        const node = stack.pop();
        res.push(node.val)
        count++;
        if(count==k) {
            return node.val;
        }
        if(node.right) {
            cur = node.right;            //如果右节点也有子左节点，还是用cur遍历加入，不能直接压入栈push()
        }

    }
    return null;
}

console.log(`中序遍历： ${binarySearchTreeForMinK(tree, 3)}`);


