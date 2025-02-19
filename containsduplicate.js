//contains duplicate
//https://leetcode.com/problems/contains-duplicate/
//given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//how to solve this problem with modern javascript


//solution 1
//use a set to store the unique values of the array
//use a for loop to iterate through the array
//if the value is already in the set, return true
//if the value is not in the set, add it to the set
//return false at the end of the loop

function containsDuplicate(nums) {
    let set = new Set();
    for (let num of nums) {
        if (set.has(num)) {
            return true;
        } else {
            set.add(num);
        }
    }
    return false;
}
nums = [3, 5, 1, 5];

console.log(containsDuplicate(nums)); //true