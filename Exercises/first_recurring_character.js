//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
    // Create an object and add in the input values as we index over them
    let seen = {};
    for (let i = 0; i < input.length; i++) {
        // Loop through the values of the input
        console.log(seen[i]);
        if (seen[input[i]] !== undefined) {
            // If the current value is already part of the seen object
            // return the current value
            return input[i];
        } else {
            // If the current value is not part of the seen object
            // add it to the seen object
            seen[input[i]] = i;
            // the key being stored is the value of the index
            // input_index_value: index
        }
        console.log(seen);
    }
    return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 7, 2, 5, 1, 2, 4]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2