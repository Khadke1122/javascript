/* Q.1> ==  "Given an integer array nums sorted in non-decreasing order, remove the duplicates 
in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same
Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. */

        // If the current element is equal to the next element, we skip (18)

removeDuplicates([1,1,1,2])
function removeDuplicates(nums) {
     let count = 0;     
     for (let i = 0; i < nums.length; i++) { 
        if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
            continue;
        }
       nums[count] = nums[i];     // We will update the array in place
        count++;
    }
    console.log(count);
};
