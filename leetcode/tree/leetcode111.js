// 111. 二叉树的最小深度

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
// dfs深度优先
var minDepth = function(root) {
    if(root === null) return 0
    if(root.left === null && root.right === null) return 1
    if(root.left === null || root.right === null) return minDepth(root.left) + minDepth(root.right) + 1
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};

// BFS广度优先 保证最先遍历到的叶子结点就是最小深度
var minDepth = function(root) {
    if(root === null) return 0
    let stack = []
    stack.push(root)
    let depth = 1
    while(stack.length > 0) {
        let length = stack.length
        for(let i = 0; i < length; i++) {
            let tem = stack.shift()
            if(tem.left === null && tem.right === null) {
                return depth
            }
            tem.left && stack.push(tem.left)
            tem.right && stack.push(tem.right)
        }
        depth++
    }
};