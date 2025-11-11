//Given an integer array nums, find the number of ways to split the array into two parts so that the first section has a sum greater than or equal to the sum of the second section. The second section should have at least one number.
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    
    prefix = [nums[0]]
    let n = nums.length;
    let validSplits = 0
    
    for (let i = 1; i < nums.length; i++){
        prefix.push(nums[i] + prefix[i-1])
    }
    
    for (let i = 0; i < n-1; i++){
        let firstSection = prefix[i]
        let secondSection = prefix[n-1] - firstSection
        
        if (firstSection >= secondSection){
            validSplits+=1
        }
    }
    
    return validSplits
}

console.log(waysToSplitArray([10,4,-8,7])) // 2