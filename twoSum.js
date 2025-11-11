//Given an array of integers nums and an integer target, return indices of two numbers such that they add up to target. You cannot use the same index twice.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const dic = new Map();
    
    for (let i = 0; i < nums.length; i++){

        if(dic.has(target - nums[i])){
            return [dic.get(target - nums[i]), i]
        }

        dic.set(nums[i], i)

    }

    




}


console.log(twoSum([5, 2, 7, 10, 3, 9], 8)) // [0,4]