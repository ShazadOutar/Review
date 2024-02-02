// Given two sorted arrays, merge them into one final sorted array
function mergeSortedArrays(a, b) {
    // Idea: Iteratively compate each element from each array
    // Create a empty merged array 
    const merged = [];
    // create a counter to hold the current index of each array
    let a_count = 0;
    let b_count = 0;

    // loop through both arrays until the end of one is reached
    while (a_count < a.length && b_count < b.length) {
	// Compare each the values at each index
	if (a[a_count] < b[b_count]) {
	    // if the current value of a is less than b, add it to merged
	    merged.push(a[a_count]);
	    // then move to the next index of a
	    a_count++;
	} else {
	    // if the current value of b is less than or equal to a, add it to merged
	    merged.push(b[b_count]);
	    // then move to the next index of b
	    b_count++;
	}
    }
    
    // console.log(`a: ${a_count} b: ${b_count}`);
    // join the remaining values into the merged array
    if (a_count === a.length) {
	// if all values in a have been used, merge all of b with merged
	for (let i = b_count; i < b.length; i++) {
	    merged.push(b[i]);
	}
    } else {
	// if all values in b have been used, merge all of a with merged
	for (let i = a_count; i < a.length; i++) {
	    merged.push(a[i]);
	}
    }

    return merged;
}


console.log(mergeSortedArrays([1, 2], [1, 5, 6]));
console.log(mergeSortedArrays([1, 2, 4], [1, 5, 6]));
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays([], [1, 2]));
