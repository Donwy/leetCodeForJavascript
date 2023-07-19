function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}


const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);
tree.right.left = new TreeNode(6);
tree.right.right = new TreeNode(7);

console.dir(tree);


//前序遍历
function preOrder(root) {
    if(!root) return root;

    const stack = [root];
    const res = [];
    while(stack.length) {
        const node = stack.pop();
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left); 
        res.push(node.val);
    }
    return res;
}
console.log(`前序遍历： ${preOrder(tree)}`);


//中序遍历

function inOrder(root) {
    if(!root) return root;

    const stack = [];         //不能把第一个节点直接压入栈了
    const res = [];
    let cur = root;
    while(stack.length || cur) {
        
        //先用指针遍历二叉树左节点
        while(cur) {
            stack.push(cur);
            cur = cur.left;
        }
        const node = stack.pop();
        res.push(node.val)
        if(node.right) {
            cur = node.right;            //如果右节点也有子左节点，还是用cur遍历加入，不能直接压入栈push()
        }

    }
    return res;
}
console.log(`中序遍历： ${inOrder(tree)}`);

//后序遍历
function postOrder(root) {
    if(!root) return root;
    const stack = [root];
    const res = [];

    while(stack.length) {
        const node = stack.pop();
        res.unshift(node.val)
        if(node.left) {
            stack.push(node.left)
        }
        if(node.right) {
            stack.push(node.right)
        }
    }
    return res;
}

console.log(`后序遍历： ${postOrder(tree)}`);

//层序遍历(队列) 广度优先
function levelOrder(root) {
    if(!root) return root;
    const queue = [root]; //队列
    const res = [];

    while(queue.length) {
        const node = queue.shift();
        res.push(node.val)
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }
    return res;
}

console.log(`层序遍历： ${levelOrder(tree)}`);