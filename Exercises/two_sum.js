`
Given an array of integers "nums" and an integer "target", return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
`

function twoSum(nums, target) {
    // First Idea: For each item in the array check to see if there is a value that would sum to the target value
    // O(n^2) time complexity, slow runtime
    for (let i = 0; i < nums.length; i++) {
	// at each index compare to the rest of the array
	for (let j = 0; j < nums.length; j++) {
	    if (nums[i] + nums[j] === target) {
		if (!(i === j)) {
                    return [i, j];
                }
	    }
	}
    }

};

console.log(twoSum([1, 2, 4, 4], 5));
console.log(twoSum([1, 2, 4, 7], 9));
console.log(twoSum([1, 2, 4, 4], 8));
