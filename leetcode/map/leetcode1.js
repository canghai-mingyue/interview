// 1. 两数之和

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 时间O(n2)  空间O(1)
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
};

// 使用map提高效率，空间换时间  时间O(n)  空间O(n)
var twoSum = function(nums, target) {
    let map = new Map()
    let result = []
    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])){
            result.push(map.get(target - nums[i]), i)
            return result
        } else {
            map.set(nums[i], i)
        }
    }
    return result
};