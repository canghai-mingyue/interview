//  145. 二叉树的后序遍历

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
// DFS递归
var postorderTraversal1 = function(root) {
    if(!root) return []
    let result = []
    const dfs = node => {
        node.left && dfs(node.left)
        node.right && dfs(node.right)
        result.push(node.val)
    }
    dfs(root)
    return result
};
// DFS递归 代码简洁
var postorderTraversal = function(root) {
   return root ? [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val] : []
};
// 迭代法
var postorderTraversal3 = function(root) {
   if(root === null) return []
   let result = []
   let stack = []
   let cur = root
   let prev = null
   while(cur!== null || stack.length > 0) {
       while(cur) {
           stack.push(cur)
           cur = cur.left
       }
       cur = stack.pop()
       if (cur.right !==null && cur.right !== prev) {
        //    stack.push(cur)
           stack.push(cur)
           cur = cur.right
       } else {
            result.push(cur.val)
            prev = cur
            cur = null
       }
   }
   return result
};

// 前序遍历顺序为：根 -> 左 -> 右
// 后序遍历顺序为：左 -> 右 -> 根
//将前序遍历中节点插入结果链表尾部的逻辑，修改为将节点插入结果链表的头部,链表就变为了：右 -> 左 -> 根
//将遍历的顺序由从左到右修改为从右到左，链表就变为了：左 -> 右 -> 根
var postorderTraversal4 = function(root) {
    if(root === null) return []
    let result = []
    let stack = []
    stack.push(root)
    let tem
    while(stack.length > 0) {
        tem = stack.pop()
        tem.left && stack.push(tem.left)
        tem.right && stack.push(tem.right)
        result.unshift(tem.val)
    }
    return result
};

//  前中后序  通用写法
var postorderTraversal5 = function(root) {
    const [WHITE, GRAY] = [0, 1]; // WHITE - 未访问的新结点； GRAY - 已访问的结点
    const res = [];
    const stack = [[WHITE, root]];
    let color, node;
    while (stack.length) {
        [color, node] = stack.pop(); // 若栈中有元素，则按照左节点、根节点、右节点的顺序依次弹出元素
        if (!node) continue;
        if (color === WHITE) {
            // 当前指向的结点是未访问过的结点，将其右节点，根节点，左节点依次入栈
            stack.push([GRAY, node]);
            stack.push([WHITE, node.right]);
            stack.push([WHITE, node.left]);
        } else res.push(node.val);
    }
    return res;
};