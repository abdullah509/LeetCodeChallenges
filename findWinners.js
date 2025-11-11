/* 
You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.
*/

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    counts = new Map();
    winners = []
    losers = []
    
    for(const [winner, loser] of matches){
        counts.set(winner, (counts.get(winner) || 0))
        counts.set(loser, (counts.get(loser) || 0) +1)
    }
    
    for (const [key, value] of counts){
        if (value == 0){
            winners.push(key)
        }
        if(value == 1){
            losers.push(key)
        }
    }
    winners.sort((a, b) => a - b);
    losers.sort((a, b) => a - b);
    return [winners, losers]
};

console.log(
    findWinners([[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]])) // [[1,2,10],[4,5,7,8]]