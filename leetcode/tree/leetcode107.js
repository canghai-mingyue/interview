// 107. 二叉树的层序遍历 II

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
 * @return {number[][]}
 */
// BFS
var levelOrderBottom = function(root) {
    if (root == null) return []
    let result = []
    let stack = []
    stack.push(root)
    while(stack.length > 0) {
        const length = stack.length
        let level = []
        for(let i = 0; i < length; i++) {
            let tem = stack.shift()
            level.push(tem.val)
            tem.left && stack.push(tem.left)
            tem.right && stack.push(tem.right)
        }
        result.unshift(level)
    }
    return result
};