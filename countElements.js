//Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    
    const set = new Set(arr);
    total = 0
    for (let i = 0; i < arr.length; i++){
        if (set.has(arr[i] + 1)){
            total+=1
        }
    }
    
    return total
    
};

console.log(countElements([1,2,3])) // 2
console.log(countElements([1,1,3,3,5,5,7,7])) // 0
console.log(countElements([1,3,2,3,5,0])) // 3
console.log(countElements([1,1,2,2])) // 2  
