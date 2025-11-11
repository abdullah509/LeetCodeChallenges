
// Given an integer array nums, find all the numbers x in nums that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.
// If a valid number x appears multiple times, you only need to include it in the answer once.
let findNumbers = nums => {
    const set = new Set();
    result = []
    for (i of nums){
        set.add(i)
    }
    
    for(let i = 0; i < nums.length; i++){
        if( set.has(nums[i] + 1) == false && set.has(nums[i] - 1) == false ) {
            result.push(nums[i])
        }
    } 
    
    
    return result
}

console.log(findNumbers([1, 3, 5, 7]))