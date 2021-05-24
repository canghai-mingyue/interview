// 120. 三角形最小路径和


/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 二维动态规划
var minimumTotal = function(triangle) {
    const n = triangle.length, m = triangle[n - 1].length
    let dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
    dp[0][0] = triangle[0][0]
    for(let i = 1; i < n; i++) {
        for(let j = 0; j <= i; j++) {
            if(j == 0) {
                dp[i][j] = dp[i-1][j] + triangle[i][j]
            } else if(j == i) {
                dp[i][j] = dp[i-1][j-1] + triangle[i][j]
            } else {
                dp[i][j] = Math.min(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]
            }
        }
    }
    return Math.min(...dp[n-1])
};

// 空间复杂度优化
var minimumTotal = function(triangle) {
    const n = triangle.length, m = triangle[n - 1].length
    let prev = new Array(m).fill(0)
    let cur = new Array(m).fill(0)
    prev[0] = cur[0] = triangle[0][0]
    for(let i = 1; i < n; i++) {
        for(let j = 0; j <= i; j++) {
            if(j === 0) {
                cur[j] = prev[j] + triangle[i][j]
            } else if(j == i) {
                cur[j] = prev[j-1] + triangle[i][j]
            } else {
                cur[j] = Math.min(prev[j-1], prev[j]) + triangle[i][j]
            }
        }
        prev = [...cur]
    }
    return Math.min(...cur)
};

// 代码逻辑优化
var minimumTotal = function(triangle) {
    const n = triangle.length
    if(n < 2) return triangle[0][0]
    let prev = triangle[0]
    let cur = triangle[1].map(v => v + triangle[0][0])
    for(let i = 2; i < n; i++) {
        prev = [...cur]
        cur[0] = prev[0] + triangle[i][0]
        for(let j = 1; j < i; j++) {
            cur[j] = Math.min(prev[j-1], prev[j]) + triangle[i][j]
        }
        cur[i] = prev[i-1] + triangle[i][i]
    }
    return Math.min(...cur)
};

