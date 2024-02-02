function isEmpty(array_in) {
    if (array_in.length === 0) {
	return true;
    } else {
	return false;
    }
}

function loop_push(arr, merged) {
    for (let i = 0; i < arr.length; i++){
	merged.push(arr[i]);
    }
    return merged;
}

function array_merge(arr1, arr2) {
    const merged = [];

    // while both arrays are not empty run this loop
    while (!isEmpty(arr1) && !isEmpty(arr2)) {
	// compare the first value of each array
        if (arr1[0] < arr2[0]){
	    // the smaller value gets pushed onto the merged array and removed from it's original
            merged.push(arr1[0]);
            arr1.shift();
        } else {
            merged.push(arr2[0]);
            arr2.shift();
        }
    }
    // the remaining values that weren't reached are all larger than the ones in merged 
    // so they can just be added after the while loop
    // if array 1 is not empty
    if (!isEmpty(arr1)) {
	//console.log(`array 1 not empty`)
	loop_push(arr1, merged);
    } else {
	// if array 2 is not empty
	//console.log(`array 2 not empty`);
	loop_push(arr2, merged);
    }


    console.log(`Merged is:`);
    return merged;
}

function mergeSortedArrays(array1, array2) {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    // check if either array is empty
    if (array1.length === 0) {
	return array2;
    }
    if (array2.length === 0) {
	return array1;
    }

    // while arrayItem exists, run this loop
    while (array1Item || array2Item) {
	console.log(array1Item,array2Item);
	// if the first array has the lower value
	if (!array2Item || array1Item < array2Item) {
	    mergedArray.push(array1Item);
	    // update the arrayItem to the next index
	    array1Item = array1[i];
	    i++;
	} else {
	    mergedArray.push(array2Item);
	    array2Item = array2[j];
	    j++;
	}
    }

    return mergedArray;
}

// console.log(isEmpty([2]))

// smallest case is each array only has 1 element
const array1 = [2, 9]
const array2 = [5, 6, 12]
const array3 = []
const array4 = [1, 2, 4, 5, 9, 12, 19]
//console.log(array_merge(array1, array2))
//console.log(array_merge(array1, array3))
//console.log(array_merge(array2, array4))
//console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]))
console.log(mergeSortedArrays(array2, array4))
