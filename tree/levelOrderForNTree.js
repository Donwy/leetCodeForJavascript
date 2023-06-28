/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**429. N 叉树的层序遍历
 * 给定一个 N 叉树，返回其节点值的层序遍历。（即从左到右，逐层遍历）。
   树的序列化输入是用层序遍历，每组子节点都由 null 值分隔（参见示例）。
   BFS算法    
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    if(!root) return res;
    let queue = [root];
    while(queue.length) {
        const levelLength = queue.length;
        const temp = [];
        for(let i = 0; i < levelLength;i++) {
            const node = queue.shift();
            temp.push(node.val);
            for(const child of node.children) {      //当使用for ...of不需要考虑null或undefine，
                queue.push(child)
            }  
        }
        res.push(temp)
    }
    return res; 
};