const btree = require('./btree');

//先序遍历 
const preOrder = (root) => {
    if(!root) {return;}
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
}




preOrder(btree);