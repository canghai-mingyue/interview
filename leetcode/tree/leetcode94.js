// 94. 二叉树的中序遍历
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
 * @return {number[]}
 */
// DFS代码简洁
var inorderTraversal = function(root) {
    return root ? [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : []
};
// DFS
var inorderTraversal2 = function(root) {
    if (root === null) return []
    let result = []
    const dfs = function (node){
        node.left && dfs(node.left)
        result.push(node.val)
        node.right && dfs(node.right)
    }
    dfs(root)
    return result
};
// 迭代法
var inorderTraversal3 = function(root) {
    if (root === null) return []
    let result = []
    let stack = []
    let cur = root
    while(cur !== null || stack.length > 0) {
        while(cur) {
            stack.push(cur)
            cur = cur.left
        }
        cur = stack.pop()
        result.push(cur.val)
        cur = cur.right

    }
    return result
};

/**
 * @description 使用带有访问标志的栈来模拟递归
 * @param {TreeNode} root
 * @return {number[]}
 */
//  前中后序  通用写法
var inorderTraversal4 = function(root) {
    const [WHITE, GRAY] = [0, 1]; // WHITE - 未访问的新结点； GRAY - 已访问的结点
    const res = [];
    const stack = [[WHITE, root]];
    let color, node;
    while (stack.length) {
        [color, node] = stack.pop(); // 若栈中有元素，则按照左节点、根节点、右节点的顺序依次弹出元素
        if (!node) continue;
        if (color === WHITE) {
            // 当前指向的结点是未访问过的结点，将其右节点，根节点，左节点依次入栈
            stack.push([WHITE, node.right]);
            stack.push([GRAY, node]);
            stack.push([WHITE, node.left]);
        } else res.push(node.val);
    }
    return res;
};