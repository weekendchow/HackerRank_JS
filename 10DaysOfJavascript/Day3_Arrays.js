/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let largest = -Infinity
    let secondLargest = -Infinity

    for(let i =0; i < nums.length; i++){
        if(largest < nums[i]){
            secondLargest = largest
            largest = nums[i]
        }

        if(nums[i] > secondLargest && nums[i] < largest){
            secondLargest = nums[i]
        }
    }
    return secondLargest
}
