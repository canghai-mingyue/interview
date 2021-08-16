// 20. 有效的括号

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const map = new Map();
    map.set(')', '(');
    map.set('}', '{');
    map.set(']', '[');
    const stack = []
    for(char of s) {
        if(map.get(char)) {
            if(stack.pop() !== map.get(char)){
                return false
            }
        } else {
             stack.push(char)
        }
    }
    return !stack.length
};


var isValid = function(s) {
    if(s.length % 2) return false;
    const map = new Map([
        [')', '('],
        ['}', '{'],
        [']', '[']
    ]);
    const stack = []
    for(char of s) {
        if(map.get(char)) {
            if(stack.pop() !== map.get(char)) return false
        } else {
             stack.push(char)
        }
    }
    return !stack.length
};