// 102. 二叉树的层序遍历

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
var levelOrder = function(root) {
    if (root == null) return []
    let result = []
    let stack = []
    let tem
    stack.push(root)
    while(stack.length > 0) {
        const length = stack.length
        result.push([])
        for(let i = 0; i < length; i++) {
            tem = stack.shift()
            result[result.length - 1].push(tem.val)
            tem.left && stack.push(tem.left)
            tem.right && stack.push(tem.right)
        }
    }
    return result
};