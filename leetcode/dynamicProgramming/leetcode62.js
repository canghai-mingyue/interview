// leetcode 62 不同路径

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * m是列，n是行 a[n][m]
 *
 */

// 自顶向下遍历，并优化空间复杂度O(2m)
var uniquePaths = function(m, n) {
    let prev = new Array(m).fill(1)
    let cur = new Array(m).fill(1)
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            cur[j] = prev[j] + cur[j-1]
        }
        prev = [...cur]
    }
    return cur[m-1]
};

// 自顶向下遍历，并优化空间复杂度O(m)
var uniquePaths = function(m, n) {
    let cur = new Array(m).fill(1)
    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            cur[j] += cur[j-1]
        }
    }
    return cur[m-1]
};

// 动态规划 时间复杂度O(mn), 空间复杂度O(mn)
var uniquePaths1 = function(m, n) {
    // 初始化二维数组
    const arr = new Array(n).fill(0);
    const array = arr.map(()=> new Array(m).fill(0));
    array[n-1].fill(1);
    array.forEach(item => {
        item[m-1] = 1;
    });
    // 自底向上遍历
    for (let i = n - 2; i >= 0; i--) {
        for (let j = m - 2; j >= 0; j--) {
            // DP方程
            array[i][j] = array[i+1][j] + array[i][j+1]
        }
    }
    return array[0][0];
};

// 空间复杂度优化 => O(n)
var uniquePaths2 = function(m, n) {
    const arr = new Array(n).fill(1);
    for (let i = m - 2; i >= 0; i--) {
        for (let j = n - 2; j >= 0; j--) {
            arr[j] = arr[j] + arr[j+1];
        }
    }
    return arr[0];
};