// 104. 二叉树的最大深度

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// DFS
var maxDepth = function(root) {
    if(root === null) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};
// BFS 遍历到最后的层级即为最大深度
var maxDepth = function(root) {
    if(root === null) return 0
    let queue = []
    queue.push(root)
    let depth = 0
    while(queue.length > 0 ) {
        depth++
        let length = queue.length
        for(let i = 0; i < length; i++) {
            let tem = queue.shift()
            tem.left && queue.push(tem.left)
            tem.right && queue.push(tem.right)
        }
    }
    return depth
};