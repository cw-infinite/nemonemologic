/*
Top K Frequent Elements
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    var count = {};
    var result = [];
    
    nums.forEach((num) => {
        count[num] = count[num] ? count[num]+1: 1;
    })
    
    var sortedCount = Object.entries(count).sort((a, b) => b[1] - a[1]);
    
    for(var i = 0; i < k; i++ ) {
        result.push(parseInt(sortedCount[i][0]));
    }
    
    return result;
    
    
};
