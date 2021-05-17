// 144. 二叉树的前序遍历

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
// DFS
var preorderTraversal2 = function(root) {
    if (root === null) return []
    let result = []
    const dfs = function (node) {
        result.push(node.val)
        node.left && dfs(node.left)
        node.right && dfs(node.right)
    }
    dfs(root)
    return result
};
// DFS 代码简洁
var preorderTraversal = function(root) {
    return root ? [root.val, ...preorderTraversal(root.left),  ...preorderTraversal(root.right)] : []
};
// 迭代法
var preorderTraversal1 = function(root) {
    if (root === null) return []
    let result = []
    let stack = []
    stack.push(root)
    while(stack.length > 0) {
        let node = stack.pop()
        result.push(node.val)
        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return result
};

//  前中后序  通用写法
var preorderTraversal3 = function(root) {
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
            stack.push([WHITE, node.left]);
            stack.push([GRAY, node]);
        } else res.push(node.val);
    }
    return res;
};