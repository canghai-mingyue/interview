// leetcode 63 不同路径2

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    //从最后一行开始向上遍历，并初始化为0
    const array = new Array(n).fill(0);
    //初始化目的地的值
    array[n-1] = obstacleGrid[m-1][n-1] === 1 ? 0 : 1;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if(obstacleGrid[i][j] === 1) {
                array[j] = 0;
                continue;
            }
            if(j < n - 1) {
                array[j] += array[j+1];
            }
        }
    }
    return array[0];
};

//  自上向下遍历
var uniquePathsWithObstacles1 = function(obstacleGrid) {
    let n =  obstacleGrid.length, m = obstacleGrid[0].length;
    let cur = new Array(m).fill(0)
    //初始化起始地的值
    cur[0] = obstacleGrid[0][0] === 1 ? 0 : 1;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(obstacleGrid[i][j]) {
                cur[j] = 0
                continue
            }
            if(j - 1 >= 0) {
                cur[j] = cur[j] + cur[j-1]
            }
        }
    }
    return cur[m - 1]
};