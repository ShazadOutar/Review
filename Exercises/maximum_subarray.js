`Given an integer array nums, find the subarray with the largest sum, and return its sum.
Example:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
`

function isNegative(input, current_index) {
    // Note: This does count 0 as negativebecause 
    // I'm not including 0 values in the max_subarray
    console.log(`Current Index: ${current_index}, [${input[current_index]}]`);
    if (input[current_index] > 0) {
	return false;
    } else {
	return true;
    }
}

function getRightIndex(input, current_index) {
    return input.length + current_index - 1;
}

function maxSubarray(input) {
    // Idea 1: Start at the left and right most indexes. 
    // If the sum of the current index and its next index is negative, don't include it in the max subarray.
    // and move the index closer to the center.
    // If the sum of the current index and its next index is positive, include it into the the max subarray
    // Keep going until the left and right index cross or until the positive sum
    // Also if the current value is negative, don't include it
    let left_index = 0;
    let right_index = input.length - 1;
    const max_subarray = [];
    
    // Keep looping until the left and right meet
    while (left_index < right_index) {
	// Handling the left counter
	//console.log(`Left: ${left_index}, [${input[left_index]}]`);
	if (isNegative(input, left_index)) {
	    // if the left index value is negative, just increase the index
	    // console.log(input[left_index]);
	    left_index++;
	} else {
	    // if the left index value is greater than 0
	    // TODO: For now, just add it to the max subarray
	    // Next check if the sum of the current index value + it's next is > 0

	    //if (input[left_index] + input[left_index + 1] > 0){

	    // Add the value into the max subarray 
	    max_subarray.push(input[left_index]);
	    console.log(`\nPushing ${input[left_index]}\n`);
	    // Increase the counter
	    left_index++;
	}
	// Handling the right counter
	if (isNegative(input, right_index)) {
	    // if the right index value is negative, decrease the index of right index
	    right_index--;
	} else {
	    // if the right index value is greater than 0
	    // TODO: For now, just add it to the max subarray
	    max_subarray.push(input[right_index]);
	    console.log(`\nPushing ${input[right_index]}\n`);
	    right_index--;
	}
    }

    return max_subarray;
}

const array1 = [-2,1,-3,4,-1,2,1,-5,4];
const array2 = [-2, 1, -3, 5]
// console.log(array1[-1]);
// console.log(isNegative(array1, 0));
console.log(maxSubarray(array1));
