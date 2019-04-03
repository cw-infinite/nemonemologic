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

// Using Map Object and no sorting

var topKFrequent = function(nums, k) {
    const map = new Map();
    const freqMap = [];
    let result = [];
    
    // This builds of map of num: frequency. After looping, it looks like this
    // {5: 2, 1: 4, 4: 2, 3: 1, 6: 1}
    for (const num of nums) {
        if (!map.has(num)) {
            map.set(num, 0);
        }
        map.set(num, map.get(num) + 1);
    }
    
    // Now convert that map into an array of arrays, where the array index represents the frequency.
    // This is the "key insight" to solving this problem w/o sorting as array indexes are naturally in order
    // After this loop, freqMap looks like this
    // [,[3,6],[5,4],,[1]]
    map.forEach((occurrence, int) => {
        const set = typeof freqMap[occurrence] === 'undefined' ? [] : freqMap[occurrence];
        set.push(int);
        freqMap[occurrence] = set;
    });
    
    // Since the most frequent entries are in the tail of the array, loop from the end and fill result
    // until it has k elements. After loop, result looks like this
    // [1, 5, 4]
    for (let i = freqMap.length - 1; i >= 0; i--) {
        if (typeof freqMap[i] !== 'undefined') {
            freqMap[i].forEach((e) => result.push(e));
        }
        if (result.length > k) {
            result = result.slice(0, k);
        }
        if (result.length === k) {
            break;
        }
    }
    
    return result;
};
