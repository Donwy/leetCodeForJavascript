const btree = require('./btree');

//中序遍历
const inOrder = (root) => {
    if(!root) {return};
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}

inOrder(btree);
