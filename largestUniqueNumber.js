/* 

Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    counts = new Map();
    ans = -1
    for (num of nums){
        counts.set(num, (counts.get(num) || 0) +1)
    }
    
    for (const [key, value] of counts){
        if(value == 1){
            ans = Math.max(ans, key)
        }
    }
    
    return ans
};