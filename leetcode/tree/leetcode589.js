// 589. N叉树的前序遍历

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// DFS
var preorder = function(root) {
    if (root === null) return []
    let result = []
    const dfs = node => {
        result.push(node.val)
        node.children.forEach(item => {
            dfs(item)
        })
    }
    dfs(root)
    return result
};
// 迭代
var preorder1 = function(root) {
    if (root === null) return []
    let result = []
    let stack = []
    stack.push(root)
    while(stack.length > 0) {
        let tem = stack.pop()
        result.push(tem.val)
        for(let i = tem.children.length -1; i > -1; i-- ) {
            stack.push(tem.children[i])
        }
    }
    return result
};