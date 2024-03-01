//# Problem
// Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct. 


// First Solution was a nested for loop and had a runtime of O(n^2) used O(1) memory
// New idea:
// Loop through the elements of the input array. For each element add the value to a hash table. 
// When a new value is added, check if it already exists in the hash table, if not add it to the hash table, if it does, then return True. 
// If all values of the input array are added, return False. 


/**
 * @param {number[]} nums
 * @return {boolean}
 * Time Complexity of O(n)
 * Space Complexity of O(n)
 */
var containsDuplicate = function(nums) {
    // Create the new empty hash table
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        let current_num = nums[i];
        // check if the current index value of nums is a key in the hash table
        if (seen[current_num] !== undefined){
            // console.log(`${i} is a matching index`);
            return true;
        } else {
            // If the current number isn't already part of the hash table add it
            seen[current_num] = i;
        }
    }
    console.log(seen);
    return false;
};

nums = [1, 2, 3, 2];
// nums = []
console.log(containsDuplicate(nums));
// Previous Solution

// class Solution:
//     def containsDuplicate(self, nums: List[int]):
//         # Loop through the list elements and check if that element matches anywhere else in the list
//         # O(n^2) time
//         # for i in range(len(nums)):
//         #     for j in range(0, i):
//         #         if nums[i] == nums[j]:
//         #             # print(f"Match of {nums[i]} and {nums[j]}")
//         #             return True
        
//         # return False

//         # sort the list first, then check for duplicates
//         nums.sort()
//         # print(nums)
//         for i in range(0, len(nums) - 1):
//             if nums[i] == nums[i+1]:
//                 return True
//         return False