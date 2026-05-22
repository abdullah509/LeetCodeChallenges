//Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

 

// Example 1:

// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:

// Input: s = "Mr Ding"
// Output: "rM gniD"
 

// Constraints:

// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    
    let left = 0
    let right = 0
    let ans = ""
    for (let i = 0; i < s.length; i++){
        
        if (s[i] == " "){
            right = i-1

            while (left <= right){
                ans += s[right]
                right--
            }

            ans+= " "
            i++
            left = i
        }
        
        if (i == s.length - 1){
            right = i
            while (left <= right){
                ans += s[right]
                right--
            }
        }
    }
    
    return ans
};

console.log(reverseWords("Let's take LeetCode contest"))
console.log(reverseWords("Mr Ding"))