//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const set = new Set(nums);
    
    for (let i = 0; i < nums.length+1; i++){
        if (!set.has(i)){
            return i
        }
    }
    
};


console.log(missingNumber([9,6,4,2,3,5,7,0,1])) // 8
console.log(missingNumber([0,1])) // 2
console.log(missingNumber([3,0,1])) // 2

