// 53. 最大子序和

/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var maxSubArray = function(nums) {
    let tem  = 0, max = nums[0]
    nums.forEach((item) => {
        tem = Math.max(item, item + tem)
        max = Math.max(max, tem)
    })
    return max
};
// 动态规划
var maxSubArray = function(nums) {
    let tem  = 0, max = nums[0]
    nums.forEach((item) => {
        tem = Math.max(0, tem) + item
        max = Math.max(max, tem)
    })
    return max
};
// 分支 + 递归
var maxSubArray = function(nums) {
    return getInfo(nums, 0, nums.length - 1).mSum
};

class Info{
    constructor(lSum, rSum, mSum, iSum){
        this.lSum = lSum
        this.rSum = rSum
        this.mSum = mSum
        this.iSum = iSum
    }
}

const getInfo = (nums, l, r) => {
    if(l === r) {
        return new Info(nums[l], nums[l], nums[l], nums[l])
    }
    const m = (l + r) >> 1
    // 左半部分
    const lInfo = getInfo(nums, l, m)
    // 右半部分
    const rInfo = getInfo(nums, m+1, r)
    // 以l开头的最大子序和
    const lSum = Math.max(lInfo.lSum, lInfo.iSum + rInfo.lSum)
    // 以r结尾的最大子序和
    const rSum = Math.max(rInfo.rSum, rInfo.iSum + lInfo.rSum)
    // l 到 r 的最大子序和
    const mSum = Math.max(lInfo.mSum, rInfo.mSum, lInfo.rSum + rInfo.lSum)
    // l 到 r 的和
    const iSum = lInfo.iSum + rInfo.iSum

    return new Info(lSum, rSum, mSum, iSum);
}
