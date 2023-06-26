const btree = require('./btree');

//后序遍历
const postOrder = (root) => {
    if(!root) return;
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
}

postOrder(btree);