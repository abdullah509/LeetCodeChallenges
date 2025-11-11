//Given a string s, return the first character to appear twice. It is guaranteed that the input will have a duplicate character.


/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const seen = new Set();
    for (char of s){
        if (seen.has(char)){
            return char
        }
        seen.add(char)
    }

    return ""
}

console.log(repeatedCharacter("abccbaacz")) // "c"
console.log(repeatedCharacter("abcdd")) // "d"