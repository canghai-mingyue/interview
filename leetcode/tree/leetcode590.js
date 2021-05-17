// 590. N叉树的后序遍历

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// DFS
var postorder = function(root) {
   if(root == null) return []
   let result = []
   const dfs = node => {
       node.children.forEach(item => {
           dfs(item)
       })
       result.push(node.val)
   }
   dfs(root)
   return result
};
// 根据前序翻转
var postorder1 = function(root) {
   if(root == null) return []
   let result = []
   let stack = []
   stack.push(root)
   while(stack.length > 0) {
       let tem = stack.pop()
       let length = tem.children.length
       result.unshift(tem.val)
       for(let i = 0; i < length; i++) {
            stack.push(tem.children[i])
        }
   }
   return result
};
// 根据前序翻转
var postorder2 = function(root) {
    if(root == null) return []
    let result = []
    let stack = []
    stack.push(root)
    while(stack.length > 0) {
        let tem = stack.pop()
        if(tem.children.length > 0) {
            stack = stack.concat(tem.children)
        }
        result.unshift(tem.val)

    }
    return result
};


