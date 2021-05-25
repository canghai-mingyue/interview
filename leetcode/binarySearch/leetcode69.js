// 69. x 的平方根
/**
 * @param {number} x
 * @return {number}
 */

// 直接使用库函数
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x))
};

// 暴力查找
var mySqrt = function(x) {
    for(let i = 0; i <= x; i++) {
        if(i * i <= x && (i+1) * (i+1) > x) {
            return i
        }
    }
};

// 暴力查找的一点优化
var mySqrt = function(x) {
    if(x === 0) return 0
    if(x < 4) return 1
    let half = x >> 1
    for(let i = 2 ; i <= half; i++) {
        if(i * i <= x && (i+1) * (i+1) > x) {
            return i
        }
    }
};

// 二分查找
var mySqrt = function(x) {
    let l = 0, r = x, res = -1
    while(l <= r) {
        let mid = (l + r) >> 1
        if(mid * mid <= x) {
            res = mid
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return res
};
