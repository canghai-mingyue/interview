// leetcode 1143 最长公共子序列

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 二维动态规划
const longestCommonSubsequence = function(text1, text2) {
    const array1 = text1.split('');
    const array2 = text2.split('');
    // 二维数组多一行一列，方便处理边界条件
    const length1 = array1.length + 1;
    const length2 = array2.length + 1;
    const res = new Array(length1).fill(0);
    //这种写法，fill方法应该是赋值操作，导致每一行都是同一个引用，出现错误。
    // const result = new Array(length2).fill([...res]);
    let result = new Array(length2).fill(0);
    result = result.map(() => [...res]);
    //开始遍历
    for(let i = 1; i < length2; i++) {
        for(let j = 1; j < length1; j++) {
            // DP方程
            if(array2[i-1] === array1[j-1]) result[i][j] = result[i-1][j-1] + 1;
            else result[i][j] = Math.max(result[i-1][j], result[i][j-1]);
        }
    }
    return result[length2-1][length1-1]
};

// 代码优化

var longestCommonSubsequence1 = function(text1, text2) {
    const m = text1.length + 1, n = text2.length + 1;
    // 构建二维数组
    let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for(let i = 0; i < text1.length; i++) {
        for(let j = 0; j < text2.length; j++) {
            if(text1[i] === text2[j]) {
                dp[i+1][j+1] = dp[i][j] + 1
            } else {
                dp[i+1][j+1] = Math.max(dp[i][j+1], dp[i + 1][j])
            }
        }
    }
    return dp[m-1][n-1]
};



// 根据不同路径的做法，本题也可以优化空间复杂度，只保存当前行和上一行的状态。
const longestCommonSubsequence2 = function(text1, text2) {
    const array1 = text1.split('');
    const array2 = text2.split('');
    // 有点哨兵机制的意思，方便处理边界条件
    const length1 = array1.length + 1;
    const length2 = array2.length;
    let pre = new Array(length1).fill(0);
    let cur = new Array(length1).fill(0);
    for(let i = 0; i < length2; i++) {
        for(let j = 1; j < length1; j++) {
            if(array2[i] === array1[j-1]) cur[j] = pre[j-1] + 1;
            else cur[j] = Math.max(pre[j], cur[j-1]);
        }
        pre = [...cur];
    }
    return cur[length1-1]
};

// String 可以直接通过[]访问，不需要转成数组的
var longestCommonSubsequence3 = function(text1, text2) {
    const m = text1.length + 1, n = text2.length;
    let pre = new Array(m).fill(0)
    let cur = new Array(m).fill(0)
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < text1.length; j++) {
            if(text2[i] === text1[j]) {
                cur[j+1] = pre[j] + 1
            } else {
                cur[j+1] = Math.max(cur[j], pre[j+1])
            }
        }
        pre = [...cur]
    }
    return cur[m - 1]
};